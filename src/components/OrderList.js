import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/orderService';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders().then((response) => {
            setOrders(response.data);
        }).catch((error) => {
            console.error('There was an error fetching the orders!', error);
        });
    }, []);

    return (
        <div>
            <h2>Order List</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order._id}>{order.name} - {order.remainingTime} minutes</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
