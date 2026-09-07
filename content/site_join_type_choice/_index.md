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
        </div>

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

        function handleSocialRegister(provider) {
          const providerName = provider === 'kakao' ? '카카오' : '네이버';
          const userData = {
            uid: provider + '_user_' + Math.floor(Math.random()*10000),
            name: providerName + ' 신규회원',
            role: 'member',
            provider: provider,
            loginAt: new Date().toISOString()
          };
          localStorage.setItem('healim_auth_user', JSON.stringify(userData));

          alert(providerName + ' 간편 회원가입 및 로그인이 완료되었습니다.\n치료후기 열람 권한이 부여되었습니다.');
          window.location.href = getBackUrl();
        }
        </script>
---
