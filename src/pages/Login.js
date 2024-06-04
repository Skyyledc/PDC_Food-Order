import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
            login(response.data.token);
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Username" required />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
