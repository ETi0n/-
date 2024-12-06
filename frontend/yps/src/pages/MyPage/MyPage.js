import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyPage.css';

const MyPage = ({ petitions }) => {
  const navigate = useNavigate();

  // 사용자가 작성한 청원 필터링 (익명 여부와 관계없이 본인의 모든 청원 표시)
  const userPetitions = petitions; // 실제 사용자의 ID 기반으로 필터링 추가 가능

  return (
    <div className="my-page">
      <h2>마이페이지</h2>

      {/* 개인정보 표시 */}
      <div className="user-info">
        <h3>개인정보</h3>
        <p>이름: 홍길동</p>
        <p>이메일: user@example.com</p>
      </div>

      {/* 내가 작성한 청원 목록 */}
      <div className="my-petitions">
        <h3>내가 작성한 청원</h3>
        {userPetitions.length > 0 ? (
          userPetitions.map((petition) => (
            <div
              key={petition.id}
              className="petition-card"
              onClick={() => navigate(`/petition-detail/${petition.id}`)}
            >
              <h4>{petition.title}</h4>
              <p>{petition.content.slice(0, 50)}...</p>
              <div className="card-footer">
                <span>공감수: {petition.likes}</span>
                <span>작성일: {petition.createdAt}</span>
              </div>
            </div>
          ))
        ) : (
          <p>작성한 청원이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default MyPage;
