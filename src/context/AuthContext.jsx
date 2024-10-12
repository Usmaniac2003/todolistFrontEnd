import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the app and provide auth state
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Function to check if the user is logged in (verify token with backend)
    const checkAuthStatus = async () => {
        try {
            // Call the backend /auth/check-auth endpoint to verify the JWT token
            await axios.get('http://localhost:3000/auth/check-auth', { withCredentials: true });
            setIsAuthenticated(true); // If successful, user is authenticated
        } catch (error) {
            setIsAuthenticated(false); // If there’s an error, user is not authenticated
        } finally {
            setLoading(false); // Stop loading after the check
        }
    };

    // Call the checkAuthStatus when the component mounts
    useEffect(() => {
        checkAuthStatus();
    }, []);

    // Login function (after a successful login)
    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', { email, password }, { withCredentials: true });
            if (response.status === 201) {
                setIsAuthenticated(true);
                navigate('/'); // Redirect to home page after successful login
            }
        } catch (error) {
            console.error("Login failed: ", error);
            setIsAuthenticated(false);
        }
    };

    // Register function (after a successful registration)
    const register = async (username, email, password) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/register', { username, email, password }, { withCredentials: true });
            if (response.status === 201) {
                setIsAuthenticated(true);
                navigate('/'); // Redirect to home page after successful registration
            }
        } catch (error) {
            console.error("Registration failed: ", error);
            setIsAuthenticated(false);
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await axios.get('http://localhost:3000/auth/logout', { withCredentials: true });
            setIsAuthenticated(false);
            navigate('/login'); // Redirect to login page after logout
        } catch (error) {
            console.error("Logout failed: ", error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, login, register, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
