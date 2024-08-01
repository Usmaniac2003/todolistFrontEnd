import React, { useState } from 'react';
import { Typography, Button, useMediaQuery, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LOGO from '../assets/logo.png';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SellIcon from '@mui/icons-material/Sell';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import MobileHeader from "./MobileHeader";
import '../Styles/header.css'; // Import the CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');
  const isSmallTablet = useMediaQuery('(max-width:1000px)');
  const isTablet = useMediaQuery('(max-width:1140px)');

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

  const getLogoSize = () => {
    if (isSmallTablet) return '6vh';
    if (isTablet) return '7vh';
    return '8vh';
  };

  const getIconSize = () => {
    if (isSmallTablet) return 'small';
    if (isTablet) return 'medium';
    return 'medium';
  };

  const getLabelStyle = () => {
    if (isSmallTablet) return { fontSize: '10px' };
    if (isTablet) return { fontSize: '12px' };
    return { fontSize: '14px' };
  };

  const getButtonStyle = () => {
    if (isSmallTablet) return { padding: '4px 8px', fontSize: '10px' };
    if (isTablet) return { padding: '5px 10px', fontSize: '12px' };
    return { padding: '7px 14px', fontSize: '14px' };
  };

  return (
    <>
      {isMobile && <MobileHeader open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
      <div className="header">
        <img src={LOGO} style={{ height: getLogoSize(), margin: "1vw" }} alt="Logo" />
        {isMobile ? (
          <IconButton onClick={() => setIsMenuOpen(true)} style={{ color: 'black' }}>
            <MenuIcon />
          </IconButton>
        ) : (
          <div className='nonLogo' style={{ display: "flex", alignItems: "center", gap: isTablet ? "2vw" : "3vw" }}>
            <div className="menu_icons" style={{ display: "flex", alignItems: "center", color: "white", flexGrow: 1 }}>
              {menuItems.map((item, index) => (
                <div key={index} className="icon">
                  {React.cloneElement(item.icon, { fontSize: getIconSize() })}
                  <Typography variant="caption" style={{ color: "black", ...getLabelStyle() }}>{item.label}</Typography>
                </div>
              ))}
            </div>
            <div className="buttons" style={{ display: "flex", gap: "10px" }}>
              <Button variant="contained" style={{ backgroundColor: "#1A1D29", color: "#FFF", borderRadius: "0", ...getButtonStyle() }}>
                Log In
              </Button>
              <Button variant="contained" style={{ backgroundColor: "#FFF", color: "#1A1D29", borderRadius: "0", ...getButtonStyle() }}>
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
