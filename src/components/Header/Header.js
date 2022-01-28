import React from 'react';
import './index.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-search-container">
          <h3 className="header-title">Search by Name or Number</h3>
          <div className="header-search">
            <input type="text" className="search-input" />
            <button type="button" className="btn-orange">
              Search
            </button>
          </div>
          <p className="header-advanced-search-text">
            Use the advanced search to explore Pokemon by type, weakness,
            ability, and more
          </p>
        </div>
        <div className="header-content">
          <p>
            Search for a Pokemon by name or using its National Pokedex number.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
