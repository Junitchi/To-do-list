// FilterOptions.js
import React from 'react';
import './FilterOptions.scss';

const FilterOptions = () => {
  return (
    <div className="filter-options">
      <label className="filter-label">Filter by:</label>
      <select className="filter-select">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>
    </div>
  );
};

export default FilterOptions;
