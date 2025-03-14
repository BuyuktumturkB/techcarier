import React from "react";
import { Button, TextField, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom"; // useNavigate import edilmesi gerekir
import './LoginScreen.css';  

const LoginScreen = () => {
    const navigate = useNavigate(); 

    const handleDashboard = () => {
       
        navigate('/dashboard'); 
    }

    return (
        <div style={{flexDirection:'row', display:'flex'}} > 
            <div className="left-panel">
                <img onClick={handleDashboard}
                    style={{
                        height: '5%', backgroundColor: 'white', width: '40%',
                        marginBottom: '140%'
                    }}
                    src='https://www.techcareer.net/assets/images/common/techcareer-logo.svg' alt=""
                />
                <p style={{ backgroundColor: '#313e60' }}>
                    Hayalindeki teknoloji <br /> kariyeri için harekete geç!
                </p>
            </div>
            <div className="right-panel">
                <h3>techcareer.net'e Giriş Yap</h3>
                <div className="button-container">
                    <Button variant="contained" className="default_btn">
                        <img src="https://login.techcareer.net/images/icons/github.svg" alt="GitHub" />
                        <p>Github</p>
                    </Button>
                    <Button variant="contained" style={{ backgroundColor: ' #f2f2f2' }}>
                        <img src="https://login.techcareer.net/images/icons/google.svg" alt="Google" />
                        <p>Google</p>
                    </Button>
                </div>

                <TextField label='E-posta'className="text_fiedl" fullWidth
                />
                <TextField label='Şifre' className="text_fiedl" />
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-around',width:'100%' }}>
                    <FormControlLabel control={<Checkbox />} label="Beni Hatırla" />
                    <Button>
                        <p style={{color:'black'}}>Şifremi Unuttum</p>
                    </Button>
                </div>

                <Button style={{width:'60%', backgroundColor:'#47c26d'}} variant="contained">Giriş Yap</Button>
                <div style={{flexDirection:'row', display:'flex'}}>
                <p>Hesabın yok mu? </p>
                <p style={{color:'#47c26d'}}>  Kayıt ol</p>
                </div>
                
            </div>
        </div>
    );
};

export default LoginScreen;
