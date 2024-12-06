import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 예시: 이메일과 비밀번호 확인
    if (email === 'user@example.com' && password === 'password123') {
      alert('로그인 성공!');
      navigate('/'); // 메인 페이지로 이동
    } else {
      alert('이메일 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className="login-page">
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            required
          />
        </div>
        <div className="form-group">
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>

      <div className="signup-link">
        <p>계정이 없으신가요?</p>
        <button onClick={() => navigate('/signup')}>회원가입</button>
      </div>
    </div>
  );
};

export default Login;
