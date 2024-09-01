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
import NotificationDropDown from './NotificationDropDown';
import '../Styles/header.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width:900px)');
  const isSmallTablet = useMediaQuery('(max-width:1000px)');
  const isTablet = useMediaQuery('(max-width:1140px)');

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

  const handleMenuItemClick = (label) => {
    if (label === "Notifications") {
      setIsNotificationsOpen(!isNotificationsOpen);
    }
    // Add any additional click handling here if needed
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
  const navigate=useNavigate();
  const NavigateToLogIn =()=>{
    navigate("/Login")
  }
  const NavigateToSignUp =()=>{
    navigate("/Signup")
  }
  return (
    <>
      {isMobile && <MobileHeader open={isMenuOpen} onClose={() => setIsMenuOpen(false)} 
 />}

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
                item.label === "Notifications" || item.label === "Categories" //  Change this Logic When Adding Categories
                ? (
                  <div
                    key={index}
                    className="icon"
                    onClick={() => handleMenuItemClick(item.label)}
                    style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', cursor: 'pointer' }}
                  >
                    {React.cloneElement(item.icon, { fontSize: getIconSize() })}
                    <Typography variant="caption" style={getLabelStyle()}>
                      {item.label}
                    </Typography>
                    {isNotificationsOpen && <NotificationDropDown />}
                  </div>
                ) : (
                  <Link to={item.path} key={index} style={{ color: "white", textDecoration: "none" }}>
                    <div
                      className="icon"
                      onClick={() => handleMenuItemClick(item.label)}
                      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', cursor: 'pointer' }}
                    >
                      {React.cloneElement(item.icon, { fontSize: getIconSize() })}
                      <Typography variant="caption" style={getLabelStyle()}>
                        {item.label}
                      </Typography>
                    </div>
                  </Link>
                )
              ))}
            </div>

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
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
