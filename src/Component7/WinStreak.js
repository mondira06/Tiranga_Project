import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const WinStreak = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e3f2fd',
        color: 'black',
        padding: 2,
      }}
    >
      <img
        src="/assets/3.png"
        alt="Main"
        style={{
            width: "108%",
            height: "30%",
            objectFit: "cover",
            marginBottom: 16,
        }}
      />
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        WINSTREAK 2X PRIZE HAPPY HOUR
      </Typography>
      <img
        src="/assets/5.png"
        alt="Main"
        style={{
            width: "100%",
            marginBottom: 16,
        }}
      />
      <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1, color: 'blue' }}>
        Earning Group Family
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify', marginBottom: 2 }}>
        Elevate the excitement with our lightning-fast 1-minute Wingo games! Double your chances of winning during Happy Hours - it's twice the fun, twice the prizes! Join the frenzy and let the games begin!
      </Typography>
      <Typography variant="subtitle2" sx={{ textAlign: 'justify', marginBottom: 1 }}>
        Terms & Conditions:
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'justify', marginBottom: 1 }}>
        1. Bonus can be claimed after providing the screenshot of the win streak to your tutor.<br/>
        2. Happy hours are from 1 AM - 7 AM India Time.<br/>
        3. Same IP and Multiple ID will be considered illegal actions.<br/>
        4. Two wins in the same period will be counted as 1.<br/>
        5. Only applied in TC WinGo 1 Minute games.<br/>
        6. All terms and regulations belong to TC platform as developer.<br/>

      </Typography>
      <div style={{ marginBottom: 20 }} /> 
      </Box>
    </Container>
  );
};

export default WinStreak;
