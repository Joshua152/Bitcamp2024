import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const CLIENT_ID = "1075530525267-lmm0im1fqil6vilbp4vrk2fpobevqutp.apps.googleusercontent.com"; // Our actual client ID
const REDIRECT_URI = "http://localhost:3000/profile/"; // The URI that Google will redirect to after authentication
const SCOPE = "email profile"; // The scopes you are requesting access to
const RESPONSE_TYPE = "token";


function Login() {
  const navigate = useNavigate();


  const handleSignIn = () => {
    handleLogin();
    navigate.replace("/profile");
  }

  const handleLogin = () => {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect-uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    window.open(url, "googleLogin", "width=500,height=600");
  };

  // You would have a listener for the redirect URI to handle the OAuth response
  // This is typically handled server-side, but for implicit flow, you can handle it client-side as well
  // Here's a pseudocode example:
  /*
  useEffect(() => {
    // Parse the hash fragment or query parameters depending on response mode
    const accessToken = new URLSearchParams(window.location.hash.substring(1)).get('access_token');
    
    if (accessToken) {
      // Validate the access token and determine if it's a first-time login
      // Redirect based on the result
      // This validation and check should ideally happen in a secure, server-side environment
      navigate(isFirstLogin ? '/profile' : '/search');
    }
  }, []);
  */

  return (
    <div className="login-container">
        <div className="welcome-box">
            <button type="button" class="login-with-google-btn" onClick={handleLogin}>
                Sign in with Google
            </button>
        </div>
    </div>
  );
}

export default Login;