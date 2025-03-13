import React, { useState } from "react";
import './Dashboard.css';
import Appbar from "../../Components/Appbar/Appbar.js";
import MainPage from "../MainPage/MainPage.js";
import TutorialsScreen from "../TutorialsScreen/TutorialScreen.js";
import TestScreen from "../TestScreen/TestScreen.js";

const Dashboard = () => {
    const [selectedPage, setSelectedPage] = useState('home');

    const handleClick = (page) => {
        setSelectedPage(page);
    }

    const fetchPage = () => {
        switch(selectedPage){
            case 'home':
                return <MainPage />;
            case 'events':
                return <MainPage />;
            case 'tutorials':
                return <TutorialsScreen />;
            case 'test':
                return <TestScreen />;
            default:
                return <MainPage />;
        }
    };

    return (
        <div className="container"> 
            <Appbar onClick={handleClick} className="appbarStyle" />
            {fetchPage()}
        </div>
    );
};

export default Dashboard;
