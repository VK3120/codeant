import React, { useState } from 'react';
import './WelcomeScreen.css';

// Import assets
import GithubIcon from '../assets/icons/GitHub.png';
import BitbucketIcon from '../assets/icons/BitBucket.png';
import AzureIcon from '../assets/icons/Azure.png';
import GitlabIcon from '../assets/icons/GitLab.png';
import CodeAntLogo from '../assets/logo.png'; // CodeAnt Logo
import SubtractImage from '../assets/icons/Subtract.png'; // Subtract image

const WelcomeScreen = () => {
  const [activeTab, setActiveTab] = useState('SAAS');

  // Sign-in options for each tab
  const saasOptions = [
    { provider: 'github', label: 'Sign in with Github', icon: GithubIcon },
    { provider: 'bitbucket', label: 'Sign in with Bitbucket', icon: BitbucketIcon },
    { provider: 'azure', label: 'Sign in with Azure Devops', icon: AzureIcon },
    { provider: 'gitlab', label: 'Sign in with GitLab', icon: GitlabIcon }
  ];

  const selfHostedOptions = [
    { provider: 'gitlab', label: 'Self Hosted GitLab', icon: GitlabIcon },
    { provider: 'sso', label: 'Sign in with SSO', icon: GithubIcon }
  ];

  const handleSignIn = (provider) => {
    console.log(`Signing in with ${provider}`);
  };

  return (
    <div className="screen-container">
      {/* Left Half - Metrics */}
      <div className="metrics-container">
        <div className="metrics-content">
          <h2 className="metrics-title">AI to Detect & Autofix Bad Code</h2>

          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-value">30+</div>
              <div className="metric-label">Language Support</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">10K+</div>
              <div className="metric-label">Developers</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">100K+</div>
              <div className="metric-label">Hours Saved</div>
            </div>
          </div>

          {/* Issues Fixed Card */}
          <div className="issues-metric-card">
            <div className="issues-card-header">
              <h3 className="issues-title">Issues Fixed</h3>
            </div>
            <div className="issues-card-body">
              <div className="issues-value">500K+</div>
              <div className="issues-growth">
                <span className="growth-arrow">↑</span>
                <span className="growth-value">10%</span>
                <span className="growth-period">Last 30 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Half - Welcome Section */}
      <div className="welcome-container">
        <div className="welcome-card">
          <div className="content-section">
            <div className="logo-section">
              <img src={CodeAntLogo} alt="CodeAnt Logo" className="logo" />
              <span className="logo-text">CodeAnt AI</span>
            </div>
            <h1 className="welcome-title">Welcome to CodeAnt!</h1>
            <div className="tabs-container">
              <button
                className={`tab-button ${activeTab === 'SAAS' ? 'active' : ''}`}
                onClick={() => setActiveTab('SAAS')}
              >
                SAAS
              </button>
              <button
                className={`tab-button ${activeTab === 'Self Hosted' ? 'active' : ''}`}
                onClick={() => setActiveTab('Self Hosted')}
              >
                Self Hosted
              </button>
            </div>
          </div>

          <div className="auth-section">
            {/* Render options based on the active tab */}
            {(activeTab === 'SAAS' ? saasOptions : selfHostedOptions).map((option, index) => (
              <button
                key={index}
                className="sign-in-button"
                onClick={() => handleSignIn(option.provider)}
              >
                <img
                  src={option.icon}
                  alt={`${option.provider} Icon`}
                  className="provider-icon"
                />
                <span>{option.label}</span>
              </button>
            ))}
          </div>
          <div className="privacy-notice">
            By signing in, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>.
          </div>
        </div>
      </div>

      {/* Add the subtract image to the bottom left corner */}
      <img src={SubtractImage} alt="Subtract Image" className="subtract-image" />
    </div>
  );
};

export default WelcomeScreen;
