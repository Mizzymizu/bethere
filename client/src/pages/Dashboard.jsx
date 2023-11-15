import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_ME } from "../utils/queries";

function Dashboard() {
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { me } = data;
  const userName = me ? `${me.firstName} ${me.lastName}` : "User";

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      <Link to="/create-event">Create Event</Link>
    </div>
  );
}

export default Dashboard;
