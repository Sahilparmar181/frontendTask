import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Connect with Our Digital Marketing Experts</h1>
      <p className="contact-subtitle">
        Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together
      </p>
      <form className="contact-form">
        <div className='mainform'>
        <div className="contact-fields">
          <div className="contact-input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="contact-input-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="Enter your Number" />
          </div>
          <div className="contact-input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your Total No of Vehicles:" />
          </div>
         
        </div>
        <div className="contact-input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your Message."></textarea>
          </div>
          </div>
        <button type="submit" className="contact-button">Get started</button>
      </form>
    </div>
  );
}

export default ContactForm;
