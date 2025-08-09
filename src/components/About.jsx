import React from "react";
import AboutBackgroundImage from "../assets/about-background-image.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2 className="primary-heading">About Eduskills</h2>
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-image">
            <img src={AboutBackgroundImage} alt="Children learning" />
          </div>
          <div className="about-content">
            <p className="primary-text">
              Eduskills is a non-profit organization dedicated to providing
              underprivileged children with access to quality education,
              skill-building activities, and a safe space to learn and grow. We
              believe that every child has the right to dream big and the
              ability to achieve those dreams with the right guidance.
            </p>
            <p className="primary-text">
              Through community-based learning programs, vocational training,
              and mentorship, we aim to bridge the gap between potential and
              opportunity. Our mission is to empower children with knowledge,
              creativity, and confidence for a brighter future.
            </p>
            <ul>
              <li>📚 Access to free education and resources</li>
              <li>🎨 Creative and skill-building workshops</li>
              <li>🤝 Mentorship and guidance programs</li>
              <li>🌍 Community outreach initiatives</li>
            </ul>
            <Link to="/Join">
              <button className="about-btn">Join Our Mission</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
