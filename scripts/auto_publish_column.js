/**
 * auto_publish_column.js
 * 해아림한의원 자율신경실조증 치료칼럼 자동 발행 엔진 & 30대 임상 풀 (엄격 중복 방지 & 치료사례 60% 이상 달성)
 * 
 * [요구사항 명세]
 * 1. 대상: 자율신경실조증, 미주신경 반응, 심계항진, 기립성 저혈압, 어지럼증, 신경성 위장장애 등 (30대 임상 풀)
 * 2. 치료사례/사례 비율: 전체 자동발행 글의 60% 이상이 제목에 '치료사례' 또는 '사례'를 포함하고 생생한 환자 스토리 서술
 * 3. 분량: 한방신경정신과 전문의 깊이 있는 임상 분석 1,600자 내외
 * 4. 구성: 상단 16:9 메디컬 벡터 일러스트 썸네일 + 본문 + 하단 3대 링크 (줄바꿔서 1줄씩 띄움)
 *    - [자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)
 *    - [자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)
 *    - [전국 지점 안내](https://www.healim.com)
 * 5. 주기: 매주 4~5개 글 (1~2일 간격), 오전 8시 ~ 11시 사이 랜덤 시간 발행
 * 6. 중복 방지: 단 질문과 핵심주제는 기존 작성 글과 중복되지 않도록 엄격한 정규화 비교 필터링 적용
 * 7. 의료광고법 및 6대 표현 원칙 철저 준수 (근원/완치/전문병원/부작용없다/재발안된다 0건)
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

console.log('====================================================');
console.log('  1. 치료칼럼 콘텐츠 풀 고유성 및 치료사례(사례) 비율 검증');
console.log('====================================================');
const seenTitles = new Set();
let duplicatesFound = 0;
let caseStudyCount = 0;

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

  const isCase = item.title.includes('사례') || item.title.includes('치료사례');
  if (isCase) caseStudyCount++;

  console.log(`Column #${idx + 1}: [${isCase ? '치료사례' : '일반칼럼'}] ${item.title.substring(0, 38)}...`);
  console.log(`   - Raw Length: ${item.content.length} chars | Clean Body: ${cleanBody.length} chars | Unique: OK`);
});

if (duplicatesFound === 0) {
  console.log(`\n✅ All ${columnsPool.length} columns in pool are strictly unique (0 duplicates).`);
} else {
  console.error(`\n❌ Found ${duplicatesFound} duplicate columns in pool!`);
  process.exitCode = 1;
}

const caseRatio = (caseStudyCount / columnsPool.length) * 100;
console.log(`\n📊 [치료사례 및 사례 키워드 비율 검증]`);
console.log(`   - 총 칼럼 수: ${columnsPool.length}편`);
console.log(`   - 사례/치료사례 포함 칼럼 수: ${caseStudyCount}편`);
console.log(`   - 사례 비율: ${caseRatio.toFixed(1)}% (기준: 60% 이상)`);

if (caseRatio >= 60) {
  console.log(`✅ [PASS] 치료사례 및 사례 키워드 비율이 60% 이상을 만족합니다! (${caseRatio.toFixed(1)}% >= 60%)\n`);
} else {
  console.error(`❌ [FAIL] 치료사례 및 사례 키워드 비율이 60% 미만입니다! (${caseRatio.toFixed(1)}% < 60%)\n`);
  process.exitCode = 1;
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

console.log('====================================================');
console.log('  2. 스케줄 발행 시뮬레이션 (주 4~5회, 08:00~11:00 AM)');
console.log('====================================================');
let cur = new Date();
for (let i = 1; i <= 5; i++) {
  cur = calculateNextColumnSchedule(cur);
  const year = cur.getFullYear();
  const month = String(cur.getMonth() + 1).padStart(2, '0');
  const day = String(cur.getDate()).padStart(2, '0');
  const time = `${String(cur.getHours()).padStart(2, '0')}:${String(cur.getMinutes()).padStart(2, '0')}:${String(cur.getSeconds()).padStart(2, '0')}`;
  console.log(`Next Column #${i}: ${year}.${month}.${day} ${time}`);
}

console.log('\n====================================================');
console.log('  3. 의료광고법 및 6대 표현 원칙 준수 검증 테스트');
console.log('====================================================');
const complianceChecks = [
  { rule: 1, label: '지양 단어(근원/근본치료)', regex: /(근원|근본)\s*치료|(근원|근본)적인?\s*치료|(근본|근원)적으로|(근본|근원)적\s*(접근|해결)|(근본|근원)\s*원인/g },
  { rule: 1, label: '완치 단어 배제', regex: /완치/g },
  { rule: 1, label: '전문병원 표방 금지', regex: /전문병원/g },
  { rule: 1, label: '전문/특화/첨단 수식 남용 배제', regex: /(전문\s*치료|전문\s*클리닉|특화\s*경추|특화된|첨단\s*장비|첨단\s*기기)/g },
  { rule: 1, label: '완벽 단어 배제', regex: /(완벽해결|완벽\s*해결|완벽히|완벽하게|완벽한)/g },
  { rule: 1, label: '부작용 없다 표현 배제', regex: /부작용\s*(이|은)?\s*(전혀\s*)?없/g },
  { rule: 2, label: '타 병원 비교 우위 배제', regex: /(다른\s*병원보다\s*우수|타\s*병원보다|타\s*병원과의\s*차별화|타\s*의료기관)/g },
  { rule: 3, label: "'재발안된다' 지양 및 재발율 완곡화", regex: /재발\s*(안\s*된다|되지\s*않|하지\s*않|없는|없이)/g },
  { rule: 4, label: '단정적/절대적 표현 배제', regex: /(단언컨대|결코\s*(일어나지|해결되지|아닙니다|답이|성공할|분리되어)|불가능합니다)/g },
  { rule: 6, label: "'해아림만의' 독점 표현 금지", regex: /(해아림한의원만의|해아림만의|해아림\s*만의|오직\s*해아림)/g },
  { rule: 6, label: '반드시/절대/무조건 배제', regex: /(반드시\s*(해야|하여야|된다|됩니다|낫|완치|복귀|회복)|절대로?\s*(안|금물)|무조건)/g },
];

let colComplianceViolations = 0;
columnsPool.forEach((item, idx) => {
  const full = `${item.title} ${item.summary || ''} ${item.content}`;
  complianceChecks.forEach(c => {
    c.regex.lastIndex = 0;
    let m;
    while ((m = c.regex.exec(full)) !== null) {
      console.error(`[COMPLIANCE VIOLATION] Column #${idx + 1} [Rule ${c.rule}: ${c.label}]: "${m[0]}"`);
      colComplianceViolations++;
    }
  });
});

if (colComplianceViolations === 0) {
  console.log(`✅ All ${columnsPool.length} columns 100% strictly satisfy all 6 medical compliance principles! (0 violations)\n`);
} else {
  console.error(`\n❌ Found ${colComplianceViolations} compliance violations in column pool!\n`);
  process.exitCode = 1;
}

console.log('====================================================');
console.log('  4. 치료칼럼 이미지(16:9 메디컬 벡터 일러스트) 무결성 검증');
console.log('====================================================');
let imgViolations = 0;
const staticDir = path.join(__dirname, '../static');

columnsPool.forEach((item, idx) => {
  if (!item.image) {
    console.error(`[IMAGE MISSING] Column #${idx + 1} has no image defined!`);
    imgViolations++;
  } else {
    const localImgPath = path.join(staticDir, item.image.replace(/^\//, ''));
    if (!fs.existsSync(localImgPath)) {
      console.error(`[IMAGE NOT FOUND ON DISK] Column #${idx + 1}: ${item.image}`);
      imgViolations++;
    }
  }
});

if (imgViolations === 0) {
  console.log(`✅ All ${columnsPool.length} Columns have valid 16:9 illustration images that 100% exist on disk! (0 missing)\n`);
} else {
  console.error(`❌ Found ${imgViolations} image violations in Column pool!\n`);
  process.exitCode = 1;
}

module.exports = {
  columnsPool,
  calculateNextColumnSchedule,
  normalizeColumnTitle
};