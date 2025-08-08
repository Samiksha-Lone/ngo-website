import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    reason: "Donations",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        reason: "Donations",
        message: "",
      });
    } 

    alert("message sent !")
  };

  return (
   
      <section className="contact-section">
        <h2 className="primary-heading">Contact Us</h2>
      <p className="primary-text">We'd love to hear from you. Please fill out the form below.</p>
      <div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your Email"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter number"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of your message"
          />
        </div>

        <div className="form-group">
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          >
            <option>Donations</option>
            <option>Volunteering</option>
            <option>Partnership</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
      </div>
    </section>
    
  );
};

export default Contact;