import React from "react";
import './HeaderComponent.css'
import { Button } from "@mui/material";

const HeaderComponent = ({title, description}) =>
    {
        return (
            <div style={{flexDirection:'row', display:'flex', justifyContent:'center'}}>
                <div style={{flexDirection:'column'}}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Button style={{backgroundColor:'#47c26d'}}>Keşfet</Button>
                    

                </div>
                <img style={{height:400, width:400}} alt="computer"
                src="https://www.techcareer.net/assets/images/call-to-actions/pages/quizzes/vector.svg"/>

            </div>
        )

    }
export default HeaderComponent;