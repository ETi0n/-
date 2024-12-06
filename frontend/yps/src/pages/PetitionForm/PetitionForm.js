import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PetitionForm.css';

const PetitionForm = ({ addPetition }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState({ main: '', sub: '', subDetail: '' });
  const [content, setContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPetition = {
      title,
      category,
      content,
      isAnonymous,
      likes: 0,
      status: '접수',
      createdAt: new Date().toISOString().split('T')[0],
    };

    addPetition(newPetition); // 상태에 새로운 청원 추가
    alert('청원이 등록되었습니다.');
    navigate('/petition-board'); // 게시판으로 이동
  };

  return (
    <div className="petition-form">
      <h2>건의사항 입력</h2>
      <form onSubmit={handleSubmit}>
        {/* 제목 입력 */}
        <div className="form-group">
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            required
          />
        </div>

        {/* 카테고리 선택 */}
        <div className="form-group">
          <label>카테고리</label>
          <div className="category-select">
            <select
              value={category.main}
              onChange={(e) => setCategory({ ...category, main: e.target.value })}
              required
            >
              <option value="">대분류</option>
              <option value="학업">학업</option>
              <option value="시설">시설</option>
              <option value="행정">행정</option>
            </select>
            <select
              value={category.sub}
              onChange={(e) => setCategory({ ...category, sub: e.target.value })}
              required
            >
              <option value="">중분류</option>
              <option value="수업">수업</option>
              <option value="강의실">강의실</option>
              <option value="지원">지원</option>
            </select>
            <select
              value={category.subDetail}
              onChange={(e) => setCategory({ ...category, subDetail: e.target.value })}
              required
            >
              <option value="">소분류</option>
              <option value="교재">교재</option>
              <option value="장비">장비</option>
              <option value="서류">서류</option>
            </select>
          </div>
        </div>

        {/* 내용 입력 */}
        <div className="form-group">
          <label>내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            rows="5"
            required
          ></textarea>
        </div>

        {/* 익명 여부 체크 */}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
            />
            익명 게시 여부
          </label>
        </div>

        {/* 신청 버튼 */}
        <button type="submit">청원 신청</button>
      </form>
    </div>
  );
};

export default PetitionForm;
