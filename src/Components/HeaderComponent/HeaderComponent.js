import React from "react";
import './HeaderComponent.css'
import { Button } from "@mui/material";

const HeaderComponent = ({ title, description }) => {
    return (
        <div className="header-container">
            <div className="text-container">
                <h1>{title}</h1>
                <p style={{width:'50%',justifyContent:'center'}}>{description}</p>
                <p style={{borderRadius:10, borderWidth:2, borderColor:'gray'}}>Ücretsizdir</p>
                <Button style={{backgroundColor:'#47c26d',height:50}}>
                <p style={{color:'white'}}> Keşfet</p> </Button>
                
            </div>
            <img 
                className="image" 
                alt="computer"
                src="https://www.techcareer.net/assets/images/call-to-actions/pages/quizzes/vector.svg"
            />
        </div>
    );
};

export default HeaderComponent;
