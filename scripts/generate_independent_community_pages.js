const fs = require('fs');
const path = require('path');

const rootDir = 'D:/autonerve';
const hubData = JSON.parse(fs.readFileSync(path.join(rootDir, 'data/healim_community_hub.json'), 'utf8'));

const communityOriginal = fs.readFileSync(path.join(rootDir, 'content/community/_index.md'), 'utf8').replace(/\r\n/g, '\n');
const lines = communityOriginal.split('\n');

// Extract universal modals (lines 240 to 510)
const modalsBlock = lines.slice(240, 510).join('\n');

// Common 5-Tab Bar Generator
function renderTabs(activeTab) {
  return `        <!-- 5-Tab Community Navigation Bar -->
        <div class="community-tabs-container">
        <ul class="community-tabs-list" id="communityTabList">
        <li>
        <a href="/faq" class="community-tab-btn ${activeTab === 'faq' ? 'active' : ''}" data-tab="faq" style="text-decoration:none;">
        FAQ 자율신경치료 정보
        </a>
        </li>
        <li>
        <a href="/reviews" class="community-tab-btn ${activeTab === 'reviews' ? 'active' : ''}" data-tab="reviews" style="text-decoration:none;">
        자율신경실조증 치료후기 <span class="lock-tag">🔒 회원전용</span>
        </a>
        </li>
        <li>
        <a href="/youtube" class="community-tab-btn ${activeTab === 'youtube' ? 'active' : ''}" data-tab="youtube" style="text-decoration:none;">
        자율신경실조증 유튜브
        </a>
        </li>
        <li>
        <a href="/columns" class="community-tab-btn ${activeTab === 'columns' ? 'active' : ''}" data-tab="columns" style="text-decoration:none;">
        자율신경실조증 치료 칼럼
        </a>
        </li>
        <li>
        <a href="https://www.healim.com/5-6" target="_blank" rel="noopener noreferrer" class="community-tab-btn" style="text-decoration: none;">
        한약과 비용고시 ↗
        </a>
        </li>
        </ul>
        </div>`;
}

// Common Bottom Book & Branch section
const bookSection = `        <!-- ══════════════════════════════════════════════════════════════
        해아림 도서 및 하단 배너
        ══════════════════════════════════════════════════════════════ -->
        <div class="healim-book-section mt-12">
        <div class="max-w-xs mx-auto mb-5">
        <img src="/images/book_panic_disorder.jpg" alt="해아림한의원 네트워크 원장단 저서 - 걱정마 공황장애" class="rounded-xl shadow-lg mx-auto" style="max-height: 280px; object-fit: contain;">
        </div>
        <p class="healim-book-label">해아림한의원 네트워크 원장단 저서</p>
        <h3 class="healim-book-title">불안장애·자율신경실조증·공황장애 극복지침서</h3>
        <p class="text-sm text-[#555555] max-w-md mx-auto mb-4 leading-relaxed">
        원인 모를 신체화 증상과 예기불안, 공황 발작을 이겨내고 온전한 일상을 되찾기 위한 실전 치유 가이드
        </p>
        <div class="text-center">
        <div class="healim-book-badge">걱정마 공황장애</div>
        </div>
        </div>

        <div class="text-center my-10">
        <a href="#branches" class="btn-healim" style="padding: 0.85rem 2.25rem; font-size: 1.05rem;">가까운 16개 지점 찾기 &gt;</a>
        </div>`;

// Script tags for all independent pages
const scriptTags = `        <!-- ══════════════════════════════════════════════════════════════
        COMMUNITY ENGINES & REAL-TIME SYNCHRONIZATION
        ══════════════════════════════════════════════════════════════ -->
        <script src="/js/auto_faq_engine.js?v=20261015_51sync"></script>
        <script src="/js/auto_column_engine.js?v=1792983215156"></script>
        <script src="/js/auto_review_engine.js?v=20261015_51sync"></script>
        <script src="/js/healim_cloud_db.js?v=20261015_51sync"></script>
        <script src="/js/healim_community_engine.js?v=20261027_fixnav"></script>`;

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// -------------------------------------------------------------
// 1. PAGE: /columns (자율신경실조증 치료 칼럼)
// -------------------------------------------------------------
const columns = hubData.columns || [];
let columnRowsHtml = '';
columns.forEach((col, idx) => {
  const num = columns.length - idx;
  const safeTitle = escapeHtml(col.title || '');
  const safeAuthor = escapeHtml(col.author || '해아림한의원');
  const safeDate = escapeHtml(col.date || '');
  const views = col.views || 0;
  const safeId = escapeHtml(col.id || '');
  columnRowsHtml += `        <tr onclick="openDetailModal('columns', '${safeId}')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">${num}</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">${safeTitle}</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">${safeAuthor}</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">${safeDate}</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">${views}</td>
        </tr>\n`;
});

