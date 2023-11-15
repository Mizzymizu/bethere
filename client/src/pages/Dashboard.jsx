import React from 'react';
import { useQuery } from '@apollo/client';
import { Link, Navigate } from 'react-router-dom';
import { QUERY_ME } from '../utils/queries';
import Logo from '../assets/bethere.png';

const Dashboard = () => {
  // Fetch the user's data using the QUERY_ME query
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // If data is available, the user is authenticated
  const isAuthenticated = !!data?.me;

  // If the user is not authenticated, redirect to the home page
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // If the user is authenticated, extract user data
  const { me } = data;

  // Handle sign-out
  const handleSignOut = () => {
    // Perform any necessary sign-out logic, e.g., clearing tokens from local storage
    localStorage.removeItem('token');
    // Redirect to the home page after signing out
    window.location.href = '/';
  };

  return (
    <div>
      <img src={Logo} alt="BeThere Logo" style={{ width: '300px' }} />
      <h1>Welcome, {me.firstName} {me.lastName}!</h1>
      <Link to="/create-event">Create Event</Link>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
