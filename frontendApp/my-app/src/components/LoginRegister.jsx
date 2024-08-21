import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { login, register } from '../Utility/axios'; // Import the API functions
import "./LoginRegister.css";

const LoginRegister = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to store error messages

  // Handle switching to registration form
  const registerLink = (e) => {
    e.preventDefault();
    setAction('active');
  };

  // Handle switching to login form
  const loginLink = (e) => {
    e.preventDefault();
    setAction('');
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Perform login API call
      const data = await login(username, password);
      console.log('Login successful:', data);

      // Clear form and navigate after successful login
      setUsername('');
      setPassword('');
      navigate('/'); // Redirect to home page after login
    } catch (error) {
      console.error('Error logging in:', error);
      // Set error message based on the response
      setError(error.response?.data?.message || 'Username or password incorrect');
    }
  };

  // Handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Perform registration API call
      const data = await register(username, email, password);
      console.log('Registration successful:', data);

      // Clear form and navigate after successful registration
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/'); // Redirect to home page after registration
    } catch (error) {
      console.error('Error registering:', error);
      setError(error.response?.data?.message || 'Registration failed'); // Display error message
    }
  };

  return (
    <div className={`login-register-wrapper ${action === 'active' ? 'active' : ''}`}>
      <div className='form-box login'>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className='input-box'>
            <input
              type="text"
              placeholder='Username'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              type="password"
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <button type="button" className="link-button">Forgot password?</button>
          </div>
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <div className="register-link">
            <p>Don't have an account? <button type="button" className="link-button" onClick={registerLink}>Register</button></p>
          </div>
        </form>
      </div>
      <div className={`form-box register ${action === 'active' ? 'active' : ''}`}>
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>
          <div className='input-box'>
            <input
              type="text"
              placeholder='Username'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              type="text"
              placeholder='Email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaEnvelope className='icon' />
          </div>
          <div className='input-box'>
            <input
              type="password"
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
