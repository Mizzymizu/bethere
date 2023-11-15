import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import FormInputItem from "../components/FormInputItem";
import { ADD_EVENT } from "../utils/mutations";

function CreateEvent() {
  const [formData, setFormData] = useState({
    host: "",
    hostEmail: "",
    eventName: "",
    description: "",
    date: "",
    time: "",
    location: "",
    attire: "",
    guests: [],
  });

  const [addEvent, { error }] = useMutation(ADD_EVENT);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    if (e.target.name === "guests") {
      setFormData({
        ...formData,
        [e.target.name]: getGuestEmails(e.target.value),
      });
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addEvent({
        variables: {
          input: {
            name: formData.eventName,
            description: formData.description,
            date: formData.date,
            time: formData.time,
            location: formData.location,
          },
        },
      });

      // Handle success, e.g., show a notification
      setSuccessMessage("Event created successfully!");
      setShowForm(false);
      // Clear the form or perform other necessary actions
      setFormData({
        host: "",
        hostEmail: "",
        eventName: "",
        description: "",
        date: "",
        time: "",
        location: "",
        attire: "",
        guests: [],
      });

      // You can also close the success message after a certain time if needed
      // setTimeout(() => {
      //   setSuccessMessage(null);
      // }, 3000);

      console.log("Event created successfully:", data.addEvent);
    } catch (error) {
      // Handle error
      console.error("Error adding event:", error);
    }
  };

  const getGuestEmails = (guests) => {
    const guestEmails = guests.split(",");
    return guestEmails.map((guest) => guest.trim());
  };

  return (
    <>
      {showForm && (
        <form className="input-form" onSubmit={handleSubmit}>
          <h1>Create Event</h1>
          <h2>Event Details</h2>
          <FormInputItem
            title="Host Name"
            name="host"
            onChange={handleChange}
            type="text"
          />
          <FormInputItem
            title="Host Email"
            name="hostEmail"
            onChange={handleChange}
            type="email"
          />
          <FormInputItem
            title="Event Name"
            name="eventName"
            onChange={handleChange}
            type="text"
          />
          <FormInputItem
            title="Description"
            name="description"
            onChange={handleChange}
            type="text"
          />
          <FormInputItem
            title="Date"
            name="date"
            onChange={handleChange}
            type="date"
          />
          <FormInputItem
            title="Time"
            name="time"
            onChange={handleChange}
            type="time"
          />
          <FormInputItem
            title="Location"
            name="location"
            onChange={handleChange}
            type="text"
          />
          <FormInputItem
            title="Attire"
            name="attire"
            onChange={handleChange}
            type="text"
          />
          <FormInputItem
            title="Guests"
            name="guests"
            onChange={handleChange}
            type="textarea"
            placeholder="enter guest email separated by a coma"
          />
          <input
            type="submit"
            style={{ cursor: "pointer" }}
            className="mt-5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:bg-green-600 dark:hover:bg-green-700  dark:focus:ring-green-800"
            value="Create Event"
          />

          {error && (
            <p style={{ color: "red" }}>
              Error creating event. Please check your input and try again.
            </p>
          )}
        </form>
      )}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <button onClick={() => (window.location.href = "/dashboard")}>
        Return to Dashboard
      </button>
    </>
  );
}

export default CreateEvent;
