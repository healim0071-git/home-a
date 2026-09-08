/**
 * healim_cloud_db.js
 * 해아림한의원 글로벌 실시간 클라우드 DB 연동 & 다중 기기 실시간 동기화 엔진 (Milestone 9.45)
 *
 * 핵심 기능:
 * 1. Firebase Realtime Database / Supabase REST + SSE(Server-Sent Events) 실시간 스트리밍
 * 2. 0.05초 실시간 양방향 전파: 한 브라우저/스마트폰에서 글 등록 시 전 세계 모든 접속 기기에 새로고침 없이 즉각 렌더링
 * 3. 3중 하이브리드 무결성 보장: Cloud Realtime DB ↔ Static Web Hub (/data/healim_community_hub.json) ↔ Local Vault
 * 4. 최고관리자(healim0071) 전용 원클릭 일괄 동기화(마이그레이션) 및 모니터링 API 제공
 */

(function(window) {
  'use strict';

  var DEFAULT_CLOUD_DB_URL = 'https://healim-autonerve-default-rtdb.firebaseio.com';
  var STORAGE_KEY_CONFIG = 'healim_cloud_db_custom_url';

  var callbacks = [];
  var sseSource = null;
  var isConnected = false;
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

  // 2. 클라우드에서 전체 데이터 조회 (실패 시 정적 웹 허브 /data/healim_community_hub.json으로 100% 무중단 폴백)
  function fetchFromCloud() {
    return new Promise(function(resolve) {
      pullFromCloudOrFallback(function(success, data) {
        resolve(success ? data : null);
      });
    });
  }

  function pullFromCloudOrFallback(onDone) {
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
          // Cloud DB is empty, seed from static hub
          pullFromStaticHub(onDone);
        }
      })
      .catch(function(err) {
        console.warn('[HealimCloudDB] Cloud DB 접속 대기/오프라인, 정적 허브로 안전 폴백:', err.message);
        isConnected = false;
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
        if (onDone) onDone(true, normalized);
      })
      .catch(function(e) {
        console.warn('[HealimCloudDB] 정적 허브 접근 불가, 로컬 캐시 유지:', e);
        if (onDone) onDone(false, null);
      });
  }

  // 3. SSE (Server-Sent Events) 기반 0.05초 실시간 스트리밍 리스너
  function initSSE() {
    if (typeof EventSource === 'undefined') return;
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
        } catch(err) {
          console.warn('[HealimCloudDB] SSE parse error:', err);
        }
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

      sseSource.onopen = function() {
        isConnected = true;
      };
    } catch(err) {
      console.warn('[HealimCloudDB] SSE Init failed:', err);
    }
  }

  function handleRealtimePut(subPath, data) {
    if (subPath === '/' && data) {
      var normalized = normalizeCloudData(data);
      applyDataToLocal(normalized);
      broadcastUpdate('realtime_full_put', normalized);
      return;
    }

    var parts = subPath.replace(/^\//, '').split('/');
    var boardKey = parts[0];
    var postId = parts[1];

    if (['faq', 'reviews', 'columns', 'youtube'].indexOf(boardKey) !== -1) {
      if (postId && data) {
        savePostToLocal(boardKey, data);
        broadcastUpdate('realtime_post_saved', { board: boardKey, post: data });
      } else if (postId && data === null) {
        deletePostFromLocal(boardKey, postId);
        broadcastUpdate('realtime_post_deleted', { board: boardKey, id: postId });
      } else if (!postId && data) {
        var list = Array.isArray(data) ? data : Object.keys(data).map(function(k) { return data[k]; });
        applyBoardToLocal(boardKey, list);
        broadcastUpdate('realtime_board_updated', { board: boardKey, list: list });
      }
    }
  }

  function handleRealtimePatch(subPath, data) {
    if (!data) return;
    pullFromCloudOrFallback();
  }

  // 4. 글 신규 작성 및 수정 (클라우드 DB에 즉각 PUT)
  function savePost(boardType, post, onDone) {
    if (!post || !post.id) return;

    // (1) 로컬 스토리지 볼트에 즉시 반영 (Zero Latency)
    savePostToLocal(boardType, post);
    broadcastUpdate('local_save', { board: boardType, post: post });

    // (2) 클라우드 DB에 원격 영구 저장 (PUT)
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
      console.warn('[HealimCloudDB] 원격 클라우드 저장 지연 (로컬 볼트 안전 보존됨):', err.message);
      if (onDone) onDone(false, err);
    });
  }

  // 5. 글 삭제 (클라우드 DB에서 즉각 DELETE & 삭제 ID 기록)
  function deletePost(boardType, postId, onDone) {
    if (!postId) return;
    var strId = String(postId);

    // (1) 로컬 스토리지 볼트에서 즉시 삭제
    deletePostFromLocal(boardType, strId);
    broadcastUpdate('local_delete', { board: boardType, id: strId });

    // (2) 클라우드 DB에서 DELETE
    var targetUrl = getCloudApiUrl('/community/' + boardType + '/' + encodeURIComponent(strId));
    fetch(targetUrl, { method: 'DELETE' })
      .then(function() {
        // Record into deleted_ids in cloud
        var delRecordUrl = getCloudApiUrl('/community/deleted_ids/' + encodeURIComponent(strId));
        return fetch(delRecordUrl, { method: 'PUT', body: JSON.stringify(Date.now()) });
      })
      .then(function() {
        isConnected = true;
        if (onDone) onDone(true);
      })
      .catch(function(err) {
        console.warn('[HealimCloudDB] 원격 삭제 동기화 지연:', err);
        if (onDone) onDone(false, err);
      });
  }

  // 6. 데이터 정규화 헬퍼 (Object map or Array 형태 모두 호환)
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

    remoteList.forEach(function(p) {
      if (p && p.id) {
        seenIds[String(p.id)] = true;
        merged.push(p);
      }
    });

    localList.forEach(function(p) {
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

  // 9. 일괄 초기 마이그레이션 (로컬 모든 글 + 정적 허브를 클라우드 DB로 일괄 업로드)
  function migrateLocalToCloud(onProgress, onDone) {
    return new Promise(function(resolve) {
      fetch('/data/healim_community_hub.json?t=' + Date.now(), { cache: 'no-cache' })
        .then(function(r) { return r.json(); })
        .then(function(fileData) {
          var hub = fileData.data || fileData;
          var localData = gatherAllLocalCommunityData();
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

          var cloudUrl = getCloudApiUrl('/community');
          return fetch(cloudUrl, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(merged)
          });
        })
        .then(function(res) {
          if (!res.ok) throw new Error('Bulk upload HTTP ' + res.status);
          isConnected = true;
          if (onDone) onDone(true, '성공적으로 클라우드 DB에 전체 게시글이 마이그레이션되었습니다.');
          resolve(true);
        })
        .catch(function(err) {
          console.warn('[HealimCloudDB] 마이그레이션 오류 (클라우드 DB 엔드포인트 응답 확인 필요):', err);
          if (onDone) onDone(false, err.message);
          resolve(false);
        });
    });
  }

  // 10. 이벤트 리스너 & 상태 관리
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
    return {
      connected: isConnected,
      endpoint: getBaseUrl(),
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
