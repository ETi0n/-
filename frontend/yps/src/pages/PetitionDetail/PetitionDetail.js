import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PetitionDetail.css';

const PetitionDetail = () => {
  const { id } = useParams(); // URL에서 청원 ID 가져오기
  const [petition, setPetition] = useState(null);
  const [likes, setLikes] = useState(0);

  // 초기 데이터 로드
  useEffect(() => {
    // 백엔드에서 청원 데이터 가져오기 (예제 데이터 사용)
    const fetchPetition = async () => {
      // 실제 API 호출로 교체
      const petitionData = {
        id: id,
        title: '학교 교내 Wi-Fi 개선 요청',
        content: '교내 Wi-Fi 속도가 느리고 자주 끊깁니다. 이를 개선해주세요.',
        author: '익명',
        status: '검토 중',
        likes: 10,
      };
      setPetition(petitionData);
      setLikes(petitionData.likes);
    };

    fetchPetition();
  }, [id]);

  // 공감 버튼 클릭 핸들러
  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
    // API 호출로 공감 수 업데이트
  };

  if (!petition) return <div>로딩 중...</div>;

  return (
    <div className="petition-detail">
      <h2>{petition.title}</h2>
      <p className="author">작성자: {petition.author}</p>
      <p className="content">{petition.content}</p>

      <div className="status">
        <strong>청원 상태:</strong> {petition.status}
      </div>

      <div className="likes">
        <strong>공감 수:</strong> {likes}
        <button onClick={handleLike}>공감하기</button>
      </div>
    </div>
  );
};

export default PetitionDetail;
