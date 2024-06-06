import React from 'react';
import './Footer.css';
import logo from '../../assets/images/Osumare Logo-01 (2) 4.svg'; 
import emailIcon from '../../assets/images/mail-fill.svg';
import phoneIcon from '../../assets/images/phone-fill.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import facebookIcon from '../../assets/images/facebook.svg';
import youtubeIcon from '../../assets/images/youtube.svg';
import pinterestIcon from '../../assets/images/pinterest-fill (3).svg';
import whatsappIcon from '../../assets/images/whatsapp-fill.svg';
import instagramIcon from '../../assets/images/insta.svg';

const Footer = () => {
  return (<>
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <p className="footer-description">The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
          <div className="footer-address">
            <h4>Address</h4>
            <p>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharashtra, India.</p>
          </div>
          <div className="footer-contacts">
            <h4>Contacts</h4>
            <p><img src={emailIcon} alt="Email" className="footer-icon" /> hello@osumare.in</p>
            <p><img src={phoneIcon} alt="Phone" className="footer-icon" /> +91 8459 8762 26</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-menu">
            <h4>Menu</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Blog</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Social</h4>
            <div className="social-icons">
              <img src={twitterIcon} alt="Twitter" />
              <img src={facebookIcon} alt="Facebook" />
              <img src={youtubeIcon} alt="YouTube" />
              <img src={pinterestIcon} alt="Pinterest" />
              <img src={whatsappIcon} alt="WhatsApp" />
              <img src={instagramIcon} alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div className="footer-bottom">
    <p>&copy; 2023 Osumare. All rights reserved.</p>
  </div></>
  );
};

export default Footer;
