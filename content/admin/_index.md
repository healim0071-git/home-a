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
                <div class="text-[11px] text-emerald-600 font-medium mt-1">실시간 로컬 동기화됨</div>
              </div>
              <div class="admin-kpi-card">
                <div class="text-xs font-semibold text-slate-500 mb-1">치료후기 (Reviews)</div>
                <div class="text-2xl font-black text-[#0369a1]" id="kpiReviewsCount">0</div>
                <div class="text-[11px] text-slate-400 mt-1">의료법 제56조 열람제한 적용</div>
              </div>
              <div class="admin-kpi-card">
                <div class="text-xs font-semibold text-slate-500 mb-1">AEO/FAQ 질문답변</div>
                <div class="text-2xl font-black text-[#b45309]" id="kpiFaqCount">0</div>
                <div class="text-[11px] text-slate-400 mt-1">AI 검색 인용 최적화</div>
              </div>
              <div class="admin-kpi-card">
                <div class="text-xs font-semibold text-slate-500 mb-1">유튜브 & 전문칼럼</div>
                <div class="text-2xl font-black text-[#6d28d9]" id="kpiMediaCount">0</div>
                <div class="text-[11px] text-slate-400 mt-1">원장단 직접 등록 콘텐츠</div>
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

          // 2. Data Retrieval Helper
          function getBoardList(type) {
            var raw = localStorage.getItem('healim_board_' + type);
            if (!raw) return [];
            try { return JSON.parse(raw); } catch(e) { return []; }
          }

          function saveBoardList(type, list) {
            localStorage.setItem('healim_board_' + type, JSON.stringify(list));
          }

          // 3. Load Dashboard & KPIs
          function loadAdminDashboard() {
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
            var filtered = list.filter(function(it) { return it.id !== id; });
            saveBoardList(board, filtered);
            alert('게시글이 삭제되었습니다.');
            loadAdminDashboard();
          };

          window.handleResetAllBoards = function() {
            if (!confirm('⚠️ 모든 게시판 데이터를 초기 기본값(Seed Data)으로 되돌리시겠습니까?\n직접 작성한 글은 초기화됩니다.')) return;
            ['reviews', 'faq', 'youtube', 'columns'].forEach(function(k) {
              localStorage.removeItem('healim_board_' + k);
            });
            alert('기본 시드 데이터로 재설정되었습니다. 커뮤니티 페이지 방문 시 자동으로 시드 데이터가 로드됩니다.');
            window.location.href = '/community/';
          };

          window.openAdminCreateModal = function() {
            window.location.href = '/community/#write';
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
