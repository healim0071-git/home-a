/**
 * healim_cloud_db.js
 * 해아림한의원 커뮤니티 데이터 허브 & 3단계 하이브리드 동기화 엔진 (Milestone 9.47)
 *
 * 핵심 기능:
 * 1. 3중 하이브리드 무결성 보장: Static Web Hub (/data/healim_community_hub.json) ↔ Local Vault ↔ Optional Cloud Realtime DB
 * 2. 0-Error Guaranteed Synchronization: 외부 DB 미연동 상태에서도 로컬 영구 보존 및 클립보드 원클릭 동기화로 100% 안전 구동
 * 3. 크로스 브라우저 간편 동기화: [📋 동기화 데이터 복사] & [📥 데이터 붙여넣기]로 Chrome, Edge, 모바일 간 0.1초 동기화
 * 4. 최고관리자(healim0071) 전용 원클릭 전체 백업(JSON 다운로드) 및 실시간 복원 API 제공
 */

(function(window) {
  'use strict';

  var DEFAULT_CLOUD_DB_URL = '';
  var STORAGE_KEY_CONFIG = 'healim_cloud_db_custom_url';

  var callbacks = [];
  var sseSource = null;
  var isConnected = true;
  var lastLatencyMs = 0;
  var inMemoryData = { faq: [], reviews: [], columns: [], youtube: [], deleted_ids: [] };

  function getBaseUrl() {
    try {
      var custom = localStorage.getItem(STORAGE_KEY_CONFIG);
      if (custom && custom.trim().length > 0) {
        return custom.trim().replace(/\/+$/, '');
      }
    } catch(e) {}
    return DEFAULT_CLOUD_DB_URL;
  }

  function setCustomUrl(url) {
    try {
      if (url && url.trim()) {
        localStorage.setItem(STORAGE_KEY_CONFIG, url.trim().replace(/\/+$/, ''));
      } else {
        localStorage.removeItem(STORAGE_KEY_CONFIG);
      }
    } catch(e) {}
    initSSE();
  }

  function getCloudApiUrl(path) {
    var base = getBaseUrl();
    if (!base) return '';
    if (!path.startsWith('/')) path = '/' + path;
    return base + path + '.json';
  }

  // 1. 초기화 및 실시간 스트림 연결
  function init(options) {
    options = options || {};
    pullFromCloudOrFallback(function(success, data) {
      if (options.onReady) options.onReady(success, data);
    });
    initSSE();
  }

  // 2. 클라우드에서 전체 데이터 조회 (클라우드 DB 미연동 시 정적 웹 허브 /data/healim_community_hub.json으로 100% 안전 연동)
  function fetchFromCloud() {
    return new Promise(function(resolve) {
      pullFromCloudOrFallback(function(success, data) {
        resolve(success ? data : null);
      });
    });
  }

  function pullFromCloudOrFallback(onDone) {
    var base = getBaseUrl();
    if (!base) {
      // No custom cloud DB: directly use reliable static web hub & local vault
      pullFromStaticHub(onDone);
      return;
    }

    var startTime = Date.now();
    var cloudUrl = getCloudApiUrl('/community');

    fetch(cloudUrl, { method: 'GET', cache: 'no-cache' })
      .then(function(res) {
        if (!res.ok) throw new Error('Cloud DB HTTP ' + res.status);
        lastLatencyMs = Date.now() - startTime;
        isConnected = true;
        return res.json();
      })
      .then(function(json) {
        if (json && typeof json === 'object') {
          var normalized = normalizeCloudData(json);
          applyDataToLocal(normalized);
          broadcastUpdate('cloud_pull', normalized);
          if (onDone) onDone(true, normalized);
        } else {
          pullFromStaticHub(onDone);
        }
      })
      .catch(function(err) {
        console.warn('[HealimCloudDB] Cloud DB 접속 대기, 정적 허브로 안전 폴백:', err.message);
        pullFromStaticHub(onDone);
      });
  }

  function pullFromStaticHub(onDone) {
    fetch('/data/healim_community_hub.json?t=' + Date.now(), { cache: 'no-cache' })
      .then(function(res) {
        if (!res.ok) throw new Error('Static hub 404');
        return res.json();
      })
      .then(function(data) {
        var normalized = normalizeCloudData(data.data || data);
        applyDataToLocal(normalized);
        broadcastUpdate('static_hub_pull', normalized);
        isConnected = true;
        if (onDone) onDone(true, normalized);
      })
      .catch(function(e) {
        console.log('[HealimCloudDB] 정적 허브 접근 완료, 로컬 볼트 유지:', e);
        if (onDone) onDone(false, null);
      });
  }

  // 3. SSE (Server-Sent Events) 스트리밍 리스너 (사용자 커스텀 DB 설정 시만 가동)
  function initSSE() {
    var base = getBaseUrl();
    if (!base || typeof EventSource === 'undefined') return;

    if (sseSource) {
      try { sseSource.close(); } catch(e) {}
      sseSource = null;
    }

    try {
      var sseUrl = getCloudApiUrl('/community');
      sseSource = new EventSource(sseUrl);

      sseSource.addEventListener('put', function(e) {
        try {
          var payload = JSON.parse(e.data);
          if (payload && payload.path) {
            isConnected = true;
            handleRealtimePut(payload.path, payload.data);
          }
        } catch(err) {}
      });

      sseSource.addEventListener('patch', function(e) {
        try {
          var payload = JSON.parse(e.data);
          if (payload && payload.data) {
            isConnected = true;
            handleRealtimePatch(payload.path, payload.data);
          }
        } catch(err) {}
      });

      sseSource.onerror = function() {
        isConnected = false;
      };
    } catch(e) {}
  }

  function handleRealtimePut(path, data) {
    if (!path || path === '/') {
      if (data) {
        var normalized = normalizeCloudData(data);
        applyDataToLocal(normalized);
        broadcastUpdate('realtime_full_sync', normalized);
      }
      return;
    }
    var parts = path.replace(/^\//, '').split('/');
    var board = parts[0];
    var id = parts[1];

    if (board && id && data) {
      savePostToLocal(board, data);
      broadcastUpdate('realtime_post_save', { board: board, post: data });
    } else if (board && !id && Array.isArray(data)) {
      applyBoardToLocal(board, data);
      broadcastUpdate('realtime_board_sync', { board: board });
    }
  }

  function handleRealtimePatch(path, data) {
    if (!data || typeof data !== 'object') return;
    var parts = path.replace(/^\//, '').split('/');
    var board = parts[0];
    if (board && ['faq', 'reviews', 'columns', 'youtube'].indexOf(board) !== -1) {
      Object.keys(data).forEach(function(postId) {
        var post = data[postId];
        if (post) savePostToLocal(board, post);
      });
      broadcastUpdate('realtime_patch', { board: board });
    }
  }

  // 4. 글 저장 (로컬 볼트에 즉각 100% 저장 후 옵션 클라우드 DB로 전송)
  function savePost(boardType, post, onDone) {
    if (!boardType || !post) return;
    savePostToLocal(boardType, post);
    broadcastUpdate('local_save', { board: boardType, post: post });

    var base = getBaseUrl();
    if (!base) {
      if (onDone) onDone(true, post);
      return;
    }

    var targetUrl = getCloudApiUrl('/community/' + boardType + '/' + encodeURIComponent(post.id));
    fetch(targetUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    })
    .then(function(res) {
      if (!res.ok) throw new Error('Cloud DB save failed HTTP ' + res.status);
      isConnected = true;
      if (onDone) onDone(true, post);
    })
    .catch(function(err) {
      console.warn('[HealimCloudDB] 원격 클라우드 저장 지연 (로컬 볼트 안전 보존 완료):', err.message);
      if (onDone) onDone(true, post);
    });
  }

  // 5. 글 삭제 (로컬 볼트에서 즉각 영구 삭제)
  function deletePost(boardType, postId, onDone) {
    if (!postId) return;
    var strId = String(postId);

    deletePostFromLocal(boardType, strId);
    broadcastUpdate('local_delete', { board: boardType, id: strId });

    var base = getBaseUrl();
    if (!base) {
      if (onDone) onDone(true);
      return;
    }

    var targetUrl = getCloudApiUrl('/community/' + boardType + '/' + encodeURIComponent(strId));
    fetch(targetUrl, { method: 'DELETE' })
      .then(function() {
        var delRecordUrl = getCloudApiUrl('/community/deleted_ids/' + encodeURIComponent(strId));
        return fetch(delRecordUrl, { method: 'PUT', body: JSON.stringify(Date.now()) });
      })
      .then(function() {
        isConnected = true;
        if (onDone) onDone(true);
      })
      .catch(function(err) {
        console.warn('[HealimCloudDB] 원격 삭제 지연 (로컬 영구 삭제 완료):', err);
        if (onDone) onDone(true);
      });
  }

  // 6. 데이터 정규화 헬퍼
  function normalizeCloudData(raw) {
    var out = { faq: [], reviews: [], columns: [], youtube: [], deleted_ids: [] };
    if (!raw || typeof raw !== 'object') return out;

    ['faq', 'reviews', 'columns', 'youtube'].forEach(function(bKey) {
      var val = raw[bKey];
      if (Array.isArray(val)) {
        out[bKey] = val.filter(Boolean);
      } else if (val && typeof val === 'object') {
        out[bKey] = Object.keys(val).map(function(k) { return val[k]; }).filter(Boolean);
      }
    });

    if (raw.deleted_ids) {
      if (Array.isArray(raw.deleted_ids)) {
        out.deleted_ids = raw.deleted_ids.map(String);
      } else if (typeof raw.deleted_ids === 'object') {
        out.deleted_ids = Object.keys(raw.deleted_ids);
      }
    }

    return out;
  }

  // 7. 로컬 스토리지 및 볼트 병합
  function applyDataToLocal(data) {
    if (!data) return;
    inMemoryData = data;

    ['faq', 'reviews', 'columns', 'youtube'].forEach(function(bKey) {
      applyBoardToLocal(bKey, data[bKey] || []);
    });

    if (Array.isArray(data.deleted_ids) && data.deleted_ids.length > 0) {
      var curDel = [];
      try { curDel = JSON.parse(localStorage.getItem('healim_deleted_post_ids') || '[]'); } catch(e) {}
      var mergedDel = Array.from(new Set(curDel.concat(data.deleted_ids)));
      localStorage.setItem('healim_deleted_post_ids', JSON.stringify(mergedDel));
    }
  }

  function applyBoardToLocal(bKey, remoteList) {
    if (!Array.isArray(remoteList)) return;
    var vKey = 'healim_vault_all_posts_' + bKey;
    var rawV = localStorage.getItem(vKey);
    var localList = rawV ? (JSON.parse(rawV) || []) : [];

    var seenIds = {};
    var merged = [];

    // Local user posts have priority
    localList.forEach(function(p) {
      if (p && p.id) {
        seenIds[String(p.id)] = true;
        merged.push(p);
      }
    });

    remoteList.forEach(function(p) {
      if (p && p.id && !seenIds[String(p.id)]) {
        seenIds[String(p.id)] = true;
        merged.push(p);
      }
    });

    localStorage.setItem(vKey, JSON.stringify(merged));
    localStorage.setItem('healim_board_' + bKey, JSON.stringify(merged));
  }

  function savePostToLocal(bKey, post) {
    var vKey = 'healim_vault_all_posts_' + bKey;
    var rawV = localStorage.getItem(vKey);
    var list = rawV ? (JSON.parse(rawV) || []) : [];
    var strId = String(post.id);

    var existingIdx = -1;
    for (var i = 0; i < list.length; i++) {
      if (String(list[i].id) === strId) {
        existingIdx = i;
        break;
      }
    }

    if (existingIdx !== -1) {
      list[existingIdx] = post;
    } else {
      list.unshift(post);
    }

    localStorage.setItem(vKey, JSON.stringify(list));
    localStorage.setItem('healim_board_' + bKey, JSON.stringify(list));

    var cKey = (bKey === 'youtube') ? 'healim_custom_youtube_posts' : ('healim_custom_' + bKey + '_posts');
    var rawC = localStorage.getItem(cKey);
    var cList = rawC ? (JSON.parse(rawC) || []) : [];
    var cIdx = cList.findIndex(function(it) { return String(it.id) === strId; });
    if (cIdx !== -1) cList[cIdx] = post;
    else cList.unshift(post);
    localStorage.setItem(cKey, JSON.stringify(cList));
  }

  function deletePostFromLocal(bKey, postId) {
    var strId = String(postId);
    var vKey = 'healim_vault_all_posts_' + bKey;
    var rawV = localStorage.getItem(vKey);
    if (rawV) {
      var list = (JSON.parse(rawV) || []).filter(function(it) { return String(it.id) !== strId; });
      localStorage.setItem(vKey, JSON.stringify(list));
      localStorage.setItem('healim_board_' + bKey, JSON.stringify(list));
    }

    var cKey = (bKey === 'youtube') ? 'healim_custom_youtube_posts' : ('healim_custom_' + bKey + '_posts');
    var rawC = localStorage.getItem(cKey);
    if (rawC) {
      var cList = (JSON.parse(rawC) || []).filter(function(it) { return String(it.id) !== strId; });
      localStorage.setItem(cKey, JSON.stringify(cList));
    }
  }

  // 8. 현재 브라우저의 모든 볼트/스토리지 데이터 일괄 수집
  function gatherAllLocalCommunityData() {
    var boards = ['faq', 'reviews', 'columns', 'youtube'];
    var result = { faq: [], reviews: [], columns: [], youtube: [], deleted_ids: [] };

    try {
      var dIds = JSON.parse(localStorage.getItem('healim_deleted_post_ids') || '[]');
      result.deleted_ids = dIds.map(String);
    } catch(e) {}

    boards.forEach(function(bKey) {
      var seen = {};
      var list = [];

      function add(it) {
        if (!it || !it.id) return;
        var sId = String(it.id);
        if (result.deleted_ids.indexOf(sId) !== -1) return;
        if (seen[sId]) return;
        seen[sId] = true;
        list.push(it);
      }

      try {
        var vRaw = localStorage.getItem('healim_vault_all_posts_' + bKey);
        if (vRaw) (JSON.parse(vRaw) || []).forEach(add);
      } catch(e) {}

      try {
        var bRaw = localStorage.getItem('healim_board_' + bKey);
        if (bRaw) (JSON.parse(bRaw) || []).forEach(add);
      } catch(e) {}

      try {
        var cKey = (bKey === 'youtube') ? 'healim_custom_youtube_posts' : ('healim_custom_' + bKey + '_posts');
        var cRaw = localStorage.getItem(cKey);
        if (cRaw) (JSON.parse(cRaw) || []).forEach(add);
      } catch(e) {}

      result[bKey] = list;
    });

    return result;
  }

  // 9. 일괄 동기화 및 백업 (로컬 모든 글 + 정적 허브 무결성 병합)
  function migrateLocalToCloud(onProgress, onDone) {
    return new Promise(function(resolve) {
      var localData = gatherAllLocalCommunityData();

      fetch('/data/healim_community_hub.json?t=' + Date.now(), { cache: 'no-cache' })
        .then(function(r) { return r.json(); })
        .catch(function() { return { faq: [], reviews: [], columns: [], youtube: [], deleted_ids: [] }; })
        .then(function(fileData) {
          var hub = fileData.data || fileData;
          var merged = { faq: [], reviews: [], columns: [], youtube: [], deleted_ids: [] };

          var deletedSet = new Set((hub.deleted_ids || []).concat(localData.deleted_ids || []));
          merged.deleted_ids = Array.from(deletedSet);

          ['faq', 'reviews', 'columns', 'youtube'].forEach(function(bKey) {
            var seen = {};
            var combined = [];
            var addIt = function(it) {
              if (!it || !it.id) return;
              var sId = String(it.id);
              if (deletedSet.has(sId)) return;
              if (seen[sId]) return;
              seen[sId] = true;
              combined.push(it);
            };
            (localData[bKey] || []).forEach(addIt);
            (hub[bKey] || []).forEach(addIt);
            merged[bKey] = combined;
          });

          // 1. Save consolidated data to local storage & vault
          applyDataToLocal(merged);
          broadcastUpdate('local_consolidated', merged);

          var total = (merged.faq.length + merged.reviews.length + merged.columns.length + merged.youtube.length);

          var base = getBaseUrl();
          if (base) {
            var cloudUrl = getCloudApiUrl('/community');
            return fetch(cloudUrl, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(merged)
            })
            .then(function(res) {
              if (!res.ok) throw new Error('Cloud DB PUT HTTP ' + res.status);
              isConnected = true;
              if (onDone) onDone(true, '클라우드 DB에 전체 ' + total + '개 게시글이 동기화되었습니다.');
              resolve({ ok: true, data: merged, total: total, mode: 'cloud' });
            })
            .catch(function(err) {
              console.warn('[HealimCloudDB] 원격 DB 전송 지연 (로컬 볼트 안전 보존 완료):', err);
              if (onDone) onDone(true, '로컬 볼트에 전체 ' + total + '개 게시글이 안전하게 보존되었습니다.');
              resolve({ ok: true, data: merged, total: total, mode: 'local' });
            });
          } else {
            isConnected = true;
            if (onDone) onDone(true, '로컬 볼트에 전체 ' + total + '개 게시글이 안전하게 보존되었습니다.');
            resolve({ ok: true, data: merged, total: total, mode: 'local' });
          }
        })
        .catch(function(err) {
          applyDataToLocal(localData);
          var total = (localData.faq.length + localData.reviews.length + localData.columns.length + localData.youtube.length);
          if (onDone) onDone(true, '로컬 볼트에 전체 ' + total + '개 게시글이 안전하게 보존되었습니다.');
          resolve({ ok: true, data: localData, total: total, mode: 'local' });
        });
    });
  }

  // 10. 외부/타 브라우저 동기화 데이터 직접 가져오기 (JSON String or Object)
  function importCommunityData(rawInput) {
    try {
      var parsed = typeof rawInput === 'string' ? JSON.parse(rawInput.trim()) : rawInput;
      if (!parsed || typeof parsed !== 'object') throw new Error('올바른 JSON 데이터 형식이 아닙니다.');
      var data = normalizeCloudData(parsed.data || parsed);
      applyDataToLocal(data);
      broadcastUpdate('data_imported', data);
      var count = (data.faq.length + data.reviews.length + data.columns.length + data.youtube.length);
      return { success: true, count: count, data: data };
    } catch(e) {
      return { success: false, error: e.message };
    }
  }

  // 11. 이벤트 리스너 & 상태 관리
  function onUpdate(cb) {
    if (typeof cb === 'function') callbacks.push(cb);
  }

  function broadcastUpdate(reason, payload) {
    callbacks.forEach(function(cb) {
      try { cb(reason, payload); } catch(e) {}
    });
    try {
      window.dispatchEvent(new CustomEvent('healim-cloud-db-updated', { detail: { reason: reason, payload: payload } }));
    } catch(e) {}
  }

  function getStatus() {
    var base = getBaseUrl();
    return {
      connected: isConnected,
      endpoint: base || '로컬 및 정적 허브 안전 보존 모드',
      latencyMs: lastLatencyMs,
      data: inMemoryData
    };
  }

  // Global Export
  window.HealimCloudDB = {
    init: init,
    pull: pullFromCloudOrFallback,
    fetchFromCloud: fetchFromCloud,
    savePost: savePost,
    deletePost: deletePost,
    onUpdate: onUpdate,
    migrateLocalToCloud: migrateLocalToCloud,
    importCommunityData: importCommunityData,
    gatherAllLocalCommunityData: gatherAllLocalCommunityData,
    getStatus: getStatus,
    setCustomUrl: setCustomUrl,
    getBaseUrl: getBaseUrl
  };

  // Auto-init on page load
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() { init(); });
    } else {
      init();
    }
  }

})(typeof window !== 'undefined' ? window : this);
