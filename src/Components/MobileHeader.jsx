import React from 'react';
import { Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SellIcon from '@mui/icons-material/Sell';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import AuthContext

const MobileHeader = ({ open, onClose }) => {
  const { isAuthenticated, logout } = useAuth(); // Get auth state and logout function

  const menuItems = [
    { path: "/", icon: <HomeRoundedIcon />, label: 'Home' },
    { path: "/Lists", icon: <ReceiptLongIcon />, label: 'Lists' },
    { path: "/", icon: <SellIcon />, label: 'Categories' }, 
    { path: "/ArchivedList", icon: <ArchiveOutlinedIcon />, label: 'Archive' },
    { path: "/PinnedList", icon: <PushPinIcon />, label: 'Pinned' },
    { path: "/TrashList", icon: <DeleteIcon />, label: 'Trash' },
    { path: "/EditProfilePage", icon: <SettingsIcon />, label: 'Settings' },
  ];

  const navigate = useNavigate();
  const NavigateToLogIn = () => {
    navigate("/Login");
  };

  const NavigateToSignUp = () => {
    navigate("/Signup");
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: open ? 0 : '-250px',
      width: '250px',
      height: '100%',
      backgroundColor: '#929FCB',
      transition: 'left 0.3s ease',
      boxShadow: '2px 0 5px rgba(0,0,0,0.5)',
      zIndex: 3000,
      overflowY: 'auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <IconButton onClick={onClose} style={{ color: 'black' }}>
          <CloseIcon />
        </IconButton>
      </div>
      <div style={{ padding: '30px 20px' }}>

        {/* Show menu items only when the user is authenticated */}
        {isAuthenticated && menuItems.map((item, index) => (
          <Link to={item.path} key={index} style={{ color: "white", textDecoration: "none" }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '10px',
                color: 'white',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                padding: '10px',
                borderRadius: '5px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#1A1D29';
                e.currentTarget.style.color = '#FFF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              {item.icon}
              <Typography variant="subtitle1" style={{ marginLeft: '10px' }}>
                {item.label}
              </Typography>
            </div>
          </Link>
        ))}

        {/* Show Login/Signup or Logout/User button based on authentication */}
        <div className="buttons" style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          {isAuthenticated ? (
            <>
              <Typography variant="h6" style={{ color: '#FFF' }}>
                Welcome, User
              </Typography>
              <Button
                onClick={logout}
                variant="contained"
                style={{ backgroundColor: "#FFF", color: "#1A1D29", borderRadius: "0", width: '100%' }}
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={NavigateToLogIn}
                variant="contained"
                style={{ backgroundColor: "#1A1D29", color: "#FFF", borderRadius: "0", width: '100%' }}
              >
                Log In
              </Button>
              <Button
                onClick={NavigateToSignUp}
                variant="contained"
                style={{ backgroundColor: "#FFF", color: "#1A1D29", borderRadius: "0", width: '100%' }}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
