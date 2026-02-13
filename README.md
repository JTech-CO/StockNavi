# StockNavi

> **주식 투자 초보를 위한 필수 사이트 모음 대시보드 - HTS 스타일 즐겨찾기**

<img width="3840" height="1820" alt="image" src="https://i.imgur.com/Zpt5Mg1.png" />

## 1. 소개 (Introduction)

이 프로젝트는 주식 투자에 필요한 핵심 사이트들을 한곳에 모아 빠르게 접근할 수 있도록 만든 북마크 대시보드입니다.
증권사 HTS(Home Trading System) UI를 모티브로, 투자심리 → 시세 → 거시경제 → 종목 분석 순서로 체계적인 정보 확인 루틴을 제공합니다.

**주요 기능**
- **투자심리 지표**: CNN Fear & Greed, VIX 등 시장 공포/탐욕 수준 확인
- **시장 흐름/차트**: Investing.com, TradingView, Finviz 히트맵
- **거시경제/금리**: FRED, CME FedWatch, Trading Economics
- **국내 주식 심화**: 네이버 금융, DART 공시, KRX 수급 데이터
- **미국/자산**: ETF 비교, 포트폴리오 시각화
- **통합검색**: 키워드로 전체 패널 실시간 필터링
- **도움말 가이드**: 주린이를 위한 STEP 1~3 투자 루틴 안내

## 2. 기술 스택 (Tech Stack)

- **Frontend**: HTML, JavaScript (Vanilla)
- **Styling**: Tailwind CSS (CDN), Vanilla CSS
- **Icons**: Font Awesome 6.0
- **Fonts**: Noto Sans KR (Google Fonts)
- **Deployment**: GitHub Pages (정적 호스팅)

## 3. 설치 및 실행 (Quick Start)

별도의 빌드나 패키지 설치가 필요 없습니다. [실행하기](<https://jtech-co.github.io/StockNavi/index.html>)

1. **클론 (Clone)**
   ```bash
   git clone https://github.com/[username]/StockNavi.git
   cd StockNavi
   ```

2. **실행 (Run)**
   `index.html`을 브라우저에서 직접 열면 됩니다.
   ```bash
   # 또는 로컬 서버 사용 시
   npx serve .
   ```

3. **배포 (Deploy)**
   GitHub 리포지토리 → Settings → Pages → Source: `main` / `/ (root)` 선택

## 4. 폴더 구조 (Structure)

```text
StockNavi/
├── index.html          # 메인 페이지 (GitHub Pages 진입점)
├── css/
│   └── style.css       # 커스텀 스타일 (HTS 패널, 스크롤바 등)
├── js/
│   ├── app.js          # 앱 초기화 진입점
│   ├── clock.js        # 실시간 시계
│   ├── search.js       # 통합검색 필터
│   ├── navigation.js   # 사이드바 스크롤 네비게이션
│   └── modal.js        # 도움말 모달
└── Simplified README.md
```

## 5. 정보 (Info)

- **License**: MIT

- **Contact**: JTech Co
