💘 Cupidity (Seoul Date Course Platform)
실시간 날씨와 타임라인을 결합한 맞춤형 데이트 코스 추천 서비스

Cupidity는 "오늘 어디 가지?"라는 고민을 해결하기 위해 기획된 플랫폼입니다. 서울 주요 권역의 날씨를 실시간으로 확인하고, 그에 딱 맞는 오전-점심-오후 풀코스를 추천받을 수 있습니다.

✨ 핵심 기능
날씨 기반 자동 큐레이션: OpenWeatherMap API를 연동하여 현재 날씨가 '맑음'인지 '비'인지에 따라 실내/실외 맞춤 코스를 다르게 보여줍니다.

서울 8대 핵심 권역 데이터: 강남, 마포, 용산, 성동, 송파, 여의도, 종로, 중구 등 서울 주요 핫플레이스의 상세 장소 데이터를 포함하고 있습니다.

3단계 타임라인 코스: 단순히 장소 하나만 알려주는 것이 아니라, 데이트 동선을 고려하여 오전, 점심, 오후로 이어지는 최적의 코스를 제안합니다.

커뮤니티 및 게시판: 사용자들이 직접 다녀온 후기를 공유하고 소통할 수 있는 다크 모드 기반의 자유게시판 기능을 제공합니다.

카카오 간편 로그인: 사용자가 별도의 가입 절차 없이 카카오 계정으로 로그인하여 서비스를 이용할 수 있도록 구현했습니다.

🛠 사용 기술 (Tech Stack)
Frontend
React: 컴포넌트 기반의 UI 렌더링

Tailwind CSS: 모던하고 깔끔한 다크 테마 및 반응형 디자인 적용

React-Router-Dom: 페이지 간 매끄러운 이동 및 경로 관리

Backend
Node.js & Express: API 요청 처리 및 서버 로직 제어

MySQL: 게시글 및 사용자 데이터 저장 및 관리

Axios: 공공 API 및 내부 서버 통신

📂 프로젝트 구조
Plaintext

Cupidity/
├── backend/             # 서버 로직 및 데이터베이스 설정
│   └── server.js        # Express 서버 엔트리 포인트
└── frontend/            # 클라이언트 소스 코드
    ├── src/components/  # Navbar, Hero, Cards 등 공통 컴포넌트
    └── src/pages/       # WeatherApp, CityList, PostList 등 주요 페이지

⚙️ 실행 방법
환경 변수 설정: .env 파일에 Kakao REST API 키와 OpenWeatherMap API 키를 입력합니다.

패키지 설치: npm install (프론트/백 각각 실행)

서버 구동: npm start
