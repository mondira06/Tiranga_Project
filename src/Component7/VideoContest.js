import React from "react";
import { Typography, Container, Box } from "@mui/material";

const VideoContest = () => {
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
        TC CREATIVE VIDEO CONTEST{" "}
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
        <Typography
          variant="body1"
          sx={{ textAlign: "justify", marginBottom: 2 }}
        >
          Ready to transform your social media game into a lucrative venture?
          Introducing TC - the platform where your creativity pays off big time!
          Whether you're rocking YouTube, Instagram, Facebook, Josh, or Moj,
          your videos can now become a direct path to earn real cash. With TC,
          every view counts as money in your pocket, rewarding you for
          captivating your audience. But it's not just about the money - TC
          empowers you to grow your audience and maximize your earning
          potential. So stop scrolling and start cashing in on your content!
          Join TC now and turn your passion into profit!
        </Typography>
        <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
          Terms & Conditions:
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "justify", marginBottom: 1 }}
        >
          1.Video must be published on your own social media account
          <br />
          2. Must put TC registration link+predictions group link & Contact
          person (Youtube+Facebook+instagram)
          <br />
          3.Send the video and claim the bonus to TC Official tutor
          <br />
          4.1 Video can only claim the bonus once
          <br />
          5.All terms and regulations belong to TC as developer
          <br />
        </Typography>
        <div style={{ marginBottom: 20 }} />
      </Box>
    </Container>
  );
};

export default VideoContest;
