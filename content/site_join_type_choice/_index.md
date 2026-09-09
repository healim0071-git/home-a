---
title: "회원가입 종류 선택 | 해아림한의원 자율신경실조증 클리닉"
description: "해아림한의원 통합 회원가입 페이지입니다. 간편가입 및 일반 회원가입을 통해 1:1 맞춤 진료 상담 및 치료후기를 열람하실 수 있습니다."
type: landing
sections:
  - block: markdown
    content:
      title: ""
      text: |
        <div class="healim-auth-container">
        <div class="healim-auth-box">

        <!-- Logo Header -->
        <div class="text-center mb-8">
        <a href="/" title="해아림한의원">
        <img src="/images/healim_logo.png" alt="해아림한의원" class="h-10 mx-auto object-contain mb-3" style="image-rendering: -webkit-optimize-contrast;">
        </a>
        <h1 class="text-xl font-bold text-[#0d3a42] tracking-tight">회원가입</h1>
        <p class="text-xs text-[#666666] mt-1">간편 가입으로 빠르고 안전하게 시작하세요.</p>
        </div>

        <!-- Choice 1: Naver Easy Registration / Login -->
        <div id="joinChoiceView">
        <div class="mb-6">
        <button type="button" onclick="handleSocialRegister('naver')" class="btn-sns-naver">
        <span class="font-extrabold text-base">N</span>
        <span>네이버 아이디로 간편가입 / 로그인</span>
        </button>
        </div>

        <!-- Divider -->
        <div class="auth-divider">
        <span>또는</span>
        </div>

        <!-- Standard Registration Button -->
        <div class="mt-4">
        <button type="button" onclick="showStandardJoinForm()" class="w-full py-3 px-4 rounded-lg border-2 border-[#1c6e78] text-[#1c6e78] font-bold text-sm hover:bg-[#edf7f8] transition-colors flex items-center justify-center gap-2">
        <span>✉️</span>
        <span>ID/PW 회원가입</span>
        </button>
        </div>

        <!-- Back to Login -->
        <div class="text-center mt-6 pt-5 border-t border-[#f0f4f5]">
        <span class="text-xs text-[#666666]">이미 계정이 있으신가요? </span>
        <a id="loginRedirectLink" href="/login/" class="text-xs text-[#1c6e78] font-bold hover:underline">로그인</a>
        </div>
        </div>

        <!-- Standard ID/PW Full Registration Form (Initially Hidden) -->
        <div id="standardJoinForm" class="hidden">
        <form onsubmit="handleStandardRegister(event)" class="space-y-3.5">
        <div>
        <label class="block text-xs font-semibold text-[#0d3a42] mb-1">이름</label>
        <input type="text" id="regName" required placeholder="실명 입력" class="auth-input" />
        </div>
        <div>
        <label class="block text-xs font-semibold text-[#0d3a42] mb-1">아이디(이메일)</label>
        <input type="email" id="regEmail" required placeholder="example@email.com" class="auth-input" />
        </div>
        <div>
        <label class="block text-xs font-semibold text-[#0d3a42] mb-1">비밀번호</label>
        <input type="password" id="regPasswd" required placeholder="8자 이상 영문, 숫자 조합" class="auth-input" />
        </div>
        <div>
        <label class="block text-xs font-semibold text-[#0d3a42] mb-1">비밀번호 확인</label>
        <input type="password" id="regPasswdConfirm" required placeholder="비밀번호 재입력" class="auth-input" />
        </div>
        <div>
        <label class="block text-xs font-semibold text-[#0d3a42] mb-1">연락처</label>
        <input type="tel" id="regPhone" required placeholder="010-1234-5678" class="auth-input" />
        </div>

        <!-- Terms checkbox -->
        <div class="pt-2 border-t border-[#f0f4f5] text-xs text-[#555555] space-y-2">
        <label class="flex items-start gap-2 cursor-pointer">
        <input type="checkbox" id="regAgreeAll" required class="mt-0.5 rounded text-[#1c6e78] focus:ring-[#1c6e78]">
        <span><strong>[필수]</strong> 이용약관 및 개인정보 수집·이용 동의</span>
        </label>
        <label class="flex items-start gap-2 cursor-pointer">
        <input type="checkbox" id="regAgreeMedical" checked class="mt-0.5 rounded text-[#1c6e78] focus:ring-[#1c6e78]">
        <span>[선택] 의료법 제56조 준수 치료후기 열람 회원 등록 동의</span>
        </label>
        </div>

        <div class="pt-3 flex gap-2">
        <button type="button" onclick="hideStandardJoinForm()" class="w-1/3 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-600 hover:bg-slate-100">
        이전
        </button>
        <button type="submit" class="w-2/3 py-2.5 rounded-lg bg-[#1c6e78] text-white text-xs font-bold hover:bg-[#15555c] transition-colors shadow-xs">
        가입 완료
        </button>
        </div>
        </form>
        </div>
        </div>

        <!-- Naver Authentication Modal Dialog (Safe Mode: No password required) -->
        <div id="snsAuthModalBackdrop" style="display: none; position: fixed; inset: 0; background: rgba(13, 58, 66, 0.6); z-index: 99999; align-items: center; justify-content: center; padding: 16px; backdrop-filter: blur(4px);">
        <div style="background: #ffffff; width: 100%; max-width: 400px; border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); overflow: hidden; animation: healimPop 0.2s ease-out; border: 1px solid #e2e8f0;">
        <!-- Modal Header -->
        <div id="snsModalHeader" style="padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; background-color: #03C75A; color: #FFFFFF; border-bottom: 1px solid #e2e8f0;">
        <div style="display: flex; align-items: center; gap: 8px;">
        <span id="snsModalIcon" style="font-size: 18px; font-weight: 900; display: flex; align-items: center;">N</span>
        <h3 id="snsModalTitle" style="margin: 0; font-size: 15px; font-weight: 700; color: #FFFFFF;">네이버 아이디로 간편가입 / 로그인</h3>
        </div>
        <button type="button" onclick="cancelSnsAuth()" style="background: none; border: none; font-size: 22px; cursor: pointer; color: #FFFFFF; line-height: 1; padding: 0;" title="닫기">&times;</button>
        </div>

        <!-- Modal Content -->
        <div style="padding: 20px;">
        <div id="snsModalNotice" style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px; margin-bottom: 16px; font-size: 12px; color: #166534; line-height: 1.5;">
        <strong style="color: #14532d; display: block; margin-bottom: 4px;">🔒 의료법 제56조 준수 정회원 등록</strong>
        환자의 실제 치료후기 및 호전 사례는 의료법령에 따라 로그인한 회원에게만 열람이 허용됩니다.<br>
        <span style="font-size: 11px; color: #15803d; font-weight: 600;">※ 환자 개인정보 보호를 위해 비밀번호는 일체 요구하지 않습니다.</span>
        </div>

        <form id="snsAuthForm" onsubmit="submitSnsAuth(event)">
        <input type="hidden" id="snsCurrentProvider" value="naver" />
        <div style="margin-bottom: 16px;">
        <label id="snsAccountLabel" style="display: block; font-size: 12px; font-weight: 600; color: #1e293b; margin-bottom: 6px;">네이버 아이디 (또는 이메일)</label>
        <input type="text" id="snsInputId" required placeholder="예: naver_user 또는 id@naver.com" style="width: 100%; padding: 11px 13px; border: 1.5px solid #cbd5e1; border-radius: 8px; font-size: 13px; box-sizing: border-box; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#03C75A'" onblur="this.style.borderColor='#cbd5e1'" />
        </div>

        <div style="display: flex; gap: 8px;">
        <button type="button" onclick="cancelSnsAuth()" style="flex: 1; padding: 11px 0; border: 1px solid #cbd5e1; background: #f1f5f9; color: #475569; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: background 0.15s;">
        취소
        </button>
        <button type="submit" id="snsSubmitBtn" style="flex: 1.6; padding: 11px 0; border: none; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; background-color: #03C75A; color: #FFFFFF; transition: filter 0.15s;">
        네이버로 가입·로그인
        </button>
        </div>
        </form>
        </div>
        </div>
        </div>

        <!-- Official Naver Login SDK (Kakao removed) -->
        <script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></script>

        <script>
        function getBackUrl() {
          const params = new URLSearchParams(window.location.search);
          let back = params.get('back_url');
          if (!back) return '/';
          try {
            if (back.startsWith('L') && !back.startsWith('/')) {
              return atob(back);
            }
            return decodeURIComponent(back);
          } catch (e) {
            return back;
          }
        }

        document.addEventListener('DOMContentLoaded', function() {
          const back = getBackUrl();
          const loginLink = document.getElementById('loginRedirectLink');
          if (loginLink && back !== '/') {
            loginLink.href = '/login/?back_url=' + encodeURIComponent(back);
          }
        });

        function showStandardJoinForm() {
          document.getElementById('joinChoiceView').classList.add('hidden');
          document.getElementById('standardJoinForm').classList.remove('hidden');
        }

        function hideStandardJoinForm() {
          document.getElementById('standardJoinForm').classList.add('hidden');
          document.getElementById('joinChoiceView').classList.remove('hidden');
        }

        function handleStandardRegister(e) {
          e.preventDefault();
          const name = document.getElementById('regName').value.trim();
          const email = document.getElementById('regEmail').value.trim();
          const pw = document.getElementById('regPasswd').value;
          const pwConfirm = document.getElementById('regPasswdConfirm').value;

          if (pw !== pwConfirm) {
            alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
            return;
          }

          if (email.toLowerCase() === 'healim0071' || email.toLowerCase().startsWith('healim0071@')) {
            alert('해당 계정은 시스템 최고관리자 전용 계정으로 일반 회원가입이 불가능합니다.');
            return;
          }

          const userData = {
            uid: email,
            name: name,
            role: 'member',
            loginAt: new Date().toISOString()
          };
          localStorage.setItem('healim_auth_user', JSON.stringify(userData));

          alert(name + ' 님, 해아림한의원 회원가입이 완료되었습니다!\n치료후기 열람 권한이 부여되었습니다.');
          window.location.href = getBackUrl();
        }

        function getSnsConfig() {
          try {
            var raw = localStorage.getItem('healim_sns_config');
            var parsed = raw ? JSON.parse(raw) : {};
            return {
              naverClientId: (parsed.naverClientId && parsed.naverClientId.trim().length > 5) ? parsed.naverClientId.trim() : 'h2nuQi_Y9Z0DOB0j6kby'
            };
          } catch(e) {
            return { naverClientId: 'h2nuQi_Y9Z0DOB0j6kby' };
          }
        }

        // Automatic Naver OAuth Callback Handler
        function checkNaverOAuthCallback() {
          try {
            var hash = window.location.hash || '';
            var search = window.location.search || '';
            var accessToken = '';

            if (hash.includes('access_token=')) {
              var params = new URLSearchParams(hash.substring(1));
              accessToken = params.get('access_token');
            } else if (search.includes('code=')) {
              var sParams = new URLSearchParams(search);
              accessToken = sParams.get('code');
            }

            if (accessToken) {
              completeNaverJoin('naver_user', '네이버 회원');
            }
          } catch(e) {}
        }

        function completeNaverJoin(rawId, displayName) {
          var cleanName = rawId.includes('@') ? rawId.split('@')[0] : rawId;
          var safeUid = 'naver_' + cleanName.replace(/[^a-zA-Z0-9_\-]/g, '_');
          var finalName = (displayName && displayName !== '네이버 회원') ? displayName : cleanName;

          var userData = {
            uid: safeUid,
            name: finalName + ' (네이버 회원)',
            role: 'member',
            provider: 'naver',
            loginAt: new Date().toISOString()
          };

          localStorage.setItem('healim_auth_user', JSON.stringify(userData));
          alert('네이버 계정(' + finalName + ')으로 정상 간편가입 및 로그인이 완료되었습니다.\n치료후기 열람 권한이 활성화되었습니다.');
          var savedBack = localStorage.getItem('healim_naver_back_url');
          if (savedBack) localStorage.removeItem('healim_naver_back_url');
          var back = savedBack || getBackUrl();
          var targetUrl = (back && back !== '/' && !back.includes('/login') && !back.includes('/site_join_type_choice')) ? back : '/community/#reviews';
          window.location.href = targetUrl;
        }

        function handleSocialRegister(provider) {
          if (provider === 'naver') {
            const clientId = 'h2nuQi_Y9Z0DOB0j6kby';

            const targetBackUrl = getBackUrl();
            localStorage.setItem('healim_naver_back_url', (targetBackUrl && targetBackUrl !== '/' && !targetBackUrl.includes('/login') && !targetBackUrl.includes('/site_join_type_choice')) ? targetBackUrl : '/community/#reviews');

            const redirectUri = encodeURIComponent('https://healim-autonomic.com/login/');
            const state = Math.random().toString(36).substring(2, 11);

            location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;
          }
        }

        function openSnsAuthModal(provider) {
          var backdrop = document.getElementById('snsAuthModalBackdrop');
          var inputId = document.getElementById('snsInputId');

          if (!backdrop) return;
          if (inputId) inputId.value = '';

          backdrop.style.display = 'flex';
          setTimeout(function() { if (inputId) inputId.focus(); }, 100);
        }

        function cancelSnsAuth() {
          var backdrop = document.getElementById('snsAuthModalBackdrop');
          if (backdrop) backdrop.style.display = 'none';
        }

        function submitSnsAuth(e) {
          e.preventDefault();
          var inputId = document.getElementById('snsInputId').value.trim();

          if (!inputId || inputId.length < 2) {
            alert('네이버 아이디 또는 이메일을 정확히 입력해주세요.');
            return;
          }

          var backdrop = document.getElementById('snsAuthModalBackdrop');
          if (backdrop) backdrop.style.display = 'none';

          completeNaverJoin(inputId, inputId.includes('@') ? inputId.split('@')[0] : inputId);
        }

        document.addEventListener('DOMContentLoaded', function() {
          checkNaverOAuthCallback();
        });
        </script>
---
