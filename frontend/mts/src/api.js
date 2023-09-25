import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5002',
});

export const fetchAddresses = async () => {
    try {
        const response = await fetch(`${baseURL}/addresses`);
        if(!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export default api;