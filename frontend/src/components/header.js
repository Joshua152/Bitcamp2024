import React, { useState, useRef } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Header({ userName, userProfilePic }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { user, logOut } = UserAuth();
  const timeoutRef = useRef(null); // Ref for the timeout

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
    clearTimeout(timeoutRef.current); // Clear the timeout if it's already running
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide the dropdown after a brief delay
    timeoutRef.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 300); // Adjust the delay time as needed
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header" onMouseLeave={handleMouseLeave}>
      <Link to="/search">
        <img src={require('../images/small-logo-light.png')} alt="Logo" className="logo" /> 
      </Link>
      <div 
        onClick={toggleDropdown} 
        onMouseEnter={handleMouseEnter} 
        className="user-info"
      >
        <p className="user-name">Welcome, {userName}</p>
        <img src={userProfilePic} className="user-profile-pic" />
        {dropdownVisible && (
          <div className="dropdown-menu">
            <div className='dropdown-menu2'>
              <Link to='/profile'>Profile</Link>
            </div>
            <div className='dropdown-menu2'>
              <Link to='/search'>Search</Link>
            </div>
            <Link to="/" onClick={handleSignOut}>Logout</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
