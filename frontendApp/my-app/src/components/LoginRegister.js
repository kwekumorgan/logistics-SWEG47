import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { login, register } from '../Utility/axios'; 
import "./LoginRegister.css";

const LoginRegister = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New state for loading

  const registerLink = (e) => {
    e.preventDefault();
    setAction('register');
  };

  const loginLink = (e) => {
    e.preventDefault();
    setAction('');
  };

  const triggerShakeAnimation = () => {
    const errorElement = document.querySelector('.error-message');
    if (errorElement) {
      errorElement.classList.remove('shake');
      void errorElement.offsetWidth; // Trigger reflow to restart the animation
      errorElement.classList.add('shake');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the button is clicked
    try {
      const data = await login(username, password);
      console.log('Login successful:', data);
      setUsername('');
      setPassword('');
      setError('');
      navigate('/');
    } catch (error) {
      setError(error.message); // Set error message directly from axios call
      triggerShakeAnimation(); // Trigger shake animation for the error message
    } finally {
      setLoading(false); // Set loading to false when operation is complete
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the button is clicked
    try {
      const data = await register(username, email, password);
      console.log('Registration successful:', data);
      setUsername('');
      setEmail('');
      setPassword('');
      setError('');
      navigate('/');
    } catch (error) {
      setError(error.message); // Set error message directly from axios call
      triggerShakeAnimation(); // Trigger shake animation for the error message
    } finally {
      setLoading(false); // Set loading to false when operation is complete
    }
  };

  return (
    <div className='login-register-wrapper'>
      <div className={`form-container ${action === 'register' ? 'register' : 'login'}`}>
        {action === '' ? (
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
            <div className='input-box password-box'>
              <input
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className='icon' />
              <span className='toggle-password' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" /> Remember me</label>
              <button type="button" className="link-button" onClick={() => navigate('/forgot-password')}>Forgot password?</button>
            </div>
            <button type="submit" className={loading ? 'button-loading' : ''}>
              {loading ? <div className="spinner"></div> : 'Login'}
            </button>
            {error && <p className="error-message">{error}</p>}
            <div className="register-link">
              <p>Don't have an account? <button type="button" className="link-button" onClick={registerLink}>Register</button></p>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <h1>Register</h1>
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
            <div className='input-box password-box'>
              <input
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className='icon' />
              <span className='toggle-password' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" /> I agree to the terms & conditions</label>
            </div>
            <button type="submit" className={loading ? 'button-loading' : ''}>
              {loading ? <div className="spinner"></div> : 'Register'}
            </button>
            {error && <p className="error-message">{error}</p>}
            <div className="register-link">
              <p>Already have an account? <button type="button" className="link-button" onClick={loginLink}>Login</button></p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
