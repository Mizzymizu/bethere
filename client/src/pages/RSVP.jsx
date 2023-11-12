import React, { useState } from 'react';
import FormInputItem from '../components/FormInputItem';



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
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <div>
        <h1>You are invited</h1>
        <form onSubmit={handleSubmit} className='input-form'>
            <h1>RSVP</h1>
            <h2>Event Details</h2>
            <FormInputItem title="Name" name="name" onChange={handleChange} type="text" />
            <FormInputItem title="Email" name="email" onChange={handleChange} type="email" />
            <FormInputItem title="RSVP" name="rsvp" onChange={handleChange} type="radio" options={["Yes", "No", "Maybe"]} />
            <FormInputItem title="Notes" name="notes" onChange={handleChange} type="textarea" />
            <input type="submit" value="RSVP" />
            </form>
        </div>
    );
    };

export default RSVP;