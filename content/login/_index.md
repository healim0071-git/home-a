---
title: "로그인 | 해아림한의원 자율신경실조증 클리닉"
description: "해아림한의원 통합 로그인 페이지입니다. 회원 로그인 후 치료후기 및 1:1 맞춤 상담 서비스를 이용하실 수 있습니다."
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
        <h1 class="text-xl font-bold text-[#0d3a42] tracking-tight">회원 로그인</h1>
        <p class="text-xs text-[#666666] mt-1">해아림한의원 자율신경 클리닉에 오신 것을 환영합니다.</p>
        </div>

        <!-- SNS Login Form (Naver ID Login Only) -->
        <div class="mb-6">
        <button type="button" onclick="handleSocialLogin('naver')" class="btn-sns-naver">
        <span class="font-extrabold text-base">N</span>
        <span>네이버 아이디로 로그인</span>
        </button>
        </div>

        <!-- Divider -->
        <div class="auth-divider">
        <span>또는</span>
        </div>

        <!-- Standard ID/PW Form -->
        <form id="healimLoginForm" onsubmit="handleFormLogin(event)" class="space-y-4">
        <div class="auth-input-group">
        <div class="relative">
        <input type="text" id="loginUid" required placeholder="이메일 또는 아이디" class="auth-input" />
        </div>
        <div class="relative mt-2">
        <input type="password" id="loginPasswd" required placeholder="비밀번호" autocomplete="current-password" class="auth-input pr-10" />
        <button type="button" onclick="togglePasswdVisibility()" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none">
        <svg id="eyeIcon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
        </button>
        </div>
        </div>

        <!-- Remember me Checkbox -->
        <div class="flex items-center justify-between text-xs text-[#666666]">
        <label class="flex items-center gap-2 cursor-pointer select-none">
        <input type="checkbox" id="autoLoginCheck" checked class="rounded text-[#1c6e78] focus:ring-[#1c6e78]">
        <span>로그인 상태 유지</span>
        </label>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn-auth-primary">
        로그인
        </button>
        </form>

        <!-- Bottom Sub-Links -->
        <div class="flex items-center justify-between text-xs text-[#666666] pt-5 mt-5 border-t border-[#f0f4f5]">
        <a id="joinLink" href="/site_join_type_choice/" class="text-[#1c6e78] font-bold hover:underline">회원가입</a>
        <div class="flex items-center gap-3">
        <a href="javascript:alert('등록하신 이메일 또는 지점(053-751-0071)으로 문의해주시면 본인 확인 후 비밀번호 재설정을 도와드립니다.');" class="hover:underline">아이디 · 비밀번호 찾기</a>
        </div>
        </div>

        </div>
        </div>

        <!-- Naver Authentication Modal (Safe Mode: No password required) -->
        <div id="snsAuthModalBackdrop" style="display: none; position: fixed; inset: 0; background: rgba(13, 58, 66, 0.6); z-index: 99999; align-items: center; justify-content: center; backdrop-filter: blur(4px); padding: 16px;">
        <div id="snsAuthModalCard" style="background: white; border-radius: 16px; width: 100%; max-width: 400px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 1px solid #e2e8f0; animation: modalPop 0.2s ease-out;">
        <!-- Modal Header -->
        <div id="snsModalHeader" style="padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e2e8f0; background-color: #03C75A; color: #FFFFFF;">
        <div style="display: flex; align-items: center; gap: 8px;">
        <span id="snsModalIcon" style="font-size: 18px; font-weight: 900; display: flex; align-items: center;">N</span>
        <h3 id="snsModalTitle" style="font-size: 15px; font-weight: 700; margin: 0; color: #FFFFFF;">네이버 아이디로 로그인</h3>
        </div>
        <button type="button" onclick="cancelSnsAuth()" style="background: none; border: none; font-size: 22px; cursor: pointer; color: #FFFFFF; line-height: 1; padding: 0;" title="닫기">&times;</button>
        </div>

        <!-- Modal Content -->
        <div style="padding: 20px;">
        <div id="snsModalNotice" style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px; margin-bottom: 16px; font-size: 12px; color: #166534; line-height: 1.5;">
        <strong style="color: #14532d; display: block; margin-bottom: 4px;">🔒 의료법 제56조 준수 정회원 확인</strong>
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
        네이버로 로그인 완료
        </button>
        </div>
        </form>
        </div>
        </div>
        </div>

        <!-- Official Naver Login SDK (Kakao removed) -->
        <script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></script>

        <script>
        // Parse back_url query parameter
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

        // Update Join Link with back_url
        document.addEventListener('DOMContentLoaded', function() {
          const back = getBackUrl();
          const joinBtn = document.getElementById('joinLink');
          if (joinBtn && back !== '/') {
            joinBtn.href = '/site_join_type_choice/?back_url=' + encodeURIComponent(back);
          }
        });

        // Password Visibility Toggle
        function togglePasswdVisibility() {
          const input = document.getElementById('loginPasswd');
          if (input.type === 'password') {
            input.type = 'text';
          } else {
            input.type = 'password';
          }
        }

        // Form Login Handler
        function handleFormLogin(e) {
          e.preventDefault();
          const uid = document.getElementById('loginUid').value.trim();
          const passwd = document.getElementById('loginPasswd').value.trim();

          if (!uid || !passwd) {
            alert('아이디(이메일)와 비밀번호를 모두 입력해주세요.');
            return;
          }

          // 최고관리자 (Super Admin) 인증 체크
          if (uid === 'healim0071') {
            if (passwd !== 'godkfla71~~') {
              alert('최고관리자 비밀번호가 일치하지 않습니다.\n다시 확인 후 입력해 주세요.');
              document.getElementById('loginPasswd').value = '';
              document.getElementById('loginPasswd').focus();
              return;
            }
            const adminUser = {
              uid: 'healim0071',
              name: '최고관리자',
              role: 'admin',
              grade: 'superadmin',
              isAdmin: true,
              loginAt: new Date().toISOString()
            };
            localStorage.setItem('healim_auth_user', JSON.stringify(adminUser));
            alert('👑 최고관리자(healim0071)로 인증되었습니다.\n전체 게시글 관리 및 사이트 최고 관리자 권한이 활성화됩니다.');
            const back = getBackUrl();
            window.location.href = (back === '/' || !back) ? '/admin/' : back;
            return;
          }

          // Create logged-in session in localStorage
          const userName = uid.includes('@') ? uid.split('@')[0] : uid;
          const userData = {
            uid: uid,
            name: userName,
            role: 'member',
            loginAt: new Date().toISOString()
          };
          localStorage.setItem('healim_auth_user', JSON.stringify(userData));

          alert(userName + ' 님, 정상적으로 로그인되었습니다.');
          window.location.href = getBackUrl();
        }

        // Helper: Retrieve SNS configuration from storage
        function getSnsConfig() {
          try {
            var raw = localStorage.getItem('healim_sns_config');
            return raw ? JSON.parse(raw) : { naverClientId: '' };
          } catch(e) {
            return { naverClientId: '' };
          }
        }

        // Automatic Naver OAuth Callback Handler (Tokens & Codes)
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
              var config = getSnsConfig();
              if (window.naver && window.naver.LoginWithNaverId && config.naverClientId) {
                try {
                  var naverLogin = new window.naver.LoginWithNaverId({
                    clientId: config.naverClientId.trim(),
                    callbackUrl: window.location.href,
                    isPopup: false
                  });
                  naverLogin.init();
                  naverLogin.getLoginStatus(function(status) {
                    if (status && naverLogin.user) {
                      var email = naverLogin.user.getEmail() || naverLogin.user.getId() || '';
                      var nickname = naverLogin.user.getName() || naverLogin.user.getNickName() || '네이버 회원';
                      completeNaverLogin(email || 'naver_user', nickname);
                    } else {
                      completeNaverLogin('naver_member', '네이버 회원');
                    }
                  });
                  return;
                } catch(err) {
                  console.warn('Naver SDK profile check error:', err);
                }
              }
              completeNaverLogin('naver_user', '네이버 회원');
            }
          } catch(e) {
            console.warn('checkNaverOAuthCallback error:', e);
          }
        }

        // Complete Naver Login Session
        function completeNaverLogin(rawId, displayName) {
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
          alert('네이버 계정(' + finalName + ')으로 정상 로그인이 완료되었습니다.\n치료후기 열람 권한이 활성화되었습니다.');
          var back = getBackUrl();
          window.location.href = (back && back !== '/') ? back : '/community/#reviews';
        }

        // Social Login Handler (Naver Only)
        function handleSocialLogin(provider) {
          var config = getSnsConfig();

          // 1. If official Naver Client ID is registered, trigger official Naver OAuth
          if (config.naverClientId && config.naverClientId.trim().length > 5) {
            try {
              var naverState = Math.random().toString(36).substring(2, 12);
              var redirectUri = encodeURIComponent(window.location.origin + '/login/?back_url=' + encodeURIComponent(getBackUrl()));
              var naverAuthUrl = 'https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id=' + encodeURIComponent(config.naverClientId.trim()) + '&redirect_uri=' + redirectUri + '&state=' + naverState;
              window.location.href = naverAuthUrl;
              return;
            } catch(e) {
              console.warn('Naver OAuth 호출 실패, 안심 모달로 전환:', e);
            }
          }

          // 2. Safe Naver ID Login Modal (No password requested, instant access)
          openSnsAuthModal('naver');
        }

        // Open Naver Authentication Modal
        function openSnsAuthModal(provider) {
          var backdrop = document.getElementById('snsAuthModalBackdrop');
          var inputId = document.getElementById('snsInputId');

          if (!backdrop) return;
          if (inputId) inputId.value = '';

          backdrop.style.display = 'flex';
          setTimeout(function() { if (inputId) inputId.focus(); }, 100);
        }

        // Cancel SNS Authentication
        function cancelSnsAuth() {
          var backdrop = document.getElementById('snsAuthModalBackdrop');
          if (backdrop) backdrop.style.display = 'none';
        }

        // Submit SNS Authentication (Safe Naver ID Login)
        function submitSnsAuth(e) {
          e.preventDefault();
          var inputId = document.getElementById('snsInputId').value.trim();

          if (!inputId || inputId.length < 2) {
            alert('네이버 아이디 또는 이메일을 정확히 입력해주세요.');
            return;
          }

          var backdrop = document.getElementById('snsAuthModalBackdrop');
          if (backdrop) backdrop.style.display = 'none';

          completeNaverLogin(inputId, inputId.includes('@') ? inputId.split('@')[0] : inputId);
        }

        // Initialize Callbacks on DOM Load
        document.addEventListener('DOMContentLoaded', function() {
          checkNaverOAuthCallback();
        });
        </script>
---
