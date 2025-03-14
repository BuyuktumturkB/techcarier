import React, { useState, useEffect } from "react";
import TutorialCard from "../../Components/TutorialCard/TutorialCard.js";
import tutorialData from "../../Database/TutorialData.js";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent.js";
import { Button } from "@mui/material";

const TutorialsScreen = () => {
    const [tutorials, setTutorials] = useState([]);
    const title = 'Eğitimler';
    const description = 'Teknoloji dünyasındaki konular hakkında eğitim almak için doğru yerdesin. Eğitimleri takip et, tamamla ve yeteneklerini geliştir!';

    useEffect(() => {
        setTutorials(tutorialData);
    }, []);

    return (
        <div>
            <HeaderComponent title={title} description={description} />
            <h1>Tüm Eğitimler</h1>
            
           
            <div 
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',     
                    justifyContent: 'center', 
                    gap: '1px'            
                }}
            >
                {tutorials.map((tutorial, index) => (
                    <div key={index} style={{ flex: '1 1 calc(33.333% - 20px)', width: '100px' }}>
                        <TutorialCard style={{width:100}}
                        
                            title={tutorial.title} 
                            mentor={tutorial.mentor} 
                            keywords={tutorial.keywords} 
                            image={tutorial.image} 
                            time={tutorial.time}
                            certificate={tutorial.certificate}
                        />
                    </div>
                ))}
            </div>
            <div style={{justifyContent:'space-around', display:'flex', flexDirection:'row'}}>
                <img alt='' src="https://www.techcareer.net/assets/images/redirection-area/quizzes-icon.svg"
                />
                <div>
                    <h3>Testlerimizi Gördün mü </h3>
                    <p>Teknoloji sektörüne özel hazırlanan ücretsiz teknoloji testleri ile teknik yetkinlikleri ölçmeye anında başla. </p>
                </div>
                <Button style={{backgroundColor:'#47c26d', height:50, width:150}}>
                    <p style={{color:'white'}}>Hemen Keşfet</p>
                </Button>

            </div>
        </div>
    );
}

export default TutorialsScreen;
