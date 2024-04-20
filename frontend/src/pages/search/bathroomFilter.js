import React, { useState } from 'react';
import './search.css';
function BathroomFilter() {
  const [bathrooms, setBathrooms] = useState(0);

  const handleBathroomChange = (num) => {
    setBathrooms(num);
  };

  return (
    <div className="filter">
      <button className={`button ${bathrooms === 1 ? 'button-selected' : ''}`}
          onClick={() => handleBathroomChange(1)}>1</button>
      <button className={`button ${bathrooms === 2 ? 'button-selected' : ''}`}
               onClick={() => handleBathroomChange(2)}>2</button>
      <button className={`button ${bathrooms === 3 ? 'button-selected' : ''}`}
              onClick={() => handleBathroomChange(3)}>3</button>
      <p>Number of bathrooms: {bathrooms}</p>
    </div>
  );
}

export default BathroomFilter;
