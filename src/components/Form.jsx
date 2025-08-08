import React, { useState } from "react";
// import Users from "./Users";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [users, setUsers] = useState([]);

  const handleChanges = (e) => {
    //destructuring
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function submitHandler(e) {
    e.preventDefault();

    setUsers((prevUsers) => [
      ...prevUsers,
      {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        message: formData.number,
      },
    ]);

    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
    alert("You are joined as a Volunteer. Thank you so much!");
  }

  return (
    <div>
      <section className="form-section">
        <h2>Become a Volunteer</h2>
        <p>Fill out the form below to join us in making a difference.</p>

        <form className="volunteer-form" onSubmit={submitHandler}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name"
              required
              value={formData.name}
              onChange={handleChanges}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
              value={formData.email}
              onChange={handleChanges}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Enter your Phone Number"
              required
              value={formData.number}
              onChange={handleChanges}
            />
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Why do you want to join?"
              required
              value={formData.message}
              onChange={handleChanges}
            ></textarea>
          </div>

          <button type="submit">Join</button>
        </form>
      </section>
      {/* {users.map(function (e, idx) {
        return <Users key={idx} e={e} />;
      })} */}
    </div>
  );
};
