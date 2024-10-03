import React from 'react';
import NavBar from '../app/components/Navbar'


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
    
    </div>
  );
};

export default LandingPage;
