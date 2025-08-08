import React from "react";
import { Form } from "./Form";

const Join = () => {
  return (
    <div className="join-section-wrapper">
      <h1 className="primary-heading">Join Our Team</h1>
      <div className="two-sections">
        <section className="join-section-info">
          <p className="primary-text">
            Volunteers are the backbone of EduSkills. Whether you can teach,
            mentor, organize, or just lend your time, your contribution will
            shape a child's future.
          </p>
        </section>

        <Form />

        {/* <section className="form-section">
          <h2>Become a Volunteer</h2>
          <p>Fill out the form below to join us in making a difference.</p>

          <form className="volunteer-form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Enter your Phone Number"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Why do you want to join?"
                required
              ></textarea>
            </div>

            <button type="submit">Join</button>
          </form>
        </section> */}
      </div>
    </div>
  );
};

export default Join;
