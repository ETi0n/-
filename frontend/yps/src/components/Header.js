import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>연청</span>
      </div>
      <nav>
        <a href="/">홈</a>
        <a href="/petition-board">청원 게시판</a>
        <a href="/my-page">마이페이지</a>
      </nav>
    </header>
  );
};

export default Header;
