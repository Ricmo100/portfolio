import React from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram, } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer text-light py-5 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>About myfolio</h5>
            <p>We are dedicated to providing the highest quality assurance services and solutions for businesses worldwide.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center">
                <Mail size={18} className="me-2" />
                chukwumaeric100@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-3 icon">
          <div className="icon-row">
            <a href="https://github.com/Ricmo100" target="_blank" rel="noopener noreferrer">
                <Github size={18} className="icon" style={{ color: '#FFFFFF' }} />
            </a>
            <a href="https://www.linkedin.com/in/lordric/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} className="icon" style={{ color: '#0077B5' }} />
            </a>
            <a href="https://www.instagram.com/lord_ric_/" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} className="icon" style={{ color: '#E1306C' }} />
            </a>
            <a href="https://x.com/Ricmo_234" target="_blank" rel="noopener noreferrer">
                <Twitter size={18} className="icon" style={{ color: '#1DA1F2' }} />
            </a>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} myfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;