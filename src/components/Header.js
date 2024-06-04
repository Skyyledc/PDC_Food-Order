import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/user-dashboard">User Dashboard</Link></li>
                <li><Link to="/staff-dashboard">Staff Dashboard</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
