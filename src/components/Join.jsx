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
      </div>
    </div>
  );
};

export default Join;
