/**
 * auto_publish_column.js
 * 해아림한의원 자율신경실조증 치료칼럼 자동 발행 엔진 & 20대 임상 풀 (엄격 중복 방지)
 * 
 * [요구사항 명세]
 * 1. 대상: 자율신경실조증 및 자율신경계 이상증상 관련 환자 빈출 질문 및 핵심 주제 (20선 임상 풀)
 * 2. 분량: 한방신경정신과 전문의의 깊이 있는 임상 분석 1,600자 내외
 * 3. 구성: 상단 16:9 메디컬 벡터 일러스트 썸네일 + 본문 + 하단 3대 링크 (줄바꿔서 1줄씩 띄움)
 *    - [자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)
 *    - [자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)
 *    - [전국 지점 안내](https://www.healim.com)
 * 4. 주기: 매주 4~5개 글, 오전 8시 ~ 11시 사이 랜덤 시간 발행
 * 5. 중복 방지: 단 질문과 핵심주제는 기존에 작성되어 있는 글들의 제목과 중복되지 않도록 엄격한 정규화 비교 필터링 및 중복 방지 알고리즘 적용
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const enginePath = path.join(__dirname, '../static/js/auto_column_engine.js');
const engineCode = fs.readFileSync(enginePath, 'utf8');

const sandbox = {
  window: {},
  localStorage: { getItem: () => null, setItem: () => {} },
  document: { addEventListener: () => {}, getElementById: () => null, readyState: 'complete' },
  console: { log: () => {}, warn: () => {}, error: () => {} },
  setInterval: () => {}
};
vm.createContext(sandbox);
vm.runInContext(engineCode, sandbox);

const columnsPool = sandbox.window.columnsPool || [];

function normalizeColumnTitle(t) {
  if (!t) return '';
  return String(t)
    .replace(/^칼럼[\.:\s\-]+/i, '')
    .replace(/[\s\*_~`#\?\uFF1F\.,\(\)\[\]:;\-]/g, '')
    .trim()
    .toLowerCase();
}

console.log('--- Checking 20 Column Content Lengths & Uniqueness ---');
const seenTitles = new Set();
let duplicatesFound = 0;

columnsPool.forEach((item, idx) => {
  const cleanBody = item.content
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  const norm = normalizeColumnTitle(item.title);
  if (seenTitles.has(norm)) {
    console.error(`[DUPLICATE DETECTED] Column #${idx + 1}: ${item.title}`);
    duplicatesFound++;
  }
  seenTitles.add(norm);

  console.log(`Column #${idx + 1}: ${item.title.substring(0, 35)}...`);
  console.log(`   - Raw Length: ${item.content.length} chars | Clean Body: ${cleanBody.length} chars | Unique: OK`);
});

if (duplicatesFound === 0) {
  console.log(`\n✅ All ${columnsPool.length} columns in pool are strictly unique (0 duplicates).`);
} else {
  console.error(`\n❌ Found ${duplicatesFound} duplicate columns in pool!`);
}

function calculateNextColumnSchedule(baseTime = new Date()) {
  const base = (baseTime instanceof Date) ? baseTime : new Date();
  const dayOffset = Math.random() < 0.5 ? 1 : 2;
  const next = new Date(base.getTime() + dayOffset * 24 * 60 * 60 * 1000);

  const hour = 8 + Math.floor(Math.random() * 3);
  const minute = Math.floor(Math.random() * 60);
  const second = Math.floor(Math.random() * 60);

  next.setHours(hour, minute, second, 0);
  return next;
}

console.log('\n--- Sample Column Schedule Calculations (4~5 posts/week, 08:00~11:00 AM) ---');
let cur = new Date();
for (let i = 1; i <= 5; i++) {
  cur = calculateNextColumnSchedule(cur);
  const year = cur.getFullYear();
  const month = String(cur.getMonth() + 1).padStart(2, '0');
  const day = String(cur.getDate()).padStart(2, '0');
  const time = `${String(cur.getHours()).padStart(2, '0')}:${String(cur.getMinutes()).padStart(2, '0')}:${String(cur.getSeconds()).padStart(2, '0')}`;
  console.log(`Next Column #${i}: ${year}.${month}.${day} ${time}`);
}

module.exports = {
  columnsPool,
  calculateNextColumnSchedule,
  normalizeColumnTitle
};
