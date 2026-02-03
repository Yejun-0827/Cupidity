import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const authorizationCode = searchParams.get('code');

    if (authorizationCode) {
      axios.get(`${API_BASE_URL}/auth?code=${authorizationCode}`)
        .then(response => {
          // 1. 백엔드 응답에서 userInfo가 있는지 확인
          if (response.data.userInfo) {
            // 2. 브라우저 로컬 스토리지에 유저 정보 저장 (새로고침해도 로그인 유지용)
            localStorage.setItem('user', JSON.stringify(response.data.userInfo));
            
            // 3. 메인 화면으로 자동 이동
            navigate('/');
          } else {
            console.error('사용자 정보가 응답에 없습니다.');
            navigate('/login'); // 실패 시 로그인 페이지로 반려
          }
        })
        .catch(error => {
          console.error('카카오 인증 에러:', error);
          alert('로그인 처리 중 오류가 발생했습니다.');
          navigate('/login');
        });
    }
  }, [location, navigate, API_BASE_URL]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#000300]">
      <h1 className="text-[#00df9a] text-2xl font-bold animate-pulse">
        로그인 처리 중입니다...
      </h1>
      <p className="text-gray-400 mt-4">잠시만 기다려 주세요.</p>
    </div>
  );
};

export default Auth;