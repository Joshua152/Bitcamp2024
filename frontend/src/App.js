import logo from './logo.svg';
import './App.css';


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Protected from './components/Protected';

import Login from './pages/login/login';
import Profile from './pages/profile/profile';
import Search from './pages/search/search';
import Dashboard from './pages/dashboard/dashboard';
import Test from './pages/test';
import { AuthContextProvider } from './context/AuthContext';

function App() {
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
                  <Search />
                </Protected>
              } 
            />
            <Route path="/dashboard" 
              element={
                <Protected>
                  <Dashboard />
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
