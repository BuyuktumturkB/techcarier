import React from 'react';
import './Appbar.css';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';  
import LoginScreen from '../../Screens/LoginScreen.js/LoginScreen';

const Appbar = ({ onClick }) => {
  
  
  const navigate = useNavigate();

  const handleClick = (buttonName) => {
    onClick(buttonName);
  };

  
  const handleLoginClick = () => {
    navigate('/login');  
  };

  return (
    <div className="appbar-container">
      <div className="logo">
        <img 
          onClick={() => handleClick('home')}
          src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg"
          alt="TechCareer Logo"
        />
      </div>
      <div className="search-bar">
        <TextField className="search-input" placeholder="Etkinlik, İş İlanı, Blog Ara" />
      </div>
      <div className="menu-buttons">
        <Button className="appbar-button" onClick={() => handleClick('events')}>
         <p style={{color:'black'}}> Etkinlikler </p>  </Button>
        <Button className="appbar-button" onClick={() => handleClick('tutorials')}>
        <p style={{color:'black'}}> Eğitimler </p> </Button>
        <Button className="appbar-button" onClick={() => handleClick('test')}>
        <p style={{color:'black'}}> Testler </p> </Button>
        <Button className="appbar-button">
        <p style={{color:'black'}}> Komünüte </p> </Button>
       
        <Button
          style={{ backgroundColor: "#47c26d", color: "white" }}
          className="login-button"
          onClick={handleLoginClick}  z
        >
          Giriş Yap/Üye Ol
        </Button>
      </div>
    </div>
  );
};

export default Appbar;
