import React, { useState } from 'react';
import FormInputItem from '../components/FormInputItem';

function CreateEvent() {
  const [formData, setFormData] = useState({
    host: '',
    hostEmail: '',
    eventName: '',
    description: '',
    date: '',
    time: '',
    location: '',
    attire: '',
    guests: [],
  });

  const handleChange = (e) => {
    if (e.target.name === 'guests') {
      setFormData({ ...formData, [e.target.name]: getGuestEmails(e.target.value) });
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    
    console.log(formData);
  };

  // TODO: create getGuestEmails function
// input: 'abc@gmail.com,kse@yahoo.com,wef@aol.com'
// output: ['abc@gmail', 'kse@yahoo', 'wef@aol']

const getGuestEmails = (guests) => {
  const guestEmails = guests.split(',');
  return guestEmails.map((guest) => guest.trim());
}


  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <h1>Create Event</h1>
      <h2>Event Details</h2>
      <FormInputItem title="Host Name" name="host" onChange={handleChange} type="text" />
      <FormInputItem title="Host Email" name="hostEmail" onChange={handleChange} type="email" />
      <FormInputItem title="Event Name" name="eventName" onChange={handleChange} type="text" />
      <FormInputItem title="Description" name="description" onChange={handleChange} type="text" />
      <FormInputItem title="Date" name="date" onChange={handleChange} type="date" />
      <FormInputItem title="Time" name="time" onChange={handleChange} type="time" />
      <FormInputItem title="Location" name="location" onChange={handleChange} type="text" />
      <FormInputItem title="Attire" name="attire" onChange={handleChange} type="text" />
      <FormInputItem title="Guests" name="guests" onChange={handleChange} type="textarea" placeholder="enter guest email separated by a coma" />
      <input type="submit" value="Create Event" />
    </form>
  );
}

export default CreateEvent;