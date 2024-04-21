import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { initializeApp } from 'firebase/app';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase.js'
import Input from './input.js'
import Header from '../../components/header.js';
import './profile.css';

const Profile = () => {
  const { user, logOut } = UserAuth();
  const [income, setIncome] = useState(-1);
  const [monthlyDebt, setMonthlyDebt] = useState(-1);
  const [creditScore, setCreditScore] = useState(-1);
  const [errored, setErrored] = useState(false);
  const navigate = useNavigate();

  const handleUpdate = async() => {
    if(income === -1 || monthlyDebt === -1 || creditScore === -1) {
      setErrored(true)
      return;
    }

    await setDoc(doc(db, "profiles", user.uid), {
      income: parseInt(income),
      monthlyDebt: parseInt(monthlyDebt),
      creditScore: parseInt(creditScore)
    });
    
    navigate("/search");
;;)
  }marginTop: '20px', {/* , marginBottom: "20px", visibility: errored ? 'visible' : 'hidden'}}>P */}
        {/* <p style={{visibility: errored ? 'visible' : 'hidden'}}>Error: please fill all fields</p> */}

        <Input type="number" label="Annual Post-Tax Income" placeholder="Enter annual post-tax income" handleValue={() => {income}} handleChange={(event) => {setIncome(event.target.value)}}/>
        <Input type="number" label="Monthly Debt" placeholder="Enter monthly debt" handleValue={() => {monthlyDebt}} handleChange={(event) => {setMonthlyDebt(event.target.value)}}/>
        <Input type="number" label="Credit Score" placeholder="Enter credit score" handleValue={() => {creditScore}} handleChange={(event) => {setCreditScore(event.target.value)}}/>
      
        <div className='btn' onClick={handleUpdate}>Update</div>
      </div>

      <div className='logout-wrapper'>
        {user?.displayName ? (
          // <Link to='../login'>Logout</Link>
          <div className='btn' onClick={handleSignOut}><a href='../login'>Logout</a></div>
        ) : (
          <Link to='../login'></Link>
        ) }
      </div>
    </div>
  );
};

export default Profile;