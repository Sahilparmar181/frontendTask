import React, { useState, useEffect } from 'react';
import './ServiceOfferings.css';
import servicesData from './services.json';
import imageMap from './imageImports';
import abc from '../../assets/images/Ellipse 170.svg'

const ServiceOfferings = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  return (
    <div className="container">
      <h1 className="header">Our Service Offerings</h1>
      <p className="sub-header">Strategies that Drive Property Market Excellence</p>
      <div className="card-grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div className='imgaesservice'>
            <div className="image-wrapper">
              <img className="ellipse" src={abc}  />
              <img className="service-icon" src={imageMap[service.title]}  />
            </div>
            </div>
            
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="button1">
            <button className="get-started-btn">Get Started</button></div>
          
    </div>
  );
};

export default ServiceOfferings;
