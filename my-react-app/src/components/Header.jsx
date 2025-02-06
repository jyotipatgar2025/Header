import React from "react";
import "./Header.css";
import { FaFilter } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      
      <div className="logo">foodislice</div>
      <div className="search-bar">
        <input type="text" placeholder="Search food" />
        <button className="filter-btn">
          <FaFilter /> Filter
        </button>
      </div>
      <div className="profile">
        <img
          src="data:image/png;base64,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"
          alt="Profile"
          className="profile-pic"
        />
        <span>David▼</span>
        
      </div>
    </header>
  );
};

export default Header;
