import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FirstDeposit from "./FirstDeposit";
import { styled } from "@mui/system"; 

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const CustomCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));

const CustomFooter = styled("footer")(({ theme }) => ({
  marginTop: "auto",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  backgroundColor: "#f0f0f0",
  textAlign: "center",
}));

const getRandomImage = () => {
  const randomId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/id/${randomId}/200/300`;
};

const StyledButton = styled(Button)({
  backgroundColor: "red",
  color: "white",
  "&:hover": {
    backgroundColor: "darkred",
  },
});

const RandomPage = () => {
  const [openFirstDeposit, setOpenFirstDeposit] = useState(false); // State for FirstDeposit dialog

  const handleFirstDepositOpen = () => {
    setOpenFirstDeposit(true);
  };

  const handleFirstDepositClose = () => {
    setOpenFirstDeposit(false);
  };


  

  return (
    <div>
      <CustomAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Random Page
          </Typography>
        </Toolbar>
      </CustomAppBar>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CustomCard>
                <img
                  src={getRandomImage()}
                  alt="Random"
                  style={{ width: "100%", height: 200, objectFit: "cover" }}
                />
                <CustomCardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Random Item {index}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer porta ligula ut diam gravida, in consectetur dui
                    consequat.
                  </Typography>
                </CustomCardContent>
                <CardActions>
                  <Button size="small" onClick={handleFirstDepositOpen}>First Deposit</Button>
                  <Button size="small">View Details</Button>
                </CardActions>
              </CustomCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <CustomFooter>
        <Typography variant="body1">
          Footer content &copy; {new Date().getFullYear()}
        </Typography>
      </CustomFooter>
      <FirstDeposit open={openFirstDeposit} handleClose={handleFirstDepositClose} />
    </div>
  );
};

export default RandomPage;
