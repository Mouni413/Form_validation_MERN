import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
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
    if (!formData.username) {
      validationErrors.username = "Please enter username";
    }
    if (!formData.email) {
      validationErrors.email = "Please enter email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Please enter valid email";
    }
    console.log(formData.password.length);
    if (!formData.password) {
      validationErrors.password = "Please Enter password";
    } else if (formData.password.length < 6) {
      validationErrors.password =
        "password should contain atleast 6 characters ";
    }

    if (formData.confirmpassword !== formData.password) {
      validationErrors.confirmpassword = "Tha password is not matching";
    }
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:3001/register", formData)
        .then((data) => {
          console.log(data);
          navigate("/login");
          alert("form has been submitted successfully");
        })
        .catch((err) => {
          console.log(err);
        });
      //   alert("form has been submitted successfully");
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
      <h2>Registration Form</h2>
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
          <label>Username</label>
          <br />
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={handleInput}
            value={formData.username}
            autoComplete="off"
          />
          <br />
          {error.username && <span>{error.username}</span>}
        </div>
        <br />
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
        <div>
          <label>confirm Password</label>
          <br />
          <input
            type="password"
            placeholder="Re enter the password"
            name="confirmpassword"
            onChange={handleInput}
            value={formData.confirmpassword}
            autoComplete="off"
          />
          <br />
          {error.confirmpassword && <span>{error.confirmpassword}</span>}
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
      <p>!!Already has an account login</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
