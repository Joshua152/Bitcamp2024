import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header({ userName, userProfilePic }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="header">
      <div onClick={toggleDropdown} className="user-info">
        <p className="user-name">Welcome, {userName}</p>
        <img src={userProfilePic} className="user-profile-pic" />
        {dropdownVisible && (
          <div className="dropdown-menu">
            <div className='dropdown-menu2'>
              <Link to='/profile'>Profile</Link>
            </div>
            <Link to='/logout'>Logout</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;