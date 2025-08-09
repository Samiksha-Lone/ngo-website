import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Join from "./components/Join";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
