/**
 * healim_sync_hub.js
 * 해아림한의원 커뮤니티 4대 영역 실시간 로컬 동기화 허브 (Local Realtime Sync Hub)
 *
 * 지원 기능:
 * 1. 동일 PC 내 크로스 브라우저(Chrome, Edge, Whale) 간 0.05초 실시간 동기화 (SSE - Server-Sent Events)
 * 2. 4대 영역 (FAQ, 치료후기, 칼럼, 유튜브) 및 삭제 목록 디스크 영구 저장 (data/healim_community_hub.json)
 * 3. 최고관리자(healim0071) 전용 삭제 인증 및 무결성 보장
 * 4. 포트 3030 기반 CORS 완벽 지원
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3030;
const DATA_DIR = path.join(__dirname, '..', 'data');
const DATA_FILE = path.join(DATA_DIR, 'healim_community_hub.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initial structure
const defaultData = {
  faq: [],
  reviews: [],
  columns: [],
  youtube: [],
  deleted_ids: [],
  version: '1.0.0',
  updated_at: Date.now()
};

function loadHubData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      return {
        faq: Array.isArray(parsed.faq) ? parsed.faq : [],
        reviews: Array.isArray(parsed.reviews) ? parsed.reviews : [],
        columns: Array.isArray(parsed.columns) ? parsed.columns : [],
        youtube: Array.isArray(parsed.youtube) ? parsed.youtube : [],
        deleted_ids: Array.isArray(parsed.deleted_ids) ? parsed.deleted_ids : [],
        version: parsed.version || '1.0.0',
        updated_at: parsed.updated_at || Date.now()
      };
    }
  } catch (e) {
    console.error('[SYNC HUB] Error reading hub data:', e);
  }
  saveHubData(defaultData);
  return defaultData;
}

function saveHubData(data) {
  try {
    data.updated_at = Date.now();
    const tempFile = DATA_FILE + '.tmp';
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf8');
    fs.renameSync(tempFile, DATA_FILE);
    return true;
  } catch (e) {
    console.error('[SYNC HUB] Error saving hub data:', e);
    return false;
  }
}

let hubData = loadHubData();
const sseClients = new Set();

function broadcastEvent(eventData) {
  const payload = `data: ${JSON.stringify(eventData)}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(payload);
    } catch (e) {
      sseClients.delete(client);
    }
  }
}

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = reqUrl.pathname;

  // 1. Health check
  if (pathname === '/api/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ status: 'ok', timestamp: Date.now(), clients: sseClients.size }));
    return;
  }

  // 2. SSE stream for real-time events
  if (pathname === '/api/events' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    res.write(`data: ${JSON.stringify({ type: 'connected', timestamp: Date.now() })}\n\n`);
    sseClients.add(res);

    req.on('close', () => {
      sseClients.delete(res);
    });
    return;
  }

  // 3. Get all community posts
  if (pathname === '/api/posts' && req.method === 'GET') {
    // Reload from disk to ensure fresh data
    hubData = loadHubData();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      status: 'ok',
      data: hubData
    }));
    return;
  }

  // 4. Upsert post (create or edit)
  if (pathname === '/api/posts' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const boardType = payload.boardType;
        const post = payload.post;
        const action = payload.action || 'create';

        if (!boardType || !post || !post.id) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ status: 'error', message: 'Missing boardType or post payload' }));
          return;
        }

        if (!hubData[boardType]) {
          hubData[boardType] = [];
        }

        const list = hubData[boardType];
        const existingIdx = list.findIndex(p => String(p.id) === String(post.id));
        if (existingIdx !== -1) {
          list[existingIdx] = post;
        } else {
          list.unshift(post);
        }

        // If it was previously in deleted_ids, remove it
        hubData.deleted_ids = hubData.deleted_ids.filter(id => String(id) !== String(post.id));

        saveHubData(hubData);

        // Broadcast to all other open browsers/tabs
        broadcastEvent({
          type: 'update',
          boardType: boardType,
          action: action,
          post: post,
          timestamp: Date.now()
        });

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ status: 'ok', post: post }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ status: 'error', message: err.message }));
      }
    });
    return;
  }

  // 5. Delete post (Admin healim0071 only)
  if (pathname === '/api/posts' && req.method === 'DELETE') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const boardType = payload.boardType;
        const postId = payload.id;
        const adminUser = payload.adminUser;

        if (adminUser !== 'healim0071') {
          res.writeHead(403, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ status: 'error', message: 'Unauthorized: Only healim0071 can delete posts' }));
          return;
        }

        if (!boardType || !postId) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ status: 'error', message: 'Missing boardType or postId' }));
          return;
        }

        if (hubData[boardType]) {
          hubData[boardType] = hubData[boardType].filter(p => String(p.id) !== String(postId));
        }

        if (!hubData.deleted_ids.includes(String(postId))) {
          hubData.deleted_ids.push(String(postId));
        }

        saveHubData(hubData);

        broadcastEvent({
          type: 'delete',
          boardType: boardType,
          id: postId,
          timestamp: Date.now()
        });

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ status: 'ok', id: postId }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ status: 'error', message: err.message }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ status: 'not_found' }));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[SYNC HUB] Healim Realtime Sync Hub running on http://127.0.0.1:${PORT}`);
  console.log(`[SYNC HUB] Data persistence file: ${DATA_FILE}`);
});
