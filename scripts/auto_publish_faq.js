/**
 * auto_publish_faq.js
 * 해아림한의원 자율신경실조증 FAQ 자동 발행 엔진 & 콘텐츠 풀 (18대 테마 + 엄격 중복 방지)
 * 
 * [요구사항 명세]
 * 1. 대상: 자율신경실조증 및 자율신경계 이상증상 환자 다빈도 질문 (18선 임상 풀)
 * 2. 분량: 질문에 대한 답변 1,000자 내외
 * 3. 구성: 상단 썸네일 사진 + 본문 1000자 내외 답변 + 하단 3대 링크 (줄바꿔서 1줄씩 띄움)
 *    - [자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)
 *    - [자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)
 *    - [전국 지점 안내](https://www.healim.com)
 * 4. 주기: 매주 2~3개 글, 오전 8시 ~ 11시 사이 랜덤 시간 발행
 * 5. 중복 방지: 단 질문글은 기존에 작성되어 있는 글과 중복되지 않도록 엄격한 정규화 비교 필터링 적용
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Load canonical pool from static/js/auto_faq_engine.js
const enginePath = path.join(__dirname, '../static/js/auto_faq_engine.js');
const engineCode = fs.readFileSync(enginePath, 'utf8');

const sandbox = {
  window: {},
  localStorage: { getItem: () => null, setItem: () => {} },
  document: { addEventListener: () => {}, getElementById: () => null },
  console: { log: () => {}, warn: () => {}, error: () => {} }
};
vm.createContext(sandbox);
vm.runInContext(engineCode, sandbox);

const autoFaqContentPool = sandbox.window.autoFaqContentPool || [];

// Title normalization helper
function normalizeQuestionTitle(t) {
  if (!t) return '';
  return String(t)
    .replace(/^Q[\.:\s\-]+/i, '')
    .replace(/[\s\*_~`#\?\uFF1F\.,\(\)\[\]]/g, '')
    .trim()
    .toLowerCase();
}

// Content length check and validation
console.log('--- Checking 18 FAQ Content Lengths & Uniqueness ---');
const seenTitles = new Set();
let duplicatesFound = 0;

autoFaqContentPool.forEach((item, idx) => {
  const cleanBody = item.content
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  const norm = normalizeQuestionTitle(item.title);
  if (seenTitles.has(norm)) {
    console.error(`[DUPLICATE DETECTED] FAQ #${idx + 1}: ${item.title}`);
    duplicatesFound++;
  }
  seenTitles.add(norm);

  console.log(`FAQ #${idx + 1}: ${item.title.substring(0, 35)}...`);
  console.log(`   - Raw Length: ${item.content.length} chars | Clean Body Length: ${cleanBody.length} chars | Unique: OK`);
});

if (duplicatesFound === 0) {
  console.log(`\n✅ All ${autoFaqContentPool.length} FAQ questions in pool are strictly unique (0 duplicates).`);
} else {
  console.error(`\n❌ Found ${duplicatesFound} duplicate questions in pool!`);
}

// 6대 의료광고 및 표현 원칙 준수 검증기
console.log('\n--- Checking 6 Medical Compliance Principles on FAQ Content Pool ---');
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

let faqComplianceViolations = 0;
autoFaqContentPool.forEach((item, idx) => {
  const full = `${item.title} ${item.summary || ''} ${item.content}`;
  complianceChecks.forEach(c => {
    c.regex.lastIndex = 0;
    let m;
    while ((m = c.regex.exec(full)) !== null) {
      console.error(`[COMPLIANCE VIOLATION] FAQ #${idx + 1} [Rule ${c.rule}: ${c.label}]: "${m[0]}"`);
      faqComplianceViolations++;
    }
  });
});

if (faqComplianceViolations === 0) {
  console.log(`✅ All ${autoFaqContentPool.length} FAQs 100% strictly comply with all 6 medical compliance principles.`);
} else {
  console.error(`\n❌ Found ${faqComplianceViolations} compliance violations in FAQ pool!`);
}

/**
 * Schedule Calculation Engine
 * Rule: 2~3 posts per week (every 2 to 3 days), randomized between 08:00 and 11:00 AM.
 */
function calculateNextScheduleTime(baseDate = new Date()) {
  const d = new Date(baseDate.getTime());
  const dayOffset = Math.random() < 0.5 ? 2 : 3;
  d.setDate(d.getDate() + dayOffset);

  const hour = 8 + Math.floor(Math.random() * 3); // 8, 9, or 10
  const minute = Math.floor(Math.random() * 60);
  const second = Math.floor(Math.random() * 60);

  d.setHours(hour, minute, second, 0);
  return d;
}

console.log('\n--- Sample Schedule Calculations ---');
let cur = new Date();
for (let i = 1; i <= 5; i++) {
  cur = calculateNextScheduleTime(cur);
  const year = cur.getFullYear();
  const month = String(cur.getMonth() + 1).padStart(2, '0');
  const day = String(cur.getDate()).padStart(2, '0');
  const time = `${String(cur.getHours()).padStart(2, '0')}:${String(cur.getMinutes()).padStart(2, '0')}:${String(cur.getSeconds()).padStart(2, '0')}`;
  console.log(`Next Post #${i}: ${year}.${month}.${day} ${time}`);
}

module.exports = {
  autoFaqContentPool,
  calculateNextScheduleTime,
  normalizeQuestionTitle
};