const columnsPageContent = `---
title: "자율신경실조증 임상 치료 칼럼 및 치료사례 | 해아림한의원"
description: "16여 년 임상 노하우를 바탕으로 한방신경정신과 전문의 원장단이 집필한 자율신경실조증 원인, 기전, 동반증상(공황장애·불면증·어지럼증) 및 호전 사례 심층 분석 칼럼입니다."
keywords: ["자율신경실조증 칼럼", "자율신경 치료사례", "자율신경계이상 치료칼럼", "자율신경실조증 한의원", "해아림한의원", "한방신경정신과 칼럼"]
canonical: "https://healim-autonomic.com/columns/"
type: landing
sections:
  - block: markdown
    content:
      title: ""
      text: |

        <div class="mb-8 text-center md:text-left">
        <span class="inline-block px-3 py-1 bg-[#eaf3f4] text-[#1c6e78] font-bold text-xs rounded-full uppercase tracking-wider mb-2">Clinical Columns &amp; Insights</span>
        <h1 class="text-3xl md:text-4xl font-extrabold text-[#0d3a42] leading-tight mb-3">
        자율신경실조증 임상 치료 칼럼
        </h1>
        <p class="text-[#555555] text-base md:text-lg leading-relaxed max-w-none lg:whitespace-nowrap break-keep">
        전국 16개 네트워크 해아림한의원 한방신경정신과 전문의 원장단이 집필한 자율신경실조증 심층 분석 칼럼과 임상 호전 사례를 안내합니다.
        </p>
        </div>

${renderTabs('columns')}

        <!-- ══════════════════════════════════════════════════════════════
        치료 칼럼 게시판 본문
        ══════════════════════════════════════════════════════════════ -->
        <div id="tab-pane-columns" class="tab-pane-content">
        <div id="columns" class="scroll-mt-28"></div>
        <div class="board-control-bar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
        <div id="autoColumnStatusBadge" class="flex items-center gap-2 text-xs text-[#0d3a42] bg-[#f0f7f8] border border-[#badfe3] px-3.5 py-2 rounded-lg" style="display: none;">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span><strong>자율신경 치료칼럼 자동 발행</strong>: 주 4~5회 (오전 08:00~11:00 랜덤)</span>
          <span class="text-[#888888] mx-1">|</span>
          <span id="autoColumnNextScheduleText" class="text-[#1c6e78] font-semibold">다음 예정: 확인 중...</span>
          <button type="button" id="btnTriggerColumnPublish" onclick="triggerAutoColumnPublishManual()" class="ml-1 text-xs px-2.5 py-1 bg-white border border-[#badfe3] rounded hover:bg-[#eaf3f4] text-[#1c6e78] font-bold transition-colors shadow-2xs" title="스케줄 대기 없이 지금 즉시 1편 자동 발행">⚡ 즉시 1편 발행</button>
          <button type="button" id="btnOpenCustomTitleColumnModal" onclick="openCustomTitleColumnModal()" class="ml-1 text-xs px-2.5 py-1 bg-[#1c6e78] text-white rounded hover:bg-[#0d3a42] font-bold transition-colors shadow-2xs" title="제목을 직접 입력하여 맞춤 임상 칼럼 생성 및 발행">✍️ 제목설정발행</button>
          <button type="button" onclick="forceSyncAllCommunity()" class="ml-1 text-xs px-2.5 py-1 bg-[#1c6e78] text-white rounded hover:bg-[#0d3a42] font-bold transition-colors shadow-2xs" title="기기간 데이터 불일치 해결 및 최신 51편 즉시 동기화">🔄 최신 동기화</button>
        </div>
        <div class="board-actions" style="margin-left: auto;">
        <button type="button" class="btn-write-post" id="btnWriteColumn" onclick="openWriteModal('columns')" style="display: none;">
        <span>✍️ 칼럼 작성</span>
        </button>
        </div>
        </div>

        <!-- Column Table List (Pre-rendered for AEO/SEO/GEO) -->
        <div class="healim-table-container mb-10">
        <table class="healim-table healim-column-table">
        <thead>
        <tr>
        <th class="col-th-num" style="width: 7%; text-align: center;">번호</th>
        <th class="col-th-title">제목</th>
        <th class="col-desktop-only" style="width: 17%; text-align: center;">작성자</th>
        <th class="col-desktop-only" style="width: 13%; text-align: center;">등록일</th>
        <th class="col-desktop-only" style="width: 8%; text-align: center;">조회</th>
        <th class="col-desktop-only" style="width: 130px; text-align: center; display: none;" id="colManageTh">관리</th>
        </tr>
        </thead>
        <tbody id="columnListContainer">
${columnRowsHtml}        </tbody>
        </table>
        </div>
        <div class="healim-pagination-wrapper mb-10" id="columnsPaginationContainer"></div>
        </div>

${bookSection}

${modalsBlock}

${scriptTags}
---
`;

