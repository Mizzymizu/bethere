import React, { useState } from "react";
import FormInputItem from "../components/FormInputItem";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <FormInputItem
        title="First Name"
        name="firstName"
        onChange={handleChange}
        type="text"
      />
      <FormInputItem
        title="Last Name"
        name="lastName"
        onChange={handleChange}
        type="text"
      />
      <FormInputItem
        title="Username"
        name="username"
        onChange={handleChange}
        type="text"
      />
      <FormInputItem
        title="Email"
        name="email"
        onChange={handleChange}
        type="email"
      />
      <FormInputItem
        title="Password"
        name="password"
        onChange={handleChange}
        type="password"
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default Signup;
