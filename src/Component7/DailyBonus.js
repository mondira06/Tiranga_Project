import React from 'react';
import { Typography, Container } from '@mui/material';

const DailyBonus = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100vh',
        backgroundColor: '#e3f2fd',
        color: 'black',
        textAlign: 'center',
      }}
    >
      <img
        src="/assets/5.png"
        alt="Main"
        style={{
            width: "100%",
        }}
      />
      <Typography variant="h5">
        Withdraw fast, safe and stable
      </Typography>
      <Typography variant="h7">
      Join our official group to get daily free gift and updates about TC new Events, Join Now Here: TCofficialschannel Click here to join      </Typography>
      <div style={{ marginBottom: 20 }} /> 
    </Container>
  );
};

export default DailyBonus;
