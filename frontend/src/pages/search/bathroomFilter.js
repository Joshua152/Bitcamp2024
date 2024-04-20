import React, { useState } from 'react';
import './search.css';
function BathroomFilter() {
  const [bathrooms, setBathrooms] = useState(0);

  const handleBathroomChange = (num) => {
    setBathrooms(num);
  };

  return (
    <div className="filter">
      <p className="filter-label">Select Number of Bathrooms:</p>
      <div className="button-container">
        <button className={`button ${bathrooms === 0 ? 'button-selected' : ''}`}
            onClick={() => handleBathroomChange(0)}>Any</button>
        <button className={`button ${bathrooms === 1 ? 'button-selected' : ''}`}
            onClick={() => handleBathroomChange(1)}>1</button>
        <button className={`button ${bathrooms === 2 ? 'button-selected' : ''}`}
            onClick={() => handleBathroomChange(2)}>2</button>
        <button className={`button ${bathrooms === 3 ? 'button-selected' : ''}`}
            onClick={() => handleBathroomChange(3)}>3</button>
        <button className={`button ${bathrooms === 4 ? 'button-selected' : ''}`}
            onClick={() => handleBathroomChange(4)}>4</button>
        <button className={`button ${bathrooms === 5 ? 'button-selected' : ''}`}
            onClick={() => handleBathroomChange(5)}>5</button>
        <button className={`button ${bathrooms >= 6 ? 'button-selected' : ''}`}
            onClick={() => handleBathroomChange(6)}>6+</button>
      </div>
    </div>
  );
}

export default BathroomFilter;
