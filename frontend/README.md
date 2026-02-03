# 💌 Cupidity (2024 Archive)

사용자 기반의 데이트 코스 추천 및 지역별 커뮤니티 플랫폼입니다.

## ✨ 주요 기능
- **소셜 로그인**: Kakao OAuth 2.0을 이용한 인증 시스템
- **날씨 API**: OpenWeatherMap API를 활용한 실시간 날씨 기반 코스 추천
- **커뮤니티**: 자유게시판(Post) CRUD 기능 구현
- **반응형 UI**: Tailwind CSS를 활용한 모바일/데스크탑 대응

## 🛠 Tech Stack
- **Frontend**: React, React Router, Tailwind CSS, Axios, React Icons
- **Backend**: Node.js (Express) - *별도 서버 구동 필요*
- **Dev Tools**: Environment Variables (.env) 관리

## 📂 폴더 구조 (Refactored)
- `src/pages`: 독립된 페이지 단위 컴포넌트
- `src/components`: 재사용 가능한 UI 조각들
- `src/styles`: 전역 및 컴포넌트별 CSS 스타일링
- `src/assets`: 이미지 및 정적 자산

## ⚙️ 실행 방법
1. `.env` 파일에 API 키 설정 (Kakao, Weather)
2. `npm install`
3. `npm start`