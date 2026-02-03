import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts = [] }) => {
  return (
    <div className="bg-[#000300] min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-[1240px] mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black text-[#00df9a] mb-4 tracking-tighter uppercase">
            Community
          </h1>
          <p className="text-gray-500 font-medium">실시간 데이트 후기와 정보를 공유해보세요.</p>
          <div className="h-1 w-24 bg-[#00df9a] mx-auto mt-6"></div>
        </header>

        {/* 게시글 상단 컨트롤 섹션 */}
        <div className="flex justify-between items-end mb-8">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
            Total <span className="text-[#00df9a]">{posts.length}</span> Posts
          </p>
          <Link to="/write" className="bg-[#00df9a] text-black px-8 py-3 rounded-xl font-black hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,223,154,0.3)]">
            글쓰기
          </Link>
        </div>

        {/* 게시글 리스트 (그리드 카드형) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link 
                key={post.id} 
                to={`/post/${post.id}`}
                className="group bg-[#121212] p-8 rounded-[2rem] border border-gray-800 hover:border-[#00df9a] transition-all duration-500 shadow-2xl relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter border border-gray-800 px-2 py-1 rounded">
                    No. {post.id}
                  </span>
                  <span className="text-xs text-[#00df9a] font-bold italic">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                
                <h2 className="text-2xl font-black text-white mb-4 group-hover:text-[#00df9a] transition-colors line-clamp-1">
                  {post.title}
                </h2>
                
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-8">
                  {post.content}
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-gray-800">
                  <div className="w-8 h-8 bg-gray-700 rounded-full border border-gray-600"></div>
                  <span className="text-sm text-gray-300 font-bold">{post.author || '익명의 큐피트'}</span>
                </div>

                {/* 우상단 화살표 장식 */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#00df9a]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-32 text-center bg-[#121212] rounded-[3rem] border border-gray-800">
              <p className="text-gray-500 text-xl font-bold">작성된 게시글이 없습니다. 첫 글의 주인공이 되어보세요!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostList;