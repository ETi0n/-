import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PetitionBoard.css';

const PetitionBoard = () => {
  const [petitions, setPetitions] = useState([]);
  const [sortOption, setSortOption] = useState('latest'); // 기본 정렬: 최신순
  const navigate = useNavigate(); // 라우팅을 위한 useNavigate 훅

  // 초기 데이터 로드
  useEffect(() => {
    // 실제 백엔드 API 호출로 교체
    const fetchPetitions = async () => {
      const petitionData = [
        {
          id: 1,
          title: '교내 Wi-Fi 개선 요청',
          summary: '교내 Wi-Fi 속도가 느리고 자주 끊깁니다. 이를 개선해주세요.',
          likes: 20,
          createdAt: '2024-12-01',
        },
        {
          id: 2,
          title: '기숙사 식사 질 개선 요청',
          summary: '기숙사 식사의 질을 높이고 다양한 메뉴를 제공해주세요.',
          likes: 35,
          createdAt: '2024-11-30',
        },
        {
          id: 3,
          title: '학교 내 자전거 도로 확충',
          summary: '자전거 이용 학생을 위해 자전거 도로를 확충해주세요.',
          likes: 15,
          createdAt: '2024-12-02',
        },
      ];
      setPetitions(petitionData);
    };

    fetchPetitions();
  }, []);

  // 정렬 변경 핸들러
  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedPetitions = [...petitions];

    if (option === 'latest') {
      sortedPetitions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (option === 'mostLiked') {
      sortedPetitions.sort((a, b) => b.likes - a.likes);
    }

    setPetitions(sortedPetitions);
  };

  // 청원 클릭 시 상세 페이지로 이동
  const handleCardClick = (id) => {
    navigate(`/petition-detail/${id}`);
  };

  return (
    <div className="petition-board">
      <h2>공개 청원 게시판</h2>

      {/* 정렬 옵션 */}
      <div className="sort-options">
        <button
          onClick={() => handleSortChange('latest')}
          className={sortOption === 'latest' ? 'active' : ''}
        >
          최신순
        </button>
        <button
          onClick={() => handleSortChange('mostLiked')}
          className={sortOption === 'mostLiked' ? 'active' : ''}
        >
          공감수순
        </button>
      </div>

      {/* 청원 목록 */}
      <div className="petition-list">
        {petitions.map((petition) => (
          <div
            key={petition.id}
            className="petition-card"
            onClick={() => handleCardClick(petition.id)} // 카드 클릭 시 상세 페이지로 이동
          >
            <h3>{petition.title}</h3>
            <p>{petition.summary}</p>
            <div className="card-footer">
              <span>공감수: {petition.likes}</span>
              <span>작성일: {petition.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetitionBoard;
