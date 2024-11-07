import React from 'react';
import './LegalPage.css';
import Footer from './Footer';
import Navbar from './Navbar';

const ShippingInformation = () => {
    return (
        <div>
            <Navbar />
            <div className="legal-page">
                <h1>Shipping Information</h1>
                <p>BigSteppa offers multiple shipping options to ensure that your order reaches you in a timely manner.</p>
                <h2>Domestic Shipping</h2>
                <p>Standard shipping takes 3-5 business days, while expedited options are available for faster delivery.</p>
                <h2>International Shipping</h2>
                <p>We ship worldwide. International orders typically arrive within 10-15 business days, but delivery times may vary based on location.</p>
                <h2>Shipping Costs</h2>
                <p>Shipping fees are calculated at checkout based on location, weight, and delivery option selected.</p>
                <h2>Order Tracking</h2>
                <p>Once your order ships, you’ll receive a tracking link. Check your BigSteppa account or the link provided for updates.</p>
                <h2>Handling Times</h2>
                <p>All orders are processed within 1-2 business days. During peak seasons, handling times may be slightly longer.</p>
                <h2>Undeliverable Packages</h2>
                <p>If an order cannot be delivered due to incorrect address or refusal of the package, the customer may be responsible for additional fees.</p>
            </div>
            <Footer />
        </div>
    );
};

export default ShippingInformation;