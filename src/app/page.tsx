import React from 'react';
import NavBar from '../app/components/Navbar'
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
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
    <Footer></Footer>
    </div>
  );
};

export default LandingPage;
