import './App.css';


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Protected from './components/Protected';

import Login from './pages/login/login';
import Profile from './pages/profile/profile';
import Search from './pages/search/search';
import Dashboard from './pages/dashboard/dashboard';
import Test from './pages/test';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  const house = {
    "attomId": 1,
    "lotsize": 1500,
    "address": "123 north st",
    "bathstotal": 3,
    "beds": 4,
    "roomsTotal": 6,
    "listingPrice": 400000,
    "a_score": 0.8,
    "p_score": 0.9
  };

  const [houseData, setHouseData] = useState([house, house, house, house]);


  return (
    <Router>
      <div className="App">
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            
            <Route 
              path="/profile" 
              element={
                <Protected>
                  <Profile />
                </Protected>
              } 
            />
            <Route path="/search" 
              element={
                <Protected>
                  <Search setHouseData={setHouseData}/>
                </Protected>
              } 
            />
            <Route path="/dashboard" 
              element={
                <Protected>
                  <Dashboard houseData={houseData}/>
                </Protected>
              }  
            />
            <Route path="/test" element={<Test />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
