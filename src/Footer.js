import React from 'react';
import './Footer.css';
import authorImage from './author.jpg';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="author">
        <img src={authorImage} alt="Author" className="author-image" />
        <div>
          <p className="author-name">Developed and Designed by Abdullah Shah</p>
          <div className="social-links">
            <a href="https://github.com/abdullah4-web"><FaGithub /></a>
            <a href="https://web.facebook.com/muhmmad.abbas.5055"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/abdullah-shah-b1a691260/"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
