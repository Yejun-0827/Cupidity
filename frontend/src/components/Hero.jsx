// frontend/src/components/Hero.jsx
import React from 'react';

const Hero = ({ scrollToCards }) => {
  return (
    <div className='text-white bg-[#000300]'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 uppercase tracking-widest'>
          GROWING WITH romantic relationship
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Create moments
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            you will remember <span className='text-gray-400'>forever</span>
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 max-w-[600px] mx-auto'>
          특별한 데이트를 위한 완벽한 플래너, Cupidity와 지금 시작하세요.
        </p>
        {/* 시작하기 버튼 클릭 시 scrollToCards 함수 실행 */}
        <button 
          onClick={scrollToCards}
          className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-4 text-black hover:bg-[#00bf82] transition-all duration-300 shadow-lg shadow-[#00df9a]/20'
        >
          시작하기
        </button>
      </div>
    </div>
  );
};

export default Hero;