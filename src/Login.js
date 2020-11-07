import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom"
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    <button className='login-signinButton'>Sign In</button>
                </form>
                <p>
                    By continuing, you agree to AMAZON CLONE's Conditions of Use
                    and Privacy Notice.
                </p>
                <button className='login-registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
