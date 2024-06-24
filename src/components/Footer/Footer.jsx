import React from 'react';
import './Footer.css'; // Make sure to import your CSS file
import { assets } from '../../assets/assets'; // Assuming this import is correctly set up

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img id='logo' src={assets.logo} alt="Company Logo" />
          <p>
            Welcome to our website! We are committed to providing high-quality services and products to our customers. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, eaque officia! Voluptas voluptatum provident placeat suscipit fugiat unde nam optio vitae ducimus amet quae facilis, blanditiis quaerat corrupti molestiae reprehenderit?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
            <img src={assets.instagram_icon} alt="Instagram" />
          </div>
        </div>
        <div className="footer-content-center">
        <h2>Quick Links</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className="footer-content-right">
            <h2>Contact Us</h2>
            <p>Tikkar Boudi, Kullu, Himachal Pradesh, 175101</p>
            <p>Phone: 01902 356 351</p>
            <p>Mail: info@peopleforhimalayas.in</p>
          {/* Add any additional content here */}
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 &copy; People for Himalayan Development - All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;
