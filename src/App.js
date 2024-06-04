import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import StaffDashboard from './pages/StaffDashboard';
import UserDashboard from './pages/UserDashboard';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <ProtectedRoute path="/user-dashboard" component={UserDashboard} role="user" />
                    <ProtectedRoute path="/staff-dashboard" component={StaffDashboard} role="staff" />
                </Switch>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

export default App;
