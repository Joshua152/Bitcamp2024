import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';
import './login.css';

import {UserAuth} from '../../context/AuthContext'; 

/*const CLIENT_ID = "1075530525267-lmm0im1fqil6vilbp4vrk2fpobevqutp.apps.googleusercontent.com"; // Our actual client ID
const REDIRECT_URI = "http://localhost:3000/profile/"; // The URI that Google will redirect to after authentication
const SCOPE = "email profile"; // The scopes you are requesting access to
const RESPONSE_TYPE = "token";*/


const Login = () => {

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (user != null) {
          navigate('/profile');
        }
      }, [user]);

    return (
        <div className="login-container">
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="mid-container">
                <div className="welcome-box">
                    <div className="title">Welcome to</div>
                    <div className="logo-main">
                        <img className='logo-main' src={require('../../images/logo-light.png')}/>
                    </div>
                    <div className="button-container">
                        <GoogleButton onClick={handleGoogleSignIn}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;