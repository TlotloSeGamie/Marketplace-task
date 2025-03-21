import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="footer-logo">SunThread Market</h2>
        <p>Step into style with SunThread Market—where fashion meets comfort. Explore our curated collection of premium footwear for men, women, and kids.</p>
        </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p><FaPhone className="footer-icon" /> +123 456 7890</p>
        <p><FaEnvelope className="footer-icon" /> info@bigsteppa.com</p>
        <p><FaMapMarkerAlt className="footer-icon" /> 123 Shoe Lane, Fashion City</p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul className="footer-links">
          <li><Link to="/terms">Terms of Use</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/returns">Returns & Exchanges</Link></li>
          <li><Link to="/shipping">Shipping Information</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="footer-social-icon" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="footer-social-icon" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="footer-social-icon" /></a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Our Location</h3>
        <iframe
          title="store-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1861815464844!2d144.95373631552546!3d-37.8162793797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1e23b7b%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574282186595!5m2!1sen!2s"
          width="100%"
          height="150"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;