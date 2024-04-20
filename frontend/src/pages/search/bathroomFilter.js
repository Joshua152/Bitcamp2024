import React, { useState } from 'react';

function BathroomFilter() {
  const [bathrooms, setBathrooms] = useState(0);

  const handleBathroomChange = (num) => {
    setBathrooms(num);
  };

  return (
    <div className="filter">
      <button onClick={() => handleBathroomChange(1)}>1 Bathroom</button>
      <button onClick={() => handleBathroomChange(2)}>2 Bathrooms</button>
      <button onClick={() => handleBathroomChange(3)}>3 Bathrooms</button>
      <p>Number of bathrooms: {bathrooms}</p>
    </div>
  );
}

export default BathroomFilter;
