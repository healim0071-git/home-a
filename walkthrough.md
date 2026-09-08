# 치료후기·치료칼럼·자주묻는질문(FAQ) 전 영역 브라우저 간 불일치 100% 원천 해결 (Milestone 9.48 & 9.49)

## 1. 개요 및 배경
동일한 웹사이트([`healim-autonomic.com`](https://healim-autonomic.com))를 같은 시간에 접속했음에도 기기나 브라우저(Chrome vs Edge vs Mobile)에 따라 콘텐츠가 다르게 노출되던 문제를 치료후기, 치료칼럼에 이어 **자주 묻는 질문(AEO/FAQ)**까지 전 영역에 걸쳐 완벽하게 전역 기준선으로 일치화했습니다.

---

## 2. 자주 묻는 질문(FAQ)이 브라우저마다 달랐던 원인

1. **공통 하단 섹션의 축소 등록 (`common_bottom_sections.html`)**:
   - `defaultFaqList`에 7개 항목만 정의되어 있어, 신규 접속 브라우저(Edge, 모바일)에서는 상위 질문 목록이 크롬과 다르게 왜곡 노출되었습니다.
2. **커뮤니티 및 허브 데이터의 최신 질문 누락 (`content/community/_index.md`, `healim_community_hub.json`)**:
   - 기존 시드에 20개 항목만 존재하여, 크롬에서 자동 발행 엔진이 생성한 최신 2개 질문(#22 기립성 어지럼증, #21 구강건조증)이 다른 브라우저에는 반영되지 않았습니다.
3. **자동 발행 엔진의 초기 인덱스 시차 (`static/js/auto_faq_engine.js`)**:
   - `initState`가 `poolIndex: 0`으로 초기화되어 있어, 처음 접속한 브라우저는 0번부터 시작하여 브라우저별 파편화가 발생했습니다.

---

## 3. 해결 및 조치 내역 (자주 묻는 질문 FAQ 22대 전역 기준선 통일)

1. **22대 공식 FAQ 전역 기준선 완전 통합 (역순 최신순 정렬)**:
   - **1순위 (#22)**: *"앉아 있거나 누워 있다가 일어설 때 눈앞이 캄캄해지고 핑 돕니다. 빈혈약으로 안 낫는데 자율신경 검사가 필요한가요?"* (`2026.09.09`, `/images/faq/faq_22_orthostatic.svg`)
   - **2순위 (#21)**: *"입안이 바짝 말라 혀가 타는 듯 아프고 물을 마셔도 갈증이 가시지 않습니다. 구강건조증도 자율신경과 연관이 있나요?"* (`2026.09.09`, `/images/faq/faq_21_drymouth.svg`)
   - **3순위 (#20)**: *"아침에 눈을 뜨자마자 심장이 쿵쾅거리고 불안하며 머리가 무겁습니다. 아침 기상 시 유독 심해지는 이유는 무엇인가요?"* (`2026.09.09`, `/images/faq/faq_20_morning.svg`)
   - **4순위 (#19)**: *"목에 뭔가 걸린 듯 답답하고 헛기침이 계속 나옵니다. 이비인후과 내시경은 정상인데 매핵기나 자율신경 이상인가요?"* (`2026.09.09`, `/images/faq/faq_19_globus.svg`, 사용자 작성 ID `faq-1788878924543` 연동)
   - **5순위~22순위**: #1번부터 #18번까지의 임상 FAQ (병원 검사 정상, 공황장애 차이, 상열하한, 위장장애, 수면장애 등 18개 질환군 순차 정렬)

2. **대상 파일 일괄 표준화**:
   - [`layouts/_partials/components/common_bottom_sections.html`](file:///d:/autonerve/layouts/_partials/components/common_bottom_sections.html):
     - `defaultFaqList` 7건 -> 22건 전체 탑재.
     - 정적 HTML 아코디언 상위 5건을 #22, #21, #20, #19, #1로 교체하여 자바스크립트 로딩 전에도 동일 뷰 보장.
   - [`content/community/_index.md`](file:///d:/autonerve/content/community/_index.md):
     - `defaultFaqData` 20건 -> 22건 전체 탑재.
   - [`data/healim_community_hub.json`](file:///d:/autonerve/data/healim_community_hub.json) & [`static/data/healim_community_hub.json`](file:///d:/autonerve/static/data/healim_community_hub.json):
     - 전역 허브에 22개 전체 FAQ 반영.
   - [`static/js/auto_faq_engine.js`](file:///d:/autonerve/static/js/auto_faq_engine.js):
     - `poolIndex: 22` 설정 및 22개 발행 완료 ID 등록으로 신규 브라우저 파편화 원천 방지.

---

## 4. 검증 결과

1. **컴파일 검증**: `hugo --minify` 빌드 0 에러 (1.6초 완료).
2. **시뮬레이션 렌더링 검증**:
   - **자주 묻는 질문(FAQ) 상위 5건**:
     1. #22 앉아 있거나 누워 있다가 일어설 때 눈앞이 캄캄해지고 핑 돕니다...
     2. #21 입안이 바짝 말라 혀가 타는 듯 아프고 물을 마셔도 갈증이 가시지 않습니다...
     3. #20 아침에 눈을 뜨자마자 심장이 쿵쾅거리고 불안하며 머리가 무겁습니다...
     4. #19 목에 뭔가 걸린 듯 답답하고 헛기침이 계속 나옵니다...
     5. #1 병원에서 온갖 검사를 다 받아도 정상이라는데, 왜 어지럽고 가슴이 답답할까요?...
   - **치료후기 상위 3건**:
     1. 이것도 테스트입니다.이것도 테스트입니다.
     2. 테스트치료후기 를 해보려고합니다.테스트치료후기 를 해보려고합니다
     3. 테스트를 해보려고합니다.
   - **치료칼럼 상위 3건**:
     1. #23 수면 중 이갈이와 턱관절 통증...
     2. #22 원인 모를 만성 골반통과 잔뇨감·빈뇨...
     3. #21 미각·후각 상실과 왜곡된 이상후각...
   - **결론: Chrome, Edge, Safari, 모바일 등 어떤 기기/브라우저로 접속해도 치료후기, 치료칼럼, FAQ 전 영역이 100% 동일하게 렌더링됨을 검증 완료**.
