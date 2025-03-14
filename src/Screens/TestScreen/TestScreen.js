import React from "react";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import TestCard from "../../Components/TestCard";
import TestData from "../../Database/TestData";
import { Button } from "@mui/material";

const TestScreen = () => {
    const title = 'Testler';
    const description = 'Teknoloji sektörüne özel hazırlanan testler ile teknik yetkinliklerinizi anında ölçün. Güçlü yanlarınızı keşfedin ve gelişim alanlarınızı belirleyin!';

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            textAlign: 'center', 
            padding: '20px'
        }}>
            <HeaderComponent title={title} description={description} />
            
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '20px', 
                width: '100%',
                maxWidth: '1200px', 
                boxSizing: 'border-box',
            }}>
                {TestData.map((test, index) => (
                    <div key={index} style={{
                        width: '26%', 
                        marginBottom: '20px',
                        boxSizing: 'border-box',
                        border: '2px solid black',
                        borderRadius: '8px',
                        margin:'15px',
                        padding: '10px', 
                    }}>
                        <TestCard
                            title={test.title}
                            description={test.description}
                            image={test.image}
                            level={test.level}
                            time={test.time}
                            quantity={test.quantity}
                        />
                    </div>
                ))}
            </div>
            <div style={{justifyContent:'space-around', display:'flex', flexDirection:'row'}}>
                <img alt='' src="https://www.techcareer.net/assets/images/redirection-area/courses-icon.svg"
                />
                <div>
                    <h3>Eğitimlerimizi Gördün mü  </h3>
                    <p>Teknoloji sektöründe en çok kullanılan ücretsiz yazılım eğitimlerini takip et, tamamla ve yeteneklerini geliştir!</p>
                </div>
                <Button style={{backgroundColor:'#47c26d', height:50, width:150}}>
                    <p style={{color:'white'}}>Hemen Keşfet</p>
                </Button>

            </div>
        </div>
        
    );
};

export default TestScreen;
