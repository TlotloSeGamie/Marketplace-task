import React from 'react';
import './LegalPage.css';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <h1>Privacy Policy</h1>
            <p>Your privacy is of utmost importance to us at BigSteppa. This policy details how we handle your personal information.</p>
            
            <h2>Information Collection</h2>
            <p>We collect personal information that you provide, such as name, email, and payment information, for processing orders and improving our services.</p>

            <h2>How We Use Your Data</h2>
            <p>Your data helps us personalize your shopping experience, process orders, and send promotional information if you've opted in.</p>

            <h2>Data Sharing and Disclosure</h2>
            <p>BigSteppa does not sell or share your data with third parties except as necessary to fulfill your order or when required by law.</p>

            <h2>Data Protection</h2>
            <p>BigSteppa employs industry-standard security measures to protect your information. While we strive to safeguard your data, we cannot guarantee absolute security.</p>

            <h2>Cookies and Tracking</h2>
            <p>We use cookies to enhance your browsing experience. You may choose to disable cookies, but this may affect site functionality.</p>

            <h2>Your Consent</h2>
            <p>By using our website, you consent to the collection and use of your information as outlined in this policy.</p>
        </div>
    );
};

export default PrivacyPolicy;