// -------------------------------------------------------------
// 2. PAGE: /faq (자율신경치료 FAQ 자주묻는질문)
// -------------------------------------------------------------
const faqs = hubData.faq || [];
let faqItemsHtml = '';
faqs.forEach((faq) => {
  const safeTitle = escapeHtml(faq.title || '');
  const safeAuthor = escapeHtml(faq.author || '해아림한의원');
  const safeDate = escapeHtml(faq.date || '');
  const safeSummary = escapeHtml(faq.summary || faq.title || '');
  const safeId = escapeHtml(faq.id || '');
  faqItemsHtml += `        <div class="faq-item bg-white border border-[#e0eaec] rounded-xl p-5 shadow-2xs hover:shadow-xs transition-all cursor-pointer" onclick="openDetailModal('faq', '${safeId}')">
          <div class="flex items-center justify-between gap-3 mb-2">
            <span class="text-xs font-bold text-[#1c6e78] bg-[#eaf3f4] px-2.5 py-0.5 rounded-full">자율신경FAQ</span>
            <span class="text-xs text-[#888888]">${safeDate}</span>
          </div>
          <h3 class="text-base font-bold text-[#0d3a42] mb-2 leading-snug">${safeTitle}</h3>
          <p class="text-xs text-[#666666] leading-relaxed line-clamp-2">${safeSummary}</p>
        </div>\n`;
});

const faqPageContent = `---
title: "자율신경실조증 치료 FAQ 자주묻는질문 27문 27답 | 해아림한의원"
description: "자율신경실조증 검사 방법, 치료 기간, 한약 복용법, 양약 병용 여부, 실비보험 적용 등 환자분들이 가장 자주 묻는 핵심 질문 27문 27답을 상세히 안내해 드립니다."
keywords: ["자율신경실조증 FAQ", "자주묻는질문", "자율신경치료 FAQ", "자율신경 검사방법", "자율신경 한약", "해아림한의원"]
canonical: "https://healim-autonomic.com/faq/"
type: landing
sections:
  - block: markdown
    content:
      title: ""
      text: |

        <div class="mb-8 text-center md:text-left">
        <span class="inline-block px-3 py-1 bg-[#eaf3f4] text-[#1c6e78] font-bold text-xs rounded-full uppercase tracking-wider mb-2">Frequently Asked Questions</span>
        <h1 class="text-3xl md:text-4xl font-extrabold text-[#0d3a42] leading-tight mb-3">
        자율신경실조증 치료 FAQ (자주 묻는 질문)
        </h1>
        <p class="text-[#555555] text-base md:text-lg leading-relaxed max-w-none lg:whitespace-nowrap break-keep">
        환자분들이 진료실에서 가장 궁금해하시는 검사, 치료 기간, 한약 복용, 양약 병용, 실비보험 등 27문 27답을 안내합니다.
        </p>
        </div>

${renderTabs('faq')}

        <!-- ══════════════════════════════════════════════════════════════
        FAQ 본문 영역
        ══════════════════════════════════════════════════════════════ -->
        <div id="tab-pane-faq" class="tab-pane-content">
        <div id="faq" class="scroll-mt-28"></div>
        <!-- Control Bar with Auto-Publishing Status (healim0071 Admin Only) -->
        <div class="board-control-bar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
        <div id="autoFaqStatusBadge" class="flex items-center gap-2 text-xs text-[#0d3a42] bg-[#f0f7f8] border border-[#badfe3] px-3.5 py-2 rounded-lg" style="display: none;">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span><strong>자율신경 FAQ 자동 발행</strong>: 주 2~3회 (오전 08:00~11:00 랜덤)</span>
          <span class="text-[#888888] mx-1">|</span>
          <span id="autoFaqNextScheduleText" class="text-[#1c6e78] font-semibold">다음 예정: 확인 중...</span>
          <button type="button" id="btnTriggerFaqPublish" onclick="triggerAutoFaqPublishManual()" class="ml-1 text-xs px-2.5 py-1 bg-white border border-[#badfe3] rounded hover:bg-[#eaf3f4] text-[#1c6e78] font-bold transition-colors shadow-2xs" title="스케줄 대기 없이 지금 즉시 1편 자동 발행">⚡ 즉시 1편 발행</button>
        </div>
        <div class="board-actions" style="margin-left: auto;">
        <button type="button" class="btn-write-post" id="btnWriteFaq" onclick="openWriteModal('faq')" style="display: none;">
        <span>✏️ FAQ작성</span>
        </button>
        </div>
        </div>

        <!-- FAQ Accordion & List (Pre-rendered for AEO/SEO/GEO) -->
        <div id="faqListContainer" class="space-y-3 mb-6">
${faqItemsHtml}        </div>
        <div class="healim-pagination-wrapper mb-10" id="faqPaginationContainer"></div>
        </div>

${bookSection}

${modalsBlock}

${scriptTags}
---
`;

