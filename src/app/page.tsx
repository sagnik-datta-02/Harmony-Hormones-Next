import React from 'react';
import NavBar from '../app/components/Navbar'
import HeroSection from './components/HeroSection';

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        background: '#FFD8DF',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        minHeight: '100vh',
        color: 'black',
      }}
    >
      <NavBar />
    <HeroSection/>
    </div>
  );
};

export default LandingPage;
