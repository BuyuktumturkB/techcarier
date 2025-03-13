import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Dashboard from "../Screens/Dashboard/Dashboard";
import LoginScreen from "../Screens/LoginScreen.js/LoginScreen";

const DashboardStack = () => {
    return (
        <Router>
           
            
            <Routes>
                
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Login" element={<LoginScreen />} />
            </Routes>
        </Router>
    );
};

export default DashboardStack;
