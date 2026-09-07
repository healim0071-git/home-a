# 해아림 자율신경 클리닉 공식 웹사이트 제작 및 운영 매뉴얼

본 문서는 **해아림한의원 전국 15개 네트워크 자율신경클리닉 공식 웹사이트**의 아키텍처, 디자인 시스템, 페이지별 구현 사양, 그리고 로컬 개발 및 유지보수 가이드를 정리한 통합 제작 매뉴얼입니다.

---


<!-- AUTO-SYNC-METADATA-START -->
> [!NOTE]
> **문서 최종 자동 동기화**: 2026. 9. 8. 오전 12:50:30 (KST) | **Git Commit**: `8b62f1f` (main) | **상태**: 수정 작업 중
<!-- AUTO-SYNC-METADATA-END -->

## 1. 프로젝트 개요 (Project Overview)

- **사이트 명칭**: 마음까지 헤아리는 해아림한의원 자율신경클리닉
- **공식 도메인**: `https://healim-autonomic.com/` (운영 기준)
- **원격 저장소**: `https://github.com/healim0071-git/home-a.git`
- **핵심 목표**:
  1. 두근거림·어지럼증·불면·호흡곤란 등 복합적으로 나타나는 자율신경실조증 환자에게 정확하고 신뢰할 수 있는 의학 정보 제공
  2. 한방신경정신과 전문의 및 박사·석사 의료진의 1:1 맞춤 치료 체계 안내
  3. 자율신경 6대 심층 검사, 7대 통합 치료 솔루션, 8대 일상 생활관리 수칙 전달
  4. FAQ 자동 발행, 의료 칼럼 자동 연동, 치료후기 잠금 게이트 등 능동적인 커뮤니티 경험 제공
  5. 전국 15개 네트워크 지점 안내 및 모바일 최적화된 즉각 상담·예약 환경 구축

---

## 2. 기술 스택 및 개발 환경 (Tech Stack)

| 구분 | 기술 / 도구 | 버전 및 사양 | 비고 |
| :--- | :--- | :--- | :--- |
| **Static Site Generator** | Hugo Extended | v0.162.0+ (Windows amd64) | 초고속 빌드 및 Go 템플릿 엔진 |
| **Framework / Theme** | Hugo Blox | Starter Template | 모듈형 마크다운 랜딩 블록 |
| **Styling** | Tailwind CSS v4 + Vanilla CSS | PostCSS 기반 | `assets/css/custom.css` 중심 |
| **Typography** | Pretendard | WebFont CDN v1.3.9 | 현대적 한글 가독성 최적화 |
| **Package Manager** | pnpm / npm | Node.js v20+ | 패키지 의존성 관리 |
| **Testing / Automation** | Chrome DevTools Protocol (CDP) | Headless Chrome | 뷰포트 반응형 및 폰트 검증 |
| **Version Control** | Git | Git for Windows v2.48+ | GitHub Remote Origin 연동 |

---

## 3. 디렉토리 구조 (Directory Architecture)

```plaintext
d:\autonerve\
├── assets/
│   ├── css/
│   │   └── custom.css              # 전역 디자인 시스템, 컬러 토큰, 반응형 오버라이드
│   └── media/
│       └── logo.png                # 공식 로고 에셋
├── config/
│   └── _default/
│       ├── hugo.yaml               # Hugo 기본 설정 (title, baseURL, 언어, 페이지 옵션)
│       ├── menus.yaml              # 상단 GNB 7대 메뉴 네비게이션 정의
│       ├── module.yaml             # Hugo Blox 모듈 의존성 설정
│       ├── params.yaml             # 사이트 파라미터 및 메타데이터
│       └── security.yaml           # Hugo 인라인 빌드 보안 허용 규칙
├── content/
│   ├── _index.md                   # 메인 홈 랜딩 페이지 (히어로, Trust 4대 지표, 주요 안내)
│   ├── admin/                      # 최고관리자 대시보드
│   ├── autonomic-clinic/           # 1. 해아림 자율신경 치료 클리닉 소개
│   ├── autonomic-dysfunction/      # 2. 자율신경실조증이란?
│   ├── autonomic-symptoms/         # 3. 자율신경계이상 증상 특징
│   ├── autonomic-diagnosis/        # 4. 자율신경 원인 검사/진단 (6대 심층 검사)
│   ├── autonomic-treatment/        # 5. 자율신경 치료 방법/생활 관리 (7대 접근, 8대 수칙)
│   ├── community/                  # 6. 커뮤니티 (FAQ, 치료후기, 유튜브, 의료 칼럼)
│   ├── login/                      # 회원 로그인 페이지
│   ├── register/                   # 회원가입 페이지
│   └── site_join_type_choice/      # 가입 유형 선택 안내
├── doc/
│   ├── manual.md                   # [본 문서] 프로젝트 제작 및 운영 매뉴얼
│   └── troubleshooting.md          # 문제보고서 및 트러블슈팅 가이드
├── layouts/
│   └── _partials/
│       ├── components/
│       │   ├── common_bottom_sections.html  # 전 페이지 공통 하단 섹션 (도서, 논문, 지점, FAQ)
│       │   └── headers/navbar.html          # 상단 GNB 및 모바일 반응형 햄버거 메뉴
│       ├── hooks/
│       │   ├── body-end/floating_cta.html   # 모바일/데스크톱 하단 플로팅 상담 배너
│       │   └── head-end/seo_schema.html     # 검색엔진 최적화 구조화 데이터(JSON-LD)
│       └── site_footer.html                 # 공식 사이트 푸터
├── scripts/
│   ├── auto_publish_faq.js         # 자율신경 FAQ 무한 자동 발행 엔진
│   └── auto_publish_column.js      # 자율신경 의학 칼럼 무한 자동 발행 엔진
├── static/
│   ├── images/                     # SVG 다이어그램, 도서 이미지, 의료 도표
│   │   ├── books/                  # 원장단 공저 출간 도서
│   │   ├── columns/                # 칼럼 썸네일 SVG 14종
│   │   ├── faq/                    # FAQ 썸네일 SVG 12종
│   │   └── reviews/                # 실제 치료후기 원본/블러 이미지
│   └── js/
│       ├── auto_faq_engine.js      # 클라이언트 FAQ 렌더링 엔진
│       └── auto_column_engine.js   # 클라이언트 칼럼 렌더링 엔진
├── .gitignore                      # Git 추적 배제 파일 정의
├── hugoblox.yaml                   # Hugo Blox 빌드/배포 설정
├── package.json                    # 프로젝트 의존성 및 실행 스크립트
├── push_to_github.bat              # 윈도우 환경 1클릭 GitHub 푸시 배치 스크립트
└── README.md                       # 저장소 루트 안내 문서 (doc 링크 연동)
```

