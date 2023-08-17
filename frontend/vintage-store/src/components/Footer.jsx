import React from 'react';
import "./footer.css";
import { NavLink } from 'react-router-dom';
// You can create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><NavLink href="/Home">Home</NavLink></li>
            <li><NavLink to="/buy">Products</NavLink></li>
            <li><NavLink to="/sell">Sell Your Furniture</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>123 Furniture Street</p>
          <p>Lucknow, State ZIP</p>
          <p>Email: vintagestore@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <ul className="social-icons">
            <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Furniture Buy & Sell. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
