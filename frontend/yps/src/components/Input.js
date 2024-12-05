import React from 'react';
import './Input.css';

const Input = ({ label, type = 'text', value, onChange, placeholder }) => {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default Input;