// -------------------------------------------------------------
// 3. PAGE: /reviews (자율신경실조증 치료후기)
// -------------------------------------------------------------
const reviews = hubData.reviews || [];
let reviewRowsHtml = '';
reviews.forEach((rev) => {
  const safeTitle = escapeHtml(rev.title || '');
  const safeAuthor = escapeHtml(rev.author || '환자');
  const safeDate = escapeHtml(rev.date || '');
  const safeId = escapeHtml(rev.id || '');
  reviewRowsHtml += `          <div class="review-row-item p-4 border-b border-[#f0f4f5] hover:bg-[#fafcfc] transition-colors flex items-center justify-between cursor-pointer" onclick="openDetailModal('reviews', '${safeId}')">
            <div class="flex items-center gap-3">
              <span class="text-xs px-2 py-0.5 rounded bg-[#f2f6f7] text-[#1c6e78] font-semibold">치료후기</span>
              <h4 class="text-sm font-bold text-[#0d3a42] hover:text-[#1c6e78]">${safeTitle}</h4>
            </div>
            <div class="text-xs text-[#888888] flex items-center gap-2">
              <span>${safeAuthor}</span>
              <span>·</span>
              <span>${safeDate}</span>
            </div>
          </div>\n`;
});

const reviewsPageContent = `---
title: "자율신경실조증 치료후기 및 호전사례 (의료법 제56조 준수) | 해아림한의원"
description: "해아림한의원에서 자율신경실조증, 공황장애, 신체화장애 치료를 받은 환자분들의 진솔한 실제 호전 사례 및 치료후기입니다. 의료법 제56조에 따라 로그인 후 열람하실 수 있습니다."
keywords: ["자율신경실조증 치료후기", "자율신경 호전사례", "자율신경 완치후기", "해아림한의원 후기", "공황장애 자율신경 치료후기"]
canonical: "https://healim-autonomic.com/reviews/"
type: landing
sections:
  - block: markdown
    content:
      title: ""
      text: |

        <div class="mb-8 text-center md:text-left">
        <span class="inline-block px-3 py-1 bg-[#eaf3f4] text-[#1c6e78] font-bold text-xs rounded-full uppercase tracking-wider mb-2">Patient Reviews &amp; Cases</span>
        <h1 class="text-3xl md:text-4xl font-extrabold text-[#0d3a42] leading-tight mb-3">
        자율신경실조증 치료후기 (의료법 제56조 준수)
        </h1>
        <p class="text-[#555555] text-base md:text-lg leading-relaxed max-w-none lg:whitespace-nowrap break-keep">
        의료법 제56조 및 보건복지부 유권해석에 의거하여 로그인한 정회원에게만 공개되는 실제 자율신경실조증 치료 호전 사례입니다.
        </p>
        </div>

${renderTabs('reviews')}

        <!-- ══════════════════════════════════════════════════════════════
        치료후기 본문 영역 (의료법 제56조 잠금 게이트)
        ══════════════════════════════════════════════════════════════ -->
        <div id="tab-pane-reviews" class="tab-pane-content">
        <div id="reviews" class="scroll-mt-16 md:scroll-mt-24"></div>
        <!-- Control Bar with Auto-Publishing Status (healim0071 Superadmin Only) -->
        <div class="board-control-bar" id="reviewAdminControlBar" style="display: none; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
        <div id="autoReviewStatusBadge" class="flex items-center gap-2 text-xs text-[#0d3a42] bg-[#f0f7f8] border border-[#badfe3] px-3.5 py-2 rounded-lg" style="display: none;">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span><strong>자율신경 치료후기 자동 발행</strong>: 4개월당 2~6회 (랜덤 일시)</span>
          <span class="text-[#888888] mx-1">|</span>
          <span id="autoReviewNextScheduleText" class="text-[#1c6e78] font-semibold">다음 예정: 확인 중...</span>
          <button type="button" id="btnTriggerReviewPublish" onclick="triggerAutoReviewPublishManual()" class="ml-1 text-xs px-2.5 py-1 bg-white border border-[#badfe3] rounded hover:bg-[#eaf3f4] text-[#1c6e78] font-bold transition-colors shadow-2xs" title="스케줄 대기 없이 지금 즉시 1편 자동 발행">⚡ 즉시 1편 발행</button>
        </div>
        <div class="board-actions" style="margin-left: auto;">
        <button type="button" class="btn-write-post" id="btnWriteReview" onclick="checkAuthAndOpenWrite('reviews')" style="display: none;">
        <span>✏️ 치료후기 작성</span>
        </button>
        </div>
        </div>

        <!-- Review Notice Banner -->
        <div id="reviewNoticeBanner" class="bg-[#f2f7f8] border border-[#cde3e6] p-3.5 rounded-xl mb-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-[#0d3a42]" style="display: none;">
        <div class="flex items-center gap-2">
        <span class="font-bold px-2 py-0.5 bg-[#1c6e78] text-white rounded">의료법 제56조 준수</span>
        <span>치료후기는 환자의 개인정보 보호 및 의료법령에 의거하여 정회원 로그인 후 열람이 가능합니다.</span>
        </div>
        </div>

        <!-- Review Content Area (Wrapped with Lock Gate) -->
        <div class="review-lock-wrapper" id="reviewLockWrapper">
        <!-- Gate Overlay (Shown when logged out) -->
        <div class="review-gate-overlay" id="reviewGateOverlay">
        <div class="review-gate-card">
        <div class="lock-icon-circle">🔒</div>
        <h3>의료법 제56조 회원 열람 안내</h3>
        <p>
        의료법 제56조 및 보건복지부 유권해석에 따라, 환자 치료후기 및 전후 호전 사례는 <strong>로그인한 회원에게만 열람이 허용</strong>됩니다.<br>
        간편 로그인 또는 회원가입 후 진솔한 실제 치료후기를 확인하세요.
        </p>
        <div class="gate-actions">
        <a href="/login/?back_url=L3Jldmlld3M=" id="btnGateLogin" class="btn-gate-login">
        🔑 로그인하기
        </a>
        <a href="/site_join_type_choice/?back_url=L3Jldmlld3M=" id="btnGateJoin" class="btn-gate-join">
        회원가입
        </a>
        </div>
        </div>
        </div>

        <!-- Review Rows Table & Pagination (Blurred when locked) -->
        <div class="review-blurred-content bg-white" style="min-height: 480px;">
        <div id="reviewListContainer" class="healim-reviews-table">
${reviewRowsHtml}        </div>
        <div class="healim-pagination-wrapper pt-4 pb-6" id="reviewsPaginationContainer"></div>
        </div>
        </div>
        </div>

${bookSection}

${modalsBlock}

${scriptTags}
---
`;

