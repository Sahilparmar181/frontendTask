// src/components/RealEstateInsights/RealEstateInsights.js
import React, { useState, useEffect } from 'react';
import './RealEstateInsights.css';
import data from './data.json';
import icons from './icons';
import rafiki from '../../assets/images/rafiki.svg'

const RealEstateInsights = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    setInsights(data);
  }, []);

  return (
    <div className="containerin">
      <h1 className="titlein">Navigating Real Estate's Digital Landscape</h1>
      <p className="subtitlein">Insights for Real Estate Marketing Advantage</p>
      <div className='main-container'>
      <div className="cards-containerin">
        {insights.map((insight, index) => (
          <div key={index} className="cardin">
            <div className="card-iconin">
              <img src={icons[insight.title]} alt={insight.title} />
            </div>
            <div className="card-contentin">
              <h2 className="card-titlein">{insight.title}</h2>
              <p className="card-descriptionin">{insight.description}</p>
            </div>
          </div>
        ))}
        

      </div>
      <div className='rafiki'>
      <img src={rafiki} ></img>
      </div>
      </div>
    </div>
  );
};

export default RealEstateInsights;
