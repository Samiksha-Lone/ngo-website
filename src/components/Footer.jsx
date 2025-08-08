import React from "react";
import { Link } from "react-router-dom";
import { GitHub, Instagram, LinkedIn, X } from "@mui/icons-material";
import {Routes, Route} from 'react-router-dom'
import Join from "./Join";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-name-container">
          <h2>EDUSKILLS</h2>
        </div>
          <div className="footer-icons" >
            <a href="https://www.linkedin.com/in/samiksha-lone/">{<LinkedIn/>}</a>
            <a href="https://github.com/Samiksha-Lone">{<GitHub/>}</a>
            <a href="https://x.com/Samiksha_Lone">{<X/>}</a>
          </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/join">Join</Link>
        </div>
        <div className="footer-section-columns">
          <span>EduSkills Foundation, India</span>
          <span>9881030756</span>
          <span>samikshalone2@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;