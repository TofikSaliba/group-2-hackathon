import React from "react";
import "./contact.css";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <div className="row header">
          <h1>CONTACT US! &nbsp;</h1>
          <h2>Fill out the form below to learn more!</h2>
        </div>
        <div className="row body">
          <form onSubmit={handleSubmit} action="#">
            <ul>
              <li>
                <p className="left">
                  <label htmlFor="first_name">First name:</label>
                  <br></br>
                  <input
                    id="firstName"
                    onChange={handleChange}
                    type="text"
                    name="first_name"
                    placeholder="John"
                    value={form.firstName}
                  />
                </p>
                <p className="pull-right">
                  <label htmlFor="last_name">Last name:</label>
                  <br></br>
                  <input
                    id="lastName"
                    onChange={handleChange}
                    type="text"
                    name="last_name"
                    placeholder="Smith"
                    value={form.lastName}
                  />
                </p>
              </li>

              <li>
                <p>
                  <label htmlFor="email">
                    Email <span className="req">*</span>
                    <br></br>
                  </label>
                  <input
                    id="email"
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="john.smith@gmail.com"
                    value={form.email}
                  />
                </p>
              </li>
              <li>
                <div className="divider"></div>
              </li>
              <li className="comments">
                <label htmlFor="comments">Comments</label>
                <textarea
                  id="comments"
                  onChange={handleChange}
                  cols="30"
                  rows="4"
                  name="comments"
                  value={form.comments}
                ></textarea>
                <br></br>
              </li>

              <li>
                <button type="submit" value="Submit">
                  Submit
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
