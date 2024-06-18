import React, { useState } from "react";
import { Container, Grid, Card, CardContent, Typography, Button, Box, useMediaQuery, useTheme } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Dashboard = () => {
  const items = [
    { label: "1M", content: "WinGO 1 min" },
    { label: "3M", content: "WinGO 3 min" },
    { label: "5M", content: "WinGO 5 min" },
    { label: "10M", content: "WinGO 10 min" },
  ];

  const [filteredItems, setFilteredItems] = useState([...items]); 
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const filterItems = (label) => {
    const filtered = items.filter(item => item.label === label);
    setFilteredItems(filtered);
  };

  return (
    <Container maxWidth="xl" sx={{ paddingTop: 6, backgroundColor: "#242a3e"}}>
      <Typography variant="h4" sx={{ paddingBottom: 0, color: "white" }} gutterBottom>
        Dashboard V5
      </Typography>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'initial',
                alignItems: 'center',
                backgroundColor: '#394363',
                padding: 2,
                borderRadius: 1,
              }}
            >
              <Box
                sx={{
                  color: 'white',
                  backgroundColor: '#f57c00',
                  padding: '4px 8px',
                  borderRadius: 1,
                  marginBottom: isSmallScreen ? 1 : 0,
                }}
              >
                <Typography variant="h6">{item.label}</Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: 'white', color: 'black' }}
                onClick={() => filterItems(item.label)} 
              >
                {item.content}
              </Button>
            </Box>
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <ShoppingCartIcon color="error" />
              <Typography variant="h6">Join Red</Typography>
              <Typography>0</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <ShoppingCartIcon style={{ color: "purple" }} />
              <Typography variant="h6">Join Violet</Typography>
              <Typography>0</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <ShoppingCartIcon style={{ color: "green" }} />
              <Typography variant="h6">Join Green</Typography>
              <Typography>0</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <ShoppingCartIcon color="primary" />
              <Typography variant="h6">Total Amount</Typography>
              <Typography>0</Typography>
            </CardContent>
          </Card>
        </Grid>

        {[...Array(10).keys()].map((num) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={num}>
            <Card>
              <CardContent>
                <Typography variant="h6">{num}</Typography>
                <Typography>Join {num}</Typography>
                <Typography>0</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">B</Typography>
              <Typography>Join Big</Typography>
              <Typography>0</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">S</Typography>
              <Typography>Join Small</Typography>
              <Typography>0</Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Dashboard;


