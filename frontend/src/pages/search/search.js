import React, { useState } from 'react';
import Header from '../../components/header';
import { useNavigate } from 'react-router-dom';
import BedroomFilter from './bedroomFilter';
import BathroomFilter from './bathroomFilter';
import { UserAuth } from '../../context/AuthContext';
import { getHouses } from '../../data';

function Search({ setHouseData }) {
  const { user } = UserAuth();

  const [searchTerm, setSearchTerm] = useState('');
  const [errored, setErrored] = useState(false);
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEnter = async (event) => {
    if (searchTerm === '') {
      setErrored(true);
      return;
    }

    setErrored(false);

    if (event.key === "Enter") {
      const newHouseData = await getHouseData();
      setHouseData(newHouseData);
      navigate("/dashboard");
    }
  };

  const handleSearch = async () => {
    if (searchTerm === '') {
      setErrored(true);
      return;
    }

    setErrored(false);
    const newHouseData = await getHouseData();
    setHouseData(newHouseData);
    navigate("/dashboard");
  };

  const getHouseData = async () => {
    const data = await getHouses(user, searchTerm, bedrooms, bathrooms);
    return data;
  }

  return (
    <div>
      <Header userName={user?.displayName} userProfilePic={user?.photoURL} />
      <img
        className='background-image'
        src={require('../../images/background-image.png')}
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
        <button className="search-button" onClick={handleSearch}>Find Your Home</button>
        <p style={{ visibility: errored ? 'visible' : 'hidden'}}>Zip code cannot be empty</p>
        <div className="filter-container">
          <BedroomFilter callback={setBedrooms}/>
          <BathroomFilter callback={setBathrooms}/>
        </div>
      </div>
    </div>
  );
}

export default Search;
