import React from 'react';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";

import '../styles/style.css';
function Login() {
  const navigate = useNavigate();

  const handleExitClick = () => navigate('/');

  const handleRegisterClick = () => navigate('/Registration');

  return (
    <div>
      <Header />
      <div className="content">
        <div id="loginModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleExitClick}>&times;</span>
                <h2>Вход</h2>
                <form id="loginForm" method="post" action="login.php">
                    <label htmlFor="loginUsername">Имя пользователя:</label>
                    <input type="text" id="loginUsername" name="username"></input>
                    <label htmlFor="loginPassword">Пароль:</label>
                    <input type="password" id="loginPassword" name="password"></input>
                    <input type="submit" value="Войти"></input>
                </form>
                <p>Еще нет аккаунта? <a href="#" onClick={handleRegisterClick}>Зарегистрироваться?</a></p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;