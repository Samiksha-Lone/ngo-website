import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Search from "../assets/search-icon.png";
import Learn from "../assets/learn-icon.png";
import Grow from "../assets/grow-icon.png";

const About = () => {
  const InfoData = [
    {
      image: Search,
      title: "Discover Talents",
      text: "Children explore their interests through fun, hands‑on activities.",
    },
    {
      image: Learn,
      title: "Learn New Skills",
      text: "Guided learning helps children build real‑world skills with confidence.",
    },
    {
      image: Grow,
      title: "Grow Confidence",
      text: "Every skill learned gives a child a stronger, brighter future.",
    },
  ];
  return (
    <div>
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <img className="img" src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">About us</p>
          <h1 className="primary-heading">
            Empowering Young Minds Through Skillful Learning
          </h1>
          <p className="primary-text">
            We believe that every child deserves the chance to learn, grow, and
            thrive. EduSkills is dedicated to providing skill-based learning
            opportunities for children, especially in underserved communities.
            Through engaging activities, creative programs, and personalized
            support, we help children build confidence, discover their
            strengths, and prepare for a brighter future.
          </p>
          <p className="primary-text">
            Our goal is to make education exciting, accessible, and practical —
            because when children learn real-world skills, they unlock
            real-world possibilities.
          </p>
        </div>
      </div>
      <div className="about-section-bottom">
        {InfoData.map((data) => (
          <div className="about-section-bottom-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default About;
