/* script.js */

// JavaScript code for handling form submission and ticket listing
document.addEventListener('DOMContentLoaded', function () {
    const createTicketForm = document.getElementById('createTicketForm');
    const ticketList = document.getElementById('myTickets');

    createTicketForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Code to handle form submission and ticket creation
        // Fetch data from the form and send it to the backend
        // Display newly created ticket in the list
        const eventName = document.getElementById('eventName').value;
        const ticketType = document.getElementById('ticketType').value;

        // Example: Create a new list item and add it to the ticket list
        const newTicket = document.createElement('li');
        newTicket.textContent = `${eventName} - ${ticketType}`;
        ticketList.appendChild(newTicket);

        // Clear the form fields after submission
        createTicketForm.reset();
    });

    // Additional JavaScript code for handling other interactions
    // Dynamically updating ticket list, handling ticket details, etc.
});
