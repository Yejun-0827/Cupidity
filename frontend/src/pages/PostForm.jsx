import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostForm = ({ addPost, user }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요!');
      return;
    }

    // 📍 글쓴이는 로그인한 유저 닉네임으로 고정
    const newPost = {
      id: Date.now(),
      title,
      content,
      author: user?.properties?.nickname || '익명의 유저',
      date: new Date().toLocaleDateString(),
    };

    addPost(newPost);
    alert('게시글이 등록되었습니다!');
    navigate('/posts'); // 작성 후 리스트로 이동
  };

  return (
    <div className="bg-[#000300] min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-[800px] mx-auto bg-[#121212] p-10 rounded-[3rem] border border-gray-800 shadow-2xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-black text-[#00df9a] mb-2 uppercase tracking-tighter">
            Create Post
          </h1>
          <p className="text-gray-500 text-sm">소중한 데이트의 기록을 남겨보세요.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 글쓴이 정보 표시 (읽기 전용) */}
          <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-2xl border border-gray-800">
            <span className="text-gray-500 font-bold text-sm uppercase">Author</span>
            <span className="text-[#00df9a] font-black">{user?.properties?.nickname || '로그인 필요'}</span>
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-xs font-bold uppercase ml-2">Title</label>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              className="w-full bg-[#1a1a1a] text-white p-5 rounded-2xl border border-gray-800 focus:border-[#00df9a] outline-none transition-all font-bold"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-xs font-bold uppercase ml-2">Content</label>
            <textarea
              placeholder="내용을 입력하세요"
              className="w-full bg-[#1a1a1a] text-white p-5 rounded-2xl border border-gray-800 focus:border-[#00df9a] outline-none transition-all min-h-[300px] resize-none leading-relaxed"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00df9a] text-black font-black py-5 rounded-2xl hover:bg-white transition-all duration-300 shadow-xl active:scale-95 text-lg uppercase"
          >
            Post Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;