import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"
import { db, auth } from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successful register
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login-logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
                    alt="login-logo">
                </img>
            </Link>
            <div className='login-container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <button type="submit" onClick={signIn} className='login-signinButton'>Sign In</button>
                </form>
                <p>
                    By continuing, you agree to AMAZON CLONE's Conditions of Use
                    and Privacy Notice.
                </p>
                <button onClick={register} className='login-registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
