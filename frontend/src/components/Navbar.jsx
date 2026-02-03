import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import SocialKakao from './SocialKakao';

const Navbar = ({ user, setUser }) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  // 로그인 상태 실시간 체크
  useEffect(() => {
    const checkLogin = setInterval(() => {
      const savedUser = localStorage.getItem('user');
      if (savedUser && !user) setUser(JSON.parse(savedUser));
    }, 1000);
    return () => clearInterval(checkLogin);
  }, [user, setUser]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white z-50'>
      <Link to='/'><h1 className='text-3xl font-bold text-[#00df9a] cursor-pointer'>Cupidity</h1></Link>
      
      <div className='hidden md:flex flex-grow justify-end items-center'>
        <ul className='flex'>
          <li className='p-4 hover:text-[#00df9a] font-medium'><Link to="/city-list">지역별 리스트</Link></li>
          <li className='p-4 hover:text-[#00df9a] font-medium'><Link to="/courses">지역별 추천코스</Link></li>
          <li className='p-4 hover:text-[#00df9a] font-medium'><Link to="/weather">날씨 상황</Link></li>
          <li className='p-4 hover:text-[#00df9a] font-medium'><Link to="/posts">자유게시판</Link></li>
        </ul>
        <div className='ml-4'>
          {user ? (
            <div className='flex items-center gap-4'>
              <span className='font-bold text-sm bg-gray-800 px-3 py-1 rounded-full border border-[#00df9a]'>{user.properties?.nickname}님</span>
              <button onClick={handleLogout} className='text-xs text-gray-400 hover:text-white underline'>로그아웃</button>
            </div>
          ) : ( <SocialKakao /> )}
        </div>
      </div>
      <div onClick={() => setNav(!nav)} className='block md:hidden cursor-pointer'>{nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}</div>
      <div className={nav ? 'fixed left-0 top-0 w-[70%] h-full bg-[#000300] ease-in-out duration-500 z-50 p-6 shadow-2xl' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl font-bold text-[#00df9a] mb-8'>Cupidity</h1>
        <ul className='uppercase'>
          <li className='p-4 border-b border-gray-800'><Link to="/city-list" onClick={()=>setNav(false)}>지역별 리스트</Link></li>
          <li className='p-4 border-b border-gray-800'><Link to="/courses" onClick={()=>setNav(false)}>지역별 추천코스</Link></li>
          <li className='p-4 border-b border-gray-800'><Link to="/weather" onClick={()=>setNav(false)}>날씨 상황</Link></li>
          <li className='p-4 border-b border-gray-800'><Link to="/posts" onClick={()=>setNav(false)}>자유게시판</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;