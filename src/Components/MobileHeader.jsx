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
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';

const MobileHeader = ({ open, onClose }) => {
  const menuItems = [
    { path: "/", icon: <HomeRoundedIcon />, label: 'Home' },
    { path: "/Lists", icon: <ReceiptLongIcon />, label: 'Lists' },
    { path: "/", icon: <SellIcon />, label: 'Categories' }, // Updated path
    { path: "/ArchivedList", icon: <ArchiveOutlinedIcon />, label: 'Archive' },
    { path: "/PinnedList", icon: <PushPinIcon />, label: 'Pinned' },
    { path: "", icon: <NotificationsIcon />, label: 'Notifications' },
    { path: "/TrashList", icon: <DeleteIcon />, label: 'Trash' },
    { path: "/EditProfilePage", icon: <SettingsIcon />, label: 'Settings' },
  ];
  const getButtonStyle = () => ({
    backgroundColor: '#1A1D29',
    color: '#FFF',
    borderRadius: '0',
    width: '100%',
    marginTop: '20px',
    padding: '10px 0',
  });
  const navigate=useNavigate();
  const NavigateToLogIn =()=>{
    navigate("/Login")
  }
  const NavigateToSignUp =()=>{
    navigate("/Signup")
  }
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
        {menuItems.map((item, index) => (
          item.label === "Notifications" || item.label === "Categories"?(  
              <div
            key={index}
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
      ):(  
        <Link to={item.path} key={index} style={{ color: "white", textDecoration: "none" }}>     
        <div
        key={index}
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
  )
          ))}
      
      <div className="buttons" style={{ display: "flex", gap: "10px" }}>
              <Button onClick={NavigateToLogIn}
                variant="contained"
                style={{ backgroundColor: "#1A1D29", color: "#FFF", borderRadius: "0", ...getButtonStyle() }}
              >
                Log In
              </Button>
              <Button onClick={NavigateToSignUp}
                variant="contained"
                style={{ backgroundColor: "#FFF", color: "#1A1D29", borderRadius: "0", ...getButtonStyle() }}
              >
                Sign Up
              </Button>
            </div>
        {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button variant="contained" style={{ backgroundColor: "#1A1D29", color: "#FFF", borderRadius: "0" }}>
            <LogoutIcon />
            &nbsp;&nbsp;Log Out
          </Button>
        </div> */} 
        {/* LogOut Button */}
      </div>
    </div>
  );
};

export default MobileHeader;
