import React, { useState } from 'react';

function BedroomFilter() {
  const [bedrooms, setBedrooms] = useState(0);

  const handleBedroomChange = (num) => {
    setBedrooms(num);
  };

  return (
    <div className="filter">
      <p className="filter-label">Select Number of Bedrooms:</p>
      <div className="button-container">
        <button className={`button ${bedrooms === 0 ? 'button-selected' : ''}`}
            onClick={() => handleBedroomChange(0)}>Any</button>
        <button className={`button ${bedrooms === 1 ? 'button-selected' : ''}`}
            onClick={() => handleBedroomChange(1)}>1</button>
        <button className={`button ${bedrooms === 2 ? 'button-selected' : ''}`}
            onClick={() => handleBedroomChange(2)}>2</button>
        <button className={`button ${bedrooms === 3 ? 'button-selected' : ''}`}
            onClick={() => handleBedroomChange(3)}>3</button>
        <button className={`button ${bedrooms === 4 ? 'button-selected' : ''}`}
            onClick={() => handleBedroomChange(4)}>4</button>
        <button className={`button ${bedrooms === 5 ? 'button-selected' : ''}`}
            onClick={() => handleBedroomChange(5)}>5</button>
        <button className={`button ${bedrooms >= 6 ? 'button-selected' : ''}`}
            onClick={() => handleBedroomChange(6)}>6+</button>
      </div>
    </div>
  );
}

export default BedroomFilter;
