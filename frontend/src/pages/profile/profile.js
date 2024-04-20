import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user, logOut } = UserAuth();
  const [creditScore, setCreditScore] = useState(-1);

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  const handleNumChange = (event) => {
    change = parseInt(event.target.value)
    if (isNaN(change)) {
      return
    }

    setCreditScore(change)
  }

  // Need credit score, income after tax, debt, zipcode, 

  return (
    <div className='body'>
      <div className='profile-container'>
        <h1>Profile</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter a zip code here"
            value={creditScore < 0 ? '' : creditScore}
            onChange={handleNumChange}
          />
        </div>
      </div>
      
      {user?.displayName ? (
        <button onClick={handleSignOut}> <Link to='../login'>Logout </Link></button>
      ) : (
        <Link to='../login'></Link>
      ) }
    </div>
  );
};

export default Profile;