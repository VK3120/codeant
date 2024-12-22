// sidebar.js
import React from 'react';
import './sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="logo-container">
                    <img src={require("../assets/logo.png")} alt="CodeAnt AI Logo" className="logo" />
                    <h2>CodeAnt AI</h2>
                </div>
                <select className="dropdown">
                    <option>UtkarshDhairyaPa...</option>
                </select>
            </div>
            <div className="sidebar-navigation">
                <div className="navigation-item active">
                    <img src={require("../assets/repositories.png")} alt="Repositories Icon" className="icon" />
                    
                </div>
                <div className="navigation-item">
                    <img src={require("../assets/ai-code.png")} alt="AI Code Review Icon" className="icon" />
                   
                </div>
                <div className="navigation-item">
                    <img src={require("../assets/cloud.png")} alt="Cloud Security Icon" className="icon" />
                    
                </div>
                <div className="navigation-item">
                    <img src={require("../assets/settings.png")} alt="Settings Icon" className="icon" />
                    
                </div>
            </div>
            <div className="sidebar-footer">
                <div className="footer-item">
                    <img src={require("../assets/support-icon.png")} alt="Support Icon" className="icon" />
                    
                </div>
                <div className="footer-item">
                    <img src={require("../assets/logout-icon.png")} alt="Logout Icon" className="icon" />
                    
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
