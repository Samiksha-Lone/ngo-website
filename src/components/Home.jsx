import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.jpg";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className="Home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div> 
        <div className="home-text-section">
          <h1 className="primary-heading">Lighting the Path to Change</h1>
          <p className="primary-text">
            Join us in breaking education barriers for children in underserved
            communities. Your support helps deliver quality learning to those in
            slum areas, empowering them with skills for a brighter future. Take
            action today and be the change.
          </p>
          <button className="secondary-button">
            Donate Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img className="img" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
