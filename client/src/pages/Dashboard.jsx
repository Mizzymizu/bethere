import React from 'react';
import { useQuery } from '@apollo/client';
import { Link, Navigate } from 'react-router-dom';
import { QUERY_ME } from '../utils/queries';
import Logo from '../assets/bethere.png';
import { EventLibrary } from '../components/EventLibrary';

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
    <div className="bg-backg-color">
      <img src={Logo} alt="BeThere Logo" className='mb-20 object-center' style={{ width: '400px' }} />
      <h1 className="mb-2 text-3xl font-bold leading-none tracking-tight text-green-800 md:text-5xl lg:text-6xl dark:text-white" >Welcome, {me.firstName} {me.lastName}!</h1>
      <Link to="/create-event" className="mt-5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-green-600 dark:hover:bg-green-700  dark:focus:ring-green-800">Create Event</Link>
      <button className="mt-5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-green-600 dark:hover:bg-green-700  dark:focus:ring-green-800" onClick={handleSignOut}>Sign Out</button>
      <EventLibrary />
    </div>
  );
};

export default Dashboard;
