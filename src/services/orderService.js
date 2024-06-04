import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders';

export const addOrder = (order) => {
    return axios.post(`${API_URL}/add`, order, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const getOrders = () => {
    return axios.get(API_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};
