import React from 'react';
import kakaoLoginImage from '../images/kakao.png';

const SocialKakao = () => {
  const Rest_api_key = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const redirect_uri = 'http://localhost:3000/auth'; // Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code&prompt=login`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <button onClick={handleLogin} style={{ border: 'none', background: 'none', padding: 0 }}>
        <img 
          src={kakaoLoginImage} 
          alt="카카오 로그인" 
          style={{ cursor: 'pointer', width: '200px', height: 'auto' }} 
          // 원하는 크기로 조정 (여기서는 너비 120px로 설정)
        />
      </button>
    </>
  );
};

export default SocialKakao;
