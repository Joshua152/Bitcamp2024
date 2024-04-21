import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/header';
import { useNavigate } from 'react-router-dom';
import BedroomFilter from './bedroomFilter';
import BathroomFilter from './bathroomFilter';
import { UserAuth } from '../../context/AuthContext';
import { getHousesByZip } from '../../data';



function Search({ setHouseData }) {
  const { user } = UserAuth();
  const mapRef = useRef(null);
  

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
    const data = await getHousesByZip(user, searchTerm, bedrooms, bathrooms);
    return data;
  }

  
/*Code pen */

  

  return (
    <div>
    <Header userName={user?.displayName} userProfilePic={user?.photoURL} />
      <div className='container-search'>
        
        <div className='right-side'>
          <div className='planet-container'>
              <div className='night'></div>
              <div className='day'></div>
              <div className='clouds'></div>
              <div className='inner-shadow'></div>
          </div>
        </div>
        <div className='left-side'>
          
          <div className="search-bar">
          <div className='search-bar-label'>Find Your Dream Home Here!</div>
            <input
              type="text"
              placeholder="Enter a zip code here"
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={handleEnter}
            />
            <button className="search-button" onClick={handleSearch}>Find Your Home</button>
            <p style={{ visibility: errored ? 'visible' : 'hidden', color: 'white' }}>Please enter a valid zipcode</p>
            <div className="filter-container">
              <BedroomFilter callback={setBedrooms}/>
              <BathroomFilter callback={setBathrooms}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;