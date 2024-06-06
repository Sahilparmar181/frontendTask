import React from "react";
import bro from "../../assets/images/bro.svg";
import "./DrivingProperty.css";

export const DrivingProperty = () => {
  return (
    <>
      <div className="driving-container">
      <h1 className="header-driving1">Navigating Real Estate's Digital Landscape</h1>
      <p className="sub-header-driving">Insights for Real Estate Marketing Advantage</p>
        <div className="bro">
          <div className="broimg">
            <img src={bro}></img>
          </div>
          <div className="head-container">
            <h1 className="header-driving">
              Optimized Path to Property Purchase
            </h1>
            <p className="paragraph2">
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential buyers
              through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
            </p>
            <div className="btn">
              <button className="get-started-button">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
