import jwtDecode from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: null, role: null });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setAuth({ token, role: decoded.role });
        }
    }, []);

    const login = (token) => {
        const decoded = jwtDecode(token);
        localStorage.setItem('token', token);
        setAuth({ token, role: decoded.role });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({ token: null, role: null });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };

