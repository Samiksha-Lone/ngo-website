import React from "react";
import galleryOne from "../assets/gallery-1.jpg";
import galleryTwo from "../assets/gallery-2.jpg";
import galleryThree from "../assets/gallery-3.jpg";
import galleryFour from "../assets/gallery-4.jpg";
import galleryFive from "../assets/gallery-5.jpg";
import gallerySix from "../assets/gallery-6.jpg";
import gallerySeven from "../assets/gallery-7.jpg";
import galleryEight from "../assets/gallery-8.jpg";
import galleryNine from "../assets/gallery-9.jpg";

function Gallery() {
  return (
    <div className="gallery-section">
      <h2 className="primary-heading">Our Impact in Pictures</h2>
      <div className="gallery-grid">
        <div className="gallery-card">
          <img src={galleryOne} alt="" className="gallery-img" />
        </div>
        <div className="gallery-card">
          <img src={galleryTwo} alt="" className="gallery-img" />
        </div>
        <div className="gallery-card">
          <img src={galleryThree} alt="" className="gallery-img" />
        </div>
        <div className="gallery-card">
          <img src={galleryFour} alt="" className="gallery-img" />
        </div>
        <div className="gallery-card">
          <img src={galleryFive} alt="" className="gallery-img" />
        </div>
        <div className="gallery-card">
          <img src={gallerySix} alt="" className="gallery-img" />
        </div>
        <div className="gallery-card">
          <img src={gallerySeven} alt="" className="gallery-img" />
        </div>
        <div className="gallery-card">
          <img src={galleryEight} alt="" className="gallery-img" />
        </div>
        <div className="gallery-card">
          <img src={galleryNine} alt="" className="gallery-img" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
