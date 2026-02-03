import React from 'react';

const CityListPage = ({ cities = [], isCourse = false }) => {
  if (!cities || cities.length === 0) {
    return (
      <div className="max-w-[1240px] mx-auto p-32 text-center text-white bg-[#000300]">
        <h2 className="text-4xl font-bold text-[#00df9a] mb-6 uppercase">데이터가 없습니다</h2>
        <p className="text-gray-500 text-xl">날씨 상황 페이지에서 도시를 먼저 검색해 주세요!</p>
      </div>
    );
  }

  const getNaverMapLink = (name) => `https://search.naver.com/search.naver?query=${encodeURIComponent(name)}`;

  return (
    <div className="bg-[#000300] min-h-screen pt-24 pb-20">
      <div className="max-w-[1240px] mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black text-[#00df9a] mb-4 tracking-tighter uppercase">{isCourse ? "Romantic Courses" : "Seoul Hotspots"}</h1>
          <div className="h-1 w-24 bg-[#00df9a] mx-auto"></div>
        </header>
        
        <div className={`grid grid-cols-1 ${isCourse ? 'lg:grid-cols-2 gap-16' : 'md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
          {cities.map((city) => (
            <div key={city.id} className="bg-[#121212] p-8 rounded-[2.5rem] border border-gray-800 shadow-2xl hover:border-[#00df9a] transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white">{city.name}</h2>
                  <p className="text-[#00df9a] font-bold mt-1">{city.temp}°C {city.weather === 'Rain' ? '🌧️' : '☀️'}</p>
                </div>
              </div>

              <div className={isCourse ? "space-y-10 relative" : "space-y-4"}>
                {isCourse && <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#00df9a] to-gray-800"></div>}
                {city.places?.map((place, idx) => (
                  <div key={idx} className={isCourse ? "relative pl-12" : "bg-[#1a1a1a] p-5 rounded-2xl border border-gray-800 hover:bg-[#222]"}>
                    {isCourse && <div className="absolute left-0 top-1 w-8 h-8 bg-[#121212] border-4 border-[#00df9a] rounded-full z-10"></div>}
                    <div className="flex flex-col gap-1">
                      {isCourse && <span className="text-[#00df9a] font-black text-xs uppercase">{place.time}</span>}
                      <a href={getNaverMapLink(place.name)} target="_blank" rel="noopener noreferrer" className="font-bold text-white text-xl hover:text-[#00df9a] transition-colors">
                        {place.name} ↗
                      </a>
                      {isCourse && <p className="text-gray-400 text-sm mt-1">{place.desc}</p>}
                      <span className="text-[10px] text-gray-600 uppercase mt-2 font-bold">{place.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityListPage;