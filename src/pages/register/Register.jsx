import "./register.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import axios from 'axios';

export default function Register() {
    let navigate = useNavigate(); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
 
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
    
  const routeLogin = () =>{ 
    navigate("/");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        </div>
        <div className="loginRight">
        <form onSubmit={Register} className="box">
          <div className="loginBox">
            <input type="text" placeholder="Username" className="loginInput" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="email" placeholder="Email" className="loginInput" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="password" placeholder="Password" className="loginInput" value={password} onChange={(e) => setPassword(e.target.value)} minLength={3} required/>
            <input type="password" placeholder="Password Again" className="loginInput" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} minLength={3} required/>
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton" onClick={routeLogin}>
              Log into Account
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
