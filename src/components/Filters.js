import React from 'react';
import '../styles/Filters.css';

const Filters = ({ setPriceRange, setPopularityRange }) => {
  return (
    <div className="filters-container">
      <div className="filter">
        <label>Price Range:</label>
        <select onChange={(e) => setPriceRange(JSON.parse(e.target.value))}>
          <option value="[0, Infinity]">All</option>
          <option value="[0, 5000]">0-5000</option>
          <option value="[5000, 10000]">5000-10000</option>
          <option value="[10000, 20000]">10000-20000</option>
          <option value="[20000, Infinity]">20000+</option>
        </select>
      </div>
      <div className="filter">
        <label>Popularity Range:</label>
        <select onChange={(e) => setPopularityRange(JSON.parse(e.target.value))}>
          <option value="[0, Infinity]">All</option>
          <option value="[0, 10000]">0-10000</option>
          <option value="[10000, 30000]">10000-30000</option>
          <option value="[30000, 50000]">30000-50000</option>
          <option value="[50000, Infinity]">50000+</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
