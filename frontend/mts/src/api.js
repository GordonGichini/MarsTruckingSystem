import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5002/api',
});

export const saveUnitData = (unitData) => {
    return axios.post('/units', unitData);
  };

export const saveCompanyData = async (companyData) => {
    try {
      const response = await api.post('/companyProfiles', companyData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to save company data');
    }
  };

export const fetchAddresses = async () => {
    try {
    const response = await api.get('/addresses');
    return response.data;
    } catch (error) {
        throw new Error('Failed to fetch addresses');
    }
};

export const createAddress = async (address) => {
    try {
    const response = await api.post('/addresses', address);
    return response.data;
    } catch (error) {
        throw new Error('Failed to create an address');
    }
};
export const updateAddress = async (id, updatedAddress) => {
    try {
    const response = await api.put(`/addresses/${id}`, updatedAddress);
    return response.data;
    } catch (error) {
        throw new Error('Failed to update the address');
    }
};

export const deleteAddress = async (id) => {
    try {
    const response = await api.delete(`/addresses/${id}`);
    return response.data;
    } catch (error) {
        throw new Error('Failed to delete the address');
    }
};

export const fetchPlannedLoads = async () => {
    try {
    const response = await api.get('/plannedLoads');
    return response.data;
    } catch (error) {
        throw new Error('Failed to fetch planned loads');
    }
  };
  
export const createPlannedLoad = async (newPlannedLoad) => {
    try {
        const response = await api.post('/plannedLoads', newPlannedLoad);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create a new planned load');
    }
  };

export default api;