import React from 'react';

const City = ({ city }) => {
  // 데이터 방어 로직: 데이터가 없으면 렌더링 안 함
  if (!city || !city.weather || city.weather.length === 0) return null;

  const { main, name, sys, weather } = city;
  // API 아이콘 이미지 주소
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="bg-[#121212] p-8 rounded-[2rem] border border-gray-800 shadow-2xl hover:border-[#00df9a] transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white">{name}</h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest">{sys.country}</p>
        </div>
        <div className="bg-[#00df9a]/10 p-2 rounded-2xl">
          <img src={icon} alt={weather[0].main} className="w-16 h-16" />
        </div>
      </div>
      
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-6xl font-black text-white">{Math.round(main.temp)}</span>
        <span className="text-3xl font-bold text-[#00df9a]">°C</span>
      </div>
      
      <div className="border-t border-gray-800 pt-6">
        <p className="text-[#00df9a] font-medium italic">
          "{weather[0].description}"
        </p>
        <div className="flex gap-4 mt-4 text-xs text-gray-500">
          <span>최고: {Math.round(main.temp_max)}°</span>
          <span>최저: {Math.round(main.temp_min)}°</span>
          <span>습도: {main.humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default City;