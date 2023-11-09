import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  // Replace 'User' with the actual user's name
  const userName = 'User';

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      <Link to="/create-event">Create Event</Link>
    </div>
  );
}

export default Dashboard;