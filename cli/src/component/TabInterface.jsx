import React, { useState } from 'react';
import Card from "./Card"
import gambar4 from "../style/img/4.png";
import Tinggi from './Tinggi';
import Normal from './Normal';
import Stunted from './Stunted';
import SeverelyStunted from './SeverlyStunted';
const TabInterface = () => {
  const [activeTab, setActiveTab] = useState('tinggi');

  const tabContent = {
    tinggi: ( <Tinggi/>),
    normal: (<Normal/>),
    stunted:(<Stunted/>),
    severelyStunted: (<SeverelyStunted/>),
  };

  const style = `
    .tab-container {
      margin: 20px auto;
      font-family: Arial, sans-serif;
    }

    .header {
      text-align: center;
      color: black;
      padding: 20px;
    }

    .header h1 {
      margin: 0;
    }

    .header p {
      margin: 10px 0 0;
    }

    .tabs {
      display: flex;
      border-radius: 25px;
      overflow: hidden;
      background: #333;
      margin: 20px 0;
    }

    .tab {
      flex: 1;
      padding: 15px;
      text-align: center;
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .tab.active {
      background: #f97316;
    }

    .tab:hover {
      background: #666;
    }

    .tab.active:hover {
      background: #f97316;
    }

    .content {
      padding: 20px;
      box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);
      color: black;
      border-radius: 10px;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <div className="tab-container">
        <div className="header">
          <h1>Informasi Stunting</h1>
          <p>Pilih kategori untuk melihat informasi</p>
        </div>
        <div className="tabs">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="content">{tabContent[activeTab]}</div>
      </div>
    </>
  );
};

export default TabInterface;
