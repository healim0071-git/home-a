# 해아림 자율신경 클리닉 (Healim Autonomic Clinic)

> **마음까지 헤아리는 해아림한의원 전국 15개 네트워크 자율신경클리닉 공식 웹사이트**  
> 두근거림, 어지럼증, 불면, 호흡 불편 등 복합 자율신경실조증에 대한 정밀 진단 및 1:1 맞춤 치료 안내 플랫폼

[![Hugo Extended](https://img.shields.io/badge/Hugo-v0.162.0+-FF4088?style=flat&logo=hugo&logoColor=white)](https://gohugo.io/)
[![Hugo Blox](https://img.shields.io/badge/Hugo%20Blox-Starter-blue?style=flat)](https://hugoblox.com/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.1.12-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-teal.svg)](#)

---

## 📚 핵심 프로젝트 문서 바로가기 (Documentation)

본 프로젝트의 상세 제작 가이드 및 이슈 대응 내역은 [`doc/`](file:///d:/autonerve/doc/) 폴더 내 전문 문서로 체계적으로 관리되고 있습니다. 아래 링크를 통해 전체 문서를 열람하실 수 있습니다.

| 문서 구분 | 파일 경로 | 설명 |
| :--- | :--- | :--- |
| **📖 제작 및 운영 매뉴얼** | [**`doc/manual.md`**](doc/manual.md) <br>([로컬 파일 열기](file:///d:/autonerve/doc/manual.md)) | 프로젝트 개요, 디렉토리 아키텍처, 디자인 시스템(컬러/폰트/브레이크포인트 규격), 7개 주요 페이지 기능 사양, CLI 명령어 |
| **🛠️ 문제보고서 & 트러블슈팅** | [**`doc/troubleshooting.md`**](doc/troubleshooting.md) <br>([로컬 파일 열기](file:///d:/autonerve/doc/troubleshooting.md)) | Goldmark 마크다운 파싱 오류, 초소형 폰트(11px) 퇴치, PC 문장 줄바꿈, 모바일 가로 스크롤 오버플로우, Git 인증 세션 격리 해결 보고 |

> [!TIP]
> 작업이 진행될 때마다 `doc/` 폴더 내 매뉴얼과 문제보고서가 지속적으로 자동 갱신되며, 변경 사항은 본 `README.md`와 상시 동기화됩니다.

---

## 🌟 주요 특징 및 시스템 구성 (Key Highlights)

1. **자율신경 6대 심층 검사 시스템**
   - HRV 자율신경 균형 검사, 뇌파(EEG) 검사, 스트레스 저항도, 체질 변증, 척추 정렬, 동반 심리 심층 평가
2. **7대 통합 치료 접근 & 5단계 회복 로드맵**
   - 1:1 체질 맞춤 한약, 침·전침·약침, 두경부 추나, HRV 바이오피드백 & 뉴로피드백, 동반 증상 통합 케어
3. **수면과 생활리듬 8대 생활관리 수칙**
   - 기상시간 유지, 수면시간 확보, 술/카페인 조절, 야간 스마트폰 줄이기, 규칙적 식사, 유산소 운동, **잠자리에 눕기 1시간 전 온욕(38~40℃)**, 회복시간 확보
4. **능동적 커뮤니티 엔진**
   - 자율신경 FAQ 무한 자동 발행 엔진 (`auto_publish_faq.js`)
   - 의학 칼럼 발행 엔진 (`auto_publish_column.js`)
   - 의료법 준수 치료후기 열람 잠금 게이트 (비회원 블러 필터 및 소셜 로그인 모달)
5. **엄격한 가독성 & 모바일 최적화 디자인 시스템**
   - 전체 화면 `11px` 이하 폰트 전수 배제 (모바일 최소 `12px`, PC 최소 `13px` 절대 준수)
   - 모바일 뷰포트(360px, 390px) 가로 스크롤 오버플로우 `0px` 보장
   - 한글 단어 보존 줄바꿈 (`word-break: keep-all; break-keep`)

---

## 🗂️ 디렉토리 구조 (Directory Layout)

```plaintext
d:\autonerve\
├── assets/             # 커스텀 CSS (Pretendard 폰트, Tailwind v4 토큰)
├── config/             # Hugo 사이트 기본 설정 및 GNB 메뉴 구조
├── content/            # 사이트 전체 페이지 마크다운 (홈, 검사, 치료, 커뮤니티 등)
├── doc/                # [문서] 제작 매뉴얼(manual.md) 및 문제보고서(troubleshooting.md)
├── layouts/            # Hugo HTML 템플릿, 헤더, 푸터, 공통 섹션, CTA 배너
├── public/             # Hugo 빌드 정적 웹사이트 산출물
├── push_to_github.bat  # 윈도우 환경 1클릭 GitHub 푸시 배치 스크립트
├── scripts/            # FAQ/칼럼 자동 발행 엔진 및 문서 동기화 스크립트
├── static/             # 이미지, 도서 썸네일, SVG 일러스트, 클라이언트 스크립트
├── package.json        # 의존성 패키지 및 NPM 스크립트 정의
└── README.md           # [본 문서] 프로젝트 안내 및 문서 링크 허브
```

---

## 🚀 빠른 시작 가이드 (Quick Start)

### 1. 의존성 설치
```powershell
pnpm install
# 또는
npm install
```

### 2. 로컬 개발 서버 실행 (실시간 핫 리로드)
```powershell
hugo server --disableFastRender
```
- 브라우저 접속: `http://localhost:1313/`

### 3. 프로덕션 정적 사이트 빌드
```powershell
hugo --gc --minify
```

### 4. GitHub 원격 저장소 푸시
- **방법 1 (간편 실행)**: 탐색기에서 [`push_to_github.bat`](file:///d:/autonerve/push_to_github.bat) 파일을 더블 클릭하여 실행
- **방법 2 (터미널 실행)**:
```powershell
git push -u origin main
```

### 5. 문서 상태 점검 및 자동 업데이트
```powershell
pnpm run doc:update
# 또는
node scripts/update_docs.js
```

---

## 🔄 문서 자동 업데이트 규정 (Auto-Update Policy)

본 프로젝트는 작업이 진행될 때마다 문서의 무결성과 최신성을 자동으로 보존합니다:
- **코드 및 화면 변경 시**: `doc/manual.md`에 새로운 구현 사항이 즉시 업데이트됩니다.
- **버그 발견 및 수정 시**: `doc/troubleshooting.md`에 원인과 해결책이 신규 이슈 번호(`ISSUE-XX`)로 즉시 기록됩니다.
- **NPM 명령어 지원**: `pnpm run doc:update` 실행 시 전체 문서 링크 유효성 검사, 폰트 규격 준수 여부 스캔, 타임스탬프 갱신이 전자동으로 수행됩니다.
