import React, { useState } from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Button,
  IconButton,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const depositOptions = [
  { amount: 300, bonus: 50 },
  { amount: 500, bonus: 150 },
  { amount: 1000, bonus: 200 },
  { amount: 3000, bonus: 400 },
  { amount: 4000, bonus: 500 },
  { amount: 5000, bonus: 600 },
  { amount: 10000, bonus: 1100 },
  { amount: 50000, bonus: 4100 },
  { amount: 100000, bonus: 5500 },
];

const FirstDeposit = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(true); 

  const handleClose = () => {
    setOpen(false); 
  };

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <Container
        maxWidth="sm"
        sx={{
          paddingTop: 4,
          paddingBottom: 4,
          backgroundColor: "#242a3e",
          minHeight: "260vh", 
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Content */}
          <Box sx={{ backgroundColor: "#394363", padding: 2, flexGrow: 1 }}>
            <Box sx={{ textAlign: "center", marginBottom: 2 }}>
              <Typography variant="h6" sx={{ color: "#ffffff", marginBottom: 1 }}>
                Extra first deposit bonus
              </Typography>
              <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
                Each account can only receive rewards once
              </Typography>
            </Box>
            {/* Deposit options */}
            {depositOptions.map((option, index) => (
              <Card key={index} sx={{ backgroundColor: "#394363", marginBottom: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#ffffff" }}>
                    First deposit {option.amount.toLocaleString()}{" "}
                    <span style={{ color: "#ffa726" }}>
                      + ₹{option.bonus.toFixed(2)}
                    </span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#b0b0b0", marginBottom: 2 }}>
                    Deposit {option.amount.toLocaleString()} for the first time and
                    you will receive {option.bonus.toFixed(2)} bonus
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={0}
                    sx={{ height: 10, borderRadius: 5, marginBottom: 2 }}
                  />
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#1976d2", justifyContent: "flex-end" }}
                  >
                    Deposit
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box
            sx={{
              backgroundColor: "#394363",
              padding: theme.spacing(2),
              textAlign: "center",
            }}
          >
            <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
              No more reminders today
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#1976d2", marginTop: 1 }}
            >
              Activity
            </Button>
          </Box>
        </Box>

        <IconButton
          color="inherit"
          onClick={handleClose}
          sx={{
            position: "fixed",
            bottom: theme.spacing(2),
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: theme.zIndex.appBar + 1, 
          }}
        >
          <CancelOutlinedIcon />
        </IconButton>
      </Container>
    </Dialog>
  );
};

export default FirstDeposit;
