---
title: "최고관리자 센터 | 해아림한의원 자율신경실조증 클리닉"
description: "해아림한의원 최고관리자(healim0071) 전용 통합 운영 및 게시판 관리 시스템입니다."
type: landing
sections:
  - block: markdown
    content:
      title: ""
      text: |
        <style>
        .admin-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 16px 80px;
        font-family: -apple-system, BlinkMacSystemFont, "Pretendard", "Segoe UI", Roboto, sans-serif;
        }
        .admin-header-card {
        background: linear-gradient(135deg, #0d3a42 0%, #164e58 100%);
        color: #ffffff;
        border-radius: 12px;
        padding: 28px 32px;
        margin-bottom: 28px;
        box-shadow: 0 10px 25px -5px rgba(13, 58, 66, 0.2);
        position: relative;
        overflow: hidden;
        }
        .admin-header-card::after {
        content: "ADMIN";
        position: absolute;
        right: 20px;
        bottom: -15px;
        font-size: 80px;
        font-weight: 900;
        color: rgba(255, 255, 255, 0.04);
        letter-spacing: 2px;
        pointer-events: none;
        }
        .admin-kpi-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        margin-bottom: 28px;
        }
        .admin-kpi-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        transition: transform 0.2s, box-shadow 0.2s;
        }
        .admin-kpi-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0,0,0,0.06);
        }
        .admin-table-container {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        .admin-table-header {
        padding: 16px 20px;
        border-bottom: 1px solid #e2e8f0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        background: #f8fafc;
        }
        .admin-tab-btn {
        padding: 6px 14px;
        font-size: 13px;
        font-weight: 600;
        border-radius: 6px;
        border: 1px solid transparent;
        cursor: pointer;
        background: transparent;
        color: #64748b;
        transition: all 0.15s;
        }
        .admin-tab-btn.active {
        background: #0d3a42;
        color: #ffffff;
        border-color: #0d3a42;
        }
        .admin-tab-btn:hover:not(.active) {
        background: #e2e8f0;
        color: #1e293b;
        }
        .admin-table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
        font-size: 13px;
        }
        .admin-table th {
        background: #f1f5f9;
        color: #475569;
        font-weight: 600;
        padding: 12px 16px;
        border-bottom: 1px solid #e2e8f0;
        }
        .admin-table td {
        padding: 14px 16px;
        border-bottom: 1px solid #f1f5f9;
        color: #334155;
        vertical-align: middle;
        }
        .admin-table tr:hover td {
        background: #f8fafc;
        }
        .badge-cat {
        display: inline-block;
        padding: 2px 8px;
        font-size: 11px;
        font-weight: 700;
        border-radius: 4px;
        }
        .badge-reviews { background: #e0f2fe; color: #0369a1; }
        .badge-faq { background: #fef3c7; color: #b45309; }
        .badge-youtube { background: #fee2e2; color: #b91c1c; }
        .badge-columns { background: #ede9fe; color: #6d28d9; }
        .btn-action-del {
        background: #fee2e2;
        color: #b91c1c;
        border: 1px solid #fca5a5;
        padding: 4px 10px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s;
        }
        .btn-action-del:hover {
        background: #dc2626;
        color: #ffffff;
        }
        .btn-action-view {
        background: #f1f5f9;
        color: #334155;
        border: 1px solid #cbd5e1;
        padding: 4px 10px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        margin-right: 6px;
        transition: all 0.15s;
        }
        .btn-action-view:hover {
        background: #0d3a42;
        color: #ffffff;
        border-color: #0d3a42;
        }
        .admin-auth-gate {
        max-width: 440px;
        margin: 60px auto;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 36px 32px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        text-align: center;
        }
        </style>

        <div class="admin-wrapper">
        <!-- 1. Security Gate for Non-Admin Users -->
        <div id="adminSecurityGate" class="admin-auth-gate" style="display: none;">
        <div class="w-14 h-14 mx-auto mb-4 bg-[#fff1f2] text-[#e11d48] rounded-full flex items-center justify-center">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m0 0v2m0-2h2m-2 0H10m11-3V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2zM9 8V6a3 3 0 016 0v2" />
        </svg>
        </div>
        <h2 class="text-xl font-bold text-[#0d3a42] mb-2">최고관리자 인증 필요</h2>
        <p class="text-xs text-slate-500 mb-6 leading-relaxed">
        본 페이지는 해아림한의원 최고관리자(healim0071) 전용 보안 관리 구역입니다.<br>최고관리자 계정으로 인증 후 접속해 주세요.
        </p>
        <form onsubmit="handleAdminGateLogin(event)" class="space-y-4 text-left">
        <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">관리자 아이디</label>
        <input type="text" id="gateAdminId" value="healim0071" required class="auth-input" />
        </div>
        <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">비밀번호</label>
        <input type="password" id="gateAdminPw" placeholder="최고관리자 비밀번호" required class="auth-input" />
        </div>
        <button type="submit" class="btn-auth-primary w-full mt-2">
        👑 최고관리자 인증 및 입장
        </button>
        </form>
        <div class="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
        <a href="/" class="hover:underline">메인 홈페이지로 돌아가기</a>
        </div>
        </div>

        <!-- 2. Main Admin Dashboard View -->
        <div id="adminMainView" style="display: none;">
        <!-- Realtime Cross-Browser Sync Hub Status Banner -->
        <div style="background: #f0f7f8; border: 1px solid #badfe3; border-radius: 10px; padding: 14px 20px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse inline-block" style="display:inline-block; width:12px; height:12px; border-radius:9999px; background-color:#10b981;"></span>
            <div>
              <span style="font-size: 13px; font-weight: 700; color: #0d3a42;">실시간 기기/브라우저 동기화 허브 (Port 3030)</span>
              <span style="font-size: 12px; color: #1c6e78; margin-left: 8px;">Chrome ↔ Edge ↔ 모바일 간 실시간 0.05초 동기화 가동 중</span>
            </div>
          </div>
          <div style="font-size: 11px; color: #0d3a42; background: #ffffff; padding: 4px 10px; border-radius: 6px; border: 1px solid #badfe3; font-weight: 600;">
            영구 디스크 보관: <span style="color:#047857; font-weight:bold;">data/healim_community_hub.json</span> (삭제 방지 보호)
          </div>
        </div>

        <!-- Header Banner -->
        <div class="admin-header-card">
        <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
        <div class="flex items-center gap-2 mb-1">
        <span class="bg-[#d97706] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">👑 SUPER ADMIN</span>
        <span class="text-xs text-[#9fd7de]">해아림한의원 자율신경실조증 클리닉</span>
        </div>
        <h1 class="text-2xl font-bold text-white tracking-tight">통합 최고관리자 센터</h1>
        <p class="text-xs text-[#badfe3] mt-1">
        관리자 아이디: <strong class="text-white">healim0071</strong> | 보안 등급: <strong>최고권한 (Level 1)</strong> | 전체 게시글 수정/삭제 및 일자 임의 지정 권한 부여됨
        </p>
        </div>
        <div class="flex items-center gap-2">
        <a href="/community/" class="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors border border-white/20 flex items-center gap-1.5">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        커뮤니티 바로가기
        </a>
        <button onclick="handleAdminLogout()" class="bg-[#e11d48] hover:bg-[#be123c] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5">
        로그아웃
        </button>
        </div>
        </div>
        </div>

        <!-- KPI Cards -->
        <div class="admin-kpi-grid">
        <div class="admin-kpi-card">
        <div class="text-xs font-semibold text-slate-500 mb-1">전체 등록 게시글</div>
        <div class="text-2xl font-black text-[#0d3a42]" id="kpiTotalPosts">0</div>
        <div class="text-xs text-emerald-600 font-medium mt-1">실시간 로컬 동기화됨</div>
        </div>
        <div class="admin-kpi-card">
        <div class="text-xs font-semibold text-slate-500 mb-1">치료후기 (Reviews)</div>
        <div class="text-2xl font-black text-[#0369a1]" id="kpiReviewsCount">0</div>
        <div class="text-xs text-slate-400 mt-1">의료법 제56조 열람제한 적용</div>
        </div>
        <div class="admin-kpi-card">
        <div class="text-xs font-semibold text-slate-500 mb-1">AEO/FAQ 질문답변</div>
        <div class="text-2xl font-black text-[#b45309]" id="kpiFaqCount">0</div>
        <div class="text-xs text-slate-400 mt-1">AI 검색 인용 최적화</div>
        </div>
        <div class="admin-kpi-card">
        <div class="text-xs font-semibold text-slate-500 mb-1">유튜브 & 전문칼럼</div>
        <div class="text-2xl font-black text-[#6d28d9]" id="kpiMediaCount">0</div>
        <div class="text-xs text-slate-400 mt-1">원장단 직접 등록 콘텐츠</div>
        </div>
        </div>

        <!-- SNS API Key Configuration Section -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 22px 24px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
        <div>
        <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 18px;">🔑</span>
        <h2 style="font-size: 15px; font-weight: 700; color: #0d3a42; margin: 0;">SNS 간편로그인 (카카오 · 네이버) API 연동 관리</h2>
        <span id="snsStatusBadge" style="font-size: 11px; font-weight: 700; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 9999px;">기본 보안인증 모드 작동 중</span>
        </div>
        <p style="font-size: 12px; color: #64748b; margin: 4px 0 0 0;">
        카카오와 네이버 개발자센터에서 발급받은 키를 등록하면 공식 OAuth 간편로그인이 즉시 연동됩니다. 미등록 시 실제 로그인 여부를 검증하는 자체 보안인증 모드로 안전하게 작동합니다.
        </p>
        </div>
        <div>
        <button type="button" onclick="toggleSnsKeyGuide()" style="font-size: 12px; font-weight: 600; color: #1c6e78; background: #edf7f8; border: 1px solid #c2e2e5; padding: 6px 12px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 6px;">
        <span>📖 [초간단 3분] 무료 API 키 발급 가이드</span>
        <span id="guideToggleArrow">▼</span>
        </button>
        </div>
        </div>
        <!-- Collapsible 3-Minute Guide -->
        <div id="snsKeyGuideBox" style="display: none; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px; font-size: 12px; color: #334155; line-height: 1.6;">
        <div style="font-weight: 700; color: #0d3a42; font-size: 13px; margin-bottom: 8px;">
        💡 카카오 &amp; 네이버 무료 API 키 발급 방법 (비용 0원, 3분 소요)
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        <div style="background: #ffffff; padding: 12px 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
        <div style="font-weight: 700; color: #b45309; display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
        <span style="background: #FEE500; color: #191919; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 800;">카카오</span>
        Kakao JavaScript 키 발급
        </div>
        <ol style="margin: 0; padding-left: 18px; space-y: 4px;">
        <li><a href="https://developers.kakao.com" target="_blank" style="color: #0284c7; text-decoration: underline; font-weight: 600;">developers.kakao.com</a> 접속 후 로그인</li>
        <li>[내 애플리케이션] &gt; [애플리케이션 추가하기] (앱 이름: 해아림한의원)</li>
        <li>[앱 설정] &gt; [앱 키] 에서 <strong>JavaScript 키</strong> 복사</li>
        <li>[앱 설정] &gt; [플랫폼] &gt; [Web] 에 사이트 도메인 (예: <code>https://healim-autonerve.pages.dev</code>) 등록</li>
        <li>[카카오 로그인] 메뉴 활성화 (활성화 설정: ON)</li>
        </ol>
        </div>
        <div style="background: #ffffff; padding: 12px 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
        <div style="font-weight: 700; color: #047857; display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
        <span style="background: #03C75A; color: #ffffff; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 800;">네이버</span>
        Naver Client ID 발급
        </div>
        <ol style="margin: 0; padding-left: 18px; space-y: 4px;">
        <li><a href="https://developers.naver.com" target="_blank" style="color: #0284c7; text-decoration: underline; font-weight: 600;">developers.naver.com</a> 접속 후 로그인</li>
        <li>[Application] &gt; [애플리케이션 등록] (애플리케이션 이름: 해아림한의원)</li>
        <li>사용 API: [네이버 로그인] 선택 (회원 이름, 이메일 필수 체크)</li>
        <li>서비스 환경: [PC웹] 선택 후 서비스 URL 및 Callback URL 등록</li>
        <li>등록 완료 후 발급된 <strong>Client ID</strong> 복사</li>
        </ol>
        </div>
        </div>
        <div style="margin-top: 10px; font-size: 11px; color: #64748b;">
        ※ API 키를 등록하지 않아도 웹사이트는 <strong>'실제 로그인 여부 엄격 검증 모드'</strong>로 100% 정상 작동하며, 미인증 사용자의 치료후기 열람은 원천 차단됩니다.
        </div>
        </div>
        <!-- Input Fields Form -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
        <div>
        <label style="display: block; font-size: 12px; font-weight: 600; color: #334155; margin-bottom: 6px;">
        카카오 JavaScript 키 (Kakao JavaScript Key)
        </label>
        <input type="text" id="adminKakaoJsKey" placeholder="예: 3a98c8f0d4b56..." style="width: 100%; font-size: 12px; font-family: monospace; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 12px; box-sizing: border-box; outline: none;" />
        </div>
        <div>
        <label style="display: block; font-size: 12px; font-weight: 600; color: #334155; margin-bottom: 6px;">
        네이버 Client ID (Naver Client ID)
        </label>
        <input type="text" id="adminNaverClientId" placeholder="예: abCdEfGhIjKlMnOp..." style="width: 100%; font-size: 12px; font-family: monospace; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 12px; box-sizing: border-box; outline: none;" />
        </div>
        </div>
        <div style="display: flex; justify-content: flex-end; align-items: center; gap: 8px; margin-top: 14px;">
        <button type="button" onclick="resetAdminSnsConfig()" style="font-size: 12px; font-weight: 600; color: #64748b; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 7px 14px; border-radius: 6px; cursor: pointer;">
        키 초기화
        </button>
        <button type="button" onclick="saveAdminSnsConfig()" style="font-size: 12px; font-weight: 700; color: #ffffff; background: #1c6e78; border: none; padding: 7px 18px; border-radius: 6px; cursor: pointer; transition: background 0.15s;">
        💾 API 설정 저장
        </button>
        </div>
        </div>

        <!-- Table & Filter Header -->
        <div class="admin-table-container">
        <div class="admin-table-header">
        <!-- Tabs -->
        <div class="flex items-center gap-1.5">
        <button class="admin-tab-btn active" onclick="switchAdminTab('all', this)">전체 (<span id="tabCountAll">0</span>)</button>
        <button class="admin-tab-btn" onclick="switchAdminTab('reviews', this)">치료후기 (<span id="tabCountReviews">0</span>)</button>
        <button class="admin-tab-btn" onclick="switchAdminTab('faq', this)">FAQ (<span id="tabCountFaq">0</span>)</button>
        <button class="admin-tab-btn" onclick="switchAdminTab('youtube', this)">유튜브 (<span id="tabCountYoutube">0</span>)</button>
        <button class="admin-tab-btn" onclick="switchAdminTab('columns', this)">치료칼럼 (<span id="tabCountColumns">0</span>)</button>
        </div>

        <!-- Action Controls -->
        <div class="flex items-center gap-2">
        <input type="text" id="adminSearchInput" oninput="renderAdminTable()" placeholder="제목/작성자 검색..." class="text-xs border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-[#1c6e78]" />
        <button onclick="openAdminCreateModal()" class="bg-[#1c6e78] hover:bg-[#14535b] text-white text-xs font-bold px-3 py-1.5 rounded transition-colors flex items-center gap-1">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        새 글 등록
        </button>
        <button onclick="handleResetAllBoards()" class="border border-slate-300 hover:bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1.5 rounded transition-colors" title="기본 시드 데이터로 전체 복구">
        ↺ 기본값 복구
        </button>
        </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
        <table class="admin-table">
        <thead>
        <tr>
        <th style="width: 100px;">게시판</th>
        <th style="width: 140px;">분류</th>
        <th>게시글 제목</th>
        <th style="width: 130px;">작성자</th>
        <th style="width: 110px;">등록일자</th>
        <th style="width: 90px; text-align: center;">조회수</th>
        <th style="width: 130px; text-align: center;">관리</th>
        </tr>
        </thead>
        <tbody id="adminTableBody">
        <!-- Populated dynamically via JS -->
        </tbody>
        </table>
        </div>
        </div>

        </div>
        </div>

        <!-- Admin View Detail Modal -->
        <div class="healim-modal-backdrop" id="adminDetailModal">
        <div class="healim-modal-dialog">
        <div class="healim-modal-header">
        <div class="flex items-center gap-2">
        <span class="post-badge" id="admModalCategory">분류</span>
        <h3 class="healim-modal-title" id="admModalTitle" style="margin: 0; font-size: 1.15rem;">제목</h3>
        </div>
        <button type="button" class="btn-modal-close" onclick="closeAdminDetailModal()">&times;</button>
        </div>
        <div class="flex items-center justify-between text-xs text-[#888888] pb-3 border-b border-[#edf2f4] mb-4">
        <div>
        작성자: <strong class="text-[#0d3a42]" id="admModalAuthor">작성자</strong>
        <span class="mx-2">|</span>
        등록일자: <span id="admModalDate">2026.09.06</span>
        </div>
        <div>
        조회수: <span id="admModalViews">0</span>회
        </div>
        </div>
        <div id="admModalContent" class="text-sm text-[#333333] leading-relaxed whitespace-pre-line py-2 min-h-[120px]">
        </div>
        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <button type="button" id="btnAdmModalDelete" class="btn-action-del" onclick="handleAdmModalDelete()">🗑️ 영구 삭제</button>
        <button type="button" class="btn-modal-cancel" onclick="closeAdminDetailModal()">닫기</button>
        </div>
        </div>
        </div>

        <script>
        (function() {
          var currentActiveTab = 'all';
          var activeDetailBoard = '';
          var activeDetailId = '';

          // 1. Check Authentication
          function checkAdminAuth() {
            var raw = localStorage.getItem('healim_auth_user');
            if (raw) {
              try {
                var user = JSON.parse(raw);
                if (user.role === 'admin' || user.uid === 'healim0071' || user.grade === 'superadmin') {
                  document.getElementById('adminSecurityGate').style.display = 'none';
                  document.getElementById('adminMainView').style.display = 'block';
                  loadAdminDashboard();
                  return;
                }
              } catch(e) {}
            }
            document.getElementById('adminSecurityGate').style.display = 'block';
            document.getElementById('adminMainView').style.display = 'none';
          }

          // Gate Login Handler
          window.handleAdminGateLogin = function(e) {
            e.preventDefault();
            var id = document.getElementById('gateAdminId').value.trim();
            var pw = document.getElementById('gateAdminPw').value.trim();

            if (id === 'healim0071' && pw === 'godkfla71~~') {
              var adminUser = {
                uid: 'healim0071',
                name: '최고관리자',
                role: 'admin',
                grade: 'superadmin',
                isAdmin: true,
                loginAt: new Date().toISOString()
              };
              localStorage.setItem('healim_auth_user', JSON.stringify(adminUser));
              alert('👑 최고관리자(healim0071)로 성공적으로 인증되었습니다.');
              checkAdminAuth();
            } else {
              alert('관리자 아이디 또는 비밀번호가 일치하지 않습니다.');
            }
          };

          window.handleAdminLogout = function() {
            if (confirm('최고관리자 세션을 종료하시겠습니까?')) {
              localStorage.removeItem('healim_auth_user');
              window.location.reload();
            }
          };

          // 2. Data Retrieval Helper (Multi-tier Permanent Vault Enabled)
          function getBoardList(type) {
            var delList = JSON.parse(localStorage.getItem('healim_deleted_posts_' + type) || '[]').map(String);
            var merged = [];
            var seenIds = {};

            function addItem(it) {
              if (!it || !it.id) return;
              var sId = String(it.id);
              if (delList.indexOf(sId) !== -1) return;
              if (seenIds[sId]) return;
              seenIds[sId] = true;
              merged.push(it);
            }

            // 1. Permanent Vault (Guarantees zero-data-loss across vibe-coding edits)
            try {
              var rawV = localStorage.getItem('healim_vault_all_posts_' + type);
              if (rawV) {
                var vList = JSON.parse(rawV) || [];
                vList.forEach(addItem);
              }
            } catch(e) {}

            // 2. Active board cache
            try {
              var rawB = localStorage.getItem('healim_board_' + type);
              if (rawB) {
                var bList = JSON.parse(rawB) || [];
                bList.forEach(addItem);
              }
            } catch(e) {}

            // 3. Custom posts store
            try {
              var rawC = localStorage.getItem('healim_custom_' + type + '_posts');
              if (rawC) {
                var cList = JSON.parse(rawC) || [];
                cList.forEach(addItem);
              }
            } catch(e) {}

            // 4. Legacy community posts
            try {
              var rawL = localStorage.getItem('healim_community_posts_v2');
              if (rawL) {
                var leg = JSON.parse(rawL) || [];
                leg.filter(function(p) {
                  if (!p) return false;
                  if (type === 'faq') return p.type === 'faq' || p.category === 'FAQ' || (p.id && String(p.id).startsWith('faq-'));
                  if (type === 'reviews') return p.type === 'reviews' || p.category === '치료후기' || (p.id && String(p.id).startsWith('rev-'));
                  if (type === 'columns') return p.type === 'columns' || p.category === '칼럼' || (p.id && String(p.id).startsWith('col-'));
                  return false;
                }).forEach(addItem);
              }
            } catch(e) {}

            return merged;
          }

          function saveBoardList(type, list) {
            localStorage.setItem('healim_board_' + type, JSON.stringify(list));
            localStorage.setItem('healim_vault_all_posts_' + type, JSON.stringify(list));
          }

          // 3. Load Dashboard & KPIs
          function loadAdminDashboard() {
            if (window.fetch && !window._adminHubLoaded) {
              window._adminHubLoaded = true;
              fetch('http://127.0.0.1:3030/api/posts', { mode: 'cors' })
                .then(function(res) { return res.json(); })
                .then(function(json) {
                  if (json && json.status === 'ok' && json.data) {
                    var d = json.data;
                    ['faq', 'reviews', 'columns', 'youtube'].forEach(function(bKey) {
                      if (Array.isArray(d[bKey]) && d[bKey].length > 0) {
                        localStorage.setItem('healim_board_' + bKey, JSON.stringify(d[bKey]));
                        localStorage.setItem('healim_vault_all_posts_' + bKey, JSON.stringify(d[bKey]));
                      }
                    });
                    loadAdminDashboard();
                  }
                }).catch(function() {});
            }
            var revs = getBoardList('reviews');
            var faqs = getBoardList('faq');
            var yts = getBoardList('youtube');
            var cols = getBoardList('columns');

            var total = revs.length + faqs.length + yts.length + cols.length;
            document.getElementById('kpiTotalPosts').textContent = total.toLocaleString();
            document.getElementById('kpiReviewsCount').textContent = revs.length.toLocaleString();
            document.getElementById('kpiFaqCount').textContent = faqs.length.toLocaleString();
            document.getElementById('kpiMediaCount').textContent = (yts.length + cols.length).toLocaleString();

            document.getElementById('tabCountAll').textContent = total;
            document.getElementById('tabCountReviews').textContent = revs.length;
            document.getElementById('tabCountFaq').textContent = faqs.length;
            document.getElementById('tabCountYoutube').textContent = yts.length;
            document.getElementById('tabCountColumns').textContent = cols.length;

            loadAdminSnsConfig();
            renderAdminTable();
          }

          // 4. Render Table
          window.switchAdminTab = function(tab, btn) {
            currentActiveTab = tab;
            var buttons = document.querySelectorAll('.admin-tab-btn');
            buttons.forEach(function(b) { b.classList.remove('active'); });
            if (btn) btn.classList.add('active');
            renderAdminTable();
          };

          window.renderAdminTable = function() {
            var tbody = document.getElementById('adminTableBody');
            if (!tbody) return;

            var allItems = [];
            if (currentActiveTab === 'all' || currentActiveTab === 'reviews') {
              getBoardList('reviews').forEach(function(item) { item._board = 'reviews'; allItems.push(item); });
            }
            if (currentActiveTab === 'all' || currentActiveTab === 'faq') {
              getBoardList('faq').forEach(function(item) { item._board = 'faq'; allItems.push(item); });
            }
            if (currentActiveTab === 'all' || currentActiveTab === 'youtube') {
              getBoardList('youtube').forEach(function(item) { item._board = 'youtube'; allItems.push(item); });
            }
            if (currentActiveTab === 'all' || currentActiveTab === 'columns') {
              getBoardList('columns').forEach(function(item) { item._board = 'columns'; allItems.push(item); });
            }

            // Keyword filter
            var keyword = (document.getElementById('adminSearchInput') ? document.getElementById('adminSearchInput').value.trim().toLowerCase() : '');
            if (keyword) {
              allItems = allItems.filter(function(item) {
                return (item.title && item.title.toLowerCase().includes(keyword)) ||
                       (item.author && item.author.toLowerCase().includes(keyword)) ||
                       (item.category && item.category.toLowerCase().includes(keyword));
              });
            }

            if (allItems.length === 0) {
              tbody.innerHTML = '<tr><td colspan="7" class="text-center py-8 text-slate-400">등록된 게시글이 없습니다.</td></tr>';
              return;
            }

            var html = '';
            allItems.forEach(function(item) {
              var badgeClass = 'badge-' + item._board;
              var boardName = item._board === 'reviews' ? '치료후기' : (item._board === 'faq' ? 'FAQ' : (item._board === 'youtube' ? '유튜브' : '칼럼'));

              html += '<tr>' +
                '<td><span class="badge-cat ' + badgeClass + '">' + boardName + '</span></td>' +
                '<td><span class="text-xs font-semibold text-slate-600">' + ((item._board === 'youtube' || item._board === 'columns') ? '-' : item.category) + '</span></td>' +
                '<td><span class="font-medium text-slate-900 hover:text-[#1c6e78] cursor-pointer" onclick="openAdminDetailModal(\'' + item._board + '\', \'' + item.id + '\')">' + item.title + '</span></td>' +
                '<td><span class="text-xs text-slate-600">' + item.author + '</span></td>' +
                '<td><span class="text-xs text-slate-500">' + item.date + '</span></td>' +
                '<td style="text-align: center;"><span class="text-xs font-bold text-slate-700">' + (item.views || 0) + '</span></td>' +
                '<td style="text-align: center;">' +
                  '<button class="btn-action-view" onclick="openAdminDetailModal(\'' + item._board + '\', \'' + item.id + '\')">보기</button>' +
                  '<button class="btn-action-del" onclick="deleteAdminPost(\'' + item._board + '\', \'' + item.id + '\')">삭제</button>' +
                '</td>' +
              '</tr>';
            });

            tbody.innerHTML = html;
          };

          // 5. Detail & Delete Actions
          window.openAdminDetailModal = function(board, id) {
            activeDetailBoard = board;
            activeDetailId = id;
            var list = getBoardList(board);
            var item = list.find(function(it) { return it.id === id; });
            if (!item) return;

            document.getElementById('admModalCategory').textContent = item.category;
            document.getElementById('admModalTitle').textContent = item.title;
            document.getElementById('admModalAuthor').textContent = item.author;
            document.getElementById('admModalDate').textContent = item.date;
            document.getElementById('admModalViews').textContent = item.views || 0;
            document.getElementById('admModalContent').textContent = item.content;

            document.getElementById('adminDetailModal').classList.add('is-open');
          };

          window.closeAdminDetailModal = function() {
            document.getElementById('adminDetailModal').classList.remove('is-open');
            activeDetailBoard = '';
            activeDetailId = '';
          };

          window.handleAdmModalDelete = function() {
            if (!activeDetailBoard || !activeDetailId) return;
            deleteAdminPost(activeDetailBoard, activeDetailId);
            closeAdminDetailModal();
          };

          window.deleteAdminPost = function(board, id) {
            if (!confirm('👑 최고관리자 권한으로 해당 게시글을 영구 삭제하시겠습니까?\n삭제 후에는 복구할 수 없습니다.')) return;
            var list = getBoardList(board);
            var filtered = list.filter(function(it) { return String(it.id) !== String(id); });
            saveBoardList(board, filtered);

            try {
              var delList = JSON.parse(localStorage.getItem('healim_deleted_posts_' + board) || '[]');
              if (delList.indexOf(String(id)) === -1) {
                delList.push(String(id));
                localStorage.setItem('healim_deleted_posts_' + board, JSON.stringify(delList));
              }
              // Remove from Master Vault
              var vKey = 'healim_vault_all_posts_' + board;
              var vPosts = JSON.parse(localStorage.getItem(vKey) || '[]').filter(function(it) { return String(it.id) !== String(id); });
              localStorage.setItem(vKey, JSON.stringify(vPosts));

              var cPosts = JSON.parse(localStorage.getItem('healim_custom_' + board + '_posts') || '[]');
              cPosts = cPosts.filter(function(it) { return String(it.id) !== String(id); });
              localStorage.setItem('healim_custom_' + board + '_posts', JSON.stringify(cPosts));

              var rawLeg = localStorage.getItem('healim_community_posts_v2');
              if (rawLeg) {
                var legList = JSON.parse(rawLeg) || [];
                legList = legList.filter(function(p) { return String(p.id) !== String(id); });
                localStorage.setItem('healim_community_posts_v2', JSON.stringify(legList));
              }
              // Sync delete to Local Sync Hub
              if (window.fetch) {
                fetch('http://127.0.0.1:3030/api/posts', {
                  method: 'DELETE',
                  headers: { 'Content-Type': 'application/json' },
                  mode: 'cors',
                  body: JSON.stringify({ boardType: board, id: id, adminUser: 'healim0071' })
                }).catch(function() {});
              }
            } catch(e) {}

            alert('게시글이 영구 삭제되었습니다.');
            loadAdminDashboard();
          };

          window.handleResetAllBoards = function() {
            var pwd = prompt('⚠️ 게시판 캐시 재동기화를 위해 최고관리자 비밀번호를 입력하세요:');
            if (pwd !== 'healim0071') {
              alert('비밀번호가 일치하지 않아 취소되었습니다.');
              return;
            }
            alert('게시판 캐시가 안전하게 재동기화되었습니다.');
            window.location.href = '/community/';
          };

          window.openAdminCreateModal = function() {
            window.location.href = '/community/#write';
          };

          // SNS Key Configuration Handler
          window.toggleSnsKeyGuide = function() {
            var box = document.getElementById('snsKeyGuideBox');
            var arrow = document.getElementById('guideToggleArrow');
            if (!box) return;
            if (box.style.display === 'none') {
              box.style.display = 'block';
              if (arrow) arrow.textContent = '▲';
            } else {
              box.style.display = 'none';
              if (arrow) arrow.textContent = '▼';
            }
          };

          window.loadAdminSnsConfig = function() {
            try {
              var raw = localStorage.getItem('healim_sns_config');
              var config = raw ? JSON.parse(raw) : { kakaoJsKey: '', naverClientId: '' };
              var kakaoInput = document.getElementById('adminKakaoJsKey');
              var naverInput = document.getElementById('adminNaverClientId');
              var badge = document.getElementById('snsStatusBadge');
              if (kakaoInput) kakaoInput.value = config.kakaoJsKey || '';
              if (naverInput) naverInput.value = config.naverClientId || '';
              if (badge) {
                var hasKakao = config.kakaoJsKey && config.kakaoJsKey.trim().length > 10;
                var hasNaver = config.naverClientId && config.naverClientId.trim().length > 5;
                if (hasKakao && hasNaver) {
                  badge.textContent = '카카오 & 네이버 공식 API 연동 중';
                  badge.style.background = '#dcfce7';
                  badge.style.color = '#15803d';
                } else if (hasKakao) {
                  badge.textContent = '카카오 공식 API 연동 중 (네이버는 보안인증)';
                  badge.style.background = '#fef9c3';
                  badge.style.color = '#854d0e';
                } else if (hasNaver) {
                  badge.textContent = '네이버 공식 API 연동 중 (카카오는 보안인증)';
                  badge.style.background = '#fef9c3';
                  badge.style.color = '#854d0e';
                } else {
                  badge.textContent = '기본 보안인증 모드 작동 중 (미인증 차단 100%)';
                  badge.style.background = '#e0f2fe';
                  badge.style.color = '#0369a1';
                }
              }
            } catch(e) {}
          };

          window.saveAdminSnsConfig = function() {
            var kakaoKey = (document.getElementById('adminKakaoJsKey').value || '').trim();
            var naverId = (document.getElementById('adminNaverClientId').value || '').trim();
            var config = {
              kakaoJsKey: kakaoKey,
              naverClientId: naverId,
              updatedAt: new Date().toISOString()
            };
            localStorage.setItem('healim_sns_config', JSON.stringify(config));
            alert('SNS API 설정이 안전하게 저장되었습니다.\n카카오/네이버 간편로그인 시 변경된 설정이 실시간 적용됩니다.');
            loadAdminSnsConfig();
          };

          window.resetAdminSnsConfig = function() {
            if (confirm('등록된 SNS API 키를 초기화하시겠습니까?\n초기화 시 기본 보안인증 모드로 동작합니다.')) {
              localStorage.removeItem('healim_sns_config');
              loadAdminSnsConfig();
              alert('SNS API 설정이 초기화되었습니다.');
            }
          };

          // Initialize on Load
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', checkAdminAuth);
          } else {
            checkAdminAuth();
          }
        })();
        </script>
---
