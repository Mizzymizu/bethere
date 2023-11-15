import React, { useState } from "react";
import FormInputItem from "../components/FormInputItem";
import Logo from "../assets/bethere.png";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_EVENT } from "../utils/queries";

const RSVP = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    notes: "",
    rsvp: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const { eventId } = useParams();
  console.log(eventId);

  const { loading, error, data } = useQuery(QUERY_EVENT, {
    variables: { eventId },
  });
  console.log("event", data);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <div>
      <img src={Logo} alt="BeThere Logo" style={{ width: "300px" }} />
      <h1>RSVP</h1>
      <form onSubmit={handleSubmit} className="input-form">
        <h3>Event Details</h3>
        <FormInputItem
          title="Name"
          name="name"
          onChange={handleChange}
          type="text"
        />
        <FormInputItem
          title="Email"
          name="email"
          onChange={handleChange}
          type="email"
        />
        <FormInputItem
          title="RSVP"
          name="rsvp"
          onChange={handleChange}
          type="radio"
          options={["Yes", "No", "Maybe"]}
        />
        <FormInputItem
          title="Notes"
          name="notes"
          onChange={handleChange}
          type="textarea"
        />
        <input
          type="submit"
          className="mt-5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-green-600 dark:hover:bg-green-700  dark:focus:ring-green-800"
          value="RSVP"
        />
      </form>
      <button className="mt-5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-green-600 dark:hover:bg-green-700  dark:focus:ring-green-800" onClick={() => (window.location.href = "/dashboard")}>
        Return to Dashboard
      </button>
    </div>
  );
};

export default RSVP;
