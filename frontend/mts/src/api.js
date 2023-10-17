import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5005/api',
});

export const saveDriverData = async (driverData) => {
    try {
        const response = await api.post('/drivers', driverData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to save driver data');
    }
}

export const saveUnitData = async (unitData) => {
    try {
        const response = await api.post('/units', unitData);
        return response.data;
  } catch (error) {
    throw new Error('Failed to save unit');
  }
}

export const saveCompanyData = async (companyData) => {
    try {
      const response = await api.post('/companyProfiles', companyData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to save company data');
    }
  };

export const fetchExpenses = async () => {
    try {
        const response = await api.get('/expenses');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch expenses');
    }
};

export const saveExpenseData = async (expenseData) => {
    try {
        const response = await api.post('/expenses', expenseData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to save expense data');
    }
};

export const createExpense = async (expense) => {
    try {
        const response = await api.post('/expenses', expense);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create expense')
    }
};

export const updateExpense = async (id, updatedExpense) => {
    try {
    const response = await api.put(`/expenses/${id}`, updatedExpense);
    return response.data;
    } catch (error) {
        throw new Error('Failed to update the expense');
    }
};

export const deleteExpense = async (id) => {
    try {
    const response = await api.delete(`/expenses/${id}`);
    return response.data;
    } catch (error) {
        throw new Error('Failed to delete the expense');
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