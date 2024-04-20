import React, { useState } from 'react';
import './search.css';
import BedroomFilter from './bedroomFilter';
import BathroomFilter from './bathroomFilter';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key = "Enter") {
      navigate("../list/list");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter a zip code here"
        value={searchTerm}
        onChange={handleChange}
      />
      <p>You are searching for: {searchTerm}</p>
      <BedroomFilter />
      <BathroomFilter />
    </div>
  );
}

export default SearchBar;
