import classes from './tabs.css';
import React, { useState } from 'react';

export interface TabsProps {}


const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id); // Set initial active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
      <div className="tabs-container">
        <div className="tab-buttons">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Tabs;
