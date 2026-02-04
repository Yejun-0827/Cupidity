# 💘 Cupidity (Seoul Date Course Platform)

> **실시간 날씨 데이터와 타임라인 기반의 사용자 맞춤형 데이트 코스 큐레이션 서비스**

`Cupidity`는 "오늘 어디서 무엇을 할까?"라는 고민을 해결하기 위해 기획된 플랫폼입니다. 서울 주요 권역의 날씨를 실시간으로 분석하여, 맑은 날에는 화창한 야외 활동을, 비 오는 날에는 쾌적한 실내 활동을 즐길 수 있도록 최적의 3단계(오전-점심-오후) 코스를 제안합니다.

---

## ✨ 핵심 기능 (Key Features)

- **날씨 기반 스마트 큐레이션**: OpenWeatherMap API를 연동하여 현재 기상 상태에 따라 'Clear(맑음)'와 'Rain(비)' 모드에 최적화된 장소를 자동 추천합니다.
- **서울 8대 핵심 권역 데이터**: 강남, 마포, 용산, 성동, 송파, 여의도, 종로, 중구 등 서울의 가장 핫한 지역별 정밀 데이터를 제공합니다.
- **3단계 타임라인 코스**: 단순히 장소만 나열하는 것이 아니라, 데이트의 흐름을 고려하여 **오전(11:00) - 점심(13:00) - 오후(15:30)**로 이어지는 완벽한 동선을 설계해 줍니다.
- **다크 모드 커뮤니티**: 사용자들이 직접 경험한 데이트 후기를 공유하고 소통할 수 있는 세련된 다크 모드 기반의 자유게시판을 운영합니다.
- **카카오 간편 로그인**: Kakao OAuth 2.0을 도입하여 복잡한 가입 절차 없이 쉽고 안전하게 서비스를 이용할 수 있습니다.
- **네이버 지도 연동**: 추천된 각 장소를 클릭하면 즉시 네이버 지도 검색 결과로 연결되어 위치 확인 및 길 찾기가 가능합니다.

---

## 🛠 기술 스택 (Tech Stack)

### Frontend
- **React**: 컴포넌트 기반의 사용자 인터페이스 구현
- **Tailwind CSS**: 모던한 디자인 시스템 및 반응형 레이아웃 적용
- **React-Router-Dom**: 매끄러운 페이지 전환 및 라우팅 관리

### Backend & Database
- **Node.js & Express**: 안정적인 API 요청 처리 및 서버 로직 제어
- **MySQL**: 게시글 및 사용자 데이터의 효율적인 저장 및 관리
- **Axios**: 공공 API 데이터 수집 및 클라이언트-서버 간 통신

---

## 📂 프로젝트 구조 (Structure)

```text
Cupidity/
├── backend/             # Express 서버 및 DB 설정
│   ├── server.js        # 서버 엔트리 포인트
│   └── .env             # 민감 정보 관리 (API Key, DB Info 등)
└── frontend/            # React 클라이언트 소스 코드
    ├── src/components/  # Navbar, Hero, Cards 등 공용 UI
    └── src/pages/       # WeatherApp, CityListPage, PostList 등

⚙️ 시작하기 (Getting Started)
환경 변수 설정: .env 파일에 발급받은 Kakao REST API Key와 OpenWeatherMap API Key를 설정합니다.

패키지 설치: 프론트엔드와 백엔드 각 폴더에서 npm install을 실행합니다.

서버 실행: 백엔드 서버(node server.js)를 먼저 실행한 뒤, 프론트엔드에서 npm start를 입력합니다.
