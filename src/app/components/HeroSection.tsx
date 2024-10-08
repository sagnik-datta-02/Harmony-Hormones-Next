"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { useRouter } from 'next/navigation';
const HeroSection: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/flow-ai');
  };

  const handleClickPage = () => {
    router.push('/maitri-ai');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        background: '#FFD8DF',
        marginTop: '25px',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ xs:12 , sm:6 , md:8}} >
            <Typography
              variant="h4"
              sx={{
                margin: '10px',
                color: '#242424',
                fontSize: { xs: '32px', sm: '64px' },
                fontFamily: 'Pacifico, cursive',
                fontWeight: '600',
                textTransform: 'capitalize',
                lineHeight: { xs: 1.5, sm: '79.36px' },
                letterSpacing: '0.13',
                wordWrap: 'break-word',
              }}
            >
              Harmony Hormones
              <br />
              #Its Just Period
              <br />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                margin: '10px',
                color: '#242424',
                fontSize: { xs: '14px', sm: '16px' },
                fontFamily: 'Jost, sans-serif',
                fontWeight: '400',
                letterSpacing: 0.32,
                wordWrap: 'break-word',
                alignContent: 'center',
              }}
            >
              Get ready to empower your well-being with Harmony Hormones—a vibrant global haven for women&apos;s health! Get your personalized Period Calendar and Care plan from Flow AI , and have a chat with Maitri, our witty AI companion breaking taboos, gaining knowledge, resloving all your menstrual health doubts and become part of a lively community dedicated to your holistic well-being. Harmony Hormones: Where guidance meets excitement, support meets fun, and well-being is the ultimate adventure! Your guide to a harmonious and empowered life starts here. 🌺🚀
            </Typography>

            <Button
              variant="contained"
              sx={{
                margin: 1,
                marginTop: { xs: '10px', sm: 0 },
                width: 'auto',
                paddingLeft: 2,
                paddingRight: 2,
                paddingTop: 1,
                paddingBottom: 1,
                background: '#FF5876',
                borderRadius: 5,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 15,
                display: 'inline-flex',
                color: 'white',
              }}
              onClick={handleClick}
            >
              Flow AI
            </Button>
            <Button
              variant="outlined"
              sx={{
                margin: 1,
                background: '#FF1841',
                width: 'auto',
                marginTop: { xs: '10px', sm: 0 },
                paddingLeft: 2,
                paddingRight: 2,
                paddingTop: 1,
                paddingBottom: 1,
                borderRadius: 5,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 20,
                display: 'inline-flex',
                color: '#242424',
              }}
              onClick={handleClickPage}
            >
              Maitri AI
            </Button>
          </Grid>
          <Grid size={{ xs:12 , sm:6 , md:4}} sx={{ padding: 1 }}>
            <img
              style={{ width: '100%', height: '100%' }}
              src="/images/img2-removebg-preview.png"
              alt="Placeholder Image"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
