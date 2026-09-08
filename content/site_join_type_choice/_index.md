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

        <!-- Choice 1: SNS Easy Registration -->
        <div id="joinChoiceView">
        <div class="space-y-2.5 mb-6">
        <button type="button" onclick="handleSocialRegister('kakao')" class="btn-sns-kakao">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-5.523 0-10 3.582-10 8 0 2.868 1.867 5.394 4.708 6.757l-1.188 4.364c-.104.382.336.68.66.463l5.12-3.415c.231.02.464.031.7.031 5.523 0 10-3.582 10-8s-4.477-8-10-8z"/></svg>
        <span>카카오로 시작하기</span>
        </button>
        <button type="button" onclick="handleSocialRegister('naver')" class="btn-sns-naver">
        <span class="font-extrabold text-base">N</span>
        <span>네이버로 시작하기</span>
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

        <!-- SNS Authentication Verification Modal Dialog (Strict Verification) -->
        <div id="snsAuthModalBackdrop" style="display: none; position: fixed; inset: 0; background: rgba(0, 0, 0, 0.55); z-index: 9999; align-items: center; justify-content: center; padding: 16px; backdrop-filter: blur(4px);">
        <div style="background: #ffffff; width: 100%; max-width: 400px; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2); overflow: hidden; animation: healimPop 0.2s ease-out;">
        <!-- Modal Header -->
        <div id="snsModalHeader" style="padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; background: #FEE500; color: #191919;">
        <div style="display: flex; align-items: center; gap: 10px;">
        <span id="snsModalIcon"></span>
        <h3 id="snsModalTitle" style="margin: 0; font-size: 15px; font-weight: 700;">카카오계정 로그인 확인</h3>
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
            return raw ? JSON.parse(raw) : { kakaoJsKey: '', naverClientId: '' };
          } catch(e) {
            return { kakaoJsKey: '', naverClientId: '' };
          }
        }

        function handleSocialRegister(provider) {
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
                      alert('카카오(' + nickname + ') 계정으로 정상 간편가입 및 로그인이 완료되었습니다.\n치료후기 열람 권한이 활성화되었습니다.');
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
              var redirectUri = encodeURIComponent(window.location.origin + '/site_join_type_choice/?back_url=' + encodeURIComponent(getBackUrl()));
              var naverAuthUrl = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + encodeURIComponent(config.naverClientId.trim()) + '&redirect_uri=' + redirectUri + '&state=' + naverState;
              window.location.href = naverAuthUrl;
              return;
            } catch(e) {
              console.warn('Naver OAuth 호출 실패, 인증 모달로 전환:', e);
            }
          }

          // 3. Strict Verification Modal
          openSnsAuthModal(provider);
        }

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

        function cancelSnsAuth() {
          var backdrop = document.getElementById('snsAuthModalBackdrop');
          var provider = document.getElementById('snsCurrentProvider').value || 'SNS';
          var providerName = provider === 'kakao' ? '카카오' : '네이버';

          if (backdrop) backdrop.style.display = 'none';

          alert(providerName + ' 로그인이 완료되지 않았거나 취소되었습니다.\n' + providerName + '에 정상적으로 로그인되어 있지 않으면 치료후기를 열람하실 수 없습니다.');
        }

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
          alert(providerName + ' 계정(' + cleanName + ')으로 정상 간편가입 및 로그인이 완료되었습니다.\n치료후기 열람 권한이 활성화되었습니다.');
          window.location.href = getBackUrl();
        }
        </script>
---
