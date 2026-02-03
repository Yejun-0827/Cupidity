import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './styles/App.css';

// Components & Pages
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';
import CityListPage from './pages/CityListPage';
import WeatherApp from './pages/WeatherApp';
import PostList from './pages/PostList';
import PostForm from './pages/PostForm';
import SignupPage from './pages/SignupPage';
import Auth from './pages/Auth';

// 📍 로그인 권한 가드: 새로고침 시 튕김 방지 로직 적용
const ProtectedRoute = ({ user, children }) => {
  const savedUser = localStorage.getItem('user');
  if (!user && !savedUser) {
    alert("로그인이 필요한 서비스입니다! 카카오 로그인을 해주세요.");
    return <Navigate to="/" replace />;
  }
  return children;
};

const MainLayout = ({ children, user, setUser }) => (
  <div className="bg-[#000300] min-h-screen w-full text-white flex flex-col">
    <Navbar user={user} setUser={setUser} />
    <div className="flex-grow">{children}</div>
    <Footer />
  </div>
);

function App() {
  // 📍 게시글 상태: 로컬스토리지 연동으로 새로고침 시 보존
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  
  const [weatherList, setWeatherList] = useState([]); 
  const [user, setUser] = useState(null);

  // 게시글 변경 시 로컬스토리지 저장
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // 유저 정보 불러오기
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // 📍 서울 8대 권역 정밀 데이터베이스
  const regionDatabase = {
    "Gangnam": {
      Rain: [
        { time: "11:00 AM", name: "코엑스 별마당 도서관", type: "실내/문화", desc: "비 오는 날 유리 천장으로 떨어지는 빗소리와 독서" },
        { time: "01:00 PM", name: "호우섬 코엑스점", type: "점심/식사", desc: "실내에서 즐기는 홍콩 감성 딤섬 맛집" },
        { time: "03:30 PM", name: "강남역 LP바 제이앤제이", type: "실내/음악", desc: "빗소리와 어울리는 아날로그 사운드" }
      ],
      Clear: [
        { time: "11:30 AM", name: "도산공원 산책로", type: "야외/공원", desc: "햇살 아래 걷는 평화로운 숲길" },
        { time: "01:00 PM", name: "가로수길 테라스 카페", type: "점심/브런치", desc: "테라스에서 즐기는 여유로운 식사" },
        { time: "04:00 PM", name: "압구정 로데오 투어", type: "야외/핫플", desc: "트렌디한 팝업스토어 구경" }
      ]
    },
    "Mapo": {
      Rain: [
        { time: "11:00 AM", name: "연남동 독립서점 투어", type: "실내/서점", desc: "작고 소중한 서점들 속 감성 충전" },
        { time: "01:00 PM", name: "망원시장 칼국수", type: "점심/식사", desc: "비 올 때 더 맛있는 뜨끈한 시장 음식" },
        { time: "03:00 PM", name: "합정역 북카페 '채그로'", type: "실내/뷰", desc: "한강 비 내리는 모습이 보이는 통창 뷰" }
      ],
      Clear: [
        { time: "12:00 PM", name: "망원 한강공원", type: "야외/한강", desc: "돗자리 펴고 즐기는 한강 라면 피크닉" },
        { time: "02:30 PM", name: "경의선 숲길", type: "야외/공원", desc: "도심 속 숲길 산책과 광합성" },
        { time: "04:30 PM", name: "연남동 주택 카페", type: "야외/카페", desc: "유럽풍 카페 테라스에서 즐기는 오후" }
      ]
    },
    "Yongsan": {
      Rain: [
        { time: "11:00 AM", name: "리움 미술관", type: "실내/전시", desc: "감각적인 현대 미술과 함께하는 우아한 오전" },
        { time: "01:30 PM", name: "용산 아이파크몰", type: "점심/복합몰", desc: "맛집과 쇼핑을 한 번에 해결" },
        { time: "04:00 PM", name: "한남동 LP바", type: "실내/바", desc: "세련된 분위기와 빈티지 사운드" }
      ],
      Clear: [
        { time: "11:00 AM", name: "용산가족공원", type: "야외/공원", desc: "넓은 잔디밭 위 평화로운 휴식" },
        { time: "01:00 PM", name: "이태원 경리단길", type: "야외/식사", desc: "남산타워 뷰 테라스 레스토랑" },
        { time: "03:30 PM", name: "노들섬 산책", type: "야외/한강", desc: "강바람 맞으며 걷는 한강 복합문화공간" }
      ]
    },
    "Seongdong": {
      Rain: [
        { time: "11:30 AM", name: "성수 LCDC 서울", type: "실내/복합문화", desc: "감각적인 브랜드 샵 투어" },
        { time: "01:00 PM", name: "성수 대림창고", type: "점심/카페", desc: "거친 인더스트리얼 감성 속 브런치" },
        { time: "03:30 PM", name: "섬세이 테라리움", type: "실내/체험", desc: "맨발로 느끼는 자연 테마 전시" }
      ],
      Clear: [
        { time: "11:00 AM", name: "서울숲 거울연못", type: "야외/공원", desc: "햇빛에 반짝이는 푸른 나무와 호수" },
        { time: "01:00 PM", name: "성수 팝업스토어 거리", type: "야외/이벤트", desc: "매주 새롭게 열리는 브랜드 체험" },
        { time: "04:00 PM", name: "뚝섬 한강공원", type: "야외/한강", desc: "해 질 녘 한강 보며 치맥하기" }
      ]
    },
    "Songpa": {
      Rain: [
        { time: "11:00 AM", name: "잠실 아쿠아리움", type: "실내/관람", desc: "신비로운 바다 세계 실내 데이트" },
        { time: "01:00 PM", name: "롯데월드몰 갓덴스시", type: "점심/식사", desc: "쾌적한 몰 안에서 즐기는 고퀄리티 초밥" },
        { time: "04:00 PM", name: "잠실 롯데콘서트홀", type: "실내/문화", desc: "클래식 공연과 함께하는 오후" }
      ],
      Clear: [
        { time: "11:00 AM", name: "석촌호수 산책로", type: "야외/공원", desc: "호수 바람 맞으며 남기는 인생샷" },
        { time: "01:00 PM", name: "송리단길 맛집 탐방", type: "야외/식사", desc: "트렌디한 골목 맛집 투어" },
        { time: "03:30 PM", name: "올림픽공원 나홀로나무", type: "야외/공원", desc: "푸른 잔디밭 위 랜드마크 사진" }
      ]
    },
    "Yeongdeungpo": {
      Rain: [
        { time: "11:00 AM", name: "더현대 서울", type: "실내/랜드마크", desc: "실내 정원 사운즈포레스트 산책" },
        { time: "01:30 PM", name: "IFC몰 푸드코트", type: "점심/식사", desc: "비 안 맞고 연결되는 맛집 투어" },
        { time: "04:00 PM", name: "여의도 CGV", type: "실내/영화", desc: "편안한 소파에서 즐기는 영화" }
      ],
      Clear: [
        { time: "12:00 PM", name: "여의도 한강공원", type: "야외/한강", desc: "강바람 아래 즐기는 배달 음식 피크닉" },
        { time: "03:00 PM", name: "문래창작촌 골목", type: "야외/예술", desc: "철공소와 카페가 공존하는 힙한 감성" },
        { time: "05:00 PM", name: "선유도 공원", type: "야외/출사", desc: "노을 맛집 신비로운 공원 산책" }
      ]
    },
    "Jongno": {
      Rain: [
        { time: "11:00 AM", name: "국립현대미술관 서울", type: "실내/전시", desc: "정적인 분위기 속 현대 미술 관람" },
        { time: "01:00 PM", name: "익선동 한옥 카페", type: "점심/식사", desc: "한옥 처마 끝 빗소리 감상" },
        { time: "03:30 PM", name: "인사동 전통찻집", type: "실내/전통", desc: "따뜻한 차와 여유로운 오후" }
      ],
      Clear: [
        { time: "10:30 AM", name: "경복궁 한복 산책", type: "야외/역사", desc: "고궁에서 한복 입고 남기는 추억" },
        { time: "01:00 PM", name: "북촌 한옥마을", type: "야외/산책", desc: "서울 도심이 보이는 기와지붕 산책" },
        { time: "04:00 PM", name: "청계천 산책로", type: "야외/휴식", desc: "시원한 물소리 들으며 도심 걷기" }
      ]
    },
    "Jung-gu": {
      Rain: [
        { time: "11:00 AM", name: "동대문 DDP 전시", type: "실내/문화", desc: "우주선 같은 공간에서 전시 즐기기" },
        { time: "01:00 PM", name: "명동교자 본점", type: "점심/식사", desc: "비 오는 날 생각나는 진한 칼국수" },
        { time: "03:30 PM", name: "을지로 힙지로 와인바", type: "실내/펍", desc: "간판 없는 건물을 찾아가는 재미" }
      ],
      Clear: [
        { time: "11:30 AM", name: "남산 서울타워", type: "야외/뷰", desc: "케이블카 타고 내려다보는 전경" },
        { time: "02:00 PM", name: "덕수궁 돌담길", type: "야외/산책", desc: "가장 낭만적인 돌담길 산책" },
        { time: "04:30 PM", name: "중구 피크닉(Piknic)", type: "야외/전시", desc: "세련된 공간에서 즐기는 전시" }
      ]
    }
  };

  const getCurationData = () => {
    return weatherList.map(weather => {
      const isRainy = ['Rain', 'Drizzle', 'Thunderstorm'].includes(weather.main);
      const cityData = regionDatabase[weather.name] || {
        Rain: [{ time: "오후", name: "근처 조용한 카페", type: "실내", desc: "빗소리 듣기" }],
        Clear: [{ time: "오후", name: "인근 공원 산책", type: "야외", desc: "햇살 즐기기" }]
      };
      return {
        id: `${weather.name}-${Date.now()}-${Math.random()}`,
        name: weather.name,
        temp: Math.round(weather.temp),
        weather: isRainy ? 'Rain' : 'Clear',
        desc: isRainy ? `비 오는 ${weather.name} 데이트` : `햇살 맑은 ${weather.name} 데이트`,
        places: isRainy ? cityData.Rain : cityData.Clear
      };
    });
  };

  const handleWeatherUpdate = (newWeather) => {
    setWeatherList(prev => {
      const filtered = prev.filter(w => w.name !== newWeather.name);
      return [newWeather, ...filtered];
    });
  };

  const cardsRef = useRef(null);
  const scrollToCards = () => cardsRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout user={user} setUser={setUser}><Hero scrollToCards={scrollToCards} /><Cards ref={cardsRef} /></MainLayout>} />
        <Route path="/city-list" element={<ProtectedRoute user={user}><MainLayout user={user} setUser={setUser}><CityListPage cities={getCurationData()} isCourse={false} /></MainLayout></ProtectedRoute>} />
        <Route path="/courses" element={<ProtectedRoute user={user}><MainLayout user={user} setUser={setUser}><CityListPage cities={getCurationData()} isCourse={true} /></MainLayout></ProtectedRoute>} />
        <Route path="/weather" element={<ProtectedRoute user={user}><MainLayout user={user} setUser={setUser}><WeatherApp onWeatherUpdate={handleWeatherUpdate} /></MainLayout></ProtectedRoute>} />
        {/* 📍 게시글 리스트와 글쓰기 전달 방식 최적화 */}
        <Route path="/posts" element={<ProtectedRoute user={user}><MainLayout user={user} setUser={setUser}><PostList posts={posts}/></MainLayout></ProtectedRoute>} />
        <Route path="/write" element={<ProtectedRoute user={user}><MainLayout user={user} setUser={setUser}><PostForm addPost={(p)=>setPosts([p, ...posts])} user={user}/></MainLayout></ProtectedRoute>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<MainLayout user={user} setUser={setUser}><SignupPage /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;