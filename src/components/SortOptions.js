import React from 'react';
import '../styles/SortOptions.css'

const SortOptions = ({ setSortOrder }) => {
  return (
    <div className="sort-options-container">
      <label>Sort by:</label>
      <select onChange={(e) => setSortOrder({ key: e.target.value, direction: 'asc' })}>
        <option value="price">Price (Low to High)</option>
        <option value="popularity">Popularity (Low to High)</option>
      </select>
      <button onClick={() => setSortOrder((prev) => ({ ...prev, direction: 'asc' }))}>
        Ascending
      </button>
      <button onClick={() => setSortOrder((prev) => ({ ...prev, direction: 'desc' }))}>
        Descending
      </button>
    </div>
  );
};

export default SortOptions;

