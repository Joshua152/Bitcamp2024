import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { initializeApp } from 'firebase/app';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase.js'
import { getIncomeDebt } from '../../data.js'
import Input from './input.js'
import Header from '../../components/header';
import './profile.css';

const Profile = () => {
  const { user, logOut } = UserAuth();
  const [income, setIncome] = useState(-1);
  const [monthlyDebt, setMonthlyDebt] = useState(-1);
  const [creditScore, setCreditScore] = useState(-1);
  const [errored, setErrored] = useState(false);
  const navigate = useNavigate();

  // (async function (user) {
  //   return await getIncomeDebt(user);
  // })(user).then((v) => {
  //   // console.log("user")
  //   console.log("user" + v)
  //   // const inc = v.income
  //   // const md = v.monthlyDebt
  //   // const cs = v.creditScore

  //   const inc = 10
  //   const md = 20
  //   const cs = 30

  //   if(inc != undefined && md != undefined && cs != undefined) {
  //     setIncome(v.income);
  //     setMonthlyDebt(v.monthlyDebt);
  //     setCreditScore(v.creditScore);

  //     setIncome(inc);
  //     setMonthlyDebt(md);
  //     setCreditScore(cs);
  //   }
  // });

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
  }
  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    return event.target.value
  }

  // Need credit score, income after tax, debt, zipcode, 
  return (
    <div className='body'>
    <Header userName={user?.displayName} userProfilePic={user?.photoURL} /> 
      <div className='profile-container'>
                        
        <h1 style={{ marginBottom: '50px' }}>Profile</h1>

        <h3 style={{color: "red", marginBottom: "20px", visibility: errored ? "visible" : "hidden"}}>Error: Please fill all fields</h3>

        <Input type="number" label="Annual Post-Tax Income" placeholder="Enter annual post-tax income" handleValue={() => {income}} handleChange={(event) => {setIncome(event.target.value)}}/>
        <Input type="number" label="Monthly Debt" placeholder="Enter monthly debt" handleValue={() => {monthlyDebt}} handleChange={(event) => {setMonthlyDebt(event.target.value)}}/>
        <Input type="number" label="Credit Score" placeholder="Enter credit score" handleValue={() => {creditScore}} handleChange={(event) => {setCreditScore(event.target.value)}}/>
      
        <div className='btn' onClick={handleUpdate}>Update</div>
      </div>

    </div>
  );
};

export default Profile;
