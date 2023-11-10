import React, { useState } from 'react';

function CreateEvent() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    attire: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" name="date" onChange={handleChange} />
      </label>
      <label>
        Time:
        <input type="time" name="time" onChange={handleChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" onChange={handleChange} />
      </label>
      <label>
        Attire:
        <input type="text" name="attire" onChange={handleChange} />
      </label>
      <input type="submit" value="Create Event" />
    </form>
  );
}

export default CreateEvent;