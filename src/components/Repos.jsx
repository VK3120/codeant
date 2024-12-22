import React from "react";
import "./Repos.css";

const Repositories = () => {
  const repositories = [
    { name: "design-system", type: "public", size: "7320 KB", updated: "1 day ago" },
    { name: "codeant-ci-app", type: "private", size: "5871 KB", updated: "2 days ago" },
    { name: "business-dashboard", type: "private", size: "4521 KB", updated: "5 days ago" },
    { name: "mobile-app", type: "public", size: "3096 KB", updated: "3 days ago" },
    { name: "e-commerce-platform", type: "private", size: "6210 KB", updated: "6 days ago" },
    { name: "blog-website", type: "public", size: "1876 KB", updated: "4 days ago" },
    { name: "social-network", type: "private", size: "5432 KB", updated: "7 days ago" },
  ];

  return (
    <div className="main-container">
      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h2>Repositories</h2>
          <div className="header-actions">
            <button className="refresh-button">Refresh All</button>
            <button className="add-repo-button">Add Repository</button>
          </div>
        </div>
        <div className="repo-section">
          <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search Repositories" />
          </div>
          <ul className="repository-list">
            {repositories.map((repo, index) => (
              <li key={index} className={`repository-item ${repo.type}`}>
                <span>{repo.name}</span>
                <div>
                  <span>{repo.size}</span> | <span>{repo.updated}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
