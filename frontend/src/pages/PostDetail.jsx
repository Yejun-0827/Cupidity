import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/PostPage.css';   // 경로 수정
import '../styles/PostDetail.css'; // 경로 수정

function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find((post, index) => index.toString() === id);

  if (!post) {
    return <div>해당 게시물을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="board_wrap">
      <div className="board_title">
        <strong>게시물 상세보기</strong>
      </div>
      <div className="board_view_wrap">
        <div className="board_view">
          <div className="title">{post.title}</div>
          <div className="info">
            <dl>
              <dt>번호</dt>
              <dd>{parseInt(id) + 1}</dd>
            </dl>
            <dl>
              <dt>글쓴이</dt>
              <dd>{post.writer}</dd>
            </dl>
            <dl>
              <dt>작성일</dt>
              <dd>{post.date}</dd>
            </dl>
            <dl>
              <dt>조회</dt>
              <dd>{post.count}</dd>
            </dl>
          </div>
          <div className="cont">
            <p>{post.content}</p>
          </div>
        </div>
        <div className="bt_wrap">
          <Link to="/posts" className="on">목록</Link>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
