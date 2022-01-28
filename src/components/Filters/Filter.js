import React from 'react';
import './index.css';

function Filter() {
  return (
    <div className="filter-container">
      <button className="btn-blue surprise-btn" type="button">
        Surprise me
      </button>
      <select name="cars" className="filter-btn">
        <option value="">Sort results by...</option>
        <option value="saab">Lowest number first(First)</option>
        <option value="saab">Highest number first(Last)</option>
        <option value="audi">A - Z</option>
        <option value="audi">Z - A</option>
      </select>
    </div>
  );
}

export default Filter;
