import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to our RSVP Application</h1>
      <p>
        <Link to="/signup">Sign Up</Link>
      </p>
      <p>
        <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default Home;