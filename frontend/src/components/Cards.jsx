import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * Cards 컴포넌트
 * forwardRef를 사용하여 App.js의 scrollToCards 기능이 이 컴포넌트의 시작 지점을 인식하게 합니다.
 */
const Cards = forwardRef((props, ref) => {
  // 준님이 요청하신 4가지 핵심 메뉴 구성
  const menuItems = [
    { 
      title: '지역별 리스트', 
      desc: '내 주변 핫플레이스 찾기', 
      path: '/city-list', 
      btn: '리스트 보기' 
    },
    { 
      title: '지역별 추천코스', 
      desc: '실패 없는 완벽한 데이트 동선', 
      path: '/courses', 
      btn: '코스 확인' 
    },
    { 
      title: '날씨 상황', 
      desc: '오늘의 날씨와 추천 코디', 
      path: '/weather', 
      btn: '날씨 보기' 
    },
    { 
      title: '자유게시판', 
      desc: '유저들의 솔직한 데이트 후기', 
      path: '/posts', 
      btn: '커뮤니티' 
    },
  ];

  return (
    /* 1. 배경을 #000300(딥블랙)으로 설정하여 사이드 여백 문제를 해결합니다. */
    <div ref={ref} className='w-full py-[10rem] px-4 bg-[#000300]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
        {menuItems.map((item, index) => (
          /* 2. 카드 배경은 약간 밝은 회색(#121212)을 써서 검정 배경 위에서 입체감을 줍니다. */
          <div 
            key={index} 
            className='w-full shadow-2xl border border-gray-800 flex flex-col p-6 my-4 rounded-2xl hover:scale-105 duration-300 bg-[#121212] text-white'
          > 
            <h2 className='text-xl font-extrabold text-center py-4 text-[#00df9a]'>
              {item.title}
            </h2>
            
            <p className='py-4 border-b border-gray-700 mx-4 text-center text-gray-400'>
              {item.desc}
            </p>
            
            
            <Link 
              to={item.path}
              className='bg-[#00df9a] text-black w-full text-center rounded-md font-bold mt-6 py-3 hover:bg-white hover:shadow-[0_0_15px_rgba(0,223,154,0.5)] transition-all'
            >
              {item.btn}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Cards;