import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import "./LoginRegister.css";

const LoginRegister = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerLink = (e) => {
    e.preventDefault();
    setAction('active');
  };

  const loginLink = (e) => {
    e.preventDefault();
    setAction('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
    navigate('/'); // Redirect to home page after login
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    setUsername('');
    setEmail('');
    setPassword('');
    navigate('/'); // Redirect to home page after registration
  };

  return (
    <div className={`login-register-wrapper ${action === 'active' ? 'active' : ''}`}>
      <div className='form-box login'>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className='input-box'>
            <input type="text" placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <button type="button" className="link-button">Forgot password?</button>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <button type="button" className="link-button" onClick={registerLink}>Register</button></p>
          </div>
        </form>
      </div>
      <div className={`form-box register ${action === 'active' ? 'active' : ''}`}>
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>
          <div className='input-box'>
            <input type="text" placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input type="text" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
            <FaEnvelope className='icon' />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> I agree to the terms & conditions</label>
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>Already have an account? <button type="button" className="link-button" onClick={loginLink}>Login</button></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
