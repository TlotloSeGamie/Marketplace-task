import React from 'react';
import './LegalPage.css';
import Footer from './Footer';
import Navbar from './Navbar';

const FAQ = () => {
    return (
        <div>
            <Navbar />
            <div className="legal-page">
                <h1>Frequently Asked Questions (FAQ)</h1>
                <h2>How can I track my order?</h2>
                <p>Once your order ships, you'll receive a tracking link to monitor its progress. You can also log in to your SunThread Market account to track your orders.</p>
                <h2>What payment methods do you accept?</h2>
                <p>We accept all major credit cards, PayPal, and Apple Pay. We also offer secure checkout options for a seamless experience.</p>
                <h2>Can I cancel or modify my order?</h2>
                <p>Orders can be modified or canceled within 1 hour of placing them. Contact customer support for assistance.</p>
                <h2>What is your return policy?</h2>
                <p>Returns are accepted within 30 days of delivery for items in original condition. See our <a href="/returns">Returns & Exchanges</a> page for more details.</p>
                <h2>Do you offer gift cards?</h2>
                <p>Yes, SunThread Market gift cards are available and can be redeemed on our website for any item.</p>
                <h2>What should I do if I receive a defective product?</h2>
                <p>In the unlikely event that you receive a defective product, please contact our customer service immediately for assistance with returns or exchanges.</p>
            </div>
            <Footer />
        </div>
    );
};

export default FAQ;