import React from "react";

const Join = () => {
  return (
    <div className="join-section-wrapper">
      <h1 className="primary-heading">Join Our Team</h1>
      <div className="two-sections">
        <section className="join-section-info">
        <p className="primary-text">
          At Eduskills, we're not just building a team; we're assembling a force
          for change. As we continue our mission to break barriers and empower
          communities through education, we invite passionate individuals to
          join us in making a tangible difference in the lives of underserved
          children.
        </p>
        <p className="primary-text">
          Whether you're a seasoned educator, a community organizer, or simply
          someone with a heart for social impact, there's a place for you in our
          team. Together, we'll collaborate, innovate, and inspire, working
          towards a future where every child has the opportunity to thrive.
        </p>
      </section>
      

  <section class="form-section">
    <h2>Become a Volunteer</h2>
    <p>Fill out the form below to join us in making a difference.</p>
    
    <form class="volunteer-form">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Why do you want to join?</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </section>

  
      </div>
    </div>
  );
};

export default Join;
