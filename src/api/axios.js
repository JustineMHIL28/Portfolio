import axios from 'axios';

export const useAxios = {
    connect: async ({ method, type, url, data }) => {
        try {
            const response = await axios({
                method,
                url,
                headers: {
                    'Content-Type': type,
                },
                withCredentials: true, // Allows cookies to be sent and received
                timeout: 10000, // Request timeout
                data: data || undefined, // Use 'data' if provided, otherwise undefined
            });
            return response; // Return the response object
        } catch (error) {
            // Handle error (optional: could be improved with specific error handling)
            console.error('Error making request:', error);
            throw error; // Re-throw error for further handling if needed
        }
    },
};
