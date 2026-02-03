import React, { useState } from 'react';
import Form from '../components/Form';
import CityList from '../components/CityList';
import '../styles/App.css';

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

// 📍 서울 자치구 매핑 테이블 (한글/영문 대응)
const seoulDistricts = {
  "강남": "Gangnam", "강동": "Gangdong", "강북": "Gangbuk", "강서": "Gangseo",
  "관악": "Gwanak", "광진": "Gwangjin", "구로": "Guro", "금천": "Geumcheon",
  "노원": "Nowon", "도봉": "Dobong", "동대문": "Dongdaemun", "동작": "Dongjak",
  "마포": "Mapo", "서대문": "Seodaemun", "서초": "Seocho", "성동": "Seongdong",
  "성북": "Seongbuk", "송파": "Songpa", "양천": "Yangcheon", "영등포": "Yeongdeungpo",
  "용산": "Yongsan", "은평": "Eunpyeong", "종로": "Jongno", "중구": "Jung-gu", "중랑": "Jungnang"
};

function WeatherApp({ onWeatherUpdate }) {
  const [cities, setCities] = useState([]);
  const [msg, setMsg] = useState('');

  const handleFormSubmit = (inputVal) => {
    // 📍 1. 입력값에서 '구' 글자 제거 (예: '강남구' -> '강남')
    let searchTerm = inputVal.replace(/구$/, "").trim();

    // 📍 2. 매핑 테이블에 있는지 확인, 없으면 입력값 그대로 사용
    const apiCityName = seoulDistricts[searchTerm] || searchTerm;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${apiCityName}&appid=${apiKey}&units=metric&lang=kr`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === '404') {
          setMsg('해당 지역을 찾을 수 없습니다. 다시 입력해주세요.');
        } else {
          setCities((prev) => [data, ...prev]);
          setMsg('');
          if (onWeatherUpdate) onWeatherUpdate(data);
        }
      })
      .catch(() => setMsg('서버 연결에 실패했습니다.'));
  };

  return (
    <div className="min-h-screen bg-[#000300] pt-32 pb-20 px-4">
      <div className="max-w-[1240px] mx-auto text-center">
        <h1 className="text-6xl font-black text-[#00df9a] mb-12 uppercase">Weather Search</h1>
        <div className="max-w-[600px] mx-auto mb-20">
          <Form onSubmit={handleFormSubmit} msg={msg} />
          <p className="text-gray-500 mt-4 text-sm">팁: '강남', '종로', 'Mapo' 처럼 입력해보세요!</p>
        </div>
        <CityList cities={cities} />
      </div>
    </div>
  );
}

export default WeatherApp;