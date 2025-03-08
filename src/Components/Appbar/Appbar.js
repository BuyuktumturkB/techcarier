// Appbar.js
import React from 'react';
import './Appbar.css';
import { Button, TextField } from '@mui/material';

const Appbar = ({onClick}) => {

  const handleClick = (buttonName) => {
    onClick(buttonName);
  }
  return (
    <div className="appbar-container">
      <div className="logo">
        <img
          src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg"
          alt="TechCareer Logo"
        />
      </div>
      <div className="search-bar">
        <TextField className="search-input" placeholder="Etkinlik, İş İlanı, Blog Ara" />
      </div>
      <div className="menu-buttons">
        <Button className="appbar-button" onClick={()=>handleClick('events')}>Etkinlikler</Button>
        <Button className="appbar-button" onClick={()=>handleClick('tutorials')}>Eğitimler</Button>
        <Button className="appbar-button" onClick={()=>handleClick()}>Testler</Button>
        <Button className="appbar-button">Komünite</Button>
        <Button 
        style={{backgroundColor: " #47c26d", color: "white"}}
        className="login-button">Giriş Yap/Üye Ol</Button>
      </div>
    </div>
  );
};

export default Appbar;
