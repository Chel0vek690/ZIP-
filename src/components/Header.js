import React from 'react';
import { useNavigate } from "react-router-dom";

import '../styles/Header.css';
function Header() {
   const navigate = useNavigate();

   const handleLoginClick = () => navigate('/login');

  const handleClick = () => {
    window.location.href = '#';
  };
   
  return (
    <div className="header">
      <div className="title" onClick={handleClick}>Главная</div>
      <div className="logo">Логотип</div>
      <div className="auth-links">
        <button className="login" onClick={handleLoginClick}>Войти</button>
      </div>
    </div>
  );
}

export default Header;
