import React, { useState } from 'react';
import './WelcomeScreen.css';

// Import icons from assets directory
import GithubIcon from '../assets/icons/GitHub.png';
import BitbucketIcon from '../assets/icons/BitBucket.png';
import AzureIcon from '../assets/icons/Azure.png';
import GitlabIcon from '../assets/icons/GitLab.png';
import CodeAntLogo from '../assets/logo.png';

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
    // Handle sign in logic here
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
                <span className="growth-value">14%</span>
                <span className="growth-period">This week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Half - Login Form */}
      <div className="welcome-container">
        <div className="welcome-card">
          <div className="content-section">
            <div className="logo-section">
              <img src={CodeAntLogo} alt="CodeAnt Logo" className="logo" />
            </div>

            <h1 className="welcome-title">Welcome to CodeAnt AI</h1>

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
            {(activeTab === 'SAAS' ? saasOptions : selfHostedOptions).map((option) => (
              <button
                key={option.provider}
                className="sign-in-button"
                onClick={() => handleSignIn(option.provider)}
              >
                <img src={option.icon} alt={option.provider} className="provider-icon" />
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="privacy-notice">
          By signing up you agree to the <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
