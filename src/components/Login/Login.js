import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import '../Login/Login.css';
import logo from '../../logos/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleAlert = () => {
        // console.log('clicked');
        alert('Please Login With Google!!');
    }
    return (
        <div class="text-center login-container p-5">
            <Link to="/">
            <img data-toggle="tooltip" data-placement="top" title="Click To Go Home" class="mt-4 ml-1 login-logo" style={{width : '130px', marginBottom: '50px'}} src={logo} alt=""/>
            </Link>
            <h5>Login With</h5>
            <button type="button" class="login-btn"><FcGoogle></FcGoogle>Continue With Google</button>
            <p style={{marginTop: '15px'}}>Don't have an account? <a onClick={handleAlert} href="" style={{textDecoration: 'none'}}>Create One</a></p>
        </div>
    );
};

export default Login;