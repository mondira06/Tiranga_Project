import React from 'react';
import { Container, Grid, Typography, Button, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContainerStyled = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f5f5f5',
}));

const Header = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(2),
  color: '#ffffff',
  textAlign: 'center',
}));

const Content = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const LotteryItem = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    background: 'linear-gradient(to right,#ffccbc, #ffe0e0)',
    marginBottom: theme.spacing(2),
}));

const LotteryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#ff4444',
}));

const ClubHome = () => {
  return (
    <ContainerStyled>
      <Header>
        <img
        src="/assets/Banner2.jpg"
        alt="Main"
        style={{
          width: "100%",
          marginBottom: 16,
        }}
      />
      </Header>
      <Content>
        <Typography variant="body1" color="error">
          Our customer service never sends a link to the member, if you received a link from someone else it might be a scam.
        </Typography>
      </Content>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button fullWidth variant="contained" color="secondary">Lottery</Button>
          <Button fullWidth>Mini games</Button>
          <Button fullWidth>Popular</Button>
          <Button fullWidth>Slots</Button>
          <Button fullWidth>Fishing</Button>
        </Grid>
        <Grid item xs={9}>
          <LotteryItem>
            <LotteryTitle>Win Go</LotteryTitle>
            <Typography>Guess Number<br />Green/Red/Purple to win</Typography>
            
          </LotteryItem>
          <LotteryItem>
            <LotteryTitle>K3</LotteryTitle>
            <Typography>Guess Number<br />Big/Small/Odd/Even</Typography>
          </LotteryItem>
          <LotteryItem>
            <LotteryTitle>5D</LotteryTitle>
            <Typography>Guess Number<br />Big/Small/Odd/Even</Typography>
          </LotteryItem>
          <LotteryItem>
            <LotteryTitle>Trx Win</LotteryTitle>
            <Typography>Guess Number<br />Green/Red/Purple to win</Typography>
          </LotteryItem>
        </Grid>
      </Grid>
    </ContainerStyled>
  );
};

export default ClubHome;
