import React from 'react';
import OrderForm from '../components/OrderForm';
import OrderList from '../components/OrderList';

const UserDashboard = () => {
    return (
        <div>
            <h2>User Dashboard</h2>
            <OrderForm />
            <OrderList />
        </div>
    );
};

export default UserDashboard;
