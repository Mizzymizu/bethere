import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual login logic
    const loginSuccessful = true;
    if (loginSuccessful) {
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    // Replace this with your actual login check
    const userIsLoggedIn = false;
    if (userIsLoggedIn) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <input type="submit" value="Log In" />
    </form>
  );
}

export default Login;