import React from "react";
import "./RealEstateBanner.css";
import headerimage from "../../assets/images/Header image.svg";
import cuate from "../../assets/images/cuate.svg";
export const RealEstateBanner = () => {
  return (
    <>
      <div className="real-estate-banner">
        <div className="content-head">
          <p className="para1">
            Elevate <span className="highlight">Real Estate Success</span> with
            Osumare's Digital Expertise
          </p>
        </div>

        <p className="para2">
          Tailored Solutions for Thriving in the Digital Real Estate Landscape
        </p>
        <div>
          {" "}
          <button className="get-started-btn">Get started</button>
        </div>
        <div className="header">
          <img src={headerimage}></img>
        </div>
        <p className="para3"> Real Estate-Focused Digital Mastery</p>
        <div className="cuate">
          <div className="cuateimg">
            <img src={cuate}></img>
          </div>
          <div className="headcontainer">
            <h1 className="head1">
              Unlock the Potential of Digital Real Estate Excellence
            </h1>
            <p className="para4">
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand's success in the ever-evolving
              digital property market.
            </p>
            <div className="button2">
            <button className="get-started-btn">Get Started</button></div>
          </div>
        </div>
      </div>
    </>
  );
};
