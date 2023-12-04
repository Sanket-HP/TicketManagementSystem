// APIService.js
const BASE_URL = 'https://your-backend-api-url.com'; // Replace with your actual backend API URL

const APIService = {
    createTicket: async (ticketData) => {
        try {
            const response = await fetch(`${BASE_URL}/tickets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any required headers (like authentication tokens) here
                },
                body: JSON.stringify(ticketData),
            });
            if (!response.ok) {
                throw new Error('Error creating ticket');
            }
            return await response.json();
        } catch (error) {
            console.error('Error creating ticket:', error);
            throw error;
        }
    },
    // Add other API calls as needed (e.g., fetching ticket data, user information, etc.)
};

export default APIService;

