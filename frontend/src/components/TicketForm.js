// TicketForm.js
import React, { useState } from 'react';

const TicketForm = () => {
    const [eventName, setEventName] = useState('');
    const [ticketType, setTicketType] = useState('general'); // Default ticket type

    const handleEventNameChange = (event) => {
        setEventName(event.target.value);
    };

    const handleTicketTypeChange = (event) => {
        setTicketType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission: Send data to backend API
        // Example: fetch('/api/createTicket', { method: 'POST', body: { eventName, ticketType }})
        // Reset form fields after submission
        setEventName('');
        setTicketType('general');
    };

    return (
        <section id="ticketForm">
            <h2>Create a Ticket</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="eventName">Event Name:</label>
                <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    value={eventName}
                    onChange={handleEventNameChange}
                    required
                />
                <br />
                <br />
                <label htmlFor="ticketType">Ticket Type:</label>
                <select id="ticketType" name="ticketType" value={ticketType} onChange={handleTicketTypeChange}>
                    <option value="general">General Admission</option>
                    <option value="vip">VIP Pass</option>
                    {/* Add other ticket types as needed */}
                </select>
                <br />
                <br />
                <button type="submit">Create Ticket</button>
            </form>
        </section>
    );
};

export default TicketForm;

