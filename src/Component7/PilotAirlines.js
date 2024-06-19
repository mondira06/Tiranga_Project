import React from "react";
import { Typography, Container, Box } from "@mui/material";

const PilotAirlines = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e3f2fd",
        color: "black",
        padding: 2,
      }}
    >
      <img
        src="/assets/3.png"
        alt="Main"
        style={{
          width: "108%",
          objectFit: "cover",
          marginBottom: 16,
        }}
      />
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        BEST PILOT TC AIRLINES{" "}
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
        <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
          Terms & Conditions:
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "justify", marginBottom: 1 }}
        >
1. Reward can only be obtained once per day
<br />
2.Screenshot your winning X50 to your Official Tutor to get the rewards

          <br />
          3.Starting bet minimum 100rs

          <br />
          4.Same IP and multiple ID is prohibited and cannot claim the bonus
          <br />
          5.
In order to avoid differences in the understanding the platform reserves the right of final interpretation of this Activity
          <br />
        </Typography>
        <div style={{ marginBottom: 20 }} />
      </Box>
    </Container>
  );
};

export default PilotAirlines;
