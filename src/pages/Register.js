import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '', role: 'user' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', credentials);
            alert('User registered successfully');
        } catch (error) {
            console.error('Error registering user', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Username" required />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required />
            <select name="role" value={credentials.role} onChange={handleChange}>
                <option value="user">User</option>
                <option value="staff">Staff</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
