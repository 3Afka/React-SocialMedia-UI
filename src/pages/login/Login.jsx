import "./login.css";
import { useNavigate } from "react-router-dom";
import React, {  useState } from 'react'
import axios from 'axios';

export default function Login() {
  let navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/login', {
          email: email,
          password: password
      });
      navigate.push("/home");
  } catch (error) {
      if (error.response) {
          console.log(error.response.data.msg);
      }
    }
};



const routeRegister = () =>{ 
  navigate("/register");
}

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        {/*   <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span> */}
        </div>
        <div className="loginRight">
        <form onSubmit={handleSubmit} className="box">
          <div className="loginBox">
            <input type="email" placeholder="Email" className="loginInput" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" className="loginInput" value={password} onChange={(e) => setPassword(e.target.value)} minLength={3} required/>
            <button className="loginButton">Log In</button>
            <a href="/" className="loginForgot">
            <span>Forgot Password?</span>
            </a>
            <button className="loginRegisterButton" onClick={routeRegister}>
              Create a New Account
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
