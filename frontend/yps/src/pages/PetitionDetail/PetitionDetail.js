import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PetitionDetail.css';

const PetitionDetail = ({ petitions, updateLikes }) => {
  const { id } = useParams();
  const petition = petitions.find((p) => p.id === parseInt(id));
  const [likes, setLikes] = useState(petition ? petition.likes : 0);

  if (!petition) return <div>해당 청원이 존재하지 않습니다.</div>;

  const handleLike = () => {
    setLikes(likes + 1); // 로컬 상태 업데이트
    updateLikes(petition.id); // 부모 컴포넌트에서 상태 업데이트
  };

  return (
    <div className="petition-detail">
      <h2>{petition.title}</h2>
      <p>
        <strong>카테고리:</strong>{' '}
        {`${petition.category.main} > ${petition.category.sub} > ${petition.category.subDetail}`}
      </p>
      <p>
        <strong>내용:</strong> {petition.content}
      </p>
      <p>
        <strong>상태:</strong> {petition.status}
      </p>
      <p>
        <strong>공감수:</strong> {likes}
      </p>
      <p>
        <strong>익명:</strong> {petition.isAnonymous ? '예' : '아니오'}
      </p>
      <p>
        <strong>작성일:</strong> {petition.createdAt}
      </p>
      <button onClick={handleLike}>공감하기</button>
    </div>
  );
};

export default PetitionDetail;
