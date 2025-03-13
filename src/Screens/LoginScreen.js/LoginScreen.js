import { Button } from "@mui/material";
import def from "ajv/dist/vocabularies/discriminator";
import React from "react";

const LoginScreen=()=>
    {
        return(
            <div style={{justifyContent:'center',alignItems:'center'}}>
                <h3> techcarrier.net'e Giriş Yap</h3>
                <div style={{justifyContent:'row', display:'flex'}}>
                    <Button style={{width:'50%'}}>
                        <img src="https://login.techcareer.net/images/icons/github.svg"
                        alt=" "/>
                        <p color="Gray">Github</p>
                    </Button>
                    <Button>
                        
                    </Button>

                </div>
            </div>
        )
    }

export default LoginScreen;