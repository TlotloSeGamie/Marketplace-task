import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import storeImage from '../Images/shopping1.webp';
import Footer from './Footer';
import Navbar from './Navbar';

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="about-us">
                <section className="about-hero">
                    <h1>About BigSteppa</h1>
                    <p>Your trusted destination for the best footwear brands and styles.</p>
                </section>
                <section className="mission">
                    <h2>Our Mission</h2>
                    <p>
                        At BigSteppa, our mission is to bring top-quality, stylish, and comfortable shoes to everyone, regardless of age or style preference.
                        We believe that every step matters, and we’re here to ensure that each one you take is a step in style and comfort.
                    </p>
                </section>
                <section className="our-story">
                    <h2>Our Story</h2>
                    <div className="story-content">
                        <img src={storeImage} alt="Our store" className="story-image" />
                        <div className="story-text">
                            <p>
                                Founded with a passion for fashion and footwear, BigSteppa has grown from a small, local shop to a nationwide destination for high-quality shoes.
                                We pride ourselves on our carefully curated selection of brands, ensuring that our customers always find the latest trends and timeless classics.
                            </p>
                            <p>
                                Over the years, we have expanded our range, partnering with top brands to bring an unbeatable variety to our customers. From athletic to formal wear, BigSteppa is committed to helping you find the perfect fit.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="brand-values">
                    <h2>Our Values</h2>
                    <ul>
                        <li>✨ Quality: We only offer products that meet our high standards.</li>
                        <li>🤝 Integrity: We believe in honest business practices and transparency.</li>
                        <li>🌍 Sustainability: We are committed to reducing our environmental impact.</li>
                        <li>❤️ Community: We support local initiatives and give back whenever possible.</li>
                    </ul>
                </section>
                <section className="community-involvement">
                    <h2>Community Involvement</h2>
                    <p>
                        At BigSteppa, we believe in giving back. We actively participate in community events and support local charities.
                        Our aim is to create a positive impact in our community and inspire others to do the same.
                    </p>
                </section>
                <section className="customer-testimonials">
                    <h2>What Our Customers Say</h2>
                    <blockquote className="testimonial">
                        <p>"BigSteppa has transformed my shoe shopping experience! The quality and service are unmatched." - Sarah K.</p>
                    </blockquote>
                    <blockquote className="testimonial">
                        <p>"I love the variety of brands and styles available at BigSteppa. I always find what I’m looking for!" - John D.</p>
                    </blockquote>
                    <blockquote className="testimonial">
                        <p>"Fast shipping and excellent customer service. BigSteppa is my go-to for shoes!" - Emily R.</p>
                    </blockquote>
                </section>
                <section className="customer-commitment">
                    <h2>Our Commitment to You</h2>
                    <ul>
                        <li>📦 Free and fast shipping on all orders.</li>
                        <li>💬 24/7 customer support for all your questions and concerns.</li>
                        <li>🔄 Hassle-free returns and exchanges.</li>
                        <li>🆕 Constantly updated stock with the latest styles.</li>
                    </ul>
                    <p>
                        At BigSteppa, you’re not just a customer; you’re part of our community. We’re here to ensure that every step you take with us is comfortable, stylish, and fulfilling.
                    </p>
                </section>
                <section className="call-to-action">
                    <h2>Join Our Journey</h2>
                    <p>
                        Stay connected with us! Sign up for our newsletter to receive exclusive deals, updates on new arrivals, and insider information about upcoming promotions.
                    </p>
                    <button
                    className="cta-button"
                        onClick={() => navigate('/newsletter')}
                    >
                        Sign Up Now
                    </button>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;