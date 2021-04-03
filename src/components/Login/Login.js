import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import '../Login/Login.css';
import logo from '../../logos/logo.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useState } from 'react';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const handleAlert = () => {
        // console.log('clicked');
        alert('Please Login With Google!!');
    }
    const [user, setUser] = useState({
        name: '',
        email: ''
    })

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleGoogle = () => {
        // console.log('clicked');
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result);
                const {displayName, email} = result.user;
                const newUserInfo = {name: displayName, email};
                // // const newUserInfo = {...user};
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <div class="text-center login-container p-5">
            <Link to="/">
            <img data-toggle="tooltip" data-placement="top" title="Click To Go Home" class="mt-4 ml-1 login-logo" style={{width : '130px', marginBottom: '50px'}} src={logo} alt=""/>
            </Link>
            <h5>Login With</h5>
            <button onClick={handleGoogle} type="button" class="login-btn"><FcGoogle></FcGoogle>Continue With Google</button>
            <p style={{marginTop: '15px'}}>Don't have an account? <a onClick={handleAlert} href="" style={{textDecoration: 'none'}}>Create One</a></p>
        </div>
    );
};

export default Login;