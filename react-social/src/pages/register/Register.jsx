import React, { useRef } from 'react'
import "./register.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL:process.env.ACT_APP_API_URL
})

function Register() {
    const username = useRef();
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            };
            try {
                await axiosInstance.post("/auth/register", user)
                navigate('/login')
            } catch (err) {
                console.log(err)
            }
        }
    }
  return (
      <div className='login'>
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className="loginLogo">Alizocial</h3>
                  <span className="loginDesc">Connect with friends and the world around you on Alizocial</span>
              </div>
              <div className="loginRight">
                  <form className="loginBox" onSubmit={handleClick}>
                      <input
                          placeholder="Username"
                          required ref={username}
                          className="loginInput" />
                      
                      <input
                          placeholder="Email"
                          required ref={email}
                          className="loginInput"
                          type='email' />
                      <input
                          className="loginInput"
                          type='password'
                          minLength="6"
                          placeholder="Password"
                          ref={password}
                          required />
                      <input
                          className="loginInput"
                          type='password'
                          placeholder="Password Again"
                          ref={passwordAgain}
                          required />
                      <button
                          className="loginButton"
                          type='submit'>
                          Sign Up</button>
                      <Link to="/login">
                          <button id='logIn' className="loginRegisterButton">Log into Account</button>
                      </Link>
                  </form>
              </div>
          </div>
      
    </div>
  )
}

export default Register
