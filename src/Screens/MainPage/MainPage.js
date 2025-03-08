import React from "react";
import './MainPage.css';
import { Button } from "@mui/material";

const MainPage = () => {
    return (
        <div className="container">
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row',  backgroundColor:'#fafafa',
                    justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ color: '#47c26d', marginRight: '5px', fontSize: '30px' }}>Techcarrer.net ile</p>
                    <p style={{ fontSize: '30px' }}>teknoloji <br /> kariyerinde hep ileriye</p>
                    <img
                        src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Fcall-to-actions%2Fhome%2Fcta-img.png&w=640&q=75"
                        alt="computer"
                        style={{ height: '40%' }}
                    />
                </div>
            </div>

            
            <div>
                <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Etkinliklerimiz</h1>
                <div style={{ display: 'flex', flexDirection: 'row',
                    justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant="outlined" style={{ margin: '5px' }}>Bootcamp</Button>
                    <Button variant="outlined" style={{ margin: '5px' }}>Hackathon</Button>
                    <Button variant="outlined" style={{ margin: '5px' }}>Hiring Challenge</Button>
                </div>
                <p style={{ textAlign: 'center', fontSize: '18px', lineHeight: '1.6' }}>
                    Uzman eğitmenler ile farklı yazılım dillerinde eğitimler alıp, projeler üzerinde <br />
                    çalışarak gerçek dünya tecrübesi edin, kariyerinde hızla yüksel.
                </p>
                
            </div>
        </div>
    );
};

export default MainPage;
