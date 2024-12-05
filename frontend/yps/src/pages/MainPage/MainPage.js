import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <h1>연청 - 연세인의 목소리</h1>
      <p>청원을 작성하거나 확인할 수 있는 플랫폼입니다.</p>

      <div className="button-group">
        <button onClick={() => navigate('/petition-form')} className="main-button">
          청원 작성하기
        </button>
        <button onClick={() => navigate('/petition-board')} className="main-button">
          공개 청원 게시판
        </button>
        <button onClick={() => navigate('/my-page')} className="main-button">
          나의 청원 확인
        </button>
      </div>
    </div>
  );
};

export default MainPage;
