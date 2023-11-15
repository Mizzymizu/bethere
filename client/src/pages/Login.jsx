import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";

// ----------------------------8<----------------------------

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [loginUser, { error }] = useMutation(LOGIN);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSuccess = (token) => {
    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } else {
      console.error("Token is null or undefined");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });

      const user = data.login.user;
      const token = data.login.token;

      handleLoginSuccess(token);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // ----------------------------8<----------------------------

  return (
    <div>
      {error && <div>Login failed. Please check your credentials.</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
