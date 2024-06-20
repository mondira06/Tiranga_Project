import React from "react";
import { Typography, Container, Box } from "@mui/material";

const TCSupportFunds = () => {
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
          1.Funds can only be claimed to the official tutor
          <br />
          2.Calculation method: Based on the first recharge amount of the day
          and the same day account remaining balance when you apply to calculate
          the rate of support funds
          <br />
          3.Losing player can apply for 8% support funds with tutor
          <br />
          4.In order to avoid differences in the understanding the platform
          reserves the right of final interpretation of this Activity
        </Typography>
        <div style={{ marginBottom: 20 }} />
      </Box>
    </Container>
  );
};

export default TCSupportFunds;