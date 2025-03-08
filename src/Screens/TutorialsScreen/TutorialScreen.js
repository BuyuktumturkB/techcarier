import React,{useState,useEffect} from "react";
import TutorialCard from "../../Components/TutorialCard/TutorialCard.js";
import tutorialData from "../../Database/TutorialData.js";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent.js";



const TutorialsScreen = () => {
    
    const [tutorials, setTutorials] = useState([]);
    const title='Eğitimler'

    useEffect(()=>{
        setTutorials(tutorialData);
    },[]);
    return (
        <div>
            <HeaderComponent title={title}/>
            <h1>Tüm Eğitimler</h1>

        </div>
    );

}
export default TutorialsScreen;