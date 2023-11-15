import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Logo from "../assets/bethere.png";

const Home = () => {
  // Fetch the user's data using the QUERY_ME query
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>;

  // If data is available, the user is authenticated
  const isAuthenticated = !!data?.me;

  return (
    <div>
      <img src={Logo} alt="BeThere Logo" style={{ width: "300px" }} />
      {isAuthenticated ? (
        <div>
          <h1>Welcome back!</h1>
          <p>You are already logged in.</p>
          <p>
            <Link to="/dashboard">Go to Dashboard</Link>
          </p>
        </div>
      ) : (
        <div>
          <h1>Welcome to our RSVP Application</h1>
          <p>
            <Link to="/signup">Sign Up</Link>
          </p>
          <p>
            <Link to="/login">Log In</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
