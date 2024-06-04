import React, { useState } from 'react';
import { addOrder } from '../services/orderService';

const OrderForm = () => {
    const [order, setOrder] = useState({ name: '', remainingTime: 0, instructions: '' });

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrder(order).then(() => {
            alert('Order added successfully');
        }).catch((error) => {
            console.error('There was an error adding the order!', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={order.name} onChange={handleChange} placeholder="Order Name" required />
            <input type="number" name="remainingTime" value={order.remainingTime} onChange={handleChange} placeholder="Remaining Time" required />
            <input type="text" name="instructions" value={order.instructions} onChange={handleChange} placeholder="Special Instructions" />
            <button type="submit">Add Order</button>
        </form>
    );
};

export default OrderForm;