---

## 4. 디자인 시스템 가이드 (Design System)

### 4.1 핵심 컬러 팔레트 (Color Palette)
- **Primary Dark (`#0d3a42`)**: 헤드라인, 강조 제목, 딥 스프루스 신뢰 배너에 사용되는 최고 위계 컬러
- **Primary (`#1c6e78`)**: 브랜드 대표 청록색. 버튼, 활성 탭 인디케이터, 강조 아이콘
- **Primary Light (`#eaf3f4`) / Soft (`#f2f6f7`)**: 배경 카드, 배지 배경, 단계별 블록 배경
- **Accent Warm (`#c16e1f`)**: 주의사항, 팁 배지, 도서 출간 엠블럼 등 포인트 컬러
- **Text Body (`#444444`, `#555555`)**: 가독성을 극대화한 본문 텍스트 컬러
- **Text Dark (`#212121`)**: 가독성 높은 제목 및 링크 텍스트

### 4.2 타이포그래피 및 위계 규칙 (Typography Hierarchy)
1. **서체**: `Pretendard`, Apple SD Gothic Neo, Malgun Gothic 시스템 폰트 순위
2. **페이지 H1 타이틀**: `text-3xl md:text-4xl font-extrabold` (28px ~ 36px)
3. **주요 섹션 H2 타이틀**: `text-xl md:text-2xl font-bold` (20px ~ 24px)
4. **카드 및 서브 H3/H4**: `text-base md:text-lg font-bold` (16px ~ 18px)
5. **본문 텍스트**: `text-xs md:text-sm` (12px ~ 14px)
6. **최소 글자 크기 하한선 (엄격 준수)**:
   - **모바일 화면**: 최소 `12px` (`text-xs`) 이상
   - **PC 데스크톱 화면**: 최소 `13px` (`text-[13px]`) 이상
   - **`11px` 이하의 폰트는 가독성 저하 방지를 위해 전체 사이트에서 엄격히 금지**

### 4.3 반응형 텍스트 및 레이아웃 규칙
- **단어 단위 줄바꿈**: 모든 한글 단락 및 제목에 `word-break: keep-all;` 및 Tailwind `break-keep`을 적용하여 단어 중간 분절 방지.
- **PC 한 줄 유지 규칙**: 와이드 데스크톱에서 문장이 어색하게 줄바꿈되지 않도록 `max-w-none lg:whitespace-nowrap break-keep` 패턴 사용.
- **오버플로우 방지**: 모바일 뷰포트(390px, 360px)에서 `document.documentElement.scrollWidth <= window.innerWidth`를 유지하도록 모든 flex 요소에 `flex-wrap` 및 적응형 패딩 부여.

---

## 5. 페이지별 핵심 기능 사양

### 5.1 메인 홈 (`content/_index.md`)
- **히어로 섹션**: 자율신경실조증 치료의 핵심 가치 제시 및 1:1 맞춤 진료 안내
- **4대 신뢰 지표 (Trust Indicators)**:
  1. 누적 임상 데이터 기반 진료 노하우
  2. 한방신경정신과 전문의/박사/석사 의료진의 체계적 진료
  3. 전국 15개 네트워크 인프라
  4. 객관적 검사 시스템을 통한 과잉진료 방지

