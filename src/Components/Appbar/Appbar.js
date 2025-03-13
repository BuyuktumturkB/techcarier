import React from 'react';
import './Appbar.css';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';  

const Appbar = ({ onClick }) => {
  
  
  const navigate = useNavigate();

  const handleClick = (buttonName) => {
    onClick(buttonName);
  };

  
  const handleLoginClick = () => {
    navigate('Login');  
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
        <Button className="appbar-button" onClick={() => handleClick('events')}>Etkinlikler</Button>
        <Button className="appbar-button" onClick={() => handleClick('tutorials')}>Eğitimler</Button>
        <Button className="appbar-button" onClick={() => handleClick('test')}>Testler</Button>
        <Button className="appbar-button">Komünite</Button>
       
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
