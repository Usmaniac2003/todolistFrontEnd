// UserContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext'; // Assuming you have an AuthContext for authentication
import { useNavigate } from 'react-router-dom';

// Create UserContext
const UserContext = createContext();

// Custom hook to use UserContext
export const useUser = () => useContext(UserContext);

// UserProvider component to wrap the app with user state management
export const UserProvider = ({ children }) => {
    const { isAuthenticated, logout } = useAuth(); // Use authentication state from AuthContext
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Navigate after updates if needed

    // Fetch the current user's data from the backend
    const fetchUser = async () => {
        if (!isAuthenticated) {
            setLoading(false); // Stop loading if the user isn't authenticated
            setUser(null); // Clear user data if not authenticated
            return;
        }

        try {
            console.log("Fetching user data...");
            const response = await axios.get('http://localhost:3000/user/current', { 
                withCredentials: true 
            });
            console.log("User data received:", response.data);
            setUser(response.data); // Set user data if successfully fetched
        } catch (err) {
            console.error("Error fetching user data:", err);
            setError("Failed to fetch user data.");

            // Only logout if the issue is due to authentication (401 Unauthorized)
            if (err.response && err.response.status === 401) {
                console.log("Session expired. Logging out...");
                logout();
                navigate('/login'); // Redirect to login if authentication fails
            }
        } finally {
            setLoading(false); // Stop the loading state
        }
    };

    // Fetch user data on mount and when authentication state changes
    useEffect(() => {
        console.log("Auth state changed. Fetching user data...");
        fetchUser();
    }, [isAuthenticated]);

    // Update user details on the backend
    const updateUserDetails = async (updatedData) => {
        try {
            const response = await axios.patch(
                'http://localhost:3000/user/update',
                updatedData,
                { withCredentials: true }
            );
            console.log("User details updated:", response.data.updatedUser);
            setUser(response.data.updatedUser); // Update the user state with new data
        } catch (err) {
            console.error("Error updating user details:", err);
            setError("Failed to update user details.");
        }
    };

    // Handle user logout and clear user data
    const handleLogout = () => {
        setUser(null); // Clear user data on logout
    };

    // Provide user-related state and actions to the entire app
    const value = {
        user,
        loading,
        error,
        updateUserDetails,
        handleLogout,
    };

    return (
        <UserContext.Provider value={value}>
            {loading ? <div>Loading user data...</div> : children}
        </UserContext.Provider>
    );
};
