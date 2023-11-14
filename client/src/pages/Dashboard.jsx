import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_ME } from '../utils/queries';

function Dashboard() {
  // Replace 'User' with the actual user's name
  const userName = 'User';

  // Fetch the user's data using the QUERY_ME query
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // If data is available, extract the user's name
  const { me } = data;
  const userNameFromData = me ? `${me.firstName} ${me.lastName}` : 'User';

  return (
    <div>
      <h1>Welcome, {userNameFromData}!</h1>
      <Link to="/create-event">Create Event</Link>
    </div>
  );
}

export default Dashboard;
