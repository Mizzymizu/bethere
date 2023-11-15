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
    <div   >
      <img  className="absolute object-center top-8 "  src={Logo}  alt="BeThere Logo"  style={{ width: "500px" }} />
      {isAuthenticated ? (
        <div>
          <h1 >Welcome back!</h1>
          <p className="mb-10 ">You are already logged in.</p>
          <p>
            <Link className="mt-5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-green-600 dark:hover:bg-green-700  dark:focus:ring-green-800" to="/dashboard">Go to Dashboard</Link>
          </p>
        </div>
      ) : (
        <div>
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-green-800 md:text-5xl lg:text-6xl dark:text-white">Welcome to Be There</h1>
          <p className="mt-5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-green-600 dark:hover:bg-green-700  dark:focus:ring-green-800">
            <Link to="/signup">Sign Up</Link>
          </p>
          <p className="mt-5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-green-600 dark:hover:bg-green-700  dark:focus:ring-green-800">
            <Link to="/login">Log In</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
