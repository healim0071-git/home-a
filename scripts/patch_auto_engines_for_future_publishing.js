const fs = require('fs');
const path = require('path');

// 1. auto_faq_engine.js 패치
const faqEnginePath = path.join(__dirname, '../static/js/auto_faq_engine.js');
let faqEngineCode = fs.readFileSync(faqEnginePath, 'utf8');

if (!faqEngineCode.includes('ensureAeoGeoDirectAnswerFaq')) {
  const faqHelperCode = `
  // ── AEO/GEO Direct Answer & E-E-A-T 검수 태그 보장 헬퍼 ──
  function ensureAeoGeoDirectAnswerFaq(content, title, summary, category) {
    if (!content) return '';
    if (content.indexOf('AI 임상 요약 & 핵심 답변') !== -1 || content.indexOf('AI 검색 및 질문 핵심 답변 요약') !== -1) {
      return content;
    }
    var cleanSummary = summary || '';
    if (!cleanSummary || cleanSummary.length < 20) {
      cleanSummary = title + ' 증상은 교감신경 항진과 부교감신경 저하에 따른 신경 전달 이상이 주원인이며, 객관적 HRV 자율신경 검사와 체질 맞춤 한방 치료로 신경계 균형을 회복할 수 있습니다.';
    }
    var aeoHeader = '> **💡 [AI 임상 요약 & 핵심 답변 (AEO / GEO Direct Answer)]**\\n' +
      '> - **핵심 요약**: ' + cleanSummary + '\\n' +
      '> - **관련 분야**: 자율신경실조증 · ' + (category || '자율신경FAQ') + '\\n' +
      '> - **의학 자문 및 검수**: 해아림한의원 한방신경정신과 전문의 및 한의학 박사 의료진 네트워크\\n\\n';
    var eeatFooter = '\\n\\n---\\n*본 콘텐츠는 의료법 제56조를 준수하며, 환자분들의 자율신경계 질환 이해를 돕기 위해 해아림한의원 의료진의 임상 경험을 바탕으로 학술적·정보적 목적으로 작성되었습니다.*';

    if (content.indexOf('[자율신경실조증 검사 알아보기]') !== -1) {
      return aeoHeader + content.replace('[자율신경실조증 검사 알아보기]', eeatFooter + '\\n\\n[자율신경실조증 검사 알아보기]');
    }
    return aeoHeader + content + eeatFooter;
  }
`;

  // 새 글 생성 직전 치환
  faqEngineCode = faqEngineCode.replace(
    /var faqContent = stripFaqSeoHeader\(sanitizeMedicalCompliance\(poolItem\.content\)\);/,
    `var rawFaqContent = stripFaqSeoHeader(sanitizeMedicalCompliance(poolItem.content));\n      var faqContent = ensureAeoGeoDirectAnswerFaq(rawFaqContent, poolItem.title, poolItem.summary, poolItem.category);`
  );

  // 헬퍼 함수 함수 본문 시작 부분에 주입
  faqEngineCode = faqEngineCode.replace(
    /\(function\(\) \{[\r\n\s]+'use strict';/,
    `(function() {\n  'use strict';\n${faqHelperCode}`
  );

  fs.writeFileSync(faqEnginePath, faqEngineCode, 'utf8');
  console.log('[SUCCESS] Patched auto_faq_engine.js for permanent future AEO/GEO publishing!');
} else {
  console.log('[INFO] auto_faq_engine.js already has AEO/GEO patch.');
}

// 2. auto_column_engine.js 패치
const colEnginePath = path.join(__dirname, '../static/js/auto_column_engine.js');
let colEngineCode = fs.readFileSync(colEnginePath, 'utf8');

if (!colEngineCode.includes('ensureAeoGeoDirectAnswerCol')) {
  const colHelperCode = `
  // ── AEO/GEO Direct Answer & E-E-A-T 검수 태그 보장 헬퍼 ──
  function ensureAeoGeoDirectAnswerCol(content, title, summary, category) {
    if (!content) return '';
    if (content.indexOf('AI 임상 요약 & 핵심 답변') !== -1 || content.indexOf('AI 검색 및 질문 핵심 답변 요약') !== -1) {
      return content;
    }
    var cleanSummary = summary || '';
    if (!cleanSummary || cleanSummary.length < 20) {
      cleanSummary = title + '에 대한 임상 분석과 교감-부교감신경계 자율 조절력 회복을 위한 체계적인 3단계 치료 로드맵 안내입니다.';
    }
    var aeoHeader = '> **💡 [AI 임상 요약 & 핵심 답변 (AEO / GEO Direct Answer)]**\\n' +
      '> - **핵심 요약**: ' + cleanSummary + '\\n' +
      '> - **관련 분야**: 자율신경실조증 · ' + (category || '임상 칼럼') + '\\n' +
      '> - **의학 자문 및 검수**: 해아림한의원 한방신경정신과 전문의 및 한의학 박사 의료진 네트워크\\n\\n';
    var eeatFooter = '\\n\\n---\\n*본 콘텐츠는 의료법 제56조를 준수하며, 환자분들의 자율신경계 질환 이해를 돕기 위해 해아림한의원 의료진의 임상 경험을 바탕으로 학술적·정보적 목적으로 작성되었습니다.*';

    if (content.indexOf('[자율신경실조증 검사 알아보기]') !== -1) {
      return aeoHeader + content.replace('[자율신경실조증 검사 알아보기]', eeatFooter + '\\n\\n[자율신경실조증 검사 알아보기]');
    }
    return aeoHeader + content + eeatFooter;
  }
`;

  // 새 글 생성 직전 치환
  colEngineCode = colEngineCode.replace(
    /var colContent = stripColumnSeoHeader\(sanitizeMedicalCompliance\(article\.content\)\);/,
    `var rawColContent = stripColumnSeoHeader(sanitizeMedicalCompliance(article.content));\n    var colContent = ensureAeoGeoDirectAnswerCol(rawColContent, article.title, article.summary, article.category);`
  );

  // 헬퍼 함수 함수 본문 시작 부분에 주입
  colEngineCode = colEngineCode.replace(
    /\(function\(\) \{[\r\n\s]+'use strict';/,
    `(function() {\n  'use strict';\n${colHelperCode}`
  );

  fs.writeFileSync(colEnginePath, colEngineCode, 'utf8');
  console.log('[SUCCESS] Patched auto_column_engine.js for permanent future AEO/GEO publishing!');
} else {
  console.log('[INFO] auto_column_engine.js already has AEO/GEO patch.');
}