import React from "react";
import { Typography, Box, Button, Paper, Grid } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

function Safe() {
  return (
    <Box sx={{ width: "100vw", height: "100vh", overflow: "auto" }}>
      <Box
        sx={{
          backgroundColor: "#e8eaf6",
          display: "flex",
          flexDirection: "column",
        alignItems: "center",
          justifyContent: "center",
          pt: 4,
          px: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            color: "red",
            padding: "5px 10px",
            borderRadius: "15px",
            textAlign: "center",
            justifyContent: "center",
            marginBottom: 2,
          }}
        >
          Interest rate 0.10%
        </Box>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 400,
            marginBottom: 16,
          }}
        >
          <img
            src="/assets/3.png"
            alt="Main"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              color: "white",
              padding: "0 20px",
              boxSizing: "border-box",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h4">₹0.00</Typography>
                <Typography variant="body1">
                  Transfer in 1 million, income 1000 per day
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    color: "#f0a500",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    textAlign: "right",
                  }}
                >
                  Financial security
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>

        <Paper elevation={3} sx={{ width: "100%", maxWidth: 400, mb: 2 }}>
          <Box p={2}>
            <Box display="flex" justifyContent="space-around" mt={2}>
              <Box textAlign="center">
                <Typography variant="h5" color="error">
                  ₹0.00
                </Typography>
                <Typography color="textSecondary">Generated revenue</Typography>
                <Box
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    display: "inline-block",
                    padding: "5px 10px",
                    mt: 1,
                    borderRadius: "5px",
                  }}
                >
                  My interest rate 0.3%
                </Box>
              </Box>
              <Box textAlign="center">
                <Typography variant="h5">₹0.00</Typography>
                <Typography color="textSecondary">
                  Accumulated revenue
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              mb={2}
              width="100%"
            >
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#f0a500",
                  flex: 1,
                  mx: 0.5,
                }}
              >
                Transfer Out
              </Button>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#f0a500",
                  flex: 1,
                  mx: 0.5,
                }}
              >
                Transfer In
              </Button>
            </Box>
            <Typography variant="body2" color="red" mb={2}>
              Funds are safe and secure, and can be transferred at any time
            </Typography>
            <Button>
              <Typography variant="body2" color="textSecondary">
                Learn about safes
              </Typography>
            </Button>
          </Box>
        </Paper>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            textAlign: "left",
            ml: 2,
          }}
        >
          <TextSnippetIcon sx={{ mr: 1 }} />
          <Typography variant="h6" mb={2}>
            Historical records
          </Typography>
        </Box>
        <Paper elevation={3} sx={{ width: "100%", maxWidth: 400, mb: 2 }}>
          <Box p={2}>
            <Box mt={2} display="flex" justifyContent="space-between">
              <Box>
                <Typography>Transfer Out</Typography>
                <Typography color="green">Daily interest rate</Typography>
                <Typography>Payout income</Typography>
                <Typography variant="body2" color="textSecondary">
                  20240326012006273
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography color="error">-₹0.00</Typography>
                <Typography color="green">0.10%</Typography>
                <Typography color="error">₹0.00</Typography>
                <Typography variant="body2" color="textSecondary">
                  2024-03-26 01:20:06
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ maxWidth: 400, mt: 2 }}
        >
          All history
        </Button>
      </Box>
    </Box>
  );
}

export default Safe;
