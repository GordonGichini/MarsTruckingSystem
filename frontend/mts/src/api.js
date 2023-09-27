import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5002',
});

export const fetchAddresses = async () => {
    const responses = await api.get('/addresses');
    return responses.data;
};

export const createAddress = async (address) => {
    const response = await api.post('/addresses', address);
    return response.data;
};
export const updateAddress = async (id, updatedAddress) => {
    const response = await api.put(`/addresses/${id}`, updatedAddress);
    return response.data;
}

export const deleteAddress = async (id) => {
    const response = await api.delete(`/addresses/${id}`);
    return response.data;
};

export default api;