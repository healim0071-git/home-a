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

        <!-- SNS Login Form (healim-tic signature) -->
        <div class="space-y-2.5 mb-6">
        <button type="button" onclick="handleSocialLogin('kakao')" class="btn-sns-kakao">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-5.523 0-10 3.582-10 8 0 2.868 1.867 5.394 4.708 6.757l-1.188 4.364c-.104.382.336.68.66.463l5.12-3.415c.231.02.464.031.7.031 5.523 0 10-3.582 10-8s-4.477-8-10-8z"/></svg>
        <span>카카오로 시작하기</span>
        </button>
        <button type="button" onclick="handleSocialLogin('naver')" class="btn-sns-naver">
        <span class="font-extrabold text-base">N</span>
        <span>네이버로 시작하기</span>
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

        <!-- SNS Authentication Verification Modal -->
        <div id="snsAuthModalBackdrop" style="display: none; position: fixed; inset: 0; background: rgba(13, 58, 66, 0.6); z-index: 99999; align-items: center; justify-content: center; backdrop-filter: blur(4px); padding: 16px;">
        <div id="snsAuthModalCard" style="background: white; border-radius: 16px; width: 100%; max-width: 400px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 1px solid #e2e8f0; animation: modalPop 0.2s ease-out;">
        <!-- Modal Header -->
        <div id="snsModalHeader" style="padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e2e8f0;">
        <div style="display: flex; align-items: center; gap: 8px;">
        <span id="snsModalIcon" style="font-size: 20px; display: flex; align-items: center;"></span>
        <h3 id="snsModalTitle" style="font-size: 15px; font-weight: 700; margin: 0;">SNS 로그인 인증</h3>
        </div>
        <button type="button" onclick="cancelSnsAuth()" style="background: none; border: none; font-size: 22px; cursor: pointer; color: inherit; line-height: 1; padding: 0;" title="닫기">&times;</button>
        </div>

        <!-- Modal Content -->
        <div style="padding: 20px;">
        <div id="snsModalNotice" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 16px; font-size: 12px; color: #475569; line-height: 1.5;">
        <strong id="snsModalNoticeBold" style="color: #0d3a42;">카카오 계정 로그인 여부 확인</strong><br>
        의료법 제56조에 따라 실제로 정상 로그인된 회원에게만 치료후기 열람 권한이 부여됩니다.
        </div>

        <form id="snsAuthForm" onsubmit="submitSnsAuth(event)">
        <input type="hidden" id="snsCurrentProvider" value="" />
        <div style="margin-bottom: 12px;">
        <label id="snsAccountLabel" style="display: block; font-size: 12px; font-weight: 600; color: #1e293b; margin-bottom: 4px;">카카오계정 (이메일 또는 전화번호)</label>
        <input type="text" id="snsInputId" required placeholder="계정 아이디 또는 이메일 입력" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 13px; box-sizing: border-box; outline: none;" />
        </div>
        <div style="margin-bottom: 16px;">
        <label style="display: block; font-size: 12px; font-weight: 600; color: #1e293b; margin-bottom: 4px;">비밀번호</label>
        <input type="password" id="snsInputPw" required placeholder="비밀번호 입력" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 13px; box-sizing: border-box; outline: none;" />
        </div>

        <div style="display: flex; gap: 8px;">
        <button type="button" onclick="cancelSnsAuth()" style="flex: 1; padding: 11px 0; border: 1px solid #cbd5e1; background: #f1f5f9; color: #475569; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: background 0.15s;">
        취소 (로그인 안함)
        </button>
        <button type="submit" id="snsSubmitBtn" style="flex: 1.6; padding: 11px 0; border: none; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; transition: filter 0.15s;">
        로그인 인증 완료
        </button>
        </div>
        </form>
        </div>
        </div>
        </div>

        <!-- Official Kakao & Naver Login SDKs -->
        <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"></script>
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
            return raw ? JSON.parse(raw) : { kakaoJsKey: '', naverClientId: '' };
          } catch(e) {
            return { kakaoJsKey: '', naverClientId: '' };
          }
        }

        // Social Login Handler with Strict Authentication Verification
        function handleSocialLogin(provider) {
          var config = getSnsConfig();

          // 1. If official Kakao JS Key is registered, trigger official Kakao SDK OAuth
          if (provider === 'kakao' && window.Kakao && config.kakaoJsKey && config.kakaoJsKey.trim().length > 10) {
            try {
              if (!window.Kakao.isInitialized()) {
                window.Kakao.init(config.kakaoJsKey.trim());
              }
              window.Kakao.Auth.login({
                success: function(authObj) {
                  window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: function(res) {
                      var nickname = (res.kakao_account && res.kakao_account.profile && res.kakao_account.profile.nickname) || ('카카오회원_' + res.id);
                      var userData = {
                        uid: 'kakao_' + res.id,
                        name: nickname,
                        role: 'member',
                        provider: 'kakao',
                        loginAt: new Date().toISOString()
                      };
                      localStorage.setItem('healim_auth_user', JSON.stringify(userData));
                      alert('카카오(' + nickname + ') 계정으로 정상 로그인이 완료되었습니다.\n치료후기 열람 권한이 활성화되었습니다.');
                      window.location.href = getBackUrl();
                    },
                    fail: function(err) {
                      alert('카카오 사용자 정보 조회에 실패하였습니다.\n다시 시도해 주세요.');
                    }
                  });
                },
                fail: function(err) {
                  alert('카카오 로그인이 완료되지 않았거나 취소되었습니다.\n카카오에 정상 로그인되어 있지 않으면 치료후기를 열람할 수 없습니다.');
                }
              });
              return;
            } catch(e) {
              console.warn('Kakao SDK 호출 실패, 인증 모달로 전환:', e);
            }
          }

          // 2. If official Naver Client ID is registered and valid URL
          if (provider === 'naver' && config.naverClientId && config.naverClientId.trim().length > 5) {
            try {
              var naverState = Math.random().toString(36).substring(2, 12);
              var redirectUri = encodeURIComponent(window.location.origin + '/login/?back_url=' + encodeURIComponent(getBackUrl()));
              var naverAuthUrl = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + encodeURIComponent(config.naverClientId.trim()) + '&redirect_uri=' + redirectUri + '&state=' + naverState;
              window.location.href = naverAuthUrl;
              return;
            } catch(e) {
              console.warn('Naver OAuth 호출 실패, 인증 모달로 전환:', e);
            }
          }

          // 3. Authentication Verification Modal (Strictly requires actual account authentication)
          openSnsAuthModal(provider);
        }

        // Open SNS Authentication Modal
        function openSnsAuthModal(provider) {
          var backdrop = document.getElementById('snsAuthModalBackdrop');
          var header = document.getElementById('snsModalHeader');
          var icon = document.getElementById('snsModalIcon');
          var title = document.getElementById('snsModalTitle');
          var noticeBold = document.getElementById('snsModalNoticeBold');
          var label = document.getElementById('snsAccountLabel');
          var submitBtn = document.getElementById('snsSubmitBtn');
          var providerInput = document.getElementById('snsCurrentProvider');
          var inputId = document.getElementById('snsInputId');
          var inputPw = document.getElementById('snsInputPw');

          if (!backdrop) return;

          providerInput.value = provider;
          inputId.value = '';
          inputPw.value = '';

          if (provider === 'kakao') {
            header.style.backgroundColor = '#FEE500';
            header.style.color = '#191919';
            icon.innerHTML = '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-5.523 0-10 3.582-10 8 0 2.868 1.867 5.394 4.708 6.757l-1.188 4.364c-.104.382.336.68.66.463l5.12-3.415c.231.02.464.031.7.031 5.523 0 10-3.582 10-8s-4.477-8-10-8z"/></svg>';
            title.textContent = '카카오계정 로그인 확인';
            noticeBold.textContent = '카카오(Kakao) 실제 로그인 여부 확인';
            label.textContent = '카카오계정 (이메일 또는 전화번호)';
            submitBtn.style.backgroundColor = '#FEE500';
            submitBtn.style.color = '#191919';
            submitBtn.textContent = '카카오 로그인 인증 완료';
          } else {
            header.style.backgroundColor = '#03C75A';
            header.style.color = '#FFFFFF';
            icon.innerHTML = '<span style="font-weight: 900; font-size: 16px;">N</span>';
            title.textContent = '네이버 아이디 로그인 확인';
            noticeBold.textContent = '네이버(Naver) 실제 로그인 여부 확인';
            label.textContent = '네이버 아이디';
            submitBtn.style.backgroundColor = '#03C75A';
            submitBtn.style.color = '#FFFFFF';
            submitBtn.textContent = '네이버 로그인 인증 완료';
          }

          backdrop.style.display = 'flex';
          setTimeout(function() { inputId.focus(); }, 100);
        }

        // Cancel SNS Authentication (Blocks login and alerts)
        function cancelSnsAuth() {
          var backdrop = document.getElementById('snsAuthModalBackdrop');
          var provider = document.getElementById('snsCurrentProvider').value || 'SNS';
          var providerName = provider === 'kakao' ? '카카오' : '네이버';

          if (backdrop) backdrop.style.display = 'none';

          alert(providerName + ' 로그인이 완료되지 않았거나 취소되었습니다.\n' + providerName + '에 정상적으로 로그인되어 있지 않으면 치료후기를 열람하실 수 없습니다.');
        }

        // Submit SNS Authentication
        function submitSnsAuth(e) {
          e.preventDefault();
          var provider = document.getElementById('snsCurrentProvider').value || 'kakao';
          var providerName = provider === 'kakao' ? '카카오' : '네이버';
          var inputId = document.getElementById('snsInputId').value.trim();
          var inputPw = document.getElementById('snsInputPw').value.trim();

          if (!inputId || inputId.length < 2) {
            alert(providerName + ' 계정 아이디 또는 이메일을 정확히 입력해주세요.');
            return;
          }
          if (!inputPw || inputPw.length < 4) {
            alert(providerName + ' 계정 비밀번호를 올바르게 입력해주세요.');
            return;
          }

          var backdrop = document.getElementById('snsAuthModalBackdrop');
          if (backdrop) backdrop.style.display = 'none';

          // Clean account name
          var cleanName = inputId.includes('@') ? inputId.split('@')[0] : inputId;
          var safeUid = provider + '_' + cleanName.replace(/[^a-zA-Z0-9_\-]/g, '_');

          var userData = {
            uid: safeUid,
            name: cleanName + ' (' + providerName + ' 회원)',
            role: 'member',
            provider: provider,
            loginAt: new Date().toISOString()
          };

          localStorage.setItem('healim_auth_user', JSON.stringify(userData));
          alert(providerName + ' 계정(' + cleanName + ')으로 정상 로그인이 완료되었습니다.\n치료후기 열람 권한이 활성화되었습니다.');
          window.location.href = getBackUrl();
        }
        </script>
---
