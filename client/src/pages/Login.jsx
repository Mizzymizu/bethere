import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const navigate = useNavigate();
  const [loginUser, { error }] = useMutation(LOGIN);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLoginSuccess = (token) => {
    // Log the token before storing it
    console.log('Token:', token);

    // Check if the token is present before storing it
    if (token) {
      // Store the token in local storage
      localStorage.setItem('token', token);

      // Redirect to the dashboard or user profile page
      navigate('/dashboard');
    } else {
      console.error('Token is null or undefined');
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

      console.log('Data:', data);

      // Assuming your server returns a user and token upon successful login
      const user = data.login.user;
      const token = data.login.token;

      // Do something with the user (optional)
      // Redirect to the dashboard or user profile page
      handleLoginSuccess(token);
    } catch (error) {
      // Handle login error (display error message, etc.)
      console.error('Login error:', error);
    }
  };

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
          <input
            type={showPassword ? 'text' : 'password'} // Toggle between text and password
            name="password"
            onChange={handleChange}
          />
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
