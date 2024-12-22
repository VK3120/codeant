import React from "react";
import "./Repos.css";
import searchIcon from "../assets/search.png";

const Repos = () => {
  const repositories = [
    {
      name: "design-system",
      type: "Public",
      language: "React",
      size: "7320 KB",
      updated: "1 day ago",
      collaborators: ["Aniket Mandloi", "Anonymous"],
    },
    {
      name: "codeant-ci-app",
      type: "Private",
      language: "Javascript",
      size: "5871 KB",
      updated: "2 days ago",
      collaborators: ["Dalal Jaynam"],
    },
    {
      name: "business-dashboard",
      type: "Private",
      language: "Python",
      size: "4521 KB",
      updated: "5 days ago",
      collaborators: [],
    },
    {
      name: "mobile-app",
      type: "Public",
      language: "Swift",
      size: "3096 KB",
      updated: "3 days ago",
      collaborators: ["Anonymous"],
    },
  ];

  return (
    <div className="repositories-container">
      <div className="repositories-header">
        <div className="header-actions">    
            <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
      </div>
      <div className="repositories-list">
        {repositories.map((repo, index) => (
          <div key={index} className="repository-item">
            <div className="repo-header">
              <h3>{repo.name}</h3>
              <span className={`repo-type ${repo.type.toLowerCase()}`}>
                {repo.type}
              </span>
            </div>
            <div className="repo-details">
              <span>{repo.language}</span>
              <span>{repo.size}</span>
              <span>Updated {repo.updated}</span>
            </div>
            <div className="repo-collaborators">
              {repo.collaborators.map((collab, i) => (
                <span key={i} className="collaborator">
                  {collab}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repos;
