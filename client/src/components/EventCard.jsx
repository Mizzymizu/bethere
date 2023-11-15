import React from "react";

const EventCard = ({ event }) => {
  return (
    <div
      key={event._id}
      style={{ cursor: "pointer" }}
      className="border-2 border-green-700 "
      onClick={() => {
        window.location.href = "/RSVP/" + event._id;
      }}
    >
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>@ {event.location}</p>
    </div>
  );
};

export default EventCard;
