"use client"
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { CopilotChat } from "@copilotkit/react-ui";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { Box, Container, Typography } from "@mui/material";

function MaitriPage() {
  const COPILOT_CLOUD_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_COPILOT_CLOUD_PUBLIC_API_KEY;

  return (
    <CopilotKit publicApiKey={COPILOT_CLOUD_PUBLIC_API_KEY}>
      <Box
        sx={{
          background: 'linear-gradient(180deg, #FFD8DF 0%, #FFE6F1 100%)',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          minHeight: '100vh',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <NavBar />

        <Container
          maxWidth="lg"
          sx={{
            textAlign: 'center',
            marginTop: '30px',
            paddingBottom: '30px',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Pacifico, cursive',
              fontSize: { xs: '28px', md: '48px' },
              fontWeight: 'bold',
              color: '#FF1841',
              marginBottom: '20px',
            }}
          >
            Welcome to Maitri AI!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '16px', md: '20px' },
              color: '#242424',
              marginBottom: '40px',
              lineHeight: 1.6,
              fontFamily: 'Jost, sans-serif',
            }}
          >
            Your trusted AI companion specializing in female menstrual health. 
            Get reliable answers to your questions about periods, symptoms, 
            solutions, diseases, and debunk myths around menstrual health.
          </Typography>

          <Box
            sx={{
              background: '#FFFFFF',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              marginBottom: '40px',
            }}
          >
            <CopilotChat
              instructions={`Your name is Maitri. You are a medical practitioner and specialize in topics 
                regarding female menstrual health, periods, symptoms related to it, its solutions, 
                diseases related to it, and myths related to it. Avoid answering questions unrelated to these topics.`}
              labels={{
                title: "Maitri AI",
                initial: `Need any help about menstruation 
            , periods , symptoms related to it , its solutions , diseases related to it?`,
              }}
            />
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '18px', md: '24px' },
              color: '#FF5876',
              marginTop: '30px',
              fontWeight: 'bold',
            }}
          >
            Lets talk about your first period experience!
          </Typography>
        </Container>

        <Footer />
      </Box>
    </CopilotKit>
  );
}

export default MaitriPage;
