import React, { useRef } from 'react'
import "./login.css"

function Login() {
    const email = useRef()
    const password= useRef()

    const handleClick = (e) => {
        e.preventDefault()
        console.log(email.current.value)
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
                      <input placeholder="Email" type='email' className="loginInput" required ref={ email} />
                      <input placeholder="Password" type="password" className="loginInput" minLength={6} required ref={password } />
                      <button className="loginButton">Log In</button>
                      <span className="loginForgot">Forgot Password?</span>
                      <button className="loginRegisterButton">Create a New Account</button>
                  </form>
              </div>
          </div>
      
    </div>
  )
}

export default Login
