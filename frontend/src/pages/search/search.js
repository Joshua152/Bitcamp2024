import React, { useState } from 'react';
import Header from '../../components/header';
import { useNavigate } from 'react-router-dom';
import BedroomFilter from './bedroomFilter';
import BathroomFilter from './bathroomFilter';
import { UserAuth } from '../../context/AuthContext';
import img from './HouseOfNight.jpg';

function SearchBar() {
  const { user } = UserAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [errored, setErrored] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEnter = (event) => {
    if (searchTerm === '') {
      setErrored(true)
      return
    }

    setErrored(false)

    if (event.key === "Enter") {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div>
        <Header userName={user?.displayName} userProfilePic={user?.photoURL} />
        <img
          style={{ width: 50, height: 50 }}
          src="/HouseOfNight.jpg"
          alt="Background Image"
        />

          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter a zip code here"
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={handleEnter}
            />
            <p style={{ visibility: errored ? 'visible' : 'hidden'}}>Zip code cannot be empty</p>
            <div className="filter-container">
              <BedroomFilter />
              <BathroomFilter />
            </div>
          </div>
      </div>
    </div>
  );
}

export default SearchBar;
