import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./LoginRegister.css";
import "./Header.css"; 
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import KashLogo from '../Media/KASHLOGO1.jpg';
import SearchIcon from '../Media/Search.png';

const LoginRegister = () => {
  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector('.header');
      const navbarHeight = document.querySelector('.ribbon').offsetHeight;
      if (window.scrollY > navbarHeight) {
        header.style.position = 'fixed';
        header.style.top = '0';
      } else {
        header.style.position = 'relative';
        header.style.top = '';
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = () => {
    alert('Perform search operation');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
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
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <header className="header">
      <img src={KashLogo} height="80" alt="Department Of Computer Science" />
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/Carts">Carts</Link>
      <Link to="/About">About</Link>
     
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearch}>
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>
    </header>
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
    </div>
  );
};

export default LoginRegister;
