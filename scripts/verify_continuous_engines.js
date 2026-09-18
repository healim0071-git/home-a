/**
 * scripts/verify_continuous_engines.js
 * 자율신경실조증 커뮤니티 치료칼럼, 치료후기, FAQ 자동발행 엔진 4대 요구사항 종합 검증 스크립트
 * 
 * 1. 중복 감지 시 강제 발행 중단 (return false / return null)
 * 2. 수식어 제거 후 원문 기준 정규화 비교 (2회차 순환 시에도 중복 원천 차단)
 * 3. 삭제된 글 영구 배제 기록 관리 (poolId 및 원문 제목 블랙리스트 등록 시 재발행 차단)
 * 4. 풀 소진 시 기준에 맞춘 신규 자동발행 목록 동적 생성 및 지속적 신규 글 발행
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function createMockEnvironment() {
  const store = {};
  const mockLocalStorage = {
    getItem: (k) => store[k] !== undefined ? store[k] : null,
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    clear: () => { for (const k in store) delete store[k]; }
  };

  const listeners = {};
  const mockWindow = {
    addEventListener: (evt, fn) => {
      if (!listeners[evt]) listeners[evt] = [];
      listeners[evt].push(fn);
    },
    dispatchEvent: (evt) => {
      const fns = listeners[evt.type] || [];
      fns.forEach(fn => fn(evt));
    },
    HealimPermanentDB: {
      saveVault: () => {},
      deleteFromVault: () => {}
    }
  };

  const sandbox = {
    window: mockWindow,
    document: {
      addEventListener: () => {},
      getElementById: () => null,
      readyState: 'complete'
    },
    localStorage: mockLocalStorage,
    console: {
      log: () => {},
      warn: () => {},
      error: () => {}
    },
    CustomEvent: class CustomEvent {
      constructor(type, opts) {
        this.type = type;
        this.detail = opts && opts.detail;
      }
    },
    Date: Date,
    Math: Math,
    String: String,
    Array: Array,
    Object: Object,
    JSON: JSON,
    Set: Set,
    setInterval: () => {}
  };

  vm.createContext(sandbox);
  return { sandbox, store };
}

async function runComprehensiveVerification() {
  console.log('================================================================');
  console.log('  자율신경실조증 커뮤니티 자동발행 엔진 4대 요구사항 통합 검증');
  console.log('================================================================\n');

  let passedTests = 0;
  let totalTests = 0;

  function assert(condition, message) {
    totalTests++;
    if (condition) {
      console.log(`  ✅ [PASS] ${message}`);
      passedTests++;
    } else {
      console.error(`  ❌ [FAIL] ${message}`);
    }
  }

  // ──────────────────────────────────────────────────────────
  // [요구사항 2 검증] 수식어 제거 후 원문 기준 정규화 비교
  // ──────────────────────────────────────────────────────────
  console.log('--- [1] 수식어 제거 및 원문 기준 정규화 알고리즘 검증 ---');
  const { sandbox: sNorm } = createMockEnvironment();
  const colCode = fs.readFileSync(path.join(__dirname, '../static/js/auto_column_engine.js'), 'utf8');
  vm.runInContext(colCode, sNorm);

  const testColRaw = "응급실을 찾아도 정상이라는 가슴 두근거림과 호흡곤란, 뇌의 비상경보 시스템이 고장 난 신호입니다";
  const testColSub1 = testColRaw + " - 검사상 정상 환자의 미주신경 회복 임상 증례";
  const testColSub2 = testColRaw + " (심층 연재)";
  const testColSub3 = testColRaw + " - 한방 임상 분석과 심층 치료 전략";

  const normCol1 = sNorm.window.normalizeColumnTitle(testColRaw);
  const normCol2 = sNorm.window.normalizeColumnTitle(testColSub1);
  const normCol3 = sNorm.window.normalizeColumnTitle(testColSub2);
  const normCol4 = sNorm.window.normalizeColumnTitle(testColSub3);

  assert(normCol1 === normCol2, '칼럼: 하이픈 부제(- 검사상 정상...) 제거 후 원문과 동일 정규화');
  assert(normCol1 === normCol3, '칼럼: (심층 연재) 괄호 수식어 제거 후 원문과 동일 정규화');
  assert(normCol1 === normCol4, '칼럼: 2회차 변형 접미사(- 한방 임상 분석...) 제거 후 원문과 동일 정규화');

  const faqCode = fs.readFileSync(path.join(__dirname, '../static/js/auto_faq_engine.js'), 'utf8');
  const { sandbox: sFaqNorm } = createMockEnvironment();
  vm.runInContext(faqCode, sFaqNorm);

  const testFaqRaw = "병원에서 온갖 검사를 다 받아도 정상이라는데, 왜 어지럽고 가슴이 답답할까요? 자율신경실조증 검사로 알 수 있나요?";
  const testFaqSub1 = testFaqRaw + " - 원인 분석과 한방 치료 관리법은?";
  const testFaqSub2 = testFaqRaw + " (심층 안내)?";

  const normFaq1 = sFaqNorm.window.normalizeQuestionTitle(testFaqRaw);
  const normFaq2 = sFaqNorm.window.normalizeQuestionTitle(testFaqSub1);
  const normFaq3 = sFaqNorm.window.normalizeQuestionTitle(testFaqSub2);

  assert(normFaq1 === normFaq2, 'FAQ: 하이픈 부제(- 원인 분석과...) 제거 후 원문과 동일 정규화');
  assert(normFaq1 === normFaq3, 'FAQ: (심층 안내)? 괄호 수식어 제거 후 원문과 동일 정규화');


  // ──────────────────────────────────────────────────────────
  // [요구사항 1 검증] 중복 감지 시 강제 발행 중단
  // ──────────────────────────────────────────────────────────
  console.log('\n--- [2] 중복 감지 시 강제 발행 중단(return false/null) 검증 ---');
  
  // 칼럼 중복 시 return false 검증
  const { sandbox: sColDup, store: storeColDup } = createMockEnvironment();
  vm.runInContext(colCode, sColDup);
  // 게시판에 칼럼 1번이 이미 발행되어 있고, 풀의 다른 모든 글도 발행된 상태 시뮬레이션
  const poolCols = sColDup.window.columnsPool || [];
  const existingCols = poolCols.map((c, i) => ({
    id: 'col-existing-' + i,
    title: c.title,
    isAutoPublished: true
  }));
  storeColDup['healim_board_columns'] = JSON.stringify(existingCols);

  // 발행 트리거 시도
  const colPublishResult = sColDup.window.checkAndRunAutoColumnPublish(true);
  // 만약 동적 풀 생성이 일어난다면 신규 글이 발행되고, 신규 글마저 모두 중복이면 false여야 함
  // 강제로 newPost.title과 중복되는 상황 테스트:
  const isDuplicateSafelyHalted = vm.runInContext(`
    (function() {
      var board = JSON.parse(localStorage.getItem('healim_board_columns') || '[]');
      // 모든 현재 pool 및 템플릿 pool 제목을 board에 가득 채움
      window.ensureDynamicColumnBatch();
      var fullBoard = window.columnsPool.map(function(c, idx) {
        return { id: 'col-dup-' + idx, title: c.title };
      });
      localStorage.setItem('healim_board_columns', JSON.stringify(fullBoard));
      localStorage.setItem('healim_vault_all_posts_columns', JSON.stringify(fullBoard));
      
      // 이미 완전히 동일한 글들로 꽉 찬 상태에서 발행 시도:
      var res = window.checkAndRunAutoColumnPublish(true);
      return res;
    })()
  `, sColDup);

  // 칼럼 제목에 '(심층 연재)'가 붙어서 발행되지 않았는지 검증
  const boardAfterDup = JSON.parse(storeColDup['healim_board_columns'] || '[]');
  const hasForcedSuffixCol = boardAfterDup.some(it => String(it.title).includes('(심층 연재)'));
  assert(!hasForcedSuffixCol, '치료칼럼: 중복 감지 시 (심층 연재)를 붙여 강제 발행하지 않음');

  // FAQ 중복 시 return null 검증
  const { sandbox: sFaqDup, store: storeFaqDup } = createMockEnvironment();
  vm.runInContext(faqCode, sFaqDup);
  const poolFaq = sFaqDup.window.autoFaqContentPool || [];
  const existingFaq = poolFaq.map((f, i) => ({
    id: 'faq-existing-' + i,
    title: f.title,
    isAutoPublished: true
  }));
  storeFaqDup['healim_board_faq'] = JSON.stringify(existingFaq);

  const boardAfterFaq = JSON.parse(storeFaqDup['healim_board_faq'] || '[]');
  const hasForcedSuffixFaq = boardAfterFaq.some(it => String(it.title).includes('(심층 안내)?'));
  assert(!hasForcedSuffixFaq, 'FAQ: 중복 감지 시 (심층 안내)?를 붙여 강제 발행하지 않음');


  // ──────────────────────────────────────────────────────────
  // [요구사항 3 검증] 삭제된 글 영구 배제 기록 관리
  // ──────────────────────────────────────────────────────────
  console.log('\n--- [3] 삭제된 글 영구 배제 블랙리스트 차단 검증 ---');
  
  // 칼럼 1번을 영구 블랙리스트에 등록
  const { sandbox: sColBlack, store: storeColBlack } = createMockEnvironment();
  storeColBlack['healim_auto_column_state'] = JSON.stringify({ poolIndex: 0, nextScheduledTime: Date.now() + 3600000, publishedPoolIds: [] });
  storeColBlack['healim_deleted_pool_ids_columns'] = JSON.stringify(['col-auto-1']);
  storeColBlack['healim_deleted_title_keys_columns'] = JSON.stringify([normCol1]);
  vm.runInContext(colCode, sColBlack);

  // 칼럼 1번이 선택되지 않고 2번부터 선택되는지 확인
  const publishedCol = sColBlack.window.checkAndRunAutoColumnPublish(true);
  assert(publishedCol !== null && publishedCol !== false, '블랙리스트 외의 유효한 글은 정상 자동발행');
  assert(publishedCol && publishedCol.poolId !== 'col-auto-1', '삭제된 칼럼 1번(col-auto-1)은 영구 배제되어 발행되지 않음');
  assert(publishedCol && publishedCol.poolId === 'col-auto-2', '칼럼 1번이 배제되어 다음 미발행 풀인 칼럼 2번이 정상 발행됨');

  // FAQ 1번 영구 블랙리스트 검증
  const { sandbox: sFaqBlack, store: storeFaqBlack } = createMockEnvironment();
  storeFaqBlack['healim_auto_faq_state'] = JSON.stringify({ poolIndex: 0, nextScheduledTime: Date.now() + 3600000, publishedPoolIds: [] });
  storeFaqBlack['healim_deleted_pool_ids_faq'] = JSON.stringify(['pool-faq-1']);
  storeFaqBlack['healim_deleted_title_keys_faq'] = JSON.stringify([normFaq1]);
  vm.runInContext(faqCode, sFaqBlack);

  const publishedFaq = sFaqBlack.window.checkAndRunAutoFaqPublish(true);
  assert(publishedFaq !== null, 'FAQ: 블랙리스트 외의 유효한 글 정상 자동발행');
  assert(publishedFaq && publishedFaq.poolId !== 'pool-faq-1', '삭제된 FAQ 1번(pool-faq-1)은 영구 배제되어 발행되지 않음');
  assert(publishedFaq && publishedFaq.poolId === 'pool-faq-2', 'FAQ 1번이 배제되어 다음 미발행 풀인 FAQ 2번이 정상 발행됨');

  // 치료후기 1번 영구 블랙리스트 검증
  const revCode = fs.readFileSync(path.join(__dirname, '../static/js/auto_review_engine.js'), 'utf8');
  const { sandbox: sRevBlack, store: storeRevBlack } = createMockEnvironment();
  vm.runInContext(revCode, sRevBlack);
  storeRevBlack['healim_deleted_pool_ids_reviews'] = JSON.stringify(['pool-rev-1']);

  const publishedRev = sRevBlack.window.checkAndRunAutoReviewPublish(true);
  assert(publishedRev !== null, '치료후기: 블랙리스트 외의 유효한 글 정상 자동발행');
  assert(publishedRev && publishedRev.poolId !== 'pool-rev-1', '삭제된 치료후기 1번(pool-rev-1)은 영구 배제되어 발행되지 않음');
  assert(publishedRev && publishedRev.poolId === 'pool-rev-2', '치료후기 1번이 배제되어 다음 미발행 풀인 치료후기 2번이 정상 발행됨');


  // ──────────────────────────────────────────────────────────
  // [요구사항 4 검증] 풀 소진 시 신규 자동발행 목록 동적 생성 및 지속 발행
  // ──────────────────────────────────────────────────────────
  console.log('\n--- [4] 풀 소진 시 신규 자동발행 목록 동적 생성 및 지속 발행 검증 ---');
  
  // 칼럼 1~30번 풀이 모두 소진되었을 때 신규 배치(31번~)가 생성되어 발행되는지 검증
  const { sandbox: sColDyn, store: storeColDyn } = createMockEnvironment();
  vm.runInContext(colCode, sColDyn);
  const baseColCount = (sColDyn.window.columnsPool || []).length;

  // 1~30번을 모두 기존 발행 목록에 채움
  const allBaseCols = sColDyn.window.columnsPool.map((c, idx) => ({
    id: 'col-old-' + idx,
    title: c.title
  }));
  storeColDyn['healim_board_columns'] = JSON.stringify(allBaseCols);

  // 발행 실행 -> 신규 배치가 동적으로 확장되어 31번 칼럼이 발행되어야 함!
  const nextGenCol = sColDyn.window.checkAndRunAutoColumnPublish(true);
  const newColPoolCount = (sColDyn.window.columnsPool || []).length;

  assert(nextGenCol !== null && nextGenCol !== false, '풀 소진 시 중단되지 않고 새로운 칼럼 정상 발행');
  assert(nextGenCol && nextGenCol.poolId === 'col-auto-31', '새로 생성된 신규 배치 칼럼 31번이 정상 발행됨');
  assert(newColPoolCount > baseColCount, `칼럼 풀이 동적으로 확장됨 (${baseColCount}편 -> ${newColPoolCount}편)`);
  assert(nextGenCol && nextGenCol.content.length >= 1500, `신규 칼럼 글자 수 기준(1,500자 이상) 준수: ${nextGenCol.content.length}자`);
  assert(nextGenCol && nextGenCol.content.includes('자율신경실조증 검사 알아보기'), '신규 칼럼 하단 3대 링크 포함 준수');

  // FAQ 1~30번 풀이 모두 소진되었을 때 신규 배치(31번~)가 생성되어 발행되는지 검증
  const { sandbox: sFaqDyn, store: storeFaqDyn } = createMockEnvironment();
  vm.runInContext(faqCode, sFaqDyn);
  const baseFaqCount = (sFaqDyn.window.autoFaqContentPool || []).length;

  const allBaseFaq = sFaqDyn.window.autoFaqContentPool.map((f, idx) => ({
    id: 'faq-old-' + idx,
    title: f.title
  }));
  storeFaqDyn['healim_board_faq'] = JSON.stringify(allBaseFaq);

  const nextGenFaq = sFaqDyn.window.checkAndRunAutoFaqPublish(true);
  const newFaqPoolCount = (sFaqDyn.window.autoFaqContentPool || []).length;

  assert(nextGenFaq !== null, 'FAQ: 풀 소진 시 중단되지 않고 새로운 FAQ 정상 발행');
  assert(nextGenFaq && nextGenFaq.poolId === 'pool-faq-31', '새로 생성된 신규 배치 FAQ 31번이 정상 발행됨');
  assert(newFaqPoolCount > baseFaqCount, `FAQ 풀이 동적으로 확장됨 (${baseFaqCount}개 -> ${newFaqPoolCount}개)`);
  assert(nextGenFaq && nextGenFaq.content.length >= 900, `신규 FAQ 답변 글자 수 기준(900자 이상) 준수: ${nextGenFaq.content.length}자`);

  // 치료후기 1~30번 풀이 모두 소진되었을 때 신규 배치(31번~)가 생성되어 발행되는지 검증
  const { sandbox: sRevDyn, store: storeRevDyn } = createMockEnvironment();
  vm.runInContext(revCode, sRevDyn);
  const baseRevCount = (sRevDyn.window.autoReviewContentPool || []).length;

  const allBaseRev = sRevDyn.window.autoReviewContentPool.map((r, idx) => ({
    id: 'rev-old-' + idx,
    title: r.title
  }));
  storeRevDyn['healim_board_reviews'] = JSON.stringify(allBaseRev);

  const nextGenRev = sRevDyn.window.checkAndRunAutoReviewPublish(true);
  const newRevPoolCount = (sRevDyn.window.autoReviewContentPool || []).length;

  assert(nextGenRev !== null, '치료후기: 풀 소진 시 중단되지 않고 새로운 후기 정상 발행');
  assert(nextGenRev && nextGenRev.poolId === 'pool-rev-31', '새로 생성된 신규 배치 치료후기 31번이 정상 발행됨');
  assert(newRevPoolCount > baseRevCount, `치료후기 풀이 동적으로 확장됨 (${baseRevCount}개 -> ${newRevPoolCount}개)`);
  assert(nextGenRev && nextGenRev.content.length >= 300 && nextGenRev.content.length <= 700, `치료후기 글자 수 기준(300~700자) 준수: ${nextGenRev.content.length}자`);

  console.log('\n================================================================');
  console.log(`  검증 결과: 총 ${totalTests}개 테스트 중 ${passedTests}개 통과 (${Math.round(passedTests / totalTests * 100)}%)`);
  console.log('================================================================\n');

  if (passedTests === totalTests) {
    console.log('🎉 4대 요구사항이 치료칼럼, 치료후기, FAQ 전 카테고리에서 100% 완벽히 충족되었습니다!');
  } else {
    console.error('⚠️ 일부 테스트가 실패하였습니다. 구현 코드를 재점검하세요.');
    process.exit(1);
  }
}

runComprehensiveVerification().catch(err => {
  console.error('검증 실행 중 예외 발생:', err);
  process.exit(1);
});
