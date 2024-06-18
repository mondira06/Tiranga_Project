import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
  Container,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Notification = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a2d69",
          textAlign: "center",
          padding: 2,
        }}
      >
        <DialogActions
          sx={{ width: "100%", justifyContent: "flex-end", padding: 0, color:"white"}}
        >
          <IconButton edge="end" color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle sx={{ paddingBottom: 0, color: "white" }}>
          <Typography variant="h6">Notification</Typography>
        </DialogTitle>
        <div style={{ marginBottom: 20 }} />
        <DialogContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            <Typography
              variant="body1"
              component="span"
              sx={{
                backgroundColor: "#ffffff",
                padding: 1,
                borderRadius: 1,
              }}
            >
              SUPER EVENT!!! RECHARGE ON ANY TIRANGA CHANNEL WILL GET 8% OF
              BONUS. EVERY TUESDAY, THURSDAY, SATURDAY & SUNDAY !!!
            </Typography>
            <img
              src="/assets/2.png"
              alt="Notification"
              style={{ width: "100%", maxWidth: 300, marginBottom: 16 }}
            />
            <Typography
              variant="body1"
              component="span"
              sx={{
                backgroundColor: "#ffffff",
                padding: 1,
                borderRadius: 1,
              }}
            >
              SUPER EVENT!!! RECHARGE ON ANY TIRANGA CHANNEL WILL GET 8% OF
              BONUS. EVERY TUESDAY, THURSDAY, SATURDAY & SUNDAY !!!
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#1976d2", marginTop: 2 }}
          >
            Confirm
          </Button>
        </DialogContent>
      </Container>
    </Dialog>
  );
};

export default Notification;
