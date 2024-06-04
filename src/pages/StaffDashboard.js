import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StaffDashboard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/orders', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders', error);
            }
        };

        fetchOrders();
    }, []);

    const handleStatusChange = async (orderId, status) => {
        try {
            await axios.patch(`http://localhost:5000/api/orders/${orderId}`, { status }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setOrders((prevOrders) => prevOrders.map((order) => 
                order._id === orderId ? { ...order, status } : order
            ));
        } catch (error) {
            console.error('Error updating order status', error);
        }
    };

    return (
        <div>
            <h2>Staff Dashboard</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order._id}>
                        {order.name} - {order.remainingTime} minutes - {order.status}
                        <button onClick={() => handleStatusChange(order._id, 'in progress')}>In Progress</button>
                        <button onClick={() => handleStatusChange(order._id, 'completed')}>Completed</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StaffDashboard;
