import React, { useState } from 'react';
import './Repositories.css';
import { ReactComponent as RefreshIcon } from '../assets/icons/refresh.svg';
import { ReactComponent as PlusIcon } from '../assets/icons/plus.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const repositories = [
    {
      name: 'design-system',
      type: 'Public',
      language: 'React',
      size: '7320 KB',
      updatedAt: '1 day ago',
      contributors: ['A']
    },
    {
      name: 'codeant-ci-app',
      type: 'Private',
      language: 'Javascript',
      size: '5871 KB',
      updatedAt: '2 days ago',
      contributors: ['SOUMYA K C']
    },
    {
      name: 'analytics-dash',
      type: 'Anonymous',
      language: 'Python',
      size: '4521 KB',
      updatedAt: '5 days ago',
      contributors: ['V', 'S', '2']
    },
    {
        name: 'design-system',
        type: 'Public',
        language: 'React',
        size: '7320 KB',
        updatedAt: '1 day ago',
        contributors: ['A']
      },
      {
        name: 'codeant-ci-app',
        type: 'Private',
        language: 'Javascript',
        size: '5871 KB',
        updatedAt: '2 days ago',
        contributors: ['SOUMYA K C']
      },
      {
        name: 'analytics-dash',
        type: 'Anonymous',
        language: 'Python',
        size: '4521 KB',
        updatedAt: '5 days ago',
        contributors: ['V', 'S', '2']
      },
      {
        name: 'design-system',
        type: 'Public',
        language: 'React',
        size: '7320 KB',
        updatedAt: '1 day ago',
        contributors: ['A']
      },
      {
        name: 'codeant-ci-app',
        type: 'Private',
        language: 'Javascript',
        size: '5871 KB',
        updatedAt: '2 days ago',
        contributors: ['SOUMYA K C']
      },
      {
        name: 'analytics-dash',
        type: 'Anonymous',
        language: 'Python',
        size: '4521 KB',
        updatedAt: '5 days ago',
        contributors: ['V', 'S', '2']
      },
    // ... other repositories
  ];

  // Filter repositories based on search query
  const filteredRepositories = repositories.filter(repo => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      repo.name.toLowerCase().includes(searchTerm) ||
      repo.type.toLowerCase().includes(searchTerm) ||
      repo.language.toLowerCase().includes(searchTerm)
    );
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="repositories-container">
      <div className="repositories-header">
        <div className="header-left">
          <h1>Repositories</h1>
          <span className="repo-count">{repositories.length} total repositories</span>
        </div>
        <div className="header-right">
          <button className="refresh-btn" aria-label="Refresh All">
            <RefreshIcon className="btn-icon" />
            <span className="btn-text">Refresh All</span>
          </button>
          <button className="add-repo-btn" aria-label="Add Repository">
            <PlusIcon className="btn-icon" />
            <span className="btn-text">Add Repository</span>
          </button>
        </div>
      </div>

      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input 
          type="text" 
          placeholder="Search repositories"
          className="search-input"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="repositories-list">
        {filteredRepositories.map((repo, index) => (
          <div key={index} className="repository-card">
            <div className="repo-main-info">
              <h3 className="repo-name">{repo.name}</h3>
              <span className={`repo-type ${repo.type.toLowerCase()}`}>
                {repo.type}
              </span>
            </div>
            
            <div className="repo-details">
              <div className="repo-info-row">
                <div className="repo-language">
                  <span className={`language-dot ${repo.language.toLowerCase()}`}></span>
                  {repo.language}
                </div>
                <div className="repo-size">{repo.size}</div>
                <div className="repo-updated">Updated {repo.updatedAt}</div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories; 