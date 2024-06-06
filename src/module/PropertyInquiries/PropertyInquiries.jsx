import React, { useState, useEffect } from 'react';
import './PropertyInquiries.css';
import data from './data.json';
import icons from './icons';
import ellipse from '../../assets/images/Ellipse 170.svg';

const PropertyInquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    setInquiries(data);
  }, []);

  return (
    <div className="container-pr">
      <h1 className="title-pr">Driving Property Inquiries to Conversions</h1>
      <div className="cards-container-pr">
        {inquiries.map((inquiry, index) => (
          <div key={index} className="card-pr">
            <div className="images-pr">
              <div className="image-wrapper-pr">
                <img className="ellipse-pr" src={ellipse} alt="Ellipse" />
                <img className="service-icon-pr" src={icons[inquiry.title]} alt={inquiry.title} />
              </div>
            </div>
            <div className="card-content-pr">
              <h2 className="card-title-pr">{inquiry.title}</h2>
              <p className="card-description-pr">{inquiry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyInquiries;
