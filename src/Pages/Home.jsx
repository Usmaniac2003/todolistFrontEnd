import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import WelcomeIcon from '../assets/Frame 385.png';
import Box1 from '../assets/B1.png';
import Box2 from '../assets/B2.png';
import Box3 from '../assets/B3.png';
import Box4 from '../assets/B4.png';
import Box5 from '../assets/B5.png';
import Box6 from '../assets/B6.png';
import Box7 from '../assets/B7.png';
import Box8 from '../assets/B8.png';
import WhyChooseUs from '../assets/WhyChooseUs.png';
import HowToBegin from '../assets/HowToBegin.png';
import Testimonials from '../assets/Testimonials.png';
import Girl from '../assets/SittingGirl.png';

import '../Styles/Fonts.css';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <div className='HomePage'>
        <div
          className="WelcomeSection"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            margin: '5vh 0',
            padding: isMobile ? '0 2vh' : '0',
          }}
        >
          <div
            className="WelcomeText"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1vh',
              alignItems: isMobile ? 'center' : 'flex-start',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <Typography variant="h4">
              Welcome to <span style={{ fontWeight: 'bolder' }}>TaskWhiz</span>
            </Typography>
            <Typography variant="h6" style={{ fontFamily: '"Lato", sans-serif', fontWeight: 700 }}>
              Simplify Your Workflow Today!
            </Typography>
            <br />
            <Typography variant={isMobile?"body1":"caption"}>
              TaskWhiz is a powerful to-do list website designed to help you organize
              <br /> and manage your tasks efficiently. Streamline your workflow and achieve
              <br /> your goals with ease using our intuitive platform.
            </Typography>
            <div
              className="buttons"
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                gap: isMobile ? '1vh' : '1vw',
                margin: '3vh 0',
              }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#1A1D29',
                  color: '#FFF',
                  borderRadius: '0',
                  border: '2px solid #1A1D29',
                }}
              >
                Add List
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#FFF',
                  color: '#1A1D29',
                  borderRadius: '0',
                  border: '2px solid #1A1D29',
                }}
              >
                About Us
              </Button>
            </div>
          </div>
          <div className="WelcomeIcon" style={{ marginBottom: isMobile ? '2vh' : '0' }}>
            <img src={WelcomeIcon} alt="" style={{ height: '40vh' }} />
          </div>
        </div>
        <div className="TemplateSection" style={{ background: '#F5F7FA', padding: '3vw' }}>
          <Typography variant="h5" textAlign="center" fontWeight="600" style={{ fontFamily: '"Inter", sans-serif' }}>
            Templates Available for Everyday Tasks{' '}
          </Typography>
          <div className="TemplateBoxes" style={{ margin: '5vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', marginBottom: '2vh' }}>
              <img src={Box1} alt="" style={{ width: '15vw', height: 'auto', objectFit: 'cover' }} />
              <img src={Box2} alt="" style={{ width: '15vw', height: 'auto', objectFit: 'cover' }} />
              <img src={Box3} alt="" style={{ width: '15vw', height: 'auto', objectFit: 'cover' }} />
              <img src={Box4} alt="" style={{ width: '15vw', height: 'auto', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', marginBottom: '2vh' }}>
              <img src={Box5} alt="" style={{ width: '15vw', height: 'auto', objectFit: 'cover' }} />
              <img src={Box6} alt="" style={{ width: '15vw', height: 'auto', objectFit: 'cover' }} />
              <img src={Box7} alt="" style={{ width: '15vw', height: 'auto', objectFit: 'cover' }} />
              <img src={Box8} alt="" style={{ width: '15vw', height: 'auto', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
        <img src={WhyChooseUs} alt="" style={{ width: '100%', margin: '5vh 0' }} />
        <img src={HowToBegin} alt="" style={{ width: '100%', margin: '5vh 0' }} />
        <img src={Testimonials} alt="" style={{ width: '100%', marginTop: '5vh' }} />
        <img
          src={Girl}
          alt=""
          style={{ width: '10vw', marginLeft: '10vw', marginBottom: '4vh', position: 'relative', bottom: '100px' }}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
