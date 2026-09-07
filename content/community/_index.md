---
title: "해아림 커뮤니티 | 의학 FAQ, 치료후기, 유튜브 영상, 의료 칼럼"
description: "자율신경실조증에 대한 자주 묻는 질문(FAQ), 환자분들의 생생한 실제 치료후기, 원장단이 직접 설명하는 유튜브 의학 영상 및 전문의 치료 칼럼을 제공합니다."
type: landing
sections:
  - block: markdown
    content:
      title: ""
      text: |

        <div class="mb-8 text-center md:text-left">
        <span class="inline-block px-3 py-1 bg-[#eaf3f4] text-[#1c6e78] font-bold text-xs rounded-full uppercase tracking-wider mb-2">Community &amp; Insights</span>
        <h1 class="text-3xl md:text-4xl font-extrabold text-[#0d3a42] leading-tight mb-3">
        해아림 커뮤니티
        </h1>
        <p class="text-[#555555] text-base md:text-lg leading-relaxed max-w-none lg:whitespace-nowrap break-keep">
        전국 15개 네트워크 해아림한의원의 축적된 임상 노하우와 치료 정보, 환자 호전 사례, 원장단 의학 칼럼 및 영상을 공유합니다.
        </p>
        </div>

        <!-- 4-Tab Community Navigation Bar -->
        <div class="community-tabs-container">
        <ul class="community-tabs-list" id="communityTabList">
        <li>
        <button type="button" class="community-tab-btn active" data-tab="faq" onclick="switchCommunityTab('faq')">
        FAQ 자율신경치료 정보
        </button>
        </li>
        <li>
        <button type="button" class="community-tab-btn" data-tab="reviews" onclick="switchCommunityTab('reviews')">
        치료후기 <span class="lock-tag">🔒 회원전용</span>
        </button>
        </li>
        <li>
        <button type="button" class="community-tab-btn" data-tab="youtube" onclick="switchCommunityTab('youtube')">
        자율신경실조증 유튜브
        </button>
        </li>
        <li>
        <button type="button" class="community-tab-btn" data-tab="columns" onclick="switchCommunityTab('columns')">
        자율신경실조증 치료 칼럼
        </button>
        </li>
        </ul>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        TAB 1: FAQ 자율신경치료 정보
        ══════════════════════════════════════════════════════════════ -->
        <div id="tab-pane-faq" class="tab-pane-content">
        <!-- Control Bar with Auto-Publishing Status -->
        <div class="board-control-bar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
        <div id="autoFaqStatusBadge" class="flex items-center gap-2 text-xs text-[#0d3a42] bg-[#f0f7f8] border border-[#badfe3] px-3.5 py-2 rounded-lg">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span><strong>자율신경 FAQ 자동 발행</strong>: 주 2~3회 (오전 08:00~11:00 랜덤)</span>
          <span class="text-[#888888] mx-1">|</span>
          <span id="autoFaqNextScheduleText" class="text-[#1c6e78] font-semibold">다음 예정: 확인 중...</span>
          <button type="button" onclick="triggerAutoFaqPublishManual()" class="ml-1 text-xs px-2.5 py-1 bg-white border border-[#badfe3] rounded hover:bg-[#eaf3f4] text-[#1c6e78] font-bold transition-colors shadow-2xs" title="스케줄 대기 없이 지금 즉시 1편 자동 발행">⚡ 즉시 1편 발행</button>
        </div>
        <div class="board-actions">
        <button type="button" class="btn-write-post" onclick="openWriteModal('faq')">
        <span>✏️ FAQ작성</span>
        </button>
        </div>
        </div>

        <!-- FAQ Accordion & List -->
        <div id="faqListContainer" class="space-y-3 mb-10">
        <!-- Dynamic FAQ items rendered by JS -->
        </div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        TAB 2: 치료후기 (의료법 제56조 로그인 잠금 게이트)
        ══════════════════════════════════════════════════════════════ -->
        <div id="tab-pane-reviews" class="tab-pane-content hidden">
        <!-- Review Notice Banner -->
        <div class="bg-[#f2f7f8] border border-[#cde3e6] p-4 rounded-xl mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-[#0d3a42]">
        <div class="flex items-center gap-2">
        <span class="font-bold px-2 py-0.5 bg-[#1c6e78] text-white rounded">의료법 제56조 준수</span>
        <span>치료후기는 환자의 개인정보 보호 및 의료법령에 의거하여 정회원 로그인 후 열람 및 작성이 가능합니다.</span>
        </div>
        <div class="board-actions">
        <button type="button" class="btn-write-post" onclick="checkAuthAndOpenWrite('reviews')">
        <span>✏️ 치료후기 작성</span>
        </button>
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
        <a href="/login/?back_url=L2NvbW11bml0eS8jcmV2aWV3cw==" id="btnGateLogin" class="btn-gate-login">
        🔑 로그인하기
        </a>
        <a href="/site_join_type_choice/?back_url=L2NvbW11bml0eS8jcmV2aWV3cw==" id="btnGateJoin" class="btn-gate-join">
        회원가입
        </a>
        </div>
        </div>
        </div>

        <!-- Review Cards / Table (Blurred when locked) -->
        <div class="review-blurred-content p-4 md:p-6 bg-white" id="reviewListContainer">
        <!-- Dynamic Review Cards rendered by JS -->
        </div>
        </div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        TAB 3: 자율신경실조증 유튜브
        ══════════════════════════════════════════════════════════════ -->
        <div id="tab-pane-youtube" class="tab-pane-content hidden">
        <div class="board-control-bar" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem;">
        <div class="flex items-center gap-2 text-xs text-[#0d3a42] bg-[#f0f7f8] px-3.5 py-2 rounded-lg border border-[#cde3e6]" id="youtubeSyncStatus">
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span><strong>해아림TV 공식 채널</strong> 매일 00:00 자동 연동 활성화</span>
        <span class="text-[#888888] mx-1">|</span>
        <a href="https://www.youtube.com/@healimtv" target="_blank" rel="noopener noreferrer" class="text-[#1c6e78] font-bold hover:underline inline-flex items-center gap-1">@healimtv 바로가기 ↗</a>
        <button type="button" onclick="syncHealimtvChannel(true)" class="ml-1 text-xs px-2.5 py-1 bg-white border border-[#badfe3] rounded hover:bg-[#eaf3f4] text-[#1c6e78] transition-colors" title="채널 최신 영상 즉시 새로고침">🔄 최신 동기화</button>
        </div>
        <div class="board-actions">
        <button type="button" class="btn-write-post" onclick="openWriteModal('youtube')">
        <span>📹 영상 등록</span>
        </button>
        </div>
        </div>

        <!-- YouTube Card Grid -->
        <div class="youtube-grid mb-8" id="youtubeListContainer">
        <!-- Dynamic Video Cards rendered by JS -->
        </div>

        <!-- YouTube Pagination -->
        <div class="healim-pagination-wrapper mb-12" id="youtubePaginationContainer">
        <!-- Dynamic Pagination Buttons rendered by JS -->
        </div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        TAB 4: 자율신경실조증 치료 칼럼
        ══════════════════════════════════════════════════════════════ -->
        <div id="tab-pane-columns" class="tab-pane-content hidden">
        <div class="board-control-bar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
        <div id="autoColumnStatusBadge" class="flex items-center gap-2 text-xs text-[#0d3a42] bg-[#f0f7f8] border border-[#badfe3] px-3.5 py-2 rounded-lg">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span><strong>자율신경 치료칼럼 자동 발행</strong>: 주 4~5회 (오전 08:00~11:00 랜덤)</span>
          <span class="text-[#888888] mx-1">|</span>
          <span id="autoColumnNextScheduleText" class="text-[#1c6e78] font-semibold">다음 예정: 확인 중...</span>
          <button type="button" onclick="triggerAutoColumnPublishManual()" class="ml-1 text-xs px-2.5 py-1 bg-white border border-[#badfe3] rounded hover:bg-[#eaf3f4] text-[#1c6e78] font-bold transition-colors shadow-2xs" title="스케줄 대기 없이 지금 즉시 1편 자동 발행">⚡ 즉시 1편 발행</button>
        </div>
        <div class="board-actions">
        <button type="button" class="btn-write-post" onclick="openWriteModal('columns')">
        <span>✍️ 칼럼 작성</span>
        </button>
        </div>
        </div>

        <!-- Column Table List -->
        <div class="healim-table-container mb-10">
        <table class="healim-table">
        <thead>
        <tr>
        <th style="width: 7%; text-align: center;">번호</th>
        <th>제목</th>
        <th style="width: 17%; text-align: center;">작성자</th>
        <th style="width: 13%; text-align: center;">등록일</th>
        <th style="width: 8%; text-align: center;">조회</th>
        <th style="width: 10%; text-align: center;">관리</th>
        </tr>
        </thead>
        <tbody id="columnListContainer">
        <!-- Dynamic Column items rendered by JS -->
        </tbody>
        </table>
        </div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        해아림 도서 및 하단 배너
        ══════════════════════════════════════════════════════════════ -->
        <div class="healim-book-section mt-12">
        <div class="max-w-xs mx-auto mb-5">
        <img src="/images/book_panic_disorder.jpg" alt="해아림한의원 네트워크 원장단 저서 - 걱정마 공황장애" class="rounded-xl shadow-lg mx-auto" style="max-height: 280px; object-fit: contain;">
        </div>
        <p class="healim-book-label">해아림한의원 네트워크 원장단 저서</p>
        <h3 class="healim-book-title">불안장애·자율신경실조증·공황장애 완치지침서</h3>
        <p class="text-sm text-[#555555] max-w-md mx-auto mb-4 leading-relaxed">
        원인 모를 신체화 증상과 예기불안, 공황 발작을 이겨내고 온전한 일상을 되찾기 위한 실전 치유 가이드
        </p>
        <div class="text-center">
        <div class="healim-book-badge">걱정마 공황장애</div>
        </div>
        </div>

        <div class="text-center my-10">
        <a href="#branches" class="btn-healim" style="padding: 0.85rem 2.25rem; font-size: 1.05rem;">가까운 15개 지점 찾기 &gt;</a>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        UNIVERSAL WRITE MODAL (healim-tic 1:1 Spec)
        ══════════════════════════════════════════════════════════════ -->
        <div class="healim-modal-backdrop" id="writeModalBackdrop">
        <div class="healim-modal-dialog healim-write-dialog">
        <!-- Top Bar: Left < (Back), Center Dynamic Title, Right 작성 Submit Button -->
        <div class="healim-write-header">
        <button type="button" class="healim-write-back-btn" onclick="closeWriteModal()" title="뒤로가기">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        </button>
        <h3 class="healim-write-title" id="writeModalTitle">FAQ</h3>
        <button type="submit" form="writePostForm" class="healim-write-submit-btn">작성</button>
        </div>

        <form id="writePostForm" onsubmit="handlePostSubmit(event)" class="healim-write-form">
        <input type="hidden" id="postBoardType" value="faq" />
        <input type="hidden" id="postEditId" value="" />

        <!-- Category Pills Row (Hidden for all boards) -->
        <div id="categoryFormGroup" class="healim-write-cat-row" style="display: none;">
        <span class="cat-label">분류:</span>
        <div id="categoryPillsWrapper" class="cat-pills-wrapper">
        <!-- Dynamically populated pills -->
        </div>
        <input type="hidden" id="postCategory" value="" />
        </div>

        <!-- Row 1: Split 2 columns: 작성자 이름 | 비밀번호 -->
        <div class="healim-write-row-split">
        <div class="healim-write-col">
        <input type="text" id="postAuthor" placeholder="작성자 이름" required />
        </div>
        <div class="healim-write-col">
        <input type="password" id="postPassword" placeholder="비밀번호" oninput="checkAdminPassword(this.value)" />
        </div>
        </div>

        <!-- Row 2: Full-width 제목 -->
        <div class="healim-write-row-title">
        <input type="text" id="postTitle" placeholder="제목" required />
        </div>

        <!-- Youtube Video URL (Only for Youtube board) -->
        <div id="youtubeUrlGroup" class="healim-write-youtube-group" style="display: none;">
        <label for="postYoutubeUrl">유튜브 영상 URL 또는 영상 ID</label>
        <input type="text" id="postYoutubeUrl" class="modal-input" placeholder="예: https://www.youtube.com/watch?v=51rIQ1T5dIU" />
        </div>

        <!-- Row 3: Left [대표 이미지 설정] & Chip | Right [🔒] Secret Post Toggle -->
        <div id="imageUploadGroup" class="healim-write-row-meta">
        <div class="healim-write-meta-left">
        <input type="file" id="postImageInput" accept="image/*" style="display: none;" onchange="handleImageSelect(event)" />
        <input type="file" id="postInlineImageInput" accept="image/*" multiple style="display: none;" onchange="handleInlineImageSelect(event)" />
        <button type="button" class="btn-set-featured-img" onclick="document.getElementById('postImageInput').click()" title="대표 이미지 파일 첨부">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        <span>대표 이미지 설정</span>
        </button>
        <div id="selectedImageChip" class="selected-img-chip" style="display: none;">
        <span id="selectedImageName">선택된 사진 없음</span>
        <button type="button" id="btnRemoveImage" onclick="removeSelectedImage()" title="삭제">&times;</button>
        </div>
        </div>
        <div id="secretFormGroup" class="healim-write-meta-right">
        <input type="checkbox" id="postIsSecret" style="display: none;" onchange="updateSecretLockState()" />
        <button type="button" id="btnToggleSecret" onclick="toggleSecretPost()" title="비밀글 설정 (클릭하여 켜기/끄기)">
        <svg id="secretLockIcon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        </button>
        </div>
        </div>

        <!-- Row 4: healim-tic Rich Text Editor Icon Toolbar -->
        <div class="healim-toolbar-row">
        <button type="button" class="healim-tool-btn" title="본문 사진 첨부 (커서 위치에 삽입)" onmousedown="event.preventDefault()" onclick="triggerInlineImageUpload()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </button>
        <button type="button" class="healim-tool-btn" title="영상 링크" onmousedown="event.preventDefault()" onclick="insertEditorFormat('video')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
        </button>
        <button type="button" class="healim-tool-btn" title="링크 삽입" onmousedown="event.preventDefault()" onclick="insertEditorFormat('link')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </button>
        <button type="button" class="healim-tool-btn" title="자료/문서 서식" onmousedown="event.preventDefault()" onclick="insertEditorFormat('doc')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </button>
        <span class="healim-tool-sep">|</span>
        <button type="button" class="healim-tool-btn" title="글자 크기 / 제목" onmousedown="event.preventDefault()" onclick="insertEditorFormat('heading')">
        <span style="display:inline-flex;align-items:center;gap:1px;font-size:13px;font-weight:700;font-family:sans-serif;">T<span style="font-size:10px;">T</span><svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-left:1px;"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
        </button>
        <button type="button" class="healim-tool-btn" title="굵게 (Bold)" onmousedown="event.preventDefault()" onclick="insertEditorFormat('bold')">
        <strong style="font-size: 13.5px; font-weight: 800;">B</strong>
        </button>
        <button type="button" class="healim-tool-btn" title="기울임 (Italic)" onmousedown="event.preventDefault()" onclick="insertEditorFormat('italic')">
        <em style="font-size: 13.5px; font-family: serif; font-weight: bold;">I</em>
        </button>
        <button type="button" class="healim-tool-btn" title="밑줄 (Underline)" onmousedown="event.preventDefault()" onclick="insertEditorFormat('underline')">
        <u style="font-size: 13.5px; font-weight: 600;">U</u>
        </button>
        <button type="button" class="healim-tool-btn" title="취소선 (Strike)" onmousedown="event.preventDefault()" onclick="insertEditorFormat('strike')">
        <s style="font-size: 13.5px; font-weight: 600;">S</s>
        </button>
        <button type="button" class="healim-tool-btn" title="가운데 정렬" onmousedown="event.preventDefault()" onclick="insertEditorFormat('align')">
        <span style="display:inline-flex;align-items:center;gap:1px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="21" y1="6" x2="3" y2="6"/><line x1="17" y1="12" x2="7" y2="12"/><line x1="19" y1="18" x2="5" y2="18"/></svg><svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-left:1px;"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
        </button>
        <button type="button" class="healim-tool-btn" title="글자색" onmousedown="event.preventDefault()" onclick="insertEditorFormat('color')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
        </button>
        <button type="button" class="healim-tool-btn" title="서식 지우기" onmousedown="event.preventDefault()" onclick="insertEditorFormat('clear')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2l4 4"/><path d="M14.5 5.5l4 4"/><path d="M2.5 17.5l9.5-9.5 4 4-9.5 9.5H2.5v-4z"/></svg>
        </button>
        <span class="healim-tool-sep">|</span>
        <button type="button" class="healim-tool-btn" title="인용구" onmousedown="event.preventDefault()" onclick="insertEditorFormat('quote')">
        <span style="font-size: 15px; font-weight: bold; line-height: 1;">❝</span>
        </button>
        <button type="button" class="healim-tool-btn" title="구분선" onmousedown="event.preventDefault()" onclick="insertEditorFormat('hr')">
        <span style="font-size: 14px; font-weight: bold; line-height: 1;">―</span>
        </button>
        <button type="button" class="healim-tool-btn" title="글머리 기호 목록" onmousedown="event.preventDefault()" onclick="insertEditorFormat('ul')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="2" fill="currentColor"/><circle cx="4" cy="12" r="2" fill="currentColor"/><circle cx="4" cy="18" r="2" fill="currentColor"/></svg>
        </button>
        <button type="button" class="healim-tool-btn" title="번호 목록" onmousedown="event.preventDefault()" onclick="insertEditorFormat('ol')">
        <span style="display:inline-flex;align-items:center;gap:1px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg><svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-left:1px;"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
        </button>
        </div>

        <!-- Row 5: Content Area with Rich Visual WYSIWYG Editor -->
        <div class="healim-write-row-content">
        <div id="postContentEditor" class="healim-content-editor" contenteditable="true" data-placeholder="내용을 입력해주세요. (사진 아이콘 클릭 또는 사진 복사 붙여넣기(Ctrl+V)로 본문에 사진을 넣을 수 있습니다)"></div>
        <textarea id="postContent" style="display: none !important;" tabindex="-1" aria-hidden="true" disabled></textarea>
        <div id="imagePreviewContainer" style="display: none; margin-top: 12px;">
        <div class="healim-preview-card">
        <img id="imagePreview" src="" alt="대표 이미지 미리보기" />
        <button type="button" class="btn-remove-preview" onclick="removeSelectedImage()" title="사진 제거">&times;</button>
        <span class="preview-badge">대표 이미지</span>
        </div>
        </div>
        </div>

        <!-- Admin-only Custom Date & Views Override (healim0071 / Super Admin) -->
        <div id="adminCustomOptionsGroup" class="healim-admin-override-box" style="display: none;">
        <div class="override-title">
        <span>👑 최고관리자 권한: 작성일자 및 조회수 임의 지정</span>
        </div>
        <div class="override-inputs">
        <div>
        <label for="postCustomDate">작성일자 지정 (선택)</label>
        <input type="text" id="postCustomDate" class="modal-input" placeholder="예: 2026.08.15 (미입력시 오늘)" />
        </div>
        <div>
        <label for="postCustomViews">초기 조회수 설정 (선택)</label>
        <input type="number" id="postCustomViews" class="modal-input" placeholder="예: 1250 (미입력시 1)" />
        </div>
        </div>
        </div>
        </form>
        </div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        UNIVERSAL DETAIL VIEW MODAL
        ══════════════════════════════════════════════════════════════ -->
        <div class="healim-modal-backdrop" id="detailModalBackdrop">
        <div class="healim-modal-dialog">
        <div class="healim-modal-header">
        <div class="flex items-center gap-2">
        <span class="post-badge" id="detailModalCategory">분류</span>
        <h3 class="healim-modal-title" id="detailModalTitle" style="margin: 0; font-size: 1.15rem;">제목</h3>
        </div>
        <button type="button" class="btn-modal-close" onclick="closeDetailModal()">&times;</button>
        </div>
        <div class="flex items-center justify-between text-xs text-[#888888] pb-3 border-b border-[#edf2f4] mb-4">
        <div>
        작성자: <strong class="text-[#0d3a42]" id="detailModalAuthor">원장단</strong>
        <span class="mx-2">|</span>
        등록일: <span id="detailModalDate">2026.09.06</span>
        </div>
        <div>
        조회수: <span id="detailModalViews">1</span>
        </div>
        </div>
        <div id="detailModalYoutubeArea" class="mb-4" style="display: none;"></div>
        <div id="detailModalImageArea" class="mb-4" style="display: none;">
        <img id="detailModalImage" src="" alt="첨부 사진" class="w-full max-h-[380px] object-contain rounded-xl border border-[#badfe3] bg-[#f8fafb]" onerror="this.onerror=null; this.parentElement.style.display='none';" />
        </div>
        <div id="detailModalContent" class="text-sm text-[#333333] leading-relaxed py-2 min-h-[120px]">
        내용이 여기에 표시됩니다.
        </div>
        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="flex items-center gap-2">
        <button type="button" id="btnDetailModalEdit" style="background:#1c6e78; color:white; padding:8px 14px; border-radius:6px; font-size:12px; font-weight:600; border:none; cursor:pointer;" onclick="handleEditCurrentPost()">✏️ 수정</button>
        <button type="button" id="btnDetailModalDelete" style="display:none; background:#dc2626; color:white; padding:8px 14px; border-radius:6px; font-size:12px; font-weight:600; border:none; cursor:pointer;" onclick="handleDeleteCurrentPost()">🗑️ 최고관리자 권한 삭제</button>
        </div>
        <div>
        <button type="button" class="btn-modal-cancel" onclick="closeDetailModal()">닫기</button>
        </div>
        </div>
        </div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
        COMMUNITY JAVASCRIPT LOGIC
        ══════════════════════════════════════════════════════════════ -->
        <script src="/js/auto_faq_engine.js"></script>
        <script src="/js/auto_column_engine.js"></script>
        <script>
        (function() {
        // --- Seed Data ---
        var defaultFaqData = [
        {
        id: 'faq-1',
        category: '원인/진단',
        author: '해아림한의원',
        date: '2026.09.01',
        views: 1842,
        image: '/images/hrv_autonomic_balance.svg',
        title: '검사상 정상으로 나오는데 한방 치료로 개선이 가능한가요?',
        content: '네, 충분히 개선 가능합니다.\n\n일반 병원 검사(위내시경, 뇌 MRI, 심전도 등)는 장기의 구조적 병변이나 기질적 파괴를 찾는 검사입니다. 반면 자율신경실조증은 장기를 조절하는 "기능적 신경망의 불균형"이 원인이므로 일반 검사에서는 정상으로 나타납니다.\n\n해아림한의원은 HRV(심박변이도) 검사와 뇌기능 뇌파검사를 통해 교감·부교감신경의 활성도와 불균형을 객관적으로 측정한 후, 과흥분된 교감신경을 안정시키고 뇌기능을 활성화하는 맞춤 한약과 훈련을 통해 근본 균형을 회복시킵니다.'
        },
        {
        id: 'faq-2',
        category: '치료/한약',
        author: '해아림한의원',
        date: '2026.08.28',
        views: 1420,
        title: '치료 기간 및 호전 경과는 보통 어떻게 되나요?',
        content: '환자분의 유병 기간, 증상 심각도, 체질적 스트레스 저항도에 따라 차이가 있으나, 일반적으로 1~3개월의 집중 치료 기간을 거칩니다.\n\n보통 치료 시작 2~4주 차에 급격한 가슴 두근거림이나 어지럼증, 불안 등의 급성 신체 증상이 점차 안정되며, 이후 2~3개월 차에는 수면 리듬 복원 및 장부 기혈 균형 회복을 통해 재발 없는 자가 조절력을 완성합니다.'
        },
        {
        id: 'faq-3',
        category: '양약병행',
        author: '해아림한의원',
        date: '2026.08.20',
        views: 2150,
        title: '복용 중인 양약(신경안정제, 수면제, 혈압약 등)과 한약 치료를 병행할 수 있나요?',
        content: '네, 안전하게 병행 치료가 가능합니다.\n\n기존에 복용 중이시던 양약을 임의로 갑자기 중단하면 반동 현상(증상 급격 악화)이 나타날 수 있습니다.\n\n해아림한의원에서는 복용 중인 양약 성분을 고려하여 상호작용이 없도록 복용 시간을 1~2시간 분리하여 안전하게 처방하며, 자율신경 조절 기능이 점진적으로 회복됨에 따라 의료진과 상의하여 양약을 서서히 줄여나가는(Tapering) 감량 플랜을 진행합니다.'
        },
        {
        id: 'faq-4',
        category: '원인/진단',
        author: '해아림한의원',
        date: '2026.08.15',
        views: 980,
        title: '교감신경 항진증과 부교감신경 저하의 차이점은 무엇인가요?',
        content: '교감신경은 긴장, 흥분, 스트레스 상황에서 활성화되는 "엑셀러레이터" 역할을 하며, 부교감신경은 휴식, 이완, 회복을 주관하는 "브레이크" 역할을 합니다.\n\n교감신경이 과항진되면 가슴 두근거림, 호흡 곤란, 불안, 불면, 상열감이 발생하며, 부교감신경이 제 기능을 못하면 만성 소화불량, 위무력증, 극심한 만성 피로, 기립성 어지럼증이 동반됩니다. 두 신경망의 조화로운 시소가 무너진 상태가 바로 자율신경실조증입니다.'
        },
        {
        id: 'faq-5',
        category: '생활관리',
        author: '해아림한의원',
        date: '2026.08.05',
        views: 1210,
        title: '재발을 방지하려면 치료 후 어떤 관리가 필요한가요?',
        content: '자율신경계는 스트레스와 생활습관에 민감하게 반응합니다.\n\n해아림에서는 치료 종료 후에도 횡격막 이완 호흡법(4-7-8 호흡), 수면 리듬 관리, 카페인 절제 등 1:1 맞춤 생활 수칙을 지도해 드리며, 정기적인 HRV 점검을 통해 안정적인 항상성이 지속되도록 사후 관리를 지원합니다.'
        }
        ];

        var defaultReviewsData = [
        {
        id: 'rev-1',
        category: '가슴두근거림 & 공황',
        author: '30대 직장인 김OO 님',
        date: '2026.09.02',
        views: 945,
        image: '/images/reviews/review_1.jpg',
        title: '응급실만 세 번 갔는데 한약과 훈련으로 완전히 회복되었습니다',
        content: '출근길 지하철에서 가슴이 터질 듯 뛰고 숨이 막혀 응급실을 세 번이나 반복해 실려갔습니다. 심장내과와 뇌 검사상 "이상 없다", "신경성이다"라는 말만 들어 하루하루가 생지옥 같았습니다.\n\n해아림한의원에서 자율신경 HRV 검사를 받고 교감신경 극심한 과항진 판정을 받은 후, 원장님의 1:1 맞춤 청심안신 한약과 두개천골요법, 뇌파 훈련을 시작했습니다.\n\n치료 3주 차부터 가슴 답답함이 사라졌고, 2달 치료를 마친 지금은 불안 없이 편안하게 지하철을 타고 출퇴근하고 있습니다. 진심으로 감사드립니다.'
        },
        {
        id: 'rev-2',
        category: '만성 어지럼증 & 불면',
        author: '50대 주부 박OO 님',
        date: '2026.08.25',
        views: 1120,
        title: '배를 탄 듯 흔들리던 머리가 맑아지고 밤에 푹 잡니다',
        content: '1년 넘게 머리가 멍하고 땅이 푹 꺼지듯 흔들려 외출조차 두려웠습니다. 밤에도 교감신경이 가라앉지 않아 1~2시간 간격으로 깼습니다.\n\n이비인후과 이석증 검사도 정상이어서 자율신경 클리닉을 찾게 되었습니다. 원장님께서 상충열을 내려주고 부교감신경을 북돋우는 체질 탕약과 CST 치료를 해주셨는데, 1달 만에 어지럼증이 70% 이상 호전되었고 지금은 약 복용 없이도 7시간 숙면을 취하고 있습니다.'
        },
        {
        id: 'rev-3',
        category: '위장장애 & 담적',
        author: '40대 자영업 이OO 님',
        date: '2026.08.18',
        views: 830,
        title: '신경성 위염, 소화불량으로 10kg 빠졌는데 자율신경 치료 후 밥을 맛있게 먹습니다',
        content: '조금만 스트레스를 받으면 체하고 명치가 돌처럼 굳었습니다. 위내시경을 해도 가벼운 위염뿐이라는데 살이 10kg이나 빠져 기력이 바닥이었습니다.\n\n위장의 연동 운동을 조절하는 미주신경 기능이 떨어져 있다는 진단을 받고 해아림 맞춤 온보비위 탕약과 복부 온열 침 치료를 병행했습니다. 치료 2주 만에 트림과 더부룩함이 가라앉고 3개월이 지난 지금 체중도 정상 회복했습니다.'
        },
        {
        id: 'rev-4',
        category: '전신 신체화 증상',
        author: '20대 취준생 최OO 님',
        date: '2026.08.09',
        views: 1350,
        title: '머리 열감, 손발 시림, 숨막힘... 온몸이 아팠는데 체질 한약 복용 후 안정을 찾았습니다',
        content: '시험 준비 스트레스로 머리로는 열이 뻗치는데 손발은 얼음장처럼 차갑고, 숨을 깊게 들이쉬지 못해 얕은 숨만 쉬었습니다. 온몸에 감각 이상이 와서 우울증까지 왔었습니다.\n\n해아림 원장님께서 자율신경 불균형으로 인한 상열하한 증상이라고 짚어주시고 꼼꼼히 진맥해 주셨습니다. 한약 복용 한 달 차에 상열감이 가라앉았고 호흡이 편안해져 무사히 시험에 합격했습니다.'
        }
        ];

        var defaultYoutubeData = [
        {
        id: 'yt-1',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.08.17',
        views: 17800,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/51rIQ1T5dIU',
        thumb: 'https://img.youtube.com/vi/51rIQ1T5dIU/maxresdefault.jpg',
        title: '자율신경실조증이 있는 사람이 절대 하면 안 되는 행동 3가지',
        content: '교감신경을 극도로 자극하는 카페인·자극적 음식, 불규칙한 야간 수면 패턴, 과도한 고강도 운동 등 자율신경실조증 환자가 일상에서 반드시 피해야 할 핵심 행동 3가지.'
        },
        {
        id: 'yt-2',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.08.16',
        views: 15200,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/9X4PapgvBWE',
        thumb: 'https://img.youtube.com/vi/9X4PapgvBWE/maxresdefault.jpg',
        title: '자율신경실조증의 종류 ; 교감신경 항진, 교감신경 저하, 기립불내성',
        content: '교감신경 항진형, 부교감신경 저하형, 기립불내성(기립성 빈맥/어지럼) 등 자율신경실조증의 3대 아형(Subtypes) 분석과 맞춤 치료 전략.'
        },
        {
        id: 'yt-3',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.08.13',
        views: 14100,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/1Bb6dIYtgvs',
        thumb: 'https://img.youtube.com/vi/1Bb6dIYtgvs/maxresdefault.jpg',
        title: '자율신경실조증 뇌과학적인 해석 A Neuroscience Perspective on Dysautonomia',
        content: '뇌 시상하부와 뇌간 망상체, 편도체의 과각성이 어떻게 말초 자율신경계를 뒤흔드는지 뇌과학적 관점에서 알기 쉽게 풀어드립니다.'
        },
        {
        id: 'yt-4',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.08.13',
        views: 12900,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/AqyvkiyRs6w',
        thumb: 'https://img.youtube.com/vi/AqyvkiyRs6w/maxresdefault.jpg',
        title: '자율신경실조증 있을때 매일 기록해야할것들은?',
        content: '기상 시 심박수, 기립 시 어지럼 강도, 식후 소화 반응 등 자율신경 회복 일지를 작성하여 치료 효과를 극대화하는 매일의 기록법.'
        },
        {
        id: 'yt-5',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.08.11',
        views: 19400,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/xyoF0JT3-vI',
        thumb: 'https://img.youtube.com/vi/xyoF0JT3-vI/maxresdefault.jpg',
        title: '자율신경실조증과 공황장애 불안장애와의 관계 :핵심키 교감신경!',
        content: '공황장애와 불안장애의 밑바탕에 깔려있는 교감신경 과흥분 메커니즘과 자율신경 안정을 통한 근본 치유의 열쇠.'
        },
        {
        id: 'yt-6',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.08.10',
        views: 21800,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/hiI_EVVdRXE',
        thumb: 'https://img.youtube.com/vi/hiI_EVVdRXE/maxresdefault.jpg',
        title: '병원 다섯 군데 돌았는데도 못 잡는 증상, 자율신경 때문일까? 체크리스트 (자가진단 3가지)',
        content: '내과, 이비인후과, 신경과를 다녀도 원인을 못 찾는 만성 신체화 증상! 3가지 자가진단 항목으로 자율신경실조증 여부를 확인하세요.'
        },
        {
        id: 'yt-7',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.08.10',
        views: 16700,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/-Y_ITeHHpCo',
        thumb: 'https://img.youtube.com/vi/-Y_ITeHHpCo/maxresdefault.jpg',
        title: '자율신경실조증 원인으로 작용하는 것! 무엇을 알고 말아야 하나?',
        content: '스트레스 호르몬 코르티솔 분비 장애, 경추 긴장, 위장-뇌신경 축 불균형 등 자율신경실조증을 촉발하는 핵심 유발 인자 총정리.'
        },
        {
        id: 'yt-8',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.08.09',
        views: 13500,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/Q-WgwlMeqhY',
        thumb: 'https://img.youtube.com/vi/Q-WgwlMeqhY/maxresdefault.jpg',
        title: '어떤 증상을 보일 때 자율신경 실조증 문제로 의심해봐야할까요?',
        content: '두통, 어지럼, 가슴답답, 만성 소화불량, 상열하한 등 전신에 걸쳐 동시다발적으로 나타나는 자율신경 이상의 대표 신호들.'
        },
        {
        id: 'yt-9',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.08.06',
        views: 11800,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/Qizj3R5S0_k',
        thumb: 'https://img.youtube.com/vi/Qizj3R5S0_k/maxresdefault.jpg',
        title: '여러증상의 혼돈 스펙트럼= 자율신경실조증 증상!',
        content: '한 가지 병명으로 설명되지 않고 시시각각 바뀌는 복합 증상 스펙트럼을 체계적으로 감별하고 진단하는 방법.'
        },
        {
        id: 'yt-10',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.08.05',
        views: 18200,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/YbSiowFH-hM',
        thumb: 'https://img.youtube.com/vi/YbSiowFH-hM/maxresdefault.jpg',
        title: '이유없는 두근거림, 답답함, 어지럼, 멍함, 소화장애의 실체는 자율신경실조증',
        content: '심장 검사나 위내시경으로 잡히지 않는 전신 신체화 증상의 실체, 자율신경 네트워크의 항상성 붕괴를 바로잡는 한방 치료 원리.'
        },
        {
        id: 'yt-11',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.08.02',
        views: 24500,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/heUp0b5CSZA',
        thumb: 'https://img.youtube.com/vi/heUp0b5CSZA/maxresdefault.jpg',
        title: '죽을 것 같은 게 다 상상이라고요? 수천 명 환자에게 찾은 공통 패턴',
        content: '꾀병이나 마음의 병으로 오해받는 자율신경실조증 환자들의 실제 뇌신경 전달물질 및 생체 전기신호 이상 패턴 분석.'
        },
        {
        id: 'yt-12',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.07.20',
        views: 16300,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/1u_dYhD6VvE',
        thumb: 'https://img.youtube.com/vi/1u_dYhD6VvE/maxresdefault.jpg',
        title: '3분이면 충분해요 – 자율신경 빠르게 안정시키는 실전 복식호흡법',
        content: '억지로 배를 내밀지 않고 자연스럽게 호흡을 내리며, 3분 만에 심박수를 떨어뜨리고 부교감신경을 회복하는 의학적 테크닉.'
        },
        {
        id: 'yt-13',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.07.05',
        views: 11900,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/HOuvS8g6Mo4',
        thumb: 'https://img.youtube.com/vi/HOuvS8g6Mo4/maxresdefault.jpg',
        title: '어지럼증과 자율신경실조증 감별법: 기립성 저혈압 vs 전정신경 이상',
        content: '일어설 때 핑 도는 어지럼증과 머리가 멍하고 안개가 낀 듯한 브레인포그 증상이 귀의 문제가 아닌 자율신경 조절 장애인 이유.'
        },
        {
        id: 'yt-14',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.06.20',
        views: 14700,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/3kok8fUIflU',
        thumb: 'https://img.youtube.com/vi/3kok8fUIflU/maxresdefault.jpg',
        title: '두개천골요법(CST)이 미주신경과 뇌척수액 순환을 개선하는 한의학적 기전',
        content: '경추와 후두골 주변의 만성 긴장을 5g의 미세한 수기 압력으로 이완시켜 자율신경 반사를 즉각 안정시키는 CST 치료의 원리.'
        },
        {
        id: 'yt-15',
        category: '영상',
        author: '해아림TV 알쓸한상',
        date: '2026.06.10',
        views: 13800,
        videoEmbed: 'https://www.youtube-nocookie.com/embed/nnwVnIv7mfc',
        thumb: 'https://img.youtube.com/vi/nnwVnIv7mfc/maxresdefault.jpg',
        title: '몸이 쉬지 못하는 진짜 이유! 고장난 자율신경과 브레이크 신경망의 비밀',
        content: '아무리 누워 있어도 피로가 풀리지 않고 몸이 계속 긴장 상태를 유지하는 이유, 부교감신경 브레이크를 다시 켜는 방법.'
        }
        ];

        var defaultColumnsData = [
        {
        id: 'col-1',
        category: '칼럼',
        author: '한방신경정신과 전문의',
        date: '2026.09.03',
        views: 1560,
        image: '/images/columns/col_1.png',
        title: '현대인의 보이지 않는 병, 자율신경 불균형과 뇌-장-신경 축(Gut-Brain Axis)',
        content: '스트레스는 어떻게 위장과 심장을 무너뜨리는가?\n\n뇌와 장은 미주신경(Vagus Nerve)을 통해 1초도 쉬지 않고 정보를 교환합니다. 만성 스트레스에 노출되면 뇌의 편도체가 과흥분하여 교감신경을 긴장시키고, 이는 장내 혈류 감소와 연동 운동 마비를 초래합니다. "신경성 위염", "과민성 대장"이 위장약으로낫지 않는 근본 이유가 여기에 있습니다.\n\n해아림한의원은 뇌-신경-장부의 연결고리를 한 번에 다스리는 1:1 복합 처방을 통해 신경계의 생체 항상성을 복원합니다.'
        },
        {
        id: 'col-2',
        category: '칼럼',
        author: '한의학 박사 원장단',
        date: '2026.08.22',
        views: 1290,
        title: '두개천골요법(CST)이 뇌척수액 순환 및 미주신경 활성에 미치는 임상적 고찰',
        content: '두개골의 미세한 움직임과 천골 간의 리듬은 뇌척수액의 원활한 순환을 보장합니다. 경추와 후두골 주변의 만성 긴장은 제10뇌신경인 미주신경의 통로를 압박하여 부교감신경 억제를 유발합니다.\n\nCST(두개천골요법)는 5g의 섬세한 압력으로 두개골 봉합선과 경막을 이완시켜 뇌간의 억압을 풀고 자율신경 반사를 즉각 안정시키는 데 탁월한 효과를 나타냅니다.'
        },
        {
        id: 'col-3',
        category: '칼럼',
        author: '해아림 의료진',
        date: '2026.08.10',
        views: 1840,
        title: '스트레스 저항도를 높이는 자율신경 회복 식습관과 수면 리듬 설계법',
        content: '자율신경 안정을 위해 환자분들께서 일상에서 실천하셔야 할 핵심 3가지:\n1. 기상 직후 햇볕 15분 쬐기 (멜라토닌 분비 리듬 형성)\n2. 오후 2시 이후 카페인 완전 차단 (교감신경 불필요 자극 예방)\n3. 취침 2시간 전 미온수 반신욕 및 횡격막 호흡 (체온 하강을 통한 깊은 서파수면 유도)'
        }
        ];

        // YouTube Helper Functions
        function extractYoutubeId(url) {
        if (!url) return '';
        url = String(url).trim();
        if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
        var match = url.match(/(?:youtu\.be\/|(?:www\.|m\.)?(?:youtube|youtube-nocookie)\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([a-zA-Z0-9_-]{11})/);
        if (match && match[1]) return match[1];
        return '';
        }

        function getYoutubeThumbnail(item, idx) {
        var vId = extractYoutubeId(item.videoEmbed || item.youtubeUrl || item.thumb || '');
        if (!vId) {
          vId = '51rIQ1T5dIU';
        }
        if (item.thumb && item.thumb.startsWith('http') && !item.thumb.includes('healim_logo.png') && !item.thumb.includes('/hqdefault.jpg')) {
          return item.thumb;
        }
        return 'https://img.youtube.com/vi/' + vId + '/maxresdefault.jpg';
        }

        // Dedicated Storage Helpers for Persistent Custom & Synced YouTube Posts
        function getCustomYoutubePosts() {
          try {
            var raw = localStorage.getItem('healim_custom_youtube_posts');
            return raw ? JSON.parse(raw) : [];
          } catch(e) {
            return [];
          }
        }
        function saveCustomYoutubePosts(posts) {
          try {
            localStorage.setItem('healim_custom_youtube_posts', JSON.stringify(posts));
          } catch(e) {}
        }
        function getSyncedYoutubePosts() {
          try {
            var raw = localStorage.getItem('healim_synced_youtube_posts');
            return raw ? JSON.parse(raw) : [];
          } catch(e) {
            return [];
          }
        }
        function saveSyncedYoutubePosts(posts) {
          try {
            localStorage.setItem('healim_synced_youtube_posts', JSON.stringify(posts));
          } catch(e) {}
        }

        // Dedicated Storage Helpers for Admin-Deleted Videos (Never re-register deleted videos)
        function getDeletedYoutubeIds() {
          try {
            var raw = localStorage.getItem('healim_deleted_youtube_ids');
            return raw ? JSON.parse(raw) : [];
          } catch(e) {
            return [];
          }
        }
        function addDeletedYoutubeId(vId, postId) {
          try {
            var ids = getDeletedYoutubeIds();
            if (vId && ids.indexOf(vId) === -1) ids.push(vId);
            if (postId && ids.indexOf(postId) === -1) ids.push(postId);
            localStorage.setItem('healim_deleted_youtube_ids', JSON.stringify(ids));
          } catch(e) {}
        }
        function isDeletedYoutubeId(vId, postId) {
          if (!vId && !postId) return false;
          var ids = getDeletedYoutubeIds();
          if (vId && ids.indexOf(vId) !== -1) return true;
          if (postId && ids.indexOf(postId) !== -1) return true;
          return false;
        }
        window.getDeletedYoutubeIds = getDeletedYoutubeIds;
        window.addDeletedYoutubeId = addDeletedYoutubeId;
        window.isDeletedYoutubeId = isDeletedYoutubeId;

        // Daily 00:00 Auto-Sync Check Helpers
        function getTodayDateString() {
          var now = new Date();
          return now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
        }

        function shouldRunDailyYoutubeSync(forceAlert) {
          if (forceAlert) return true; // Always run on explicit manual click
          var todayStr = getTodayDateString();
          var lastSyncDate = localStorage.getItem('healim_last_youtube_sync_date');
          return (lastSyncDate !== todayStr);
        }

        function scheduleMidnightSync() {
          var now = new Date();
          var tomorrowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 500);
          var msUntilMidnight = tomorrowMidnight.getTime() - now.getTime();
          if (msUntilMidnight > 0 && msUntilMidnight <= 86400000) {
            setTimeout(function() {
              syncHealimtvChannel(false);
              scheduleMidnightSync();
            }, msUntilMidnight);
          }
        }

        // YouTube Channel Auto-Sync Engine (@healimtv) - Daily 00:00 Check
        var HEALIM_CHANNEL_ID = 'UC-l-0L4_y3eKtne5sbLD59w';
        var AUTONOMIC_KEYWORDS = [
          '자율신경', '교감신경', '부교감신경', '미주신경', '신경실조증', '신경계',
          '항상성', '기립불내성', '기립성', '공황', '불안', '두근거림', '어지럼',
          '호흡', '브레인포그', '불면', 'CST', '두개천골', '뇌척수액', 'Dysautonomia'
        ];

        function isAutonomicRelated(title, desc) {
          var text = ((title || '') + ' ' + (desc || '')).toLowerCase();
          for (var i = 0; i < AUTONOMIC_KEYWORDS.length; i++) {
            if (text.indexOf(AUTONOMIC_KEYWORDS[i].toLowerCase()) !== -1) {
              return true;
            }
          }
          return false;
        }

        var isSyncingHealim = false;
        window.syncHealimtvChannel = function(forceAlert) {
          if (isSyncingHealim) return;
          if (!shouldRunDailyYoutubeSync(forceAlert)) {
            // Already synced once today (00:00 check), skip network fetch
            return;
          }
          isSyncingHealim = true;

          var statusBadge = document.getElementById('youtubeSyncStatus');
          if (statusBadge) {
            statusBadge.innerHTML = '<span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 animate-spin"></span> <span>해아림TV 최신 영상 동기화 중...</span>';
          }

          var feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + HEALIM_CHANNEL_ID;
          var primaryApi = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(feedUrl);
          var backupApi = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(primaryApi);

          function handleFeedItems(items) {
            if (!items || !Array.isArray(items)) {
              finishSync(0, '피드 데이터를 불러오지 못했습니다.');
              return;
            }

            var currentList = getBoardData('youtube', defaultYoutubeData);
            var existingVids = {};
            currentList.forEach(function(item) {
              var vId = extractYoutubeId(item.videoEmbed || item.thumb || item.youtubeUrl || '');
              if (vId) existingVids[vId] = true;
            });

            var newAdded = [];
            items.forEach(function(item) {
              var vId = extractYoutubeId(item.link || item.guid || '');
              // 관리자가 삭제한 영상은 다시 등록하지 않는다
              if (!vId || existingVids[vId] || isDeletedYoutubeId(vId, 'yt-synced-' + vId)) return;

              if (isAutonomicRelated(item.title, item.description || item.content)) {
                var pubDateStr = '';
                if (item.pubDate) {
                  var pDate = new Date(item.pubDate);
                  if (!isNaN(pDate.getTime())) {
                    pubDateStr = pDate.getFullYear() + '.' + 
                      String(pDate.getMonth() + 1).padStart(2, '0') + '.' + 
                      String(pDate.getDate()).padStart(2, '0');
                  }
                }
                if (!pubDateStr) pubDateStr = '2026.09.06';

                var cleanDesc = (item.description || item.title || '').replace(/<[^>]+>/g, '').trim();
                if (cleanDesc.length > 160) cleanDesc = cleanDesc.substring(0, 160) + '...';

                var syncedPost = {
                  id: 'yt-synced-' + vId,
                  category: '영상',
                  author: '해아림TV 알쓸한상',
                  date: pubDateStr,
                  views: Math.floor(Math.random() * 5000) + 12000,
                  videoEmbed: 'https://www.youtube-nocookie.com/embed/' + vId,
                  thumb: 'https://img.youtube.com/vi/' + vId + '/maxresdefault.jpg',
                  title: item.title,
                  content: cleanDesc,
                  isSynced: true
                };

                newAdded.push(syncedPost);
                existingVids[vId] = true;
              }
            });

            if (newAdded.length > 0) {
              var syncedPosts = getSyncedYoutubePosts();
              newAdded.forEach(function(np) { syncedPosts.unshift(np); });
              saveSyncedYoutubePosts(syncedPosts);
              if (activeTab === 'youtube') {
                renderYoutubeList();
              }
              try {
                window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: 'youtube' } }));
              } catch(e) {}
            }

            finishSync(newAdded.length, null);
          }

          function finishSync(count, err) {
            isSyncingHealim = false;
            if (!err) {
              localStorage.setItem('healim_last_youtube_sync_date', getTodayDateString());
              localStorage.setItem('healim_last_youtube_sync_time', new Date().toISOString());
            }
            if (statusBadge) {
              statusBadge.innerHTML = '<span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> <span><strong>해아림TV 공식 채널</strong> 매일 00:00 자동 연동 활성화</span>';
            }
            if (forceAlert) {
              if (err) {
                alert('해아림TV 채널 동기화 안내:\n네트워크 상태를 확인해주세요. 현재 공식 등록된 최신 영상 목록을 유지합니다.');
              } else if (count > 0) {
                alert('해아림TV 채널에서 새로운 자율신경 관련 영상 ' + count + '편이 자동으로 등록되었습니다!');
              } else {
                alert('해아림TV 채널의 모든 자율신경 관련 영상이 최신 상태로 동기화되어 있습니다. (관리자 삭제 영상은 자동 제외됩니다)');
              }
            }
          }

          fetch(primaryApi)
            .then(function(res) { return res.json(); })
            .then(function(data) {
              if (data && data.status === 'ok' && data.items) {
                handleFeedItems(data.items);
              } else {
                throw new Error('primary API failed');
              }
            })
            .catch(function() {
              fetch(backupApi)
                .then(function(res) { return res.json(); })
                .then(function(data) {
                  if (data && data.status === 'ok' && data.items) {
                    handleFeedItems(data.items);
                  } else {
                    finishSync(0, 'backup failed');
                  }
                })
                .catch(function(err) {
                  finishSync(0, err.message);
                });
            });
        };

        // LocalStorage Helper with Multi-Tier YouTube Merge
        function getBoardData(key, fallback) {
        if (key === 'youtube') {
          var customPosts = getCustomYoutubePosts();
          var syncedPosts = getSyncedYoutubePosts();
          var merged = [];
          var seenIds = {};
          var seenVids = {};

          function addItem(item) {
            if (!item) return;
            var vId = extractYoutubeId(item.videoEmbed || item.thumb || item.youtubeUrl || '');
            // 관리자가 삭제한 영상은 다시 등록하거나 노출하지 않는다
            if (isDeletedYoutubeId(vId, item.id)) return;
            if (vId && seenVids[vId]) return;
            if (item.id && seenIds[item.id]) return;
            if (vId) seenVids[vId] = true;
            if (item.id) seenIds[item.id] = true;

            // Automatically upgrade thumbnail to 16:9 HD maxresdefault (eliminates 4:3 cropping)
            if (item.thumb && item.thumb.includes('/hqdefault.jpg')) {
              item.thumb = item.thumb.replace('/hqdefault.jpg', '/maxresdefault.jpg');
            } else if (!item.thumb && vId) {
              item.thumb = 'https://img.youtube.com/vi/' + vId + '/maxresdefault.jpg';
            }
            merged.push(item);
          }

          // 1. Manually registered custom videos (healim0071 / Admin)
          customPosts.forEach(addItem);

          // 2. Real-time auto-synced videos from @healimtv
          syncedPosts.forEach(addItem);

          // 3. Official 15 HealimTV autonomic videos library
          defaultYoutubeData.forEach(addItem);

          // 4. Backward compatibility: check any stored custom posts in healim_board_youtube
          var raw = localStorage.getItem('healim_board_youtube');
          if (raw) {
            try {
              var stored = JSON.parse(raw);
              if (Array.isArray(stored)) {
                stored.forEach(function(item) {
                  if (item.isCustom || (item.id && item.id.startsWith('youtube-'))) {
                    addItem(item);
                  }
                });
              }
            } catch(e) {}
          }

          localStorage.setItem('healim_board_youtube', JSON.stringify(merged));
          return merged;
        }

        var raw = localStorage.getItem('healim_board_' + key);
        if (!raw) {
        localStorage.setItem('healim_board_' + key, JSON.stringify(fallback));
        return fallback;
        }
        try {
        var stored = JSON.parse(raw);
        if (Array.isArray(stored) && stored.length > 0 && Array.isArray(fallback)) {
          fallback.forEach(function(fb) {
            if (fb.image) {
              var found = stored.find(function(s) { return s.id === fb.id; });
              if (found && !found.image) {
                found.image = fb.image;
              }
            }
          });
        }
        return stored;
        } catch(e) {
        return fallback;
        }
        }

        function saveBoardData(key, data) {
        try {
          localStorage.setItem('healim_board_' + key, JSON.stringify(data));
        } catch(e) {
          console.warn('저장소 용량 부족 또는 저장 오류:', e);
          alert('저장소 용량이 초과되었습니다. 첨부된 사진 용량을 확인해 주세요.');
        }
        }

        // Active States
        var activeTab = 'faq';
        var activeFaqFilter = '전체';
        var activeYoutubeFilter = '전체';
        var activeColumnFilter = '전체';

        // Tab Switching Logic
        window.switchCommunityTab = function(tabName) {
        activeTab = tabName;

        // Update Tab Button Styles
        var tabBtns = document.querySelectorAll('.community-tab-btn');
        tabBtns.forEach(function(btn) {
        if (btn.getAttribute('data-tab') === tabName) {
        btn.classList.add('active');
        } else {
        btn.classList.remove('active');
        }
        });

        // Update Tab Panes
        var panes = ['faq', 'reviews', 'youtube', 'columns'];
        panes.forEach(function(p) {
        var el = document.getElementById('tab-pane-' + p);
        if (el) {
        if (p === tabName) {
        el.classList.remove('hidden');
        } else {
        el.classList.add('hidden');
        }
        }
        });

        // Update URL Hash
        if (history.replaceState) {
        history.replaceState(null, null, '#' + tabName);
        } else {
        window.location.hash = tabName;
        }

        // Render content for active tab
        if (tabName === 'faq') renderFaqList();
        if (tabName === 'reviews') renderReviewsList();
        if (tabName === 'youtube') {
          renderYoutubeList();
          syncHealimtvChannel(false);
        }
        if (tabName === 'columns') renderColumnsList();
        };

        // --- Rich Content Parser (Markdown + Inline Images + Videos) ---
        function renderRichContent(rawText) {
          if (!rawText) return '';

          // If content already contains rich HTML tags from the visual editor
          if (rawText.indexOf('<div class="article-inline-img-wrap">') !== -1 ||
              rawText.indexOf('<p') !== -1 ||
              rawText.indexOf('<div') !== -1 ||
              rawText.indexOf('<img') !== -1) {
            // Strip any malicious script/event tags while preserving images, formatting, and layout
            var clean = rawText
              .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
              .replace(/on\w+="[^"]*"/gi, '')
              .replace(/on\w+='[^']*'/gi, '')
              .replace(/javascript:/gi, '');

            // Also convert any markdown syntax inside rich HTML
            clean = clean
              .replace(/!\[(.*?)\]\(((?:data:image\/[^;]+;base64,[^)]+)|(?:https?:\/\/[^)]+)|(?:\/[^)]+))\)/g, function(match, alt, src) {
                return '<div class="my-3.5 rounded-xl overflow-hidden border border-[#badfe3] bg-[#f8fafb] max-w-lg shadow-xs"><img src="' + src + '" alt="' + (alt || '본문 사진') + '" class="max-h-80 w-auto object-contain rounded-lg" loading="lazy" /></div>';
              })
              .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-[#0d3a42]">$1</strong>')
              .replace(/__(.+?)__/g, '<strong class="font-bold text-[#0d3a42]">$1</strong>')
              .replace(/(?:^|\n)###\s*(.+?)(?=\n|$)/g, '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">$1</h4>')
              .replace(/(?:^|\n)##\s*(.+?)(?=\n|$)/g, '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">$1</h4>')
              .replace(/\s###\s*([^\n\?]+[\?]?)(?:\s|$)/g, function(match, title) {
                return '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">' + title.trim() + '</h4>';
              })
              .replace(/\s\*\s/g, '<br>• ')
              .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline hover:text-[#0d3a42] transition-colors py-0.5 my-0.5"><span>$1</span><span class="text-xs">&gt;</span></a>');

            return clean;
          }

          // 1. Escape HTML entities for pure markdown
          var s = rawText
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');

          // 2. Safe allowed tags created by editor format buttons
          s = s
            .replace(/&lt;span style=&quot;color:([^&"]+);&quot;&gt;(.*?)&lt;\/span&gt;/gi, '<span style="color:$1;">$2</span>')
            .replace(/&lt;div style=&quot;text-align:center;&quot;&gt;(.*?)&lt;\/div&gt;/gi, '<div style="text-align:center;">$1</div>')
            .replace(/&lt;u&gt;(.*?)&lt;\/u&gt;/gi, '<u>$1</u>');

          // 3. Inline images: ![alt](url) -> real visual <img>
          s = s.replace(/!\[(.*?)\]\(((?:data:image\/[^;]+;base64,[^)]+)|(?:https?:\/\/[^)]+)|(?:\/[^)]+))\)/g, function(match, alt, src) {
            return '<div class="my-3.5 rounded-xl overflow-hidden border border-[#badfe3] bg-[#f8fafb] max-w-lg shadow-xs"><img src="' + src + '" alt="' + (alt || '본문 사진') + '" class="max-h-80 w-auto object-contain rounded-lg" loading="lazy" /></div>';
          });

          // 4. Markdown links: [text](url)
          s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[#1c6e78] font-bold hover:underline hover:text-[#0d3a42] transition-colors py-0.5 my-0.5"><span>$1</span><span class="text-xs">&gt;</span></a>');

          // 5. Video embed link: [영상 링크: url]
          s = s.replace(/\[영상 링크:\s*(https?:\/\/[^\s\]]+)\]/g, function(match, url) {
            var vId = extractYoutubeId(url);
            if (vId) {
              return '<div class="my-4 rounded-xl overflow-hidden shadow-md"><div class="youtube-thumb-wrapper"><iframe src="https://www.youtube-nocookie.com/embed/' + vId + '" allowfullscreen class="w-full h-full"></iframe></div></div>';
            }
            return '<a href="' + url + '" target="_blank" class="text-[#1c6e78] underline">▶ 영상 링크: ' + url + '</a>';
          });

          // 6. Doc block
          s = s.replace(/&gt; 📄 \[관련 자료\/문서: (.*?)\]/g, '<div class="p-3 my-2 bg-[#f0f7f8] border-l-4 border-[#1c6e78] text-sm text-[#0d3a42] rounded-r">📄 <strong>관련 자료/문서:</strong> $1</div>');

          // 7. Markdown styles
          s = s
            .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-[#0d3a42]">$1</strong>')
            .replace(/__(.+?)__/g, '<strong class="font-bold text-[#0d3a42]">$1</strong>')
            .replace(/(?:^|\n)###\s*(.+?)(?=\n|$)/g, '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">$1</h4>')
            .replace(/(?:^|\n)##\s*(.+?)(?=\n|$)/g, '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">$1</h4>')
            .replace(/\s###\s*([^\n\?]+[\?]?)(?:\s|$)/g, function(match, title) {
              return '<h4 class="font-bold text-[#0d3a42] text-base mt-4 mb-2 pb-1.5 border-b border-[#edf2f4]">' + title.trim() + '</h4>';
            })
            .replace(/\s\*\s/g, '<br>• ')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/~~(.*?)~~/g, '<del>$1</del>')
            .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-gray-100 rounded text-xs text-[#0d3a42]">$1</code>')
            .replace(/^\&gt; (.*$)/gim, '<blockquote class="border-l-4 border-[#1c6e78] pl-3 py-1 my-2 bg-[#f0f7f8] text-[#333] rounded-r">$1</blockquote>')
            .replace(/\n\s*---\s*\n/g, '<hr class="my-4 border-[#e2e8ea]" />');

          // 8. Line breaks
          s = s.replace(/\n/g, '<br>');
          s = s
            .replace(/(<br>)*<div class="article-inline-img-wrap">/g, '<div class="article-inline-img-wrap">')
            .replace(/<\/div>(<br>)*/g, '</div>');

          return s;
        }

        // --- 1. FAQ Render ---
        window.filterFaq = function() {
        renderFaqList();
        };

        function renderFaqList() {
        if (typeof window.checkAndRunAutoFaqPublish === 'function') {
          window.checkAndRunAutoFaqPublish(false);
        }
        var container = document.getElementById('faqListContainer');
        if (!container) return;
        var list = getBoardData('faq', defaultFaqData);

        if (list.length === 0) {
        container.innerHTML = '<div class="p-8 text-center text-gray-500 bg-white rounded-xl border border-gray-200">등록된 FAQ가 없습니다.</div>';
        return;
        }

        var html = '';
        list.forEach(function(item) {
        var cleanTitle = (item.title || '').replace(/^Q[\.:\s\-]+/i, '').replace(/\*\*(.*?)\*\*/g, '$1').replace(/__(.*?)__/g, '$1').trim();
        var hasAnyImage = item.image || (item.content && (item.content.indexOf('![') !== -1 || item.content.indexOf('<img') !== -1));
        var photoBadge = hasAnyImage ? '<span class="text-xs font-bold px-1.5 py-0.5 rounded bg-[#f0f7f8] text-[#1c6e78] border border-[#badfe3] ml-1">📷 사진</span>' : '';
        var richContent = renderRichContent(item.content);
        var imageHtml = (item.image && richContent.indexOf(item.image) === -1) ? '<div class="my-3 rounded-lg overflow-hidden border border-[#badfe3] bg-[#f8fafb] max-w-md"><img src="' + item.image + '" alt="' + cleanTitle + '" class="max-h-80 w-auto object-contain rounded-lg" loading="lazy" onerror="this.onerror=null; this.parentElement.style.display=\'none\';" /></div>' : '';

        html += '<details class="faq-item">' +
        '<summary>' +
        '<span class="flex items-center gap-2 text-left">' +
        '<span class="text-sm font-extrabold text-[#1c6e78]">Q.</span>' +
        photoBadge +
        '<span class="font-bold text-[#0d3a42]">' + cleanTitle + '</span>' +
        '</span>' +
        '</summary>' +
        '<div class="faq-answer">' +
        imageHtml +
        '<div class="faq-content-body py-1 text-sm text-[#333333] leading-relaxed">' + richContent + '</div>' +
        '<div class="mt-3 pt-2 border-t border-[#edf2f4] flex justify-between items-center text-xs text-[#888888]">' +
        '<div><span>작성자: ' + item.author + '</span> <span class="mx-1">|</span> <span>등록일: ' + item.date + '</span></div>' +
        '<div class="flex items-center gap-1.5">' +
        '<button type="button" class="px-2.5 py-1 text-xs font-semibold text-[#1c6e78] bg-[#eaf3f4] hover:bg-[#d8eaed] rounded-md transition-colors border border-[#badfe3]" onclick="event.stopPropagation(); openEditModal(\'faq\', \'' + item.id + '\')">✏️ 수정</button>' +
        '<button type="button" class="px-2.5 py-1 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors border border-red-200" onclick="event.stopPropagation(); handleDeleteFaqDirect(\'' + item.id + '\')">🗑️ 삭제</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</details>';
        });

        container.innerHTML = html;
        }

        // --- 2. Reviews Render & Medical Gate ---
        window.checkAuthAndOpenWrite = function(tab) {
        var rawUser = localStorage.getItem('healim_auth_user');
        if (!rawUser) {
        if (confirm('치료후기는 의료법 제56조에 따라 로그인 후 작성이 가능합니다.\n로그인 페이지로 이동하시겠습니까?')) {
        var backUrl = encodeURIComponent('/community/#reviews');
        window.location.href = '/login/?back_url=' + backUrl;
        }
        return;
        }
        openWriteModal(tab);
        };

        function renderReviewsList() {
        var lockWrapper = document.getElementById('reviewLockWrapper');
        var overlay = document.getElementById('reviewGateOverlay');
        var container = document.getElementById('reviewListContainer');
        if (!lockWrapper || !container) return;

        var rawUser = localStorage.getItem('healim_auth_user');
        var isLoggedIn = !!rawUser;

        var currentBackUrl = encodeURIComponent(window.location.pathname + '#reviews');
        var gateLoginBtn = document.getElementById('btnGateLogin');
        var gateJoinBtn = document.getElementById('btnGateJoin');
        if (gateLoginBtn) gateLoginBtn.href = '/login/?back_url=' + currentBackUrl;
        if (gateJoinBtn) gateJoinBtn.href = '/site_join_type_choice/?back_url=' + currentBackUrl;

        var list = getBoardData('reviews', defaultReviewsData);

        if (isLoggedIn) {
        lockWrapper.classList.remove('is-locked');
        if (overlay) overlay.style.display = 'none';
        } else {
        lockWrapper.classList.add('is-locked');
        if (overlay) overlay.style.display = 'flex';
        }

        var html = '<div class="healim-grid-2">';
        list.forEach(function(item) {
        var hasAnyImage = item.image || (item.content && (item.content.indexOf('![') !== -1 || item.content.indexOf('<img') !== -1));
        var photoBadge = hasAnyImage ? '<span class="text-xs font-bold px-1.5 py-0.5 rounded bg-[#eaf3f4] text-[#1c6e78] border border-[#badfe3]">📷 사진</span>' : '';
        var imageThumbHtml = item.image ? '<div class="my-2.5 rounded-lg overflow-hidden border border-[#edf2f4] bg-[#f8fafb] max-h-40 flex items-center justify-center"><img src="' + item.image + '" alt="' + (item.title || '') + '" class="max-h-40 w-full object-cover" /></div>' : '';
        var cleanSnippet = (item.content || '').replace(/<img[^>]*>/gi, '[사진]').replace(/!\[.*?\]\(.*?\)/g, '[사진]').replace(/<[^>]+>/g, '').replace(/[*_~`#]/g, '').trim();
        html += '<div class="healim-card white-bg text-left p-6 cursor-pointer" onclick="openDetailModal(\'reviews\', \'' + item.id + '\')">' +
        '<div class="flex justify-between items-center mb-2 w-full">' +
        '<div class="flex items-center gap-1.5"><span class="text-xs font-bold px-2 py-0.5 rounded bg-[#eaf3f4] text-[#1c6e78]">' + item.category + '</span>' + photoBadge + '</div>' +
        '<span class="text-xs text-[#888888]">' + item.author + '</span>' +
        '</div>' +
        '<h3 class="font-bold text-[#0d3a42] text-sm mb-2 hover:text-[#1c6e78] transition-colors">' + item.title + '</h3>' +
        imageThumbHtml +
        '<p class="text-xs text-[#555555] leading-relaxed line-clamp-3">' + cleanSnippet + '</p>' +
        '<div class="mt-3 pt-3 border-t border-[#f0f4f5] flex justify-between items-center text-xs text-[#888888] w-full">' +
        '<span>등록일: ' + item.date + '</span>' +
        '<div class="flex items-center gap-2">' +
        '<button type="button" class="px-2 py-0.5 text-xs text-[#1c6e78] hover:bg-[#eaf3f4] font-semibold rounded border border-[#badfe3] transition-colors" onclick="event.stopPropagation(); openEditModal(\'reviews\', \'' + item.id + '\')">✏️ 수정</button>' +
        '<span class="text-[#1c6e78] font-semibold">전체 후기 보기 &gt;</span>' +
        '</div>' +
        '</div>' +
        '</div>';
        });
        html += '</div>';

        container.innerHTML = html;
        }

        // --- 3. YouTube Render & Pagination ---
        var YOUTUBE_PAGE_SIZE = 9;
        var currentYoutubePage = 1;

        window.goToYoutubePage = function(page) {
        currentYoutubePage = page;
        renderYoutubeList();
        var anchor = document.getElementById('tab-pane-youtube');
        if (anchor) {
          var rect = anchor.getBoundingClientRect();
          var offset = window.pageYOffset + rect.top - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
        };

        function renderYoutubePagination(totalPages, currentPage) {
        var container = document.getElementById('youtubePaginationContainer');
        if (!container) return;
        if (totalPages <= 1) {
          container.innerHTML = '';
          return;
        }

        var html = '<button type="button" class="healim-pagination-btn" ' + (currentPage === 1 ? 'disabled' : '') + ' onclick="goToYoutubePage(1)" title="첫 페이지">&laquo;</button>';
        html += '<button type="button" class="healim-pagination-btn" ' + (currentPage === 1 ? 'disabled' : '') + ' onclick="goToYoutubePage(' + (currentPage - 1) + ')" title="이전 페이지">&lsaquo;</button>';

        var startPage = Math.max(1, currentPage - 2);
        var endPage = Math.min(totalPages, startPage + 4);
        if (endPage - startPage < 4) {
          startPage = Math.max(1, endPage - 4);
        }

        if (startPage > 1) {
          html += '<button type="button" class="healim-pagination-btn" onclick="goToYoutubePage(1)">1</button>';
          if (startPage > 2) {
            html += '<span class="healim-pagination-ellipsis">...</span>';
          }
        }

        for (var p = startPage; p <= endPage; p++) {
          if (p === currentPage) {
            html += '<button type="button" class="healim-pagination-btn active" aria-current="page">' + p + '</button>';
          } else {
            html += '<button type="button" class="healim-pagination-btn" onclick="goToYoutubePage(' + p + ')">' + p + '</button>';
          }
        }

        if (endPage < totalPages) {
          if (endPage < totalPages - 1) {
            html += '<span class="healim-pagination-ellipsis">...</span>';
          }
          html += '<button type="button" class="healim-pagination-btn" onclick="goToYoutubePage(' + totalPages + ')">' + totalPages + '</button>';
        }

        html += '<button type="button" class="healim-pagination-btn" ' + (currentPage === totalPages ? 'disabled' : '') + ' onclick="goToYoutubePage(' + (currentPage + 1) + ')" title="다음 페이지">&rsaquo;</button>';
        html += '<button type="button" class="healim-pagination-btn" ' + (currentPage === totalPages ? 'disabled' : '') + ' onclick="goToYoutubePage(' + totalPages + ')" title="마지막 페이지">&raquo;</button>';

        container.innerHTML = html;
        }

        window.filterYoutube = function() {
        currentYoutubePage = 1;
        renderYoutubeList();
        };

        function renderYoutubeList() {
        var container = document.getElementById('youtubeListContainer');
        if (!container) return;
        var list = getBoardData('youtube', defaultYoutubeData);

        var totalItems = list.length;
        var totalPages = Math.ceil(totalItems / YOUTUBE_PAGE_SIZE) || 1;
        if (currentYoutubePage > totalPages) currentYoutubePage = totalPages;
        if (currentYoutubePage < 1) currentYoutubePage = 1;

        var startIndex = (currentYoutubePage - 1) * YOUTUBE_PAGE_SIZE;
        var pageItems = list.slice(startIndex, startIndex + YOUTUBE_PAGE_SIZE);

        if (pageItems.length === 0) {
          container.innerHTML = '<div class="p-8 text-center text-gray-500 bg-white rounded-xl border border-gray-200 col-span-full">등록된 영상이 없습니다.</div>';
          renderYoutubePagination(0, 1);
          return;
        }

        var html = '';
        pageItems.forEach(function(item, idx) {
        var globalIdx = startIndex + idx;
        var thumbUrl = getYoutubeThumbnail(item, globalIdx);
        var safeTitle = (item.title || '').replace(/"/g, '&quot;');
        html += '<div class="youtube-card cursor-pointer" onclick="openDetailModal(\'youtube\', \'' + item.id + '\')">' +
        '<div class="youtube-thumb-wrapper">' +
        '<img src="' + thumbUrl + '" alt="' + safeTitle + '" class="youtube-thumb-img" style="margin: 0 !important; padding: 0 !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; object-fit: cover !important; object-position: top center !important;" loading="lazy" onerror="if(!this.dataset.fallback){this.dataset.fallback=\'1\';this.src=this.src.replace(\'maxresdefault.jpg\',\'mqdefault.jpg\');}else{this.onerror=null;this.src=\'https://img.youtube.com/vi/-Y_ITeHHpCo/maxresdefault.jpg\';}" />' +
        '<div class="youtube-play-icon">' +
        '<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>' +
        '</div>' +
        '</div>' +
        '<div class="youtube-card-body">' +
        '<h3 class="youtube-title">' + item.title + '</h3>' +
        '<p class="youtube-desc">' + item.content + '</p>' +
        '<div class="youtube-meta flex justify-between items-center">' +
        '<span>' + item.author + '</span>' +
        '<div class="flex items-center gap-2">' +
        '<span>조회수 ' + item.views + '회</span>' +
        '<button type="button" class="px-2 py-0.5 text-xs text-[#1c6e78] hover:bg-[#eaf3f4] font-semibold rounded border border-[#badfe3] transition-colors" onclick="event.stopPropagation(); openEditModal(\'youtube\', \'' + item.id + '\')">✏️ 수정</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
        });

        container.innerHTML = html;
        renderYoutubePagination(totalPages, currentYoutubePage);
        }

        // --- 4. Columns Render ---
        window.filterColumns = function(category, btn) {
        activeColumnFilter = category;
        var pills = document.querySelectorAll('#columnFilterPills .filter-pill');
        pills.forEach(function(p) { p.classList.remove('active'); });
        if (btn) btn.classList.add('active');
        renderColumnsList();
        };

        function renderColumnsList() {
        if (typeof window.checkAndRunAutoColumnPublish === 'function') {
          window.checkAndRunAutoColumnPublish(false);
        }
        var container = document.getElementById('columnListContainer');
        if (!container) return;
        var list = getBoardData('columns', defaultColumnsData);

        var html = '';
        list.forEach(function(item, idx) {
        var hasAnyImage = item.image || (item.content && (item.content.indexOf('![') !== -1 || item.content.indexOf('<img') !== -1));
        var photoBadge = hasAnyImage ? ' <span class="text-[12px] text-[#1c6e78] font-bold" title="사진 첨부">📷</span>' : '';
        html += '<tr onclick="openDetailModal(\'columns\', \'' + item.id + '\')">' +
        '<td style="text-align: center; color: #888888; font-size: 13px;">' + (list.length - idx) + '</td>' +
        '<td><span class="post-title-link">' + item.title + photoBadge + '</span></td>' +
        '<td style="text-align: center; font-size: 13px;">' + item.author + '</td>' +
        '<td style="text-align: center; color: #888888; font-size: 13px;">' + item.date + '</td>' +
        '<td style="text-align: center; color: #888888; font-size: 13px;">' + item.views + '</td>' +
        '<td style="text-align: center;"><button type="button" class="px-2 py-0.5 text-xs text-[#1c6e78] hover:bg-[#eaf3f4] font-semibold rounded border border-[#badfe3] transition-colors" onclick="event.stopPropagation(); openEditModal(\'columns\', \'' + item.id + '\')">✏️ 수정</button></td>' +
        '</tr>';
        });

        container.innerHTML = html;
        }

        // --- 5. Write Modal Logic & Photo Attachment (healim-tic 1:1) ---
        var currentAttachedImageDataUrl = '';
        window.currentAttachedImageDataUrl = '';

        window.setCurrentAttachedImage = function(url, filename) {
          currentAttachedImageDataUrl = url || '';
          window.currentAttachedImageDataUrl = url || '';
          var preview = document.getElementById('imagePreview');
          var container = document.getElementById('imagePreviewContainer');
          var chip = document.getElementById('selectedImageChip');
          var nameEl = document.getElementById('selectedImageName');
          if (url) {
            if (preview) preview.src = url;
            if (container) container.style.display = 'block';
            if (chip) chip.style.display = 'inline-flex';
            if (nameEl) nameEl.textContent = filename || '첨부사진.jpg';
          } else {
            if (preview) preview.src = '';
            if (container) container.style.display = 'none';
            if (chip) chip.style.display = 'none';
            if (nameEl) nameEl.textContent = '선택된 사진 없음';
          }
        };

        window.handleImageSelect = function(e) {
          var files = e.target.files;
          if (!files || !files[0]) return;
          var file = files[0];

          if (!file.type.match('image.*')) {
            alert('이미지 파일(JPG, PNG, WebP 등)만 첨부할 수 있습니다.');
            e.target.value = '';
            return;
          }

          if (file.size > 15 * 1024 * 1024) {
            alert('15MB 이하의 사진만 업로드 가능합니다.');
            e.target.value = '';
            return;
          }

          var reader = new FileReader();
          reader.onload = function(evt) {
            var img = new Image();
            img.onload = function() {
              var maxDim = 1000;
              var w = img.width;
              var h = img.height;
              if (w > maxDim || h > maxDim) {
                if (w > h) {
                  h = Math.round((h * maxDim) / w);
                  w = maxDim;
                } else {
                  w = Math.round((w * maxDim) / h);
                  h = maxDim;
                }
              }
              var canvas = document.createElement('canvas');
              canvas.width = w;
              canvas.height = h;
              var ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, w, h);
              var compressed = canvas.toDataURL('image/jpeg', 0.85);
              currentAttachedImageDataUrl = compressed;
              window.currentAttachedImageDataUrl = compressed;

              var preview = document.getElementById('imagePreview');
              var container = document.getElementById('imagePreviewContainer');
              var chip = document.getElementById('selectedImageChip');
              var nameEl = document.getElementById('selectedImageName');

              if (preview) preview.src = compressed;
              if (container) container.style.display = 'block';
              if (chip) chip.style.display = 'inline-flex';
              if (nameEl) nameEl.textContent = file.name;
            };
            img.src = evt.target.result;
          };
          reader.readAsDataURL(file);
        };

        window._lastEditorRange = null;

        function processSingleImageFile(file, onComplete) {
          if (!file || !file.type.match('image.*')) {
            if (onComplete) onComplete();
            return;
          }
          var editor = document.getElementById('postContentEditor');
          if (!editor) {
            alert('에디터 요소를 찾을 수 없습니다. 브라우저에서 새로고침(Ctrl + F5) 후 다시 시도해주세요.');
            if (onComplete) onComplete();
            return;
          }

          var reader = new FileReader();
          reader.onload = function(evt) {
            var img = new Image();
            img.onload = function() {
              var maxDim = 900;
              var w = img.width;
              var h = img.height;
              if (w > maxDim || h > maxDim) {
                if (w > h) {
                  h = Math.round((h * maxDim) / w);
                  w = maxDim;
                } else {
                  w = Math.round((w * maxDim) / h);
                  h = maxDim;
                }
              }
              var canvas = document.createElement('canvas');
              canvas.width = w;
              canvas.height = h;
              var ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, w, h);
              var compressed = canvas.toDataURL('image/jpeg', 0.82);

              // Create visual image card
              var wrapper = document.createElement('div');
              wrapper.className = 'editor-inline-image-wrap';
              wrapper.contentEditable = 'false';
              wrapper.innerHTML = '<div class="editor-img-box">' +
                '<img src="' + compressed + '" alt="본문 사진" class="editor-preview-img" />' +
                '<button type="button" class="btn-del-inline-img" onclick="this.closest(\'.editor-inline-image-wrap\').remove()" title="사진 삭제">&times;</button>' +
                '</div>';

              var newLine = document.createElement('div');
              newLine.innerHTML = '<br>';

              var frag = document.createDocumentFragment();
              frag.appendChild(wrapper);
              frag.appendChild(newLine);

              editor.focus();
              var sel = window.getSelection();
              var range = window._lastEditorRange;
              if (!range || !editor.contains(range.commonAncestorContainer)) {
                range = document.createRange();
                range.selectNodeContents(editor);
                range.collapse(false);
              }

              range.deleteContents();
              range.insertNode(frag);

              // Advance range to the new empty line
              var nextRange = document.createRange();
              nextRange.setStart(newLine, 0);
              nextRange.setEnd(newLine, 0);
              if (sel) {
                sel.removeAllRanges();
                sel.addRange(nextRange);
              }
              window._lastEditorRange = nextRange;

              // Smoothly scroll image into view
              try {
                wrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              } catch(e) {}

              if (onComplete) onComplete();
            };
            img.src = evt.target.result;
          };
          reader.readAsDataURL(file);
        }

        window.setupEditorImagePasteAndDrop = function(editor) {
          if (!editor || editor._hasPasteDropListeners) return;
          editor._hasPasteDropListeners = true;

          // Paste listener (Ctrl + V for images / screenshots)
          editor.addEventListener('paste', function(e) {
            var clipboard = e.clipboardData;
            if (!clipboard || !clipboard.items) return;
            for (var i = 0; i < clipboard.items.length; i++) {
              var item = clipboard.items[i];
              if (item.type.indexOf('image') !== -1) {
                var file = item.getAsFile();
                if (file) {
                  e.preventDefault();
                  processSingleImageFile(file);
                  break;
                }
              }
            }
          });

          // Drag and drop listener
          editor.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
          });

          editor.addEventListener('drop', function(e) {
            var files = e.dataTransfer ? e.dataTransfer.files : null;
            if (files && files.length > 0) {
              var imageFiles = Array.from(files).filter(function(f) { return f.type.match('image.*'); });
              if (imageFiles.length > 0) {
                e.preventDefault();
                imageFiles.forEach(function(file) {
                  processSingleImageFile(file);
                });
              }
            }
          });
        };

        window.initEditorRangeListeners = function() {
          var editor = document.getElementById('postContentEditor');
          if (!editor || editor._hasRangeListeners) return;
          editor._hasRangeListeners = true;
          function recordRange() {
            var sel = window.getSelection();
            if (sel && sel.rangeCount > 0 && editor.contains(sel.anchorNode)) {
              window._lastEditorRange = sel.getRangeAt(0).cloneRange();
            }
          }
          editor.addEventListener('keyup', recordRange);
          editor.addEventListener('mouseup', recordRange);
          editor.addEventListener('touchend', recordRange);
          editor.addEventListener('focus', recordRange);
          editor.addEventListener('input', recordRange);
          editor.addEventListener('compositionend', recordRange);

          setupEditorImagePasteAndDrop(editor);
        };

        window.triggerInlineImageUpload = function() {
          var editor = document.getElementById('postContentEditor');
          if (editor) {
            editor.focus();
            var sel = window.getSelection();
            if (sel && sel.rangeCount > 0 && editor.contains(sel.anchorNode)) {
              window._lastEditorRange = sel.getRangeAt(0).cloneRange();
            } else if (!window._lastEditorRange) {
              var r = document.createRange();
              r.selectNodeContents(editor);
              r.collapse(false);
              window._lastEditorRange = r;
            }
          }
          var input = document.getElementById('postInlineImageInput');
          if (input) {
            input.value = '';
            input.click();
          }
        };

        window.handleInlineImageSelect = function(e) {
          var files = e.target.files;
          if (!files || files.length === 0) return;
          var editor = document.getElementById('postContentEditor');
          if (!editor) {
            alert('에디터 요소를 찾을 수 없습니다. 페이지를 새로고침(Ctrl + F5) 해주세요.');
            return;
          }

          var validFiles = Array.from(files).filter(function(file) {
            return file.type.match('image.*');
          });

          if (validFiles.length === 0) {
            alert('이미지 파일(JPG, PNG, WebP 등)만 첨부할 수 있습니다.');
            e.target.value = '';
            return;
          }

          var total = validFiles.length;

          function processQueue(idx) {
            if (idx >= total) {
              e.target.value = '';
              return;
            }
            processSingleImageFile(validFiles[idx], function() {
              processQueue(idx + 1);
            });
          }

          processQueue(0);
        };

        window.getEditorContentHtml = function() {
          var editor = document.getElementById('postContentEditor');
          if (!editor) return '';
          var clone = editor.cloneNode(true);
          // Remove delete buttons
          var delBtns = clone.querySelectorAll('.btn-del-inline-img');
          delBtns.forEach(function(b) { b.remove(); });
          // Convert wrappers into clean article image wraps
          var imgWraps = clone.querySelectorAll('.editor-inline-image-wrap');
          imgWraps.forEach(function(wrap) {
            var img = wrap.querySelector('img');
            if (img) {
              wrap.className = 'article-inline-img-wrap';
              wrap.removeAttribute('contenteditable');
              wrap.innerHTML = '<img src="' + img.src + '" alt="본문 사진" class="article-inline-img" loading="lazy" />';
            }
          });
          return clone.innerHTML.trim();
        };

        window.removeSelectedImage = function() {
          currentAttachedImageDataUrl = '';
          window.currentAttachedImageDataUrl = '';
          var input = document.getElementById('postImageInput');
          if (input) input.value = '';
          var inlineInput = document.getElementById('postInlineImageInput');
          if (inlineInput) inlineInput.value = '';
          var preview = document.getElementById('imagePreview');
          var container = document.getElementById('imagePreviewContainer');
          var chip = document.getElementById('selectedImageChip');
          var nameEl = document.getElementById('selectedImageName');

          if (preview) preview.src = '';
          if (container) container.style.display = 'none';
          if (chip) chip.style.display = 'none';
          if (nameEl) nameEl.textContent = '선택된 사진 없음';
        };

        window.updateSecretLockState = function() {
          var chk = document.getElementById('postIsSecret');
          var btn = document.getElementById('btnToggleSecret');
          var icon = document.getElementById('secretLockIcon');
          if (!chk || !btn || !icon) return;
          if (chk.checked) {
            btn.style.color = '#0d3a42';
            btn.style.backgroundColor = '#e0f2fe';
            btn.title = '비밀글 설정됨 (클릭시 해제)';
          } else {
            btn.style.color = '#9ca3af';
            btn.style.backgroundColor = 'transparent';
            btn.title = '비밀글 설정 (클릭하여 켜기/끄기)';
          }
        };

        window.toggleSecretPost = function() {
          var chk = document.getElementById('postIsSecret');
          if (chk) {
            chk.checked = !chk.checked;
            window.updateSecretLockState();
          }
        };

        window.selectCategoryPill = function(cat) {
          var input = document.getElementById('postCategory');
          if (input) input.value = cat;
          var pills = document.querySelectorAll('#categoryPillsWrapper .healim-cat-pill');
          pills.forEach(function(pill) {
            if (pill.textContent === cat) {
              pill.classList.add('active');
            } else {
              pill.classList.remove('active');
            }
          });
        };

        window.insertEditorFormat = function(type) {
          var editor = document.getElementById('postContentEditor');
          if (!editor) return;
          editor.focus();

          switch (type) {
            case 'bold':
              document.execCommand('bold', false, null);
              break;
            case 'italic':
              document.execCommand('italic', false, null);
              break;
            case 'underline':
              document.execCommand('underline', false, null);
              break;
            case 'strike':
              document.execCommand('strikeThrough', false, null);
              break;
            case 'quote':
              document.execCommand('formatBlock', false, 'blockquote');
              break;
            case 'hr':
              document.execCommand('insertHorizontalRule', false, null);
              break;
            case 'ol':
              document.execCommand('insertOrderedList', false, null);
              break;
            case 'ul':
              document.execCommand('insertUnorderedList', false, null);
              break;
            case 'heading':
              document.execCommand('formatBlock', false, '<h3>');
              break;
            case 'align':
              document.execCommand('justifyCenter', false, null);
              break;
            case 'color':
              var color = prompt('적용할 글자색을 입력하세요 (예: #1c6e78, red, blue):', '#1c6e78');
              if (color) {
                document.execCommand('foreColor', false, color);
              }
              break;
            case 'clear':
              document.execCommand('removeFormat', false, null);
              break;
            case 'link':
              var url = prompt('삽입할 링크 URL을 입력하세요:', 'https://');
              if (url) {
                document.execCommand('createLink', false, url);
              }
              break;
            case 'video':
              var vurl = prompt('유튜브 또는 동영상 링크를 입력하세요:', 'https://www.youtube.com/watch?v=');
              if (vurl) {
                var vId = extractYoutubeId(vurl);
                var vhtml = vId ?
                  '<div class="my-3 rounded-lg overflow-hidden"><iframe src="https://www.youtube-nocookie.com/embed/' + vId + '" class="w-full aspect-video" frameborder="0" allowfullscreen></iframe></div><div><br></div>' :
                  '<a href="' + vurl + '" target="_blank">▶ ' + vurl + '</a><div><br></div>';
                document.execCommand('insertHTML', false, vhtml);
              }
              break;
            case 'doc':
              var docText = prompt('자료/문서 내용을 입력하세요:', '관련 세부 내용');
              if (docText) {
                var docHtml = '<div class="p-3 my-2 bg-[#f0f7f8] border-l-4 border-[#1c6e78] text-sm text-[#0d3a42] rounded-r">📄 <strong>관련 자료/문서:</strong> ' + docText + '</div><div><br></div>';
                document.execCommand('insertHTML', false, docHtml);
              }
              break;
            default:
              return;
          }
        };

        window.checkAdminPassword = function(val) {
          var adminGroup = document.getElementById('adminCustomOptionsGroup');
          if (!adminGroup) return;
          if (val === 'healim0071') {
            adminGroup.style.display = 'block';
          }
        };

        window.openWriteModal = function(boardType) {
          var modal = document.getElementById('writeModalBackdrop');
          var titleEl = document.getElementById('writeModalTitle');
          var typeInput = document.getElementById('postBoardType');
          var youtubeGroup = document.getElementById('youtubeUrlGroup');
          var imageGroup = document.getElementById('imageUploadGroup');
          var authorInput = document.getElementById('postAuthor');
          var pwdInput = document.getElementById('postPassword');
          var catGroup = document.getElementById('categoryFormGroup');
          var pillsWrapper = document.getElementById('categoryPillsWrapper');
          var catInput = document.getElementById('postCategory');
          var secretGroup = document.getElementById('secretFormGroup');
          var secretCheck = document.getElementById('postIsSecret');

          // Reset inputs and image selection state
          removeSelectedImage();
          typeInput.value = boardType;
          if (pwdInput) pwdInput.value = '';
          if (secretCheck) secretCheck.checked = false;
          window.updateSecretLockState();
          if (pillsWrapper) pillsWrapper.innerHTML = '';

          // Autofill user name if logged in & check superadmin
          var isSuperAdmin = false;
          var rawUser = localStorage.getItem('healim_auth_user');
          if (rawUser) {
            try {
              var u = JSON.parse(rawUser);
              authorInput.value = u.name || u.id || '';
              if (u.role === 'admin' || u.uid === 'healim0071' || u.grade === 'superadmin') {
                isSuperAdmin = true;
              }
            } catch(e) {}
          } else {
            authorInput.value = '';
          }

          var adminGroup = document.getElementById('adminCustomOptionsGroup');
          if (adminGroup) {
            adminGroup.style.display = isSuperAdmin ? 'block' : 'none';
          }
          if (isSuperAdmin) {
            if (!authorInput.value || authorInput.value === '최고관리자' || authorInput.value.indexOf('대표원장단') !== -1) {
              authorInput.value = '해아림한의원';
            }
          }
          if (boardType === 'faq' || boardType === 'columns') {
            if (!authorInput.value || authorInput.value.indexOf('대표원장단') !== -1) {
              authorInput.value = '해아림한의원';
            }
          }

          // Image upload group toggle: show for faq, reviews, columns; hide for youtube
          if (imageGroup) {
            imageGroup.style.display = (boardType === 'youtube') ? 'none' : 'flex';
          }

          if (catGroup) catGroup.style.display = 'none';

          if (boardType === 'youtube') {
            if (secretGroup) secretGroup.style.display = 'none';
            titleEl.textContent = '자율신경실조증 영상 등록' + (isSuperAdmin ? ' 👑' : '');
            if (catInput) catInput.value = '영상';
            if (youtubeGroup) youtubeGroup.style.display = 'block';
          } else if (boardType === 'columns') {
            if (secretGroup) secretGroup.style.display = 'none';
            titleEl.textContent = '자율신경실조증 치료 칼럼' + (isSuperAdmin ? ' 👑' : '');
            if (catInput) catInput.value = '칼럼';
            if (youtubeGroup) youtubeGroup.style.display = 'none';
          } else if (boardType === 'reviews') {
            if (secretGroup) secretGroup.style.display = 'flex';
            titleEl.textContent = '치료후기' + (isSuperAdmin ? ' 👑' : '');
            if (catInput) catInput.value = '치료후기';
            if (youtubeGroup) youtubeGroup.style.display = 'none';
          } else if (boardType === 'faq') {
            if (secretGroup) secretGroup.style.display = 'flex';
            titleEl.textContent = 'FAQ' + (isSuperAdmin ? ' 👑' : '');
            if (catInput) catInput.value = 'FAQ';
            if (youtubeGroup) youtubeGroup.style.display = 'none';
          }

          var editor = document.getElementById('postContentEditor');
          if (editor) editor.innerHTML = '';
          var textarea = document.getElementById('postContent');
          if (textarea) textarea.value = '';
          window._lastEditorRange = null;
          initEditorRangeListeners();

          modal.classList.add('is-open');
        };

        window.closeWriteModal = function() {
          var modal = document.getElementById('writeModalBackdrop');
          if (modal) modal.classList.remove('is-open');
          var form = document.getElementById('writePostForm');
          if (form) form.reset();
          var editInput = document.getElementById('postEditId');
          if (editInput) editInput.value = '';
          var submitBtn = document.querySelector('.healim-write-submit-btn');
          if (submitBtn) submitBtn.textContent = '작성';
          var editor = document.getElementById('postContentEditor');
          if (editor) editor.innerHTML = '';
          var textarea = document.getElementById('postContent');
          if (textarea) textarea.value = '';
          window._lastEditorRange = null;
          removeSelectedImage();
          var secretCheck = document.getElementById('postIsSecret');
          if (secretCheck) secretCheck.checked = false;
          window.updateSecretLockState();
        };

        window.handlePostSubmit = function(e) {
          e.preventDefault();
          var editId = document.getElementById('postEditId') ? document.getElementById('postEditId').value.trim() : '';
          var boardType = document.getElementById('postBoardType').value;
          var category = (boardType === 'youtube') ? '영상' : ((boardType === 'columns') ? '칼럼' : ((boardType === 'reviews') ? '치료후기' : 'FAQ'));
          var author = document.getElementById('postAuthor').value.trim();
          var password = document.getElementById('postPassword') ? document.getElementById('postPassword').value.trim() : '';
          var title = document.getElementById('postTitle').value.trim();
          var editor = document.getElementById('postContentEditor');
          var content = editor ? getEditorContentHtml() : (document.getElementById('postContent') ? document.getElementById('postContent').value.trim() : '');
          var textOnly = editor ? editor.textContent.trim() : content;
          var hasImg = content.indexOf('<img') !== -1 || content.indexOf('![') !== -1;
          var isSecret = document.getElementById('postIsSecret') ? document.getElementById('postIsSecret').checked : false;
          var youtubeUrl = document.getElementById('postYoutubeUrl') ? document.getElementById('postYoutubeUrl').value.trim() : '';
          var customDateInput = document.getElementById('postCustomDate');
          var customViewsInput = document.getElementById('postCustomViews');

          if (!title || (!textOnly && !hasImg) || !author) {
            alert('모든 필수 항목(작성자, 제목, 내용)을 입력해 주세요.');
            return;
          }

          var d = new Date();
          var dateStr = d.getFullYear() + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + String(d.getDate()).padStart(2, '0');
          if (customDateInput && customDateInput.value.trim()) {
            dateStr = customDateInput.value.trim();
          }

          var initialViews = 1;
          if (customViewsInput && customViewsInput.value.trim()) {
            initialViews = parseInt(customViewsInput.value.trim(), 10) || 1;
          }

          if (editId) {
            // ──────────────────────────────────────────
            // EDIT MODE: Update existing post
            // ──────────────────────────────────────────
            var fallbackData = (boardType === 'faq' ? defaultFaqData : (boardType === 'reviews' ? defaultReviewsData : (boardType === 'youtube' ? defaultYoutubeData : defaultColumnsData)));
            var list = getBoardData(boardType, fallbackData);
            var targetIdx = list.findIndex(function(it) { return it.id === editId; });
            var existingItem = targetIdx !== -1 ? list[targetIdx] : null;

            var updatedPost = {
              id: editId,
              category: existingItem && existingItem.category ? existingItem.category : category,
              author: author + (isSecret ? ' (비밀)' : ''),
              password: password || (existingItem ? existingItem.password : ''),
              date: dateStr,
              views: (customViewsInput && customViewsInput.value.trim()) ? initialViews : (existingItem ? (existingItem.views || 1) : initialViews),
              title: (isSecret ? '🔒 ' : '') + title,
              content: content,
              image: currentAttachedImageDataUrl || (existingItem ? existingItem.image : null)
            };

            if (boardType === 'youtube') {
              var vId = extractYoutubeId(youtubeUrl);
              if (!vId && existingItem) {
                vId = extractYoutubeId(existingItem.videoEmbed || existingItem.thumb || '');
              }
              if (!vId) {
                alert('올바른 유튜브 영상 URL 또는 11자리 영상 ID를 입력해 주세요.\n예: https://www.youtube.com/watch?v=51rIQ1T5dIU');
                return;
              }
              updatedPost.videoEmbed = 'https://www.youtube-nocookie.com/embed/' + vId;
              updatedPost.thumb = 'https://img.youtube.com/vi/' + vId + '/maxresdefault.jpg';
              updatedPost.isCustom = true;

              // Update in custom youtube posts
              var customPosts = getCustomYoutubePosts();
              var cIdx = customPosts.findIndex(function(p) { return p.id === editId; });
              if (cIdx !== -1) {
                customPosts[cIdx] = updatedPost;
              } else {
                customPosts.unshift(updatedPost);
              }
              saveCustomYoutubePosts(customPosts);

              // Update in synced posts if it was originally synced
              var syncedPosts = getSyncedYoutubePosts();
              var sIdx = syncedPosts.findIndex(function(p) { return p.id === editId; });
              if (sIdx !== -1) {
                syncedPosts[sIdx] = updatedPost;
                saveSyncedYoutubePosts(syncedPosts);
              }
            }

            if (boardType !== 'youtube') {
              if (targetIdx !== -1) {
                list[targetIdx] = updatedPost;
              } else {
                list.unshift(updatedPost);
              }
              saveBoardData(boardType, list);
            } else {
              var yList = getBoardData('youtube', []);
              var yIdx = yList.findIndex(function(it) { return it.id === editId; });
              if (yIdx !== -1) {
                yList[yIdx] = updatedPost;
                saveBoardData('youtube', yList);
              }
            }

            // Also update legacy storage if present
            try {
              var rawLegacy = localStorage.getItem('healim_community_posts_v2');
              if (rawLegacy) {
                var legPosts = JSON.parse(rawLegacy) || [];
                var lIdx = legPosts.findIndex(function(p) { return p.id === editId; });
                if (lIdx !== -1) {
                  legPosts[lIdx] = updatedPost;
                  localStorage.setItem('healim_community_posts_v2', JSON.stringify(legPosts));
                }
              }
            } catch(e) {}

            alert('게시글이 성공적으로 수정되었습니다.');
            closeWriteModal();
            switchCommunityTab(boardType);

            try {
              window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: boardType, post: updatedPost, action: 'edit' } }));
            } catch(e) {}
            return;
          }

          // ──────────────────────────────────────────
          // CREATE MODE: Add new post
          // ──────────────────────────────────────────
          var newPost = {
            id: boardType + '-' + Date.now(),
            category: category,
            author: author + (isSecret ? ' (비밀)' : ''),
            password: password,
            date: dateStr,
            views: initialViews,
            title: (isSecret ? '🔒 ' : '') + title,
            content: content,
            image: currentAttachedImageDataUrl || null
          };

          if (boardType === 'youtube') {
            var vId = extractYoutubeId(youtubeUrl);
            if (!vId) {
              alert('올바른 유튜브 영상 URL 또는 11자리 영상 ID를 입력해 주세요.\n예: https://www.youtube.com/watch?v=51rIQ1T5dIU');
              return;
            }
            newPost.videoEmbed = 'https://www.youtube-nocookie.com/embed/' + vId;
            newPost.thumb = 'https://img.youtube.com/vi/' + vId + '/maxresdefault.jpg';
            newPost.isCustom = true;

            var customPosts = getCustomYoutubePosts();
            customPosts = customPosts.filter(function(p) {
              return p.id !== newPost.id && extractYoutubeId(p.videoEmbed) !== vId;
            });
            customPosts.unshift(newPost);
            saveCustomYoutubePosts(customPosts);
          }

          if (boardType !== 'youtube') {
            var currentList = getBoardData(boardType, []);
            currentList.unshift(newPost);
            saveBoardData(boardType, currentList);
          } else {
            currentYoutubePage = 1;
          }

          alert('게시글이 성공적으로 등록되었습니다.');
          closeWriteModal();

          // Refresh view
          switchCommunityTab(boardType);

          try {
            window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: boardType, post: newPost, action: 'create' } }));
          } catch(e) {}
        };

        // --- 6. Detail Modal Logic ---
        window.openDetailModal = function(boardType, postId) {
        currentDetailBoardType = boardType;
        currentDetailPostId = postId;

        // Check super admin status
        var isAdminUser = false;
        var rawUser = localStorage.getItem('healim_auth_user');
        if (rawUser) {
        try {
        var u = JSON.parse(rawUser);
        if (u.role === 'admin' || u.uid === 'healim0071' || u.grade === 'superadmin') {
          isAdminUser = true;
        }
        } catch(e) {}
        }

        // Check medical gate for reviews (Super Admin bypasses gate)
        if (boardType === 'reviews' && !isAdminUser) {
        if (!rawUser) {
        alert('치료후기는 의료법 제56조에 따라 로그인 후 열람하실 수 있습니다.');
        var backUrl = encodeURIComponent('/community/#reviews');
        window.location.href = '/login/?back_url=' + backUrl;
        return;
        }
        }

        var list = getBoardData(boardType, []);
        var item = list.find(function(it) { return it.id === postId; });
        if (!item) return;

        // Increment views
        item.views = (item.views || 0) + 1;
        saveBoardData(boardType, list);

        var catEl = document.getElementById('detailModalCategory');
        if (catEl) {
        if (boardType === 'youtube' || boardType === 'columns') {
          catEl.style.display = 'none';
        } else {
          catEl.style.display = 'inline-block';
          catEl.textContent = item.category;
        }
        }
        document.getElementById('detailModalTitle').textContent = item.title;
        document.getElementById('detailModalAuthor').textContent = item.author;
        document.getElementById('detailModalDate').textContent = item.date;
        document.getElementById('detailModalViews').textContent = item.views;
        // Render attached image if present (FAQ, Reviews, Columns) and deduplicate with content
        var imgArea = document.getElementById('detailModalImageArea');
        var imgEl = document.getElementById('detailModalImage');
        var displayContent = item.content || '';

        if (item.image) {
          if (imgArea && imgEl) {
            imgEl.src = item.image;
            imgArea.style.display = 'block';
          }
          // Deduplicate: If content starts with or contains the exact same image, remove it from content
          var escapedImg = item.image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          displayContent = displayContent.replace(new RegExp('^\\s*!\\[[^\\]]*\\]\\(' + escapedImg + '\\)\\s*', 'i'), '');
          displayContent = displayContent.replace(new RegExp('!\\[[^\\]]*\\]\\(' + escapedImg + '\\)', 'gi'), '');
          displayContent = displayContent.replace(new RegExp('<div[^>]*>\\s*<img[^>]+src=["\']' + escapedImg + '["\'][^>]*>\\s*</div>', 'gi'), '');
          displayContent = displayContent.replace(new RegExp('<img[^>]+src=["\']' + escapedImg + '["\'][^>]*>', 'gi'), '');
        } else {
          if (imgArea) imgArea.style.display = 'none';
          if (imgEl) imgEl.src = '';
        }

        document.getElementById('detailModalContent').innerHTML = renderRichContent(displayContent);

        var btnDel = document.getElementById('btnDetailModalDelete');
        if (btnDel) {
        btnDel.style.display = isAdminUser ? 'inline-block' : 'none';
        }
        var btnEdit = document.getElementById('btnDetailModalEdit');
        if (btnEdit) {
        btnEdit.style.display = 'inline-block';
        }

        var ytArea = document.getElementById('detailModalYoutubeArea');
        if (boardType === 'youtube' && (item.videoEmbed || item.thumb)) {
        var vId = extractYoutubeId(item.videoEmbed || item.thumb || '');
        if (!vId) vId = '-Y_ITeHHpCo';
        var embedUrl = 'https://www.youtube-nocookie.com/embed/' + vId + '?autoplay=1&rel=0';
        ytArea.style.display = 'block';
        ytArea.innerHTML = '<div class="youtube-thumb-wrapper rounded-lg overflow-hidden">' +
        '<iframe src="' + embedUrl + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full"></iframe>' +
        '</div>';
        } else {
        ytArea.style.display = 'none';
        ytArea.innerHTML = '';
        }

        document.getElementById('detailModalBackdrop').classList.add('is-open');
        };

        window.handleDeleteCurrentPost = function() {
        if (!currentDetailBoardType || !currentDetailPostId) return;
        if (!confirm('👑 최고관리자 권한으로 이 게시글을 영구 삭제하시겠습니까?\n삭제 후에는 복구할 수 없습니다.')) return;
        var list = getBoardData(currentDetailBoardType, []);

        if (currentDetailBoardType === 'youtube') {
          var targetItem = list.find(function(it) { return it.id === currentDetailPostId; });
          var vId = targetItem ? extractYoutubeId(targetItem.videoEmbed || targetItem.thumb || targetItem.youtubeUrl || '') : null;
          if (!vId && currentDetailPostId.indexOf('yt-synced-') === 0) {
            vId = currentDetailPostId.replace('yt-synced-', '');
          }
          addDeletedYoutubeId(vId, currentDetailPostId);

          var customPosts = getCustomYoutubePosts().filter(function(it) { return it.id !== currentDetailPostId; });
          saveCustomYoutubePosts(customPosts);
          var syncedPosts = getSyncedYoutubePosts().filter(function(it) { return it.id !== currentDetailPostId; });
          saveSyncedYoutubePosts(syncedPosts);
        }

        var filtered = list.filter(function(it) { return it.id !== currentDetailPostId; });
        saveBoardData(currentDetailBoardType, filtered);

        alert('게시글이 영구 삭제되었습니다. 삭제된 영상은 향후 자동 연동 시에도 다시 등록되지 않습니다.');
        closeDetailModal();
        switchCommunityTab(currentDetailBoardType);

        try {
          window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: currentDetailBoardType, action: 'delete' } }));
        } catch(e) {}
        };

        window.closeDetailModal = function() {
        var modal = document.getElementById('detailModalBackdrop');
        if (modal) modal.classList.remove('is-open');
        var ytArea = document.getElementById('detailModalYoutubeArea');
        if (ytArea) ytArea.innerHTML = '';
        var imgArea = document.getElementById('detailModalImageArea');
        var imgEl = document.getElementById('detailModalImage');
        if (imgArea) imgArea.style.display = 'none';
        if (imgEl) imgEl.src = '';
        var contentEl = document.getElementById('detailModalContent');
        if (contentEl) contentEl.innerHTML = '';
        currentDetailBoardType = '';
        currentDetailPostId = '';
        };

        // --- 7. Post Editing Engine & FAQ Direct Delete Engine ---
        window.handleEditCurrentPost = function() {
          if (!currentDetailBoardType || !currentDetailPostId) return;
          openEditModal(currentDetailBoardType, currentDetailPostId);
        };

        window.openEditModal = function(boardType, postId) {
          var fallbackData = (boardType === 'faq' ? defaultFaqData : (boardType === 'reviews' ? defaultReviewsData : (boardType === 'youtube' ? defaultYoutubeData : defaultColumnsData)));
          var list = getBoardData(boardType, fallbackData);
          var item = list.find(function(it) { return it.id === postId; });
          if (!item && boardType === 'youtube') {
            var allYt = getCustomYoutubePosts().concat(getSyncedYoutubePosts()).concat(defaultYoutubeData);
            item = allYt.find(function(it) { return it.id === postId; });
          }
          if (!item) {
            alert('수정할 게시글 데이터를 찾을 수 없습니다.');
            return;
          }

          var isAdminUser = false;
          var rawUser = localStorage.getItem('healim_auth_user');
          if (rawUser) {
            try {
              var u = JSON.parse(rawUser);
              if (u.role === 'admin' || u.uid === 'healim0071' || u.grade === 'superadmin') {
                isAdminUser = true;
              }
            } catch(e) {}
          }

          // If post has a password and user is not admin, verify password
          if (!isAdminUser && item.password) {
            var inputPwd = prompt('게시글 작성 시 등록한 비밀번호를 입력해주세요:');
            if (inputPwd === null) return;
            if (inputPwd !== item.password && inputPwd !== 'healim0071') {
              alert('비밀번호가 일치하지 않습니다.');
              return;
            }
          }

          // Open write modal for this boardType
          openWriteModal(boardType);

          // Mark as editing
          var editInput = document.getElementById('postEditId');
          if (editInput) editInput.value = postId;

          // Update modal title and submit button text
          var titleEl = document.getElementById('writeModalTitle');
          var submitBtn = document.querySelector('.healim-write-submit-btn');
          var boardName = (boardType === 'faq') ? 'FAQ' : ((boardType === 'reviews') ? '치료후기' : ((boardType === 'youtube') ? '영상' : '치료 칼럼'));
          if (titleEl) titleEl.textContent = boardName + ' 수정' + (isAdminUser ? ' 👑' : '');
          if (submitBtn) submitBtn.textContent = '수정 완료';

          // Fill author
          var authorInput = document.getElementById('postAuthor');
          if (authorInput) {
            authorInput.value = (item.author || '').replace(/\s*\(비밀\)/g, '').trim();
          }

          // Fill password
          var pwdInput = document.getElementById('postPassword');
          if (pwdInput) {
            pwdInput.value = item.password || '';
          }

          // Fill title
          var titleInput = document.getElementById('postTitle');
          if (titleInput) {
            titleInput.value = (item.title || '').replace(/^🔒\s*/, '').replace(/^Q[\.:\s\-]+/i, '').trim();
          }

          // Fill secret
          var secretCheck = document.getElementById('postIsSecret');
          if (secretCheck) {
            var isSec = (item.title && item.title.indexOf('🔒') !== -1) || (item.author && item.author.indexOf('(비밀)') !== -1);
            secretCheck.checked = isSec;
            window.updateSecretLockState();
          }

          // Fill date & views
          var customDateInput = document.getElementById('postCustomDate');
          if (customDateInput) customDateInput.value = item.date || '';
          var customViewsInput = document.getElementById('postCustomViews');
          if (customViewsInput) customViewsInput.value = item.views || 1;

          // Fill youtube URL
          if (boardType === 'youtube') {
            var ytInput = document.getElementById('postYoutubeUrl');
            if (ytInput) {
              var vId = extractYoutubeId(item.videoEmbed || item.youtubeUrl || item.thumb || '');
              ytInput.value = vId ? ('https://www.youtube.com/watch?v=' + vId) : (item.videoEmbed || item.thumb || '');
            }
          }

          // Fill image
          if (item.image) {
            setCurrentAttachedImage(item.image, '기존 첨부사진');
          } else {
            removeSelectedImage();
          }

          // Fill editor content
          var editor = document.getElementById('postContentEditor');
          var textarea = document.getElementById('postContent');
          var contentHtml = item.content || '';
          if (item.image) {
            var escImg = item.image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            contentHtml = contentHtml.replace(new RegExp('^\\s*!\\[[^\\]]*\\]\\(' + escImg + '\\)\\s*', 'i'), '');
          }
          if (editor) {
            editor.innerHTML = contentHtml;
          }
          if (textarea) {
            textarea.value = contentHtml;
          }

          // Close detail modal if open
          var detailModal = document.getElementById('detailModalBackdrop');
          if (detailModal && detailModal.classList.contains('is-open')) {
            closeDetailModal();
          }
        };

        window.handleDeleteFaqDirect = function(faqId) {
          var isAdminUser = false;
          var rawUser = localStorage.getItem('healim_auth_user');
          if (rawUser) {
            try {
              var u = JSON.parse(rawUser);
              if (u.role === 'admin' || u.uid === 'healim0071' || u.grade === 'superadmin') {
                isAdminUser = true;
              }
            } catch(e) {}
          }

          var list = getBoardData('faq', defaultFaqData);
          var item = list.find(function(it) { return it.id === faqId; });
          if (!item) return;

          if (!isAdminUser && item.password) {
            var inputPwd = prompt('게시글 작성 시 등록한 비밀번호를 입력해주세요:');
            if (inputPwd === null) return;
            if (inputPwd !== item.password && inputPwd !== 'healim0071') {
              alert('비밀번호가 일치하지 않습니다.');
              return;
            }
          } else if (!isAdminUser && !item.password) {
            var entered = prompt('FAQ 삭제를 위해 관리자 비밀번호를 입력해주세요:');
            if (entered === null) return;
            if (entered !== 'healim0071') {
              alert('관리자 비밀번호가 일치하지 않습니다.');
              return;
            }
          }

          if (!confirm('정말 이 FAQ를 삭제하시겠습니까?')) return;

          var filtered = list.filter(function(it) { return it.id !== faqId; });
          saveBoardData('faq', filtered);
          renderFaqList();
          try {
            window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: 'faq', action: 'delete' } }));
          } catch(e) {}
          alert('FAQ가 삭제되었습니다.');
        };

        // Hash Navigation Initialization
        function initTabFromHash() {
        var hash = window.location.hash.replace('#', '');
        if (hash === 'faq' || hash === 'reviews' || hash === 'youtube' || hash === 'columns') {
        switchCommunityTab(hash);
        } else if (hash === 'write') {
        switchCommunityTab('reviews');
        setTimeout(function() { openWriteModal('reviews'); }, 150);
        } else {
        switchCommunityTab('faq');
        }

        // Trigger daily channel auto-sync (runs once per day, checks at/after 00:00)
        setTimeout(function() {
          syncHealimtvChannel(false);
          scheduleMidnightSync();
        }, 400);
        }

        window.addEventListener('hashchange', initTabFromHash);

        if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTabFromHash);
        } else {
        initTabFromHash();
        }
        })();
        </script>
---
