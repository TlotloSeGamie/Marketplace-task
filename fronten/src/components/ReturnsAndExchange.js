import React from 'react';
import './LegalPage.css';
import Footer from './Footer';
import Navbar from './Navbar';

const ReturnsAndExchanges = () => {
    return (
        <div>
            <Navbar />
            <div className="legal-page">
                <h1>Returns & Exchanges</h1>
                <p>If you're unsatisfied with your purchase, SunThread Market offers a 30-day return policy. Items must be in their original condition with tags attached.</p>
            
                <h2>How to Initiate a Return</h2>
                <p>Contact our support team to start a return. We'll provide instructions and a prepaid label for sending your item back.</p>
                <h2>Exchanges</h2>
                <p>We offer exchanges for different sizes or colors, depending on availability. Please reach out to our support team for assistance.</p>
                <h2>Refunds</h2>
                <p>Refunds will be processed within 5-7 business days of receiving your returned item. Refunds are issued to the original payment method.</p>
                <h2>Non-Returnable Items</h2>
                <p>Items marked as “final sale” and certain accessories may not be eligible for return or exchange. Please refer to the product description before purchasing.</p>
                <h2>International Returns</h2>
                <p>International customers are responsible for return shipping fees. Please contact us for more details on the process.</p>
            </div>
            <Footer />
        </div>
    );
};

export default ReturnsAndExchanges;