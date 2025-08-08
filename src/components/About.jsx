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
          <h3>About EduSkills Foundation:</h3>
          <p className="primary-text">
            EduSkills Foundation is a non-profit organization committed to
            providing quality education to children in need. Founded in 2018,
            our mission is to bridge the education gap in under-resourced
            communities by creating safe, inclusive, and empowering learning
            environments.
          </p>
          <h3>Why Education Matters:</h3>
          <p className="primary-text">
            Education is not a privilege — it's a fundamental right. Yet,
            millions of children around the world are deprived of this basic
            need. At EduSkills, we believe that every child, regardless of their
            background, deserves access to knowledge, guidance, and opportunity.
          </p>
          <div className="mis-vis">
            <h3>Our Vision:</h3>
            <p className="primary-text">
              A world where every child receives the education they deserve and
              the chance to create a better future.
            </p>
            <h3>Our Mission:</h3>
            <ul>
              <li className="primary-text">
                Provide free and accessible education to underprivileged
                children
              </li>
              <li className="primary-text">
                Promote awareness about the importance of education in breaking
                the poverty cycle
              </li>
              <li className="primary-text">
                Build learning centers in rural and urban slums
              </li>
              <li className="primary-text">
                Equip children with life skills, digital literacy, and
                self-confidence
              </li>
            </ul>
          </div>
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
