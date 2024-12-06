import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PetitionBoard.css';

const PetitionBoard = ({ petitions }) => {
  const navigate = useNavigate();

  return (
    <div className="petition-board">
      <h2>공개 청원 게시판</h2>
      <div className="petition-list">
        {petitions.map((petition) => (
          <div
            key={petition.id}
            className="petition-card"
            onClick={() => navigate(`/petition-detail/${petition.id}`)}
          >
            <h3>{petition.title}</h3>
            <p>{petition.content.slice(0, 50)}...</p>
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