// -------------------------------------------------------------
// 4. PAGE: /youtube (자율신경실조증 유튜브)
// -------------------------------------------------------------
const youtubes = hubData.youtube || [];
let youtubeCardsHtml = '';
youtubes.forEach((yt) => {
  const safeTitle = escapeHtml(yt.title || '');
  const safeAuthor = escapeHtml(yt.author || '해아림TV 알쓸한상');
  const safeSummary = escapeHtml(yt.summary || yt.title || '');
  const safeYtId = escapeHtml(yt.youtube_id || '');
  const thumb = yt.thumbnail || `https://img.youtube.com/vi/${safeYtId}/hqdefault.jpg`;
  youtubeCardsHtml += `        <div class="youtube-card bg-white rounded-xl border border-[#e0eaec] overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col group" onclick="openDetailModal('youtube', '${safeYtId}')">
          <div class="relative overflow-hidden h-44 bg-slate-900">
            <img src="${thumb}" alt="${safeTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
          <div class="p-4 flex flex-col flex-grow">
            <span class="text-xs font-bold text-[#1c6e78] mb-1.5">영상</span>
            <h3 class="text-sm font-bold text-[#0d3a42] mb-1.5 line-clamp-2 leading-snug group-hover:text-[#1c6e78] transition-colors">${safeTitle}</h3>
            <p class="text-xs text-[#666666] line-clamp-2 leading-relaxed flex-grow">${safeSummary}</p>
            <div class="pt-3 mt-3 border-t border-[#f0f4f5] flex items-center justify-between text-xs text-[#888888]">
              <span>${safeAuthor}</span>
              <span class="text-[#1c6e78] font-semibold">시청하기 &gt;</span>
            </div>
          </div>
        </div>\n`;
});

