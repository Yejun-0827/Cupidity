import React, { useState } from 'react';

const Form = ({ onSubmit, msg }) => {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    onSubmit(inputVal);
    setInputVal('');
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full max-w-[600px] relative">
        <input
          type="text"
          placeholder="도시 이름을 입력하세요 (영문)"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-grow p-4 rounded-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#00df9a] font-bold"
          autoFocus
        />
        <button 
          type="submit" 
          className="bg-[#00df9a] text-black px-8 py-4 rounded-xl font-black hover:bg-white transition-all duration-300 shadow-lg"
        >
          SUBMIT
        </button>
      </form>
      {/* Invalid name 문구를 폼 아래에 독립적으로 배치 */}
      {msg && <p className="text-red-500 font-bold mt-4 animate-pulse">{msg}</p>}
    </div>
  );
};

export default Form;