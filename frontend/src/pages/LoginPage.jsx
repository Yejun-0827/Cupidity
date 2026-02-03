import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Login.png';
import '../styles/MainPage.css'; // 경로 수정

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login Attempt with:', email, password);
try{
    const response = await fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  if (response.ok) {
    console.log('Login successful:', data);
    navigate('/home'); // 성공 시 리다이렉트
  } else {
    console.error('Login failed:', data.message);
  }
}catch(error){
  console.error('Login failed:',error.message);
}
  };
  const handleRegisterClick = ()=>{
    navigate('/signup');
  }

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl w-full p-5 items-center">
        <div className="w-full md:w-1/2 px-16">
          <h2 className="font-bold text-2xl">Login</h2>
          <p className="text-sm mt-4">If you already a member, easily log in</p>

          <form action="" className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              className="p-2 mt-8 rounded-xl"
              type="text"
              name="email"
              placeholder="Email"
              aria-label="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                aria-label="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <svg onClick={() => setShowPassword(!showPassword)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer" viewBox="0 0 16 16">
                <path d={showPassword ? "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 011.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0114.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 011.172 8z" : "M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 4.5a2 2 0 110-4 2 2 0 010 4z"} />
              </svg>
            </div>
            <button type="submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-110 duration-300">Login</button>
          </form>
          <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-110 duration-300">
            {/* Google 로그인 버튼 코드 생략 */}
            Login with Google
          </button>
          <p className="mt-5 text-xs border-b border-gray-400 py-4">Forgot your password?</p>
          <div className="text-sm flex justify-between items-center">
            <p>Don't have an account?</p>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" onClick={handleRegisterClick} >Register</button>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={Logo}alt="Login page" />
        </div>
      </div>
    </section>
  );
};


export default LoginPage;