const youtubePageContent = `---
title: "자율신경실조증 전문의 유튜브 영상 칼럼 | 해아림한의원"
description: "해아림한의원 원장단이 직접 전하는 자율신경실조증 원인, 교감신경 안정 호흡법, 자가진단 및 증상별 대처법 유튜브 영상 칼럼 모음입니다."
keywords: ["자율신경실조증 유튜브", "해아림TV", "자율신경 의학영상", "자율신경 호흡법", "교감신경 안정영상", "해아림한의원"]
canonical: "https://healim-autonomic.com/youtube/"
type: landing
sections:
  - block: markdown
    content:
      title: ""
      text: |

        <div class="mb-8 text-center md:text-left">
        <span class="inline-block px-3 py-1 bg-[#eaf3f4] text-[#1c6e78] font-bold text-xs rounded-full uppercase tracking-wider mb-2">Video Insights</span>
        <h1 class="text-3xl md:text-4xl font-extrabold text-[#0d3a42] leading-tight mb-3">
        자율신경실조증 유튜브 의학 영상
        </h1>
        <p class="text-[#555555] text-base md:text-lg leading-relaxed max-w-none lg:whitespace-nowrap break-keep">
        해아림한의원 원장단이 알기 쉽게 전하는 자율신경실조증 원인, 대처법, 호흡법 및 치료 가이드 영상입니다.
        </p>
        </div>

${renderTabs('youtube')}

        <!-- ══════════════════════════════════════════════════════════════
        유튜브 영상 본문 영역
        ══════════════════════════════════════════════════════════════ -->
        <div id="tab-pane-youtube" class="tab-pane-content">
        <div id="youtube" class="scroll-mt-28"></div>
        <div class="board-control-bar" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem;">
        <div class="flex items-center gap-2 text-xs text-[#0d3a42] bg-[#f0f7f8] px-3.5 py-2 rounded-lg border border-[#cde3e6]" id="youtubeSyncStatus">
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span><strong>해아림TV 공식 채널</strong> 매일 00:00 자동 연동 활성화</span>
        <span class="text-[#888888] mx-1">|</span>
        <a href="https://www.youtube.com/@healimtv" target="_blank" rel="noopener noreferrer" class="text-[#1c6e78] font-bold hover:underline inline-flex items-center gap-1">@healimtv 바로가기 ↗</a>
        <button type="button" onclick="syncHealimtvChannel(true)" class="ml-1 text-xs px-2.5 py-1 bg-white border border-[#badfe3] rounded hover:bg-[#eaf3f4] text-[#1c6e78] transition-colors" title="채널 최신 영상 즉시 새로고침">🔄 최신 동기화</button>
        </div>
        <div class="board-actions">
        <button type="button" class="btn-write-post" id="btnWriteYoutube" onclick="openWriteModal('youtube')" style="display: none;">
        <span>📹 영상 등록</span>
        </button>
        </div>
        </div>

        <!-- YouTube Card Grid (Pre-rendered for AEO/SEO/GEO) -->
        <div class="youtube-grid mb-8" id="youtubeListContainer">
${youtubeCardsHtml}        </div>

        <!-- YouTube Pagination -->
        <div class="healim-pagination-wrapper mb-12" id="youtubePaginationContainer">
        <!-- Dynamic Pagination Buttons rendered by JS -->
        </div>
        </div>

${bookSection}

${modalsBlock}

${scriptTags}
---
`;

