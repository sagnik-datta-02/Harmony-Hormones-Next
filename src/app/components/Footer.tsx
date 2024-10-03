import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Box, Container, Link } from '@mui/material';

export default function Footer() {
  return (

    <Box style={{ position: 'relative', marginTop: '20px', }} >
      <Container maxWidth='lg' style={{ padding: '20px' }}>
        <Grid container spacing={2} >
          <Grid size={{xs:12 ,sm:6, md:3}} >
            <Typography variant="h6" style={{
              color: '#242424',
              fontSize: 24,
              fontFamily: 'Kanit, sans-serif',
              fontWeight: '600',
              wordWrap: 'break-word'
            }}>Harmony Hormones</Typography>
            
          </Grid>
          <Grid size={{xs:12 ,sm:6, md:3}}>
            <Typography variant="h6" style={{
              color: '#242424',
              fontSize: 24,
              fontFamily: 'Kanit, sans-serif',
              fontWeight: '600',
              wordWrap: 'break-word'
            }}>Support</Typography>
            <Typography component="div" style={{ padding: '20px', display: 'flex', flexDirection: 'column', color: '#242424', fontSize: 20, fontFamily: 'Jost, sans-serif', letterSpacing: 0.40, wordWrap: 'break-word' }}>
            <Link href='mailto:sagnikforwork@gmail.com' underline="hover">Email Us</Link>

            </Typography>
          </Grid>
          <Grid size={{xs:12 ,sm:6, md:3}}>
            <Typography variant="h6" style={{
              color: '#242424',
              fontSize: 24,
              fontFamily: 'Kanit, sans-serif',
              fontWeight: '600',
              wordWrap: 'break-word'
            }}>Services</Typography>
            <Typography component="div" style={{ padding: '20px', display: 'flex', flexDirection: 'column', color: '#242424', fontSize: 20, fontFamily: 'Jost, sans-serif', fontWeight: '400', letterSpacing: 0.40, wordWrap: 'break-word' }}>
              <Link href='/flow-ai' underline="hover" >Flow AI</Link>
              <Link href='/maitri-ai'  underline="hover" >Maitri AI</Link>
           

            </Typography>
          </Grid>
        </Grid>
        <div style={{ width: '100%', height: '100%', border: '1px #5A5A5A solid' }}></div>
        <Typography style={{
          color: '#242424',
          fontSize: 16,
          fontFamily: 'Kanit, sans-serif',
          fontWeight: '400',
          letterSpacing: 0.32,
          wordWrap: 'break-word',
          textAlign: 'center',
          padding: '20px 0',

        }}>Harmony Hormones, Made For a Cause </Typography>
      </Container>
    </Box>

  );
}