import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.jpg";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Education for Every Child, a Future for Every Dream.
          </h1>
          <p className="primary-text">
            Empowering underprivileged children with the tools to learn, grow,
            and thrive through free education and community support.
          </p>
          <p className="primary-text">
            We are a non-profit dedicated to providing education and skills training to underprivileged children.
          </p>
          <p className="primary-text">
            Join us in spreading the joy of learning.
          </p>
          <Link to="/Join"><button className="secondary-button">
            Join us <FiArrowRight />{" "}
          </button></Link>
        </div>
        <div className="home-image-section">
          <img className="img" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
