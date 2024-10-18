import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider
import { UserProvider } from './context/UserContext.jsx';
import { ToDoListProvider } from './context/ToDoListContext.jsx';
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AuthProvider>
      <UserProvider>
        <ToDoListProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </ToDoListProvider>
      </UserProvider>
    </AuthProvider>
  </Router>
);
