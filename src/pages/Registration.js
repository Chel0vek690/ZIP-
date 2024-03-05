import React from 'react';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";

import '../styles/style.css';
function Registration() {
  const navigate = useNavigate();

  const handleExitClick = () => navigate('/');
  
  const handleLoginClick = () => navigate('/Login');

  return (
    <div>
      <Header />
      <div id="registerModal" className="modal">
               <div className="modal-content">
                    <span className="close" onClick={handleExitClick}>&times;</span>
                    <h2>Регистрация</h2>
                    <form id="registerForm" method="post" action="register.php">
                        <label htmlFor="registerUsername">Имя пользователя:</label>
                        <input type="text" id="registerUsername" name="username"></input>
                        <label htmlFor="registerPassword">Пароль:</label>
                        <input type="password" id="registerPassword" name="password"></input>
                        <input type="submit" value="Зарегистрироваться"></input>
                    </form>
                    <p>Уже есть аккаунт? <a href="#" onClick={handleLoginClick}>Войти?</a></p>
                </div>
            </div>
    </div>
  );
}

export default Registration;