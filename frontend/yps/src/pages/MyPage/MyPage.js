import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyPage.css';

const MyPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: '홍길동',
    email: 'user@example.com',
    password: 'password123',
  });

  const [myPetitions, setMyPetitions] = useState([]);
  const navigate = useNavigate();

  // 로그인 여부 확인
  useEffect(() => {
    const isLoggedIn = true; // 실제 로그인 상태 확인 로직으로 대체
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login'); // 로그인 페이지로 리다이렉트
    }
  }, [navigate]);

  // 내 청원 데이터 로드
  useEffect(() => {
    const fetchMyPetitions = async () => {
      try {
        const petitions = [
          {
            id: 1,
            title: '학교 Wi-Fi 개선 요청',
            summary: '교내 Wi-Fi 속도가 느리고 자주 끊깁니다.',
            likes: 20,
            createdAt: '2024-12-01',
          },
          {
            id: 2,
            title: '기숙사 식사 질 개선 요청',
            summary: '기숙사 식사의 질을 높여주세요.',
            likes: 35,
            createdAt: '2024-11-30',
          },
        ];
        setMyPetitions(petitions);
      } catch (error) {
        console.error('Failed to fetch petitions:', error);
        setMyPetitions([]); // 에러 발생 시 빈 배열로 초기화
      }
    };

    fetchMyPetitions();
  }, []);

  // 개인정보 저장 핸들러
  const handleSave = () => {
    alert('개인정보가 저장되었습니다.');
  };

  // 청원 상세 보기로 이동
  const handlePetitionClick = (id) => {
    navigate(`/petition-detail/${id}`);
  };

  return (
    <div className="my-page">
      <h2>마이페이지</h2>

      {/* 개인정보 수정 */}
      <div className="user-info">
        <h3>개인정보 수정</h3>
        <div className="form-group">
          <label>이름</label>
          <input
            type="text"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>이메일</label>
          <input
            type="email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>비밀번호</label>
          <input
            type="password"
            value={userInfo.password}
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          />
        </div>
        <button onClick={handleSave}>저장</button>
      </div>

      {/* 내가 작성한 청원 목록 */}
      <div className="my-petitions">
        <h3>내가 작성한 청원</h3>
        {myPetitions.length > 0 ? (
          myPetitions.map((petition) => (
            <div
              key={petition.id}
              className="petition-card"
              onClick={() => handlePetitionClick(petition.id)}
            >
              <h4>{petition.title}</h4>
              <p>{petition.summary}</p>
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
