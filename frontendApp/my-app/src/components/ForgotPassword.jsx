import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css'; // Ensure this path is correct

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/forgot-password', { email }); // Ensure the URL matches your backend endpoint
            setMessage('A password reset link has been sent to your email.');
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="form-wrapper">
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Send Reset Link</button>
                </form>
                {message && <p className={message.includes('error') ? 'error' : 'success'}>{message}</p>}
            </div>
        </div>
    );
}

export default ForgotPassword;
