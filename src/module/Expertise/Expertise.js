import React, { useState, useEffect } from 'react';
import './Expertise.css';
import data from './data.json';
import icons from './icons';
import ellipse from '../../assets/images/Ellipse 170.svg';

export const Expertise = () => {
    const [expert, setExpert] = useState([]);

    useEffect(() => {
      setExpert(data);
    }, []);
  return (
    <div className="container-expert">
      <h1 className="title-expert">Our Expertise in Action</h1>
      <div className="cards-container-expert">
        {expert.map((Expertise, index) => (
          <div key={index} className="card-expert">
            <div className="images-expert">
              <div className="image-wrapper-expert">
                <img className="ellipse-expert" src={ellipse} alt="Ellipse" />
                <img className="service-icon-expert" src={icons[Expertise.title]} alt={Expertise.title} />
              </div>
            </div>
            <div className="card-content-expert">
              <h2 className="card-title-expert">{Expertise.title}</h2>
              <p className="card-description-expert">{Expertise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
