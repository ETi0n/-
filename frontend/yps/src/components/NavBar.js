import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button onClick={() => navigate('/')}>홈</button>
      <button onClick={() => navigate('/petition-board')}>청원 게시판</button>
      <button onClick={() => navigate('/my-page')}>마이페이지</button>
    </nav>
  );
};

export default Navbar;
