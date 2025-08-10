import React, { useState, useContext } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext.jsx';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Sign Up"); // "Sign Up" or "Login"
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Handle typing in inputs
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle form submit for both signup & login
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log("📝 Submitting form:", data);

    try {
      const endpoint =
        currState === "Sign Up" ? "/api/user/register" : "/api/user/login";

      console.log("🌍 API Endpoint:", `${url}${endpoint}`);

      const response = await axios.post(`${url}${endpoint}`, data);

      console.log("📩 Server response:", response.data);

      if (response.data.success) {
        // Save token to context and localStorage
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        alert(`✅ ${currState} successful!`);
        setShowLogin(false);
      } else {
        alert(`❌ ${response.data.message || "Authentication failed"}`);
      }
    } catch (error) {
      console.error(
        "🔥 Error submitting form:",
        error.response?.data || error.message
      );
      alert(
        error.response?.data?.message ||
        "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onSubmitHandler}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
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
