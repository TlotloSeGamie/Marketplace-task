import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (/\S+@\S+\.\S+/.test(email)) {
            setMessage('Thank you for subscribing!');
            setEmail('');
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    return (
        <section className="newsletter">
            <div className="newsletter-overlay">
                <div className="newsletter-content">
                    <h2>Join the BigSteppa Community</h2>
                    <p>Be part of the 5,000+ customers who get exclusive deals and insider updates every month.</p>
                    
                    <ul className="newsletter-benefits">
                        <li>🎉 Special discounts for subscribers</li>
                        <li>🆕 Early access to new releases</li>
                        <li>📈 Style tips and trend updates</li>
                    </ul>
                    
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <FaEnvelope className="input-icon" />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="newsletter-input"
                                required
                            />
                        </div>
                        <button type="submit" className="newsletter-btn">Subscribe</button>
                    </form>
                    
                    {message && <p className="newsletter-message">{message}</p>}
                </div>
            </div>
        </section>
    );
};

export default Newsletter;