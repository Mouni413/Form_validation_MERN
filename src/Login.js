import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Please enter email";
    }
    console.log(formData.password.length);
    if (!formData.password) {
      validationErrors.password = "Please Enter password";
    }
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:3001/login", formData)
        .then((data) => {
          console.log(data);
          if (data.data === "Login Successful") {
            alert("Login successful");
            navigate("/home");
          } else if (data.data === "Invalid Credentials") {
            alert("Invalid username or password");
          } else if (data.data === "user not found") {
            alert("User not found please register");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      alert("login form has been submitted successfully");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h2>Login Form</h2>
      <form
        style={{
          displayf: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          border: "1px solid black",
          padding: "10px",
        }}
        onSubmit={handleFormSubmit}
      >
        <div>
          <label>email</label>
          <br />
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleInput}
            value={formData.email}
            autoComplete="off"
          />
          <br />
          {error.email && <span>{error.email}</span>}
        </div>
        <br />
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleInput}
            value={formData.password}
            autoComplete="off"
          />
          <br />
          {error.password && <span>{error.password}</span>}
        </div>
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
      <p>!!Dont have an account</p>
      <Link to="/">Register</Link>
    </div>
  );
};

export default Login;
