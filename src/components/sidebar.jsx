import React from 'react';
import './Sidebar.css';
import logo from '../assets/logo.png';
// Import SVG icons
import { ReactComponent as RepositoryIcon } from '../assets/icons/repository.svg';
import { ReactComponent as CodeReviewIcon } from '../assets/icons/code-review.svg';
import { ReactComponent as SecurityIcon } from '../assets/icons/security.svg';
import { ReactComponent as HelpIcon } from '../assets/icons/help.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';
import { ReactComponent as SupportIcon } from '../assets/icons/support.svg';
import { ReactComponent as LogoutIcon } from '../assets/icons/logout.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="CodeAnt AI" />
      </div>
      
      <div className="user-info">
        <span className="username">UtkarshDhairyaPanwar</span>
      </div>
      
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#repositories" className="active">
              <RepositoryIcon className="nav-icon" />
              Repositories
            </a>
          </li>
          <li>
            <a href="#code-review">
              <CodeReviewIcon className="nav-icon" />
              AI Code Review
            </a>
          </li>
          <li>
            <a href="#security">
              <SecurityIcon className="nav-icon" />
              Cloud Security
            </a>
          </li>
          <li>
            <a href="#how-to">
              <HelpIcon className="nav-icon" />
              How to Use
            </a>
          </li>
          <li>
            <a href="#settings">
              <SettingsIcon className="nav-icon" />
              Settings
            </a>
          </li>
        </ul>
      </nav>

      <div className="bottom-menu">
        <ul>
          <li>
            <a href="#support">
              <SupportIcon className="nav-icon" />
              Support
            </a>
          </li>
          <li>
            <a href="#logout">
              <LogoutIcon className="nav-icon" />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 