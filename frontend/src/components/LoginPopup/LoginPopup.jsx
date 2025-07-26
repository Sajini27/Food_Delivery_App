import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={(e) => e.preventDefault()}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='Close' />
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder='Your name' required />
          )}
          <input type="email" placeholder='Your email' required />
          <input type='password' placeholder='Password' required />
        </div>

        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <p className="login-popup-switch">
          {currState === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
