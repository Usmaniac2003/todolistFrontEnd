import React from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import LOGO from "../assets/logo.png";
import FB from "../assets/fb.png";
import INSTA from "../assets/insta.png";
import TWITTER from "../assets/twitter.png";
import YT from "../assets/yt.png";
import LN from "../assets/linkedin.png";
import GSTORE from "../assets/gp.png";
import ASTORE from "../assets/a.png";

const BS1 = "rgba(0, 0, 0, 0.4)";

const Footer = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');

  const logoSize = isSmallScreen ? '70px' : isMediumScreen ? '80px' : '100px';
  const socialIconSize = isSmallScreen ? '15px' : isMediumScreen ? '20px' : '25px';
  const storeButtonWidth = isSmallScreen ? '30vw' : isMediumScreen ? '20vw' : '10vw';

  const body1Size = isSmallScreen ? '0.75rem' : isMediumScreen ? '0.875rem' : '1rem';
  const body2Size = isSmallScreen ? '0.625rem' : isMediumScreen ? '0.75rem' : '0.875rem';
  const captionSize = isSmallScreen ? '0.5rem' : isMediumScreen ? '0.625rem' : '0.75rem';

  return (
    <>
      <div className="UpperFooter" style={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '20vh',
        backgroundColor: '#929FCB',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        padding: '20px'
      }}>
        <div className="logo" style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: isSmallScreen ? 'center' : 'left'
        }}>
          <img src={LOGO} alt="Logo" style={{ width: logoSize }} />
          <Typography variant='body2' color="rgba(0,0,0,0.6)" style={{ fontSize: body2Size }}>Simplify your workflow today!</Typography>
          <div className="SOCIAL_TRAY" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2vh',
            margin: '4vh 0'
          }}>
            <img src={FB} style={{ height: socialIconSize }} alt="Facebook" />
            <img src={INSTA} style={{ height: socialIconSize }} alt="Instagram" />
            <img src={LN} style={{ height: socialIconSize }} alt="LinkedIn" />
            <img src={TWITTER} style={{ height: socialIconSize }} alt="Twitter" />
            <img src={YT} style={{ height: socialIconSize }} alt="YouTube" />
          </div>
        </div>
        <div className="FooterLinkSection" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '10px',
          textAlign: isSmallScreen ? 'center' : 'left'
        }}>
          <Typography variant='body1' color='white' marginBottom='2vh' style={{ fontSize: body1Size }}>TOP 4 CATEGORY</Typography>
          <Typography variant='caption' color={BS1} style={{ fontSize: captionSize }}>Development</Typography>
          <Typography variant='caption' color={BS1} style={{ fontSize: captionSize }}>Finance & Accounting</Typography>
          <Typography variant='caption' color={BS1} style={{ fontSize: captionSize }}>Design</Typography>
          <Typography variant='caption' color={BS1} style={{ fontSize: captionSize }}>Business</Typography>
        </div>
        <div className="FooterLinkSection" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '10px',
          textAlign: isSmallScreen ? 'center' : 'left'
        }}>
          <Typography variant='body1' color='white' marginBottom='2vh' style={{ fontSize: body1Size }}>QUICK LINKS</Typography>
          <Typography variant='caption' color={BS1} style={{ fontSize: captionSize }}>About</Typography>
          <Typography variant='caption' color={BS1} style={{ fontSize: captionSize }}>Contacts</Typography>
          <Typography variant='caption' color={BS1} style={{ fontSize: captionSize }}>Career</Typography>
        </div>
        <div className="FooterLinkSection" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '10px',
          textAlign: isSmallScreen ? 'center' : 'left'
        }}>
          <Typography variant='body1' color='white' marginBottom='2vh' style={{ fontSize: body1Size }}>SUPPORT</Typography>
          <Typography variant='caption' color={BS1} style={{ fontSize: captionSize }}>Help Center</Typography>
          <Typography variant='caption' color={BS1} style={{ fontSize: captionSize }}>FAQs</Typography>
          <Typography variant='caption' color={BS1} style={{ fontSize: captionSize }}>Terms & Conditions</Typography>
          <Typography variant='caption' color={BS1} style={{ fontSize: captionSize }}>Privacy Policy</Typography>
        </div>
        <div className="FooterLinkSection" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '10px',
          textAlign: isSmallScreen ? 'center' : 'left'
        }}>
          <Typography variant='body1' color='white' marginBottom='2vh' style={{ fontSize: body1Size }}>Download Our App</Typography>
          <img src={GSTORE} style={{ width: storeButtonWidth, marginBottom: '2vh' }} alt="Google Play Store" />
          <img src={ASTORE} style={{ width: storeButtonWidth }} alt="Apple App Store" />
        </div>
      </div>
      <div className='lowerFooter' style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '5vh',
        backgroundColor: '#282c34',
        padding: '10px'
      }}>
        <Typography variant="caption" color="grey" style={{ textAlign: 'center', fontSize: captionSize }}>
          &copy; {new Date().getFullYear()} - TaskWhiz. Designed By <span style={{ color: "white" }}>Summer Of Code.</span> All Rights Reserved.
        </Typography>
      </div>
    </>
  );
};

export default Footer;
