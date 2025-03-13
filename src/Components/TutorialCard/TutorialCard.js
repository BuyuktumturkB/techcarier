import React from "react";

const TutorialCard = ({ title, mentor, image, keywords, level,time,certificate }) => {
    
    const keywordArray = Array.isArray(keywords) ? keywords : (keywords ? keywords.split(',') : []);

    return (
        <div 
            style={{
                borderRadius: '0', 
                margin: '20px', 
                padding: '5px',
                borderColor: 'black',   
                borderWidth: '1px',     
                borderStyle: 'solid',   
                boxSizing: 'border-box', 
                textAlign: 'center'    
            }}
        >
            <img src={image} style={{width:'80%'}}/>
            <h1>{title}</h1>
            <p>  {mentor}</p>
            
            {keywordArray.length > 0 && (
                <div>
                    <h4>Keywords:</h4>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {keywordArray.map((keyword, index) => (
                            <li key={index} style={{ display: 'inline', marginRight: '10px', backgroundColor: '#f0f0f0', borderRadius: '15px', padding: '5px 10px' }}>
                                {keyword.trim()} 
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div style={{width:'80%',
                flexDirection:'row', display:'flex',justifyContent:'space-around'}}>
                <p>{level}</p>
                <p>{time}</p>
                <p>{certificate}</p>

            </div>
        </div>
    );
};

export default TutorialCard;
