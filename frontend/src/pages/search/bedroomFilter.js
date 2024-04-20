import React, { useState } from 'react';

function BedroomFilter() {
  const [bedrooms, setBedrooms] = useState(0);

  const handleBedroomChange = (num) => {
    setBedrooms(num);
  };

  return (
    <div className="filter">
      <button onClick={() => handleBedroomChange(1)}>1 Bedroom</button>
      <button onClick={() => handleBedroomChange(2)}>2 Bedrooms</button>
      <button onClick={() => handleBedroomChange(3)}>3 Bedrooms</button>
      <p>Number of bedrooms: {bedrooms}</p>
    </div>
  );
}

export default BedroomFilter;
