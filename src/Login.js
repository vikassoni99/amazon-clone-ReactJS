import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

const Login = (props) => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = event => {
        event.preventDefault() //it prevents refreshing
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch((err) => alert(err.message))

    }
    const register = event => {
        event.preventDefault() //it prevents refreshing
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch((err) => alert(err.message))

    }
    return (
        <div className="login">
            <h1>Login Page</h1>
            <Link to="/">
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
                    alt='logo'
                    className='login__logo'
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="text" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="text" />
                    <button onClick={login} className="login__signInButton" >Sign In</button>
                </form>
                <p>By signing in you agree the Amazon's Terms and Conditions.</p>
                <button onClick={register} className="login__registerButton" >Create your Amazon Account</button>
            </div>

        </div>
    );
}

export default Login;