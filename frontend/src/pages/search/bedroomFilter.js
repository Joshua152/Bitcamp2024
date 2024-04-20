import React, { useState } from 'react';

function BedroomFilter() {
  const [bedrooms, setBedrooms] = useState(0);

  const handleBedroomChange = (num) => {
    setBedrooms(num);
  };

  return (
    <div className="filter">
      <button className={`button ${bedrooms === 1 ? 'button-selected' : ''}`}
          onClick={() => handleBedroomChange(1)}>1</button>
      <button className={`button ${bedrooms === 2 ? 'button-selected' : ''}`}
               onClick={() => handleBedroomChange(2)}>2</button>
      <button className={`button ${bedrooms === 3 ? 'button-selected' : ''}`}
              onClick={() => handleBedroomChange(3)}>3</button>
      <p>Number of bedrooms: {bedrooms}</p>
    </div>
  );
}

export default BedroomFilter;