// -------------------------------------------------------------
// 5. PAGE: /community (Seamless Redirect Hub)
// -------------------------------------------------------------
const communityPageContent = `---
title: "해아림 커뮤니티 | 해아림한의원"
description: "해아림한의원 자율신경실조증 치료칼럼, FAQ, 치료후기, 유튜브 영상 통합 안내."
canonical: "https://healim-autonomic.com/columns/"
type: landing
sections:
  - block: markdown
    content:
      title: ""
      text: |
        <script>
        (function() {
          var qp = new URLSearchParams(window.location.search);
          var b = qp.get('board') || (window.location.hash || '').replace('#', '');
          var targetId = qp.get('id');
          var targetMap = {
            'faq': '/faq',
            'reviews': '/reviews',
            'columns': '/columns',
            'youtube': '/youtube'
          };
          var dest = targetMap[b] || '/columns';
          if (targetId) dest += '/?id=' + encodeURIComponent(targetId);
          window.location.replace(dest);
        })();
        </script>
        <meta http-equiv="refresh" content="0; url=/columns/">

        <div class="py-12 text-center">
          <h1 class="text-2xl font-bold text-[#0d3a42] mb-4">해아림 커뮤니티 안내</h1>
          <p class="text-[#555555] mb-8">원하시는 게시판으로 이동 중입니다. 잠시만 기다려주세요...</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a href="/columns" class="p-6 bg-white rounded-xl border border-[#badfe3] hover:shadow-md transition-all text-[#1c6e78] font-bold">✍️ 치료 칼럼 바로가기 &gt;</a>
            <a href="/faq" class="p-6 bg-white rounded-xl border border-[#badfe3] hover:shadow-md transition-all text-[#1c6e78] font-bold">❓ 자주 묻는 질문 FAQ &gt;</a>
            <a href="/reviews" class="p-6 bg-white rounded-xl border border-[#badfe3] hover:shadow-md transition-all text-[#1c6e78] font-bold">🔒 치료후기 바로가기 &gt;</a>
            <a href="/youtube" class="p-6 bg-white rounded-xl border border-[#badfe3] hover:shadow-md transition-all text-[#1c6e78] font-bold">📹 유튜브 영상 바로가기 &gt;</a>
          </div>
        </div>
---
`;

// Ensure directories exist
['columns', 'faq', 'reviews', 'youtube', 'community'].forEach(dir => {
  const targetDir = path.join(rootDir, 'content', dir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
});

// Write files
fs.writeFileSync(path.join(rootDir, 'content/columns/_index.md'), columnsPageContent, 'utf8');
fs.writeFileSync(path.join(rootDir, 'content/faq/_index.md'), faqPageContent, 'utf8');
fs.writeFileSync(path.join(rootDir, 'content/reviews/_index.md'), reviewsPageContent, 'utf8');
fs.writeFileSync(path.join(rootDir, 'content/youtube/_index.md'), youtubePageContent, 'utf8');
fs.writeFileSync(path.join(rootDir, 'content/community/_index.md'), communityPageContent, 'utf8');

console.log('✅ 5 Community Pages successfully generated and written:');
console.log('   - /columns/ (' + columns.length + ' columns pre-rendered)');
console.log('   - /faq/ (' + faqs.length + ' FAQs pre-rendered)');
console.log('   - /reviews/ (' + reviews.length + ' reviews pre-rendered)');
console.log('   - /youtube/ (' + youtubes.length + ' videos pre-rendered)');
console.log('   - /community/ (Seamless Redirect Hub)');
