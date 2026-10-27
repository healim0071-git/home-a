---
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

        <!-- 5-Tab Community Navigation Bar -->
        <div class="community-tabs-container">
        <ul class="community-tabs-list" id="communityTabList">
        <li>
        <a href="/faq" class="community-tab-btn " data-tab="faq" style="text-decoration:none;">
        FAQ 자율신경치료 정보
        </a>
        </li>
        <li>
        <a href="/reviews" class="community-tab-btn " data-tab="reviews" style="text-decoration:none;">
        자율신경실조증 치료후기 <span class="lock-tag">🔒 회원전용</span>
        </a>
        </li>
        <li>
        <a href="/youtube" class="community-tab-btn " data-tab="youtube" style="text-decoration:none;">
        자율신경실조증 유튜브
        </a>
        </li>
        <li>
        <a href="/columns" class="community-tab-btn active" data-tab="columns" style="text-decoration:none;">
        자율신경실조증 치료 칼럼
        </a>
        </li>
        <li>
        <a href="https://www.healim.com/5-6" target="_blank" rel="noopener noreferrer" class="community-tab-btn" style="text-decoration: none;">
        한약과 비용고시 ↗
        </a>
        </li>
        </ul>
        </div>

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
        <tr onclick="openDetailModal('columns', 'col-p51-51-1791936000000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">51</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">신경안정제를 수년간 복용해도 가슴 두근거림과 저림이 남았던 40대 약물 감약한 케이스</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.14</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">193</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-50-1791849600000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">50</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">일어설 때마다 핑 돌고 눈앞이 캄캄해지던 20대 기립성 저혈압·어지럼증 증상</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.13</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">301</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-49-1791763200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">49</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">얼굴은 화끈거리고 발끝은 얼음장처럼 시리던 50대 상열하한 자율신경실조증 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.12</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">220</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-48-1791763200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">48</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">위내시경은 깨끗한데 식사 후 명치가 꽉 막히고 체하던 40대 신경성 위장장애 케이스</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.12</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">190</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-47-1791763200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">47</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">응급실 심전도는 정상인데 심장이 쿵쾅거려 쓰러질 뻔했던 30대 직장인</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.12</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">266</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-46-1791763200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">46</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">환절기나 봄가을만 되면 온몸이 아프고 불안해져요: 일교차와 기온 변화에 무너지는 자율신경 회복법</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.12</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">322</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-45-1791763200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">45</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">눈이 뻑뻑하고 침침하며 빛 번짐이 너무 심해요: 인공눈물로 해결 안 되는 눈 피로와 자율신경 시각 과민</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.12</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">225</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-44-1791590400000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">44</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">피곤해 죽겠는데 밤마다 잠이 안 오고 새벽에 번쩍 눈이 떠져요: 불면증과 야간 교감신경 흥분 안정법</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.10</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">201</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-43-1791417600000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">43</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">응급실 심전도는 정상인데 심장이 쿵쾅거려 쓰러질 뻔했던 30대 직장인 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.09</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">219</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-42-1791331200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">42</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">위내시경은 깨끗한데 식사 후 명치가 꽉 막히고 체하던 40대 신경성 위장장애 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.08</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">232</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-41-1791244800000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">41</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">일어설 때마다 핑 돌고 눈앞이 캄캄해지던 20대 기립성 저혈압·어지럼증 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.07</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">180</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-40-1791158400000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">40</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">신경안정제를 수년간 복용해도 가슴 두근거림과 저림이 남았던 40대 약물 감약 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.06</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">273</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-39-1791072000000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">39</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">피곤한데도 새벽 3시면 심장이 뛰어 잠에서 깨던 50대 야간 교감신경 흥분 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.05</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">277</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-38-1790985600000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">38</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">도수치료를 받아도 목과 어깨가 돌처럼 굳고 뒤통수가 찌릿하던 30대 신경성 경추통 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.04</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">200</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-37-1790899200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">37</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">이비인후과 검사는 정상인데 귀가 먹먹하고 삐 소리가 나던 40대 신경성 이명 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.03</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">242</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-36-1790812800000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">36</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">가슴에 공기가 안 차고 하품만 나오던 20대 만성 과호흡 및 호흡곤란 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.02</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">275</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-35-1790726400000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">35</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">인공눈물로도 해결 안 되고 형광등 불빛이 칼날처럼 부시던 40대 자율신경성 안구 증상 사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.10.01</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">238</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-34-1790640000000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">34</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">방금 들은 말도 깜빡하고 머리에 안개가 낀 듯 멍하던 30대 브레인포그 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.30</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">195</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-33-1790553600000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">33</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">커피 한 잔만 마셔도 심장이 쿵쾅거리고 손이 덜덜 떨려요: 카페인을 분해 못 하는 자율신경 과민의 이유</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.29</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">224</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-32-1790467200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">32</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">자율신경실조증 한방 치료, 회복 기간은 얼마나 걸리나요? 단계별 치료 과정과 재발 방지 생활 관리</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.28</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">250</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-31-1790380800000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">31</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">비 오기 전날마다 머리가 지끈거리고 온몸이 무겁던 50대 기상병 자율신경 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.27</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">296</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-30-1790294400000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">30</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">생리 전과 갱년기마다 감정 롤러코스터와 두근거림이 심하던 40대 호르몬성 자율신경 실조 사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.26</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">254</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-29-1790208000000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">29</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">술 마신 날이면 새벽에 심장이 터질 듯 뛰어 잠에서 깨던 40대 직장인 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.25</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">236</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-28-1790121600000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">28</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">긴장하면 배가 부글거리고 설사하며 공황이 오던 30대 과민대장증후군 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.24</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">295</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-27-1790035200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">27</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">주말 내내 쉬어도 손가락 하나 까딱하기 힘들던 40대 번아웃 및 미주신경 동결 사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.23</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">210</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-26-1789948800000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">26</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">밥을 잘 먹는데도 3달 새 7kg이 빠져 불안해하던 50대 자율신경 대사 이상 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.22</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">259</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-25-1789862400000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">25</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">코로나 후유증으로 냄새를 전혀 못 맡고 쇠 맛이 나던 30대 후각 이상 및 자율신경 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.21</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">208</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-p51-24-1789776000000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">24</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">비뇨기과 검사는 정상인데 화장실을 10분마다 찾던 40대 신경성 빈뇨 및 골반통 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.20</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">225</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-23-1788884200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">23</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">자고 일어나면 턱이 뻐근하고 치아가 닳도록 이를 갈던 30대 직장인 턱관절 장애 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.09</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2066</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-22-1788884100000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">22</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">비뇨기과 검사는 정상인데 소변이 자주 마렵고 아랫배가 뻐근하던 40대 신경성 빈뇨 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.09</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2024</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-21-1788883500000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">21</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">코로나 완치 후에도 냄새를 못 맡고 역한 냄새가 나던 30대 후각 이상 및 자율신경 실조 사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.08</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1982</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-20-1788882000000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">20</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">밥을 잘 먹는데도 몇 달 새 7kg이 빠져 불안해하던 50대 자율신경 대사 이상 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.06</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1940</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-19-1788880000000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">19</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">주말 내내 누워 있어도 손가락 하나 까딱하기 힘들던 40대 극심한 무기력증 및 미주신경 동결 사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.09.04</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1898</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-18-1788834200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">18</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">소화가 안 될 때마다 가슴이 조여오고 우울감이 치솟던 30대 신경성 위장장애 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.31</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1856</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-17-1788824200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">17</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">술 마신 날이면 새벽 3시에 심장이 터질 듯 뛰어 잠에서 깨던 40대 야간 교감신경 흥분 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.30</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1814</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-16-1788814200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">16</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">생리 전과 배란기마다 심장이 두근거리고 감정 기복이 심하던 20대 호르몬성 자율신경 실조 사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.28</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1772</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-15-1788804200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">15</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">비 오기 전날마다 머리가 지끈거리고 심장이 쿵쾅대던 50대 기상병 자율신경 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.27</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1730</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-14-1788794200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">14</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">안정 회복까지 얼마나 걸릴까? 진료실에서 설명해 드리는 자율신경실조증 3단계 회복 로드맵과 재발율을 낮추는 건강한 몸</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.25</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1688</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-13-1788784200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">13</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">커피 반 잔에도 심장이 덜컥 내려앉고 손이 떨리는 카페인 불내증, 간 대사보다 자율신경 역치를 살펴야 합니다</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.24</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1646</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-12-1788774200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">12</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">하루 종일 머리가 멍하고 기억력이 떨어져 업무가 힘들던 30대 브레인포그 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.22</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1604</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-11-1788764200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">11</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">인공눈물을 넣어도 눈이 시리고 형광등이 너무 부시던 40대 안구 자율신경 과각성 사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.21</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1562</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-10-1788754200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">10</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">가슴에 공기가 안 차고 한숨만 쉬어지던 20대 취업준비생 과호흡 증후군 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.19</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1520</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-9-1788744200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">9</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">조금만 긴장해도 온몸에 식은땀이 비 오듯 쏟아지던 30대 다한증 및 자율신경 실조 사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.18</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1478</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-8-1788734200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">8</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">이비인후과 검사는 정상인데 귀가 먹먹하고 삐 소리가 나던 50대 신경성 이명 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.16</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1436</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-7-1788724200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">7</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">도수치료를 받아도 목과 어깨가 돌처럼 굳고 두통에 시달리던 40대 신경성 경추통 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.15</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1394</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-6-1788714200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">6</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">자도 개운하지가 않아요 이런 증상도 불면증 증상일 수도 있을까요</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.13</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1352</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-5-1788704200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">5</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">신경안정제를 몇 년간 먹어도 가슴 답답함과 불안이 가시지 않던 50대 약물 감약 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.12</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1310</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-4-1788694200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">4</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">앉았다 일어설 때마다 핑 돌고 눈앞이 캄캄해지던 20대 기립성 빈맥증후군 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.10</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1268</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-3-1788684200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">3</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">얼굴로는 열이 치솟고 손발은 얼음장처럼 차갑던 50대 상열하한 자율신경 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.09</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1226</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-2-1788674200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">2</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">부교감신경 항진증이 뭔가요 과도할때 나타나는 증상 사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.07</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1184</td>
        </tr>
        <tr onclick="openDetailModal('columns', 'col-auto-1-1788664200000')" class="cursor-pointer hover:bg-[#f6fafb] transition-colors">
          <td class="col-th-num" style="text-align: center; color: #888;">1</td>
          <td class="col-th-title font-medium text-[#0d3a42] hover:text-[#1c6e78]">응급실을 세 번이나 가도 심장 검사는 정상이었던 30대 가슴 두근거림 및 공황 증상 치료사례</td>
          <td class="col-desktop-only" style="text-align: center; color: #555;">해아림한의원</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">2026.08.06</td>
          <td class="col-desktop-only" style="text-align: center; color: #888;">1142</td>
        </tr>
        </tbody>
        </table>
        </div>
        <div class="healim-pagination-wrapper mb-10" id="columnsPaginationContainer"></div>
        </div>

        <!-- ══════════════════════════════════════════════════════════════
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
        </div>



        <!-- ══════════════════════════════════════════════════════════════
        COMMUNITY ENGINES & REAL-TIME SYNCHRONIZATION
        ══════════════════════════════════════════════════════════════ -->
        <script src="/js/auto_faq_engine.js?v=20261015_51sync"></script>
        <script src="/js/auto_column_engine.js?v=1792983215156"></script>
        <script src="/js/auto_review_engine.js?v=20261015_51sync"></script>
        <script src="/js/healim_cloud_db.js?v=20261015_51sync"></script>
        <script src="/js/healim_community_engine.js?v=20261027_indep"></script>
---
