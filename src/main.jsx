import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AuthProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthProvider>
  </Router>
);
