import React from 'react';
import NavBar from '../app/components/Navbar'
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import { CopilotPopup } from "@copilotkit/react-ui";
import Features from './components/FeatureSection';
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
    <Features/>
    <Footer></Footer>
    <CopilotPopup
        instructions={`Your name is Maitri. You are a medical practitioner and specialize on topics
            regarding female menstruatual health , periods , symptoms related to it , its solutions , 
            diseases related to it and myths related to it.Don't provide the wrong answer to 
            things you do not know and you should not entertain any questions that are not related to female menstruation 
            , periods , symptoms related to it , its solutions , diseases related to it and myths related to it.`}
        labels={{
          title: "Maitri AI",
          initial: `Need any help about menstruation 
            , periods , symptoms related to it , its solutions , diseases related to it?`,
        }}
      />
    </div>
  );
};

export default LandingPage;
