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

const MobileHeader = ({ open, onClose }) => {
  const menuItems = [
    { icon: <HomeRoundedIcon />, label: 'Home' },
    { icon: <ReceiptLongIcon />, label: 'Lists' },
    { icon: <SellIcon />, label: 'Categories' },
    { icon: <ArchiveOutlinedIcon />, label: 'Archive' },
    { icon: <PushPinIcon />, label: 'Pinned' },
    { icon: <NotificationsIcon />, label: 'Notifications' },
    { icon: <DeleteIcon />, label: 'Trash' },
    { icon: <SettingsIcon />, label: 'Settings' },
  ];

  const getButtonStyle = () => ({
    backgroundColor: '#1A1D29',
    color: '#FFF',
    borderRadius: '0',
    width: '100%',
    marginTop: '20px',
    padding: '10px 0',
  });

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
      zIndex: 1000,
      overflowY: 'auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <IconButton onClick={onClose} style={{ color: 'black' }}>
          <CloseIcon />
        </IconButton>
      </div>
      <div style={{ padding: '30px 20px' }}>
        {menuItems.map((item, index) => (
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
        ))}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button variant="contained" style={{ backgroundColor: "#1A1D29", color: "#FFF", borderRadius: "0" }}>
            <LogoutIcon />
            &nbsp;&nbsp;Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
