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

        // Social Login Mock Handler
        function handleSocialLogin(provider) {
          const providerName = provider === 'kakao' ? '카카오' : '네이버';
          const userData = {
            uid: provider + '_user_' + Math.floor(Math.random()*10000),
            name: providerName + ' 회원',
            role: 'member',
            provider: provider,
            loginAt: new Date().toISOString()
          };
          localStorage.setItem('healim_auth_user', JSON.stringify(userData));

          alert(providerName + ' 계정으로 간편 로그인이 완료되었습니다.');
          window.location.href = getBackUrl();
        }
        </script>
---
