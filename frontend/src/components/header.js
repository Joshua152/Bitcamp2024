import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header({ userName, userProfilePic }) {
  return (
    <div className="header">
      <Link to='/profile' className="user-info">
          <p className="user-name">Welcome, {userName}</p>
          <img src={userProfilePic} className="user-profile-pic" />
      </Link>
    </div>
  );
}

export default Header;