### 5.2 자율신경 원인 검사/진단 (`content/autonomic-diagnosis/_index.md`)
- **자율신경 6대 심층 검사 체계**:
  1. HRV 자율신경 균형 검사 (교감/부교감 활성도 정밀 분석)
  2. 뇌기능 및 뇌파(EEG) 검사
  3. 스트레스 저항도 및 신체 피로도 평가
  4. 체질 및 한의학적 변증 진단
  5. 척추 및 경추 정렬 상태 검사
  6. 동반 심리·수면 상태 심층 평가
- **투명한 검사 시스템 안내**: 과잉진료를 방지하기 위해 필요한 검사만 선별 진행

### 5.3 자율신경 치료 방법/생활 관리 (`content/autonomic-treatment/_index.md`)
- **7대 통합 치료 접근 체계**:
  1. 증상 발생 과정 입체 추적
  2. 자율신경과 뇌기능 동시 조절
  3. 과도한 긴장·각성 완화
  4. 1:1 체질 맞춤 한방 치료 (한약, 침·전침·약침, 경추추나)
  5. 생기능 자기조절훈련 (HRV 바이오피드백 & 뉴로피드백)
  6. 동반 증상 통합 진료 (공황·불면·불안·어지럼증)
  7. 자가 회복력 중심의 5단계 로드맵 (급성 증상 완화 → 수면 회복 → 조절력 향상 → 민감도 완화 → 일상 회복력 강화)
- **수면과 생활리듬 관리**:
  - 수면과 생활리듬의 의학적 중요성 설명
  - **일상에서 실천하는 8대 생활관리 수칙**:
    1. ⏰ 일정한 기상시간 유지
    2. 🛌 충분한 수면시간 확보
    3. ☕ 술과 카페인 섭취 조절
    4. 📱 과도한 야간 스마트폰 사용 줄이기
    5. 🥗 규칙적인 식사
    6. 🏃 무리하지 않는 유산소 운동
    7. 🛁 잠자리에 눕기 1시간전 온욕
    8. 🌿 과도한 업무와 학업 이후 회복시간 확보
  - **신경계 안정을 돕는 3대 핵심 실천 원칙**: 4-7-8 이완 호흡법, 수면 위생 및 일주기 리듬, 자극원 차단 및 온열 요법 (38~40℃ 온욕)
  - 핵심 가치: *"치료실에서의 치료와 일상에서의 회복 환경이 함께 만들어져야 장기적인 안정에 도움이 될 수 있습니다."*

### 5.4 커뮤니티 엔진 (`content/community/_index.md`)
- **4-Tab 반응형 인터페이스**: FAQ / 치료후기 / 유튜브 / 의학 칼럼
- **자율신경 FAQ 무한 자동 발행 엔진**:
  - `scripts/auto_publish_faq.js` 및 `static/js/auto_faq_engine.js` 연동
  - 주 2~3회 자동 스케줄링 발행 및 `즉시 1편 발행` 기능 지원
  - 환자들이 자주 묻는 12가지 핵심 질환별 의학적 답변 제공
- **치료후기 블러 게이트 (Member Lock Gate)**:
  - 의료법 준수를 위한 비회원 블러 처리 및 1:1 카카오/네이버 로그인 모달 연동
- **자율신경실조증 유튜브 갤러리**:
  - 실제 원장단 출연 의학 영상 반응형 임베드
- **자율신경 치료 칼럼 엔진**:
  - 의학적 메커니즘을 상세히 다룬 전문의 칼럼 연동

---

## 6. 로컬 개발 및 빌드/운영 명령어 (CLI Reference)

```powershell
# 1. 의존성 설치
pnpm install

# 2. 로컬 실시간 개발 서버 구동 (핫 리로드)
hugo server --disableFastRender

# 3. 프로덕션 정적 빌드 검증
hugo --gc --minify

# 4. GitHub 원격 저장소 푸시
# 방법 A: 원클릭 배치 파일 실행 (D:\autonerve\push_to_github.bat 더블클릭)
# 방법 B: CLI 명령 직접 실행
git push -u origin main
```

---

## 7. 문서 자동 업데이트 관리 방안 (Maintenance Policy)

새로운 기능 추가, 문구 수정, 또는 이슈 해결이 이루어질 때마다 아래 규칙에 따라 문서를 최신 상태로 유지합니다:
1. **신규 기능 및 화면 변경 시**: 본 매뉴얼(`doc/manual.md`)의 제5장(페이지별 핵심 기능 사양)에 즉시 반영.
2. **문제 발생 및 해결 시**: `doc/troubleshooting.md`에 문제 번호([ISSUE-XX]), 원인, 해결 방법, 검증 결과를 기록.
3. **루트 연동 유지**: `README.md`의 목차 및 빠른 바로가기 링크의 유효성을 점검.
