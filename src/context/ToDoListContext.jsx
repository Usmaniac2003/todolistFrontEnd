// ToDoListContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext'; 
import { useUser } from './UserContext';

// Create the ToDoListContext
const ToDoListContext = createContext();

// Custom hook to use the ToDoListContext
export const useToDoList = () => useContext(ToDoListContext);

// Provider to manage to-do list and item state
export const ToDoListProvider = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const { user } = useUser();
    const [toDoLists, setToDoLists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]); // State for to-do items
    
    // Fetch all to-do lists for the authenticated user
    const fetchToDoLists = async (userId) => {
        setLoading(true);
        try {
            const response = await axios.post(
                'http://localhost:3000/todolist/todolist_get',
                { userId },
                { withCredentials: true }
            );
            setToDoLists(response.data);
        } catch (err) {
            setError('Failed to fetch to-do lists.');
            console.error('Error fetching to-do lists:', err);
        } finally {
            setLoading(false);
        }
    };

    // Fetch all items for a specific to-do list
    const fetchItems = async (listId) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://localhost:3000/todoitem/${listId}/items`,
                { withCredentials: true }
            );
            setItems(response.data);
        } catch (err) {
            setError('Failed to fetch items.');
            console.error('Error fetching items:', err);
        } finally {
            setLoading(false);
        }
    };

    // Create a new item in the to-do list
    const createItem = async (listId, newItem) => {
        try {
            const response = await axios.post(
                'http://localhost:3000/todoitem/create',
                { ...newItem, listId },
                { withCredentials: true }
            );
            setItems((prevItems) => [...prevItems, response.data]);
        } catch (err) {
            setError('Failed to create item.');
            console.error('Error creating item:', err);
        }
    };

    // Delete an item from the to-do list
    const deleteItem = async (listId, itemId) => {
        try {
            await axios.delete(
                `http://localhost:3000/todoitem/${listId}/${itemId}`,
                { withCredentials: true }
            );
            setItems((prevItems) =>
                prevItems.filter((item) => item._id !== itemId)
            );
        } catch (err) {
            setError('Failed to delete item.');
            console.error('Error deleting item:', err);
        }
    };

    // Create a new to-do list
    const createToDoList = async (body) => {
        try {
            const response = await axios.post(
                'http://localhost:3000/todolist/create-to-do-list',
                body,  // Pass the body directly to the request
                { withCredentials: true }
            );
            setToDoLists((prevLists) => [...prevLists, response.data]); // Update the state with the new list
        } catch (err) {
            setError('Failed to create to-do list.');
            console.error('Error creating to-do list:', err);
        }
    };
    // Delete a to-do list
    const deleteToDoList = async (userId, title) => {
        try {
            await axios.delete('http://localhost:3000/todolist/deleteToDoList', {
                data: { userId, title },
                withCredentials: true,
            });
            setToDoLists((prevLists) => 
                prevLists.filter((list) => list.title !== title)
            );
        } catch (err) {
            setError('Failed to delete to-do list.');
            console.error('Error deleting to-do list:', err);
        }
    };

    // Fetch total number of lists
    const fetchTotalListsCount = async () => {
        const userId = user?._id;
        let totalList = -1;
        try {
            const response = await axios.post(
                'http://localhost:3000/todolist/count_lists',
                { userId },
                { withCredentials: true }
            );
            totalList = response.data.totalLists;
        } catch (err) {
            setError('Failed to fetch total to-do lists count.');
            console.error('Error fetching total lists:', err);
        }
        return totalList;
    };

    useEffect(() => {
        if (isAuthenticated) {
            const userId = user?._id;
            if (userId) {
                fetchToDoLists(userId);
            }
        }
    }, [isAuthenticated, user]);

    const value = {
        toDoLists,
        items,
        loading,
        error,
        createToDoList,
        deleteToDoList,
        fetchItems,
        createItem,
        deleteItem,
        fetchTotalListsCount,
    };

    return (
        <ToDoListContext.Provider value={value}>
            {loading ? <div>Loading to-do lists...</div> : children}
        </ToDoListContext.Provider>
    );
};
