import React from "react";
import { QUERY_EVENTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import EventCard from "./EventCard";

export const EventLibrary = ({}) => {
  const { loading, error, data } = useQuery(QUERY_EVENTS);
  console.log("events", data);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  if (!data.events || !data.events.length) return <p>No events yet!</p>;

  return (
    <div className="border-t-4  border-green-600 w-screen mt-10 ">
      <h2 style={{ cursor: "pointer" }} className="pt-10 pl-5 text-3xl mb-8 font-semibold">
        Event Library
      </h2>
      <div className="grid grid-cols-4 gap-4 m-2">

        {data.events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </div>
  );
};
