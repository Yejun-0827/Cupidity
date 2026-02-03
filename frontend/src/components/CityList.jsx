import React from 'react';
import City from './City'; // 같은 components 폴더에 있으니 ./City

const CityList = ({ cities = [] }) => {
  if (!cities || cities.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 text-lg font-medium italic">
          검색한 도시의 날씨 정보가 여기에 표시됩니다.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {cities.map((city, index) => (
        <City key={`${city.id}-${index}`} city={city} />
      ))}
    </div>
  );
};

export default CityList;