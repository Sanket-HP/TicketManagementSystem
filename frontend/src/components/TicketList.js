// TicketList.js
import React from 'react';

const TicketList = ({ tickets }) => {
    return (
        <section id="ticketList">
            <h2>My Tickets</h2>
            <ul>
                {tickets.map((ticket, index) => (
                    <li key={index}>{ticket.eventName} - {ticket.ticketType}</li>
                    {/* Display other ticket details as needed */}
                ))}
            </ul>
        </section>
    );
};

export default TicketList;

