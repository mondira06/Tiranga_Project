import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  Icon,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import SyncIcon from "@mui/icons-material/Sync";

const ContainerStyled = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#212121",
}));

const Header = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  overflow: "hidden",
  position: "relative",
  marginBottom: theme.spacing(1),
  borderRadius: "15px",
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

const Content = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "30px",
  height: "15px",
  overflow: "hidden",
  position: "relative",
}));

const ScrollingContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.5s ease-in-out",
}));

const UserInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  background: "linear-gradient(to top,#fbc02d, #ffecb3)",
  borderRadius: "10px",
  marginTop: theme.spacing(1),
  justifyContent: "space-between",
}));

const Tab = styled(Container)(({ theme }) => ({
  textAlign: "center",
  borderRadius: "15px",
}));

const texts = ["Rummy", "Fishing"];
const texts2 = ["Lottery", "Original", "Slots"];
const texts3 = ["Sports", "Popular", "Casino"];

const slotGames = [
  { src: "/assets/card1.png" },
  { src: "/assets/card2.png" },
  { src: "/assets/card3.png" },
  { src: "/assets/card4.png" },
  { src: "/assets/card5.png" },
  { src: "/assets/card6.png" },
  { src: "/assets/card7.png" },
];

const SlotGames = styled(Container)(({ theme }) => ({
  borderRadius: "15px",
}));

const initialWinners = [
  {
    txt: "Mem***GII",
    image: "/assets/Pro1.png",
    amount: "₹112.00",
    image1: "/assets/Icon1.png",
  },
  {
    txt: "Mem***WFU",
    image: "/assets/Pro2.png",
    amount: "₹1,000.00",
    image1: "/assets/Icon3.png",
  },
  {
    txt: "Mem***ZJQ",
    image: "/assets/Pro3.png",
    amount: "₹482.00",
    image1: "/assets/Icon4.png",
  },
  {
    txt: "Mem***DYK",
    image: "/assets/Pro4.png",
    amount: "₹400.00",
    image1: "/assets/Icon2.png",
  },
  {
    txt: "Mem***LSU",
    image: "/assets/Pro5.png",
    amount: "₹800.00",
    image1: "/assets/Icon1.png",
  },
];

const earnings = [
  {
    number: "4",
    name: "Mem***IAK",
    amount: "₹224,833,560.00",
    img: "/assets/Pro1.png",
  },
  {
    number: "5",
    name: "Mem***NPC",
    amount: "₹164,953,956.72",
    img: "/assets/Pro5.png",
  },
];

const imageUrls = [
  "/assets/Banner6.jpg",
  "/assets/Banner7.png",
  "/assets/Banner8.png",
  "/assets/Banner9.png",
  "/assets/Banner10.png",
];
const StyledPaper = styled(Paper)(({ theme }) => ({
  transition: "transform 0.5s ease-in-out",
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const BDGame = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [winners, setWinners] = useState(initialWinners);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const contentRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (contentRef.current) {
        contentRef.current.scrollTop += 1;
        if (
          contentRef.current.scrollTop >=
          contentRef.current.scrollHeight - contentRef.current.clientHeight
        ) {
          contentRef.current.scrollTop = 0;
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % imageUrls.length;
        if (newIndex === 0) {
          setTimeout(() => {
            setCurrentImageIndex(1);
          }, 0);
        }
        return newIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWinners((prevWinners) => {
        const firstWinner = prevWinners[0];
        const rotatedWinners = [...prevWinners.slice(1), firstWinner];
        return rotatedWinners;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ContainerStyled>
      <Header>
        <ImageWrapper
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Banner ${index + 1}`}
              style={{
                minWidth: "100%",
                height: "auto",
              }}
            />
          ))}
        </ImageWrapper>
      </Header>
      <Content ref={contentRef}>
        <ScrollingContent>
          <Typography variant="body1" color="white">
            Our customer service never sends a link to the member, if you
            received a link from someone else it might be a scam.
          </Typography>
          <Typography variant="body1" color="white">
            Welcome to 91 CLUB! We have a variety of g ames, promos and bonus
            for you to enjoy,
          </Typography>
          <Typography variant="body1" color="white">
            Due to unstable of bank india will have dela y or failed on payment,
            so if you are experience
          </Typography>
          <Typography variant="body1" color="white">
            If your deposit not receive, please send it di rectly to 91CLUB
            Self-service Center http
          </Typography>
        </ScrollingContent>
      </Content>
      <UserInfo>
        <Typography
          color="black"
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <PersonIcon />
          MemberNNGLYQF5-₹0.00
          <SyncIcon />
        </Typography>
        <MailIcon />
      </UserInfo>
      <Tab>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            mt: 1,
            justifyContent: "center",
          }}
        >
          {[...Array(3).keys()].map((index) => (
            <Button
              key={index}
              sx={{ position: "relative", padding: 4, background: "none" }}
            >
              <div>
                <img
                  src="/assets/bg1.png"
                  alt="Main"
                  height={isSmallScreen ? 100 : 200}
                  width={isSmallScreen ? 100 : 200}
                />
                <Typography
                  style={{
                    position: "absolute",
                    top: isSmallScreen ? "70%" : "75%",
                    left: isSmallScreen ? "70%" : "60%",
                    transform: "translate(-80%, -50%)",
                    color: "#3e2723",
                    fontSize: isSmallScreen ? "14px" : "18px",
                  }}
                >
                  {texts2[index]}
                </Typography>
              </div>
              <img
                src={`/assets/lottery${index + 1}.png`}
                alt={`Tab ${index + 1}`}
                height={isSmallScreen ? 90 : 160}
                width={isSmallScreen ? 90 : 160}
                style={{ position: "absolute", bottom: "35%", left: "12%" }}
              />
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src="/assets/bg3.png"
              alt="Main"
              height={isSmallScreen ? 130 : 180}
              width={isSmallScreen ? 325 : 630}
              style={{ display: "block", margin: "auto" }}
            />
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "space-around",
                position: "absolute",
                width: "100%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {[...Array(3).keys()].map((index) => (
                <div
                  key={index}
                  style={{ position: "relative", textAlign: "center" }}
                >
                  <Button sx={{ background: "none" }}>
                    <img
                      src={`/assets/gamecategory${index + 1}.png`}
                      alt={`Category ${index + 1}`}
                      height={isSmallScreen ? 80 : 100}
                      width={isSmallScreen ? 80 : 120}
                      style={{ borderRadius: "10px" }}
                    />
                  </Button>
                  <Typography
                    style={{
                      marginTop: "2px",
                      color: "#3e2723",
                      fontSize: isSmallScreen ? "16px" : "18px",
                    }}
                  >
                    {texts3[index]}
                  </Typography>
                </div>
              ))}
            </Box>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            mt: 1,
            justifyContent: "center",
          }}
        >
          {[...Array(2).keys()].map((index) => (
            <Button
              key={index}
              sx={{ position: "relative", padding: 4, background: "none" }}
            >
              <div>
                <img
                  src="/assets/bg2.png"
                  alt="Main"
                  height={isSmallScreen ? 100 : 180}
                  width={isSmallScreen ? 160 : 300}
                />
                <Typography
                  style={{
                    position: "absolute",
                    top: "40%",
                    marginTop: "5px",
                    color: "#3e2723",
                    left: isSmallScreen ? "55%" : "60%",
                    fontSize: isSmallScreen ? "16px" : "18px",
                  }}
                >
                  {texts[index]}
                </Typography>
              </div>
              <img
                src={`/assets/third${index + 1}.png`}
                alt={`Tab ${index + 1}`}
                height={isSmallScreen ? 60 : 160}
                width={isSmallScreen ? 80 : 140}
                style={{
                  position: "absolute",
                  bottom: isSmallScreen ? 60 : 40,
                  left: isSmallScreen ? "3%" : "10%",
                }}
              />
            </Button>
          ))}
        </Box>
      </Tab>
      <Box sx={{ margin: "auto" }}>
        <Typography variant="h5" gutterBottom color="#fbc02d">
          Slots
        </Typography>
        <SlotGames>
          <Grid container spacing={2}>
            {slotGames.map((game, index) => (
              <Grid item xs={6} sm={6} md={4} key={index}>
                <Box sx={{ position: "relative" }}>
                  <img
                    src={game.src}
                    alt="Main"
                    height={isSmallScreen ? "100%" : "100%"}
                    width={isSmallScreen ? "100%" : "100%"}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </SlotGames>
      </Box>
      <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
        <Typography variant="h5" gutterBottom color="#fbc02d">
          Winning Information
        </Typography>
        <Box>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 1, sm: 1, md: 1 }}
          >
            {winners.map((winner, index) => (
              <Grid winner xs={2} sm={2} md={2} key={index}>
                <StyledPaper sx={{ backgroundColor: "#3a3a3a" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <img
                      src={winner.image}
                      alt=""
                      style={{
                        width: "50px",
                        height: "45px",
                        borderRadius: "50%",
                        border: "0.5px solid white",
                        m: 2,
                      }}
                    />
                    <Typography sx={{ color: "#a7a9af" }}>
                      {winner.txt}
                    </Typography>
                    <Box sx={{ marginLeft: "auto", textAlign: "right" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <img
                          src={winner.image1}
                          alt=""
                          style={{
                            width: "70px",
                            height: "45px",
                            borderRadius: "10px",
                            background:
                              "linear-gradient(to right,#ff8a80, #ffccbc)",
                          }}
                        />
                        <Box sx={{ textAlign: "left" }}>
                          <Typography sx={{ color: "#ead796" }}>
                            Receive {winner.amount}
                          </Typography>
                          <Typography sx={{ color: "#adafc5" }}>
                            Winning Amount
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Typography variant="h5" gutterBottom color="#fbc02d">
          Today's Earnings Chart
        </Typography>
        <Box>
          <div style={{ position: "relative", width: "100%", height: "150px", marginTop: "100px" }}>
            <img
              src="/assets/stage4.png"
              alt="no image"
              style={{ width: "100%", height: "100%" }}
            />
            <div
              style={{
                position: "absolute",
                top: "-40px",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src="/assets/Pro1.png"
                alt=""
                style={{
                  width: "80px",
                  height: "70px",
                  borderRadius: "50%",
                  position: "relative",
                }}
              />
              <img
                src="/assets/crown1.png"
                alt=""
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "20%",
                  transform: "translate(-50%, -50%)",
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <img
              src="/assets/place1.png"
              alt=""
              style={{
                position: "absolute",
                top: "0%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100px",
                height: "25px",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "17%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src="/assets/Pro4.png"
                alt=""
                style={{
                  width: "80px",
                  height: "70px",
                  borderRadius: "50%",
                  position: "relative",
                }}
              />
              <img
                src="/assets/crown2.png"
                alt=""
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "20%",
                  transform: "translate(-50%, -50%)",
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <img
              src="/assets/place2.png"
              alt=""
              style={{
                position: "absolute",
                top: "30%",
                left: "17%",
                transform: "translate(-50%, -50%)",
                width: "100px",
                height: "25px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "83%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src="/assets/Pro5.png"
                alt=""
                style={{
                  width: "80px",
                  height: "70px",
                  borderRadius: "50%",
                  position: "relative",
                }}
              />
              <img
                src="/assets/crown3.png"
                alt=""
                style={{
                  position: "absolute",
                  top: "12%",
                  left: "20%",
                  transform: "translate(-50%, -50%)",
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <img
              src="/assets/place3.png"
              alt=""
              style={{
                position: "absolute",
                top: "25%",
                left: "83%",
                transform: "translate(-50%, -50%)",
                width: "100px",
                height: "25px",
              }}
            />
            <Typography
      style={{
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#795548',
      }}
    >
      Mem***MUO
      <br />
      <span
        style={{
          background: "linear-gradient(to top,#fbc02d, #ffecb3)",
          padding: "1px",
          borderRadius: "50px",
          fontSize: "15px"
        }}
      >
        ₹297,351,600.00
      </span>
    </Typography>
            <Typography
              style={{
                position: "absolute",
                top: "70%",
                left: isSmallScreen ? "13%" : "15%",
                transform: "translate(-40%, -50%)",
                color: "#795548",
              }}
            >
              Mem***QIL
              <br />
              <span
                style={{
                  background: "linear-gradient(to top,#fbc02d, #ffecb3)",
                  padding: "1px",
                  borderRadius: "50px",
                  fontSize: "12px"
                }}
              >
                ₹154,154,000.00
              </span>
            </Typography>
            <Typography
              style={{
                position: "absolute",
                top: "70%",
                left: isSmallScreen ? "85%" : "85%",
                transform: "translate(-50%, -50%)",
                color: "#795548",
              }}
            >
              Mem***IQL
              <br />
              <span
                style={{
                  background: "linear-gradient(to top,#fbc02d, #ffecb3)",
                  padding: "1px",
                  borderRadius: "50px",
                  fontSize: "12px"
                }}
              >
                ₹84,280,000.00
              </span>
            </Typography>
          </div>
        </Box>
        {earnings.map((earner, index) => (
          <StyledPaper key={index} sx={{ backgroundColor: "#3a3a3a" }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={1}>
                <Typography variant="body1" sx={{ color: "#fbc02d" }}>
                  {earner.number}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <img
                  src={earner.img}
                  alt="Earnings"
                  style={{ width: 48, height: 48, borderRadius: "50%" }}
                />
              </Grid>
              <Grid item xs>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "0.875rem", color: "#a7a9af" }}
                >
                  {earner.name}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    background: "linear-gradient(to top,#fbc02d, #ffecb3)",
                    padding: "2px 6px",
                    borderRadius: "15px",
                    textAlign: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "0.875rem", color: "#795548" }}
                    variant="body1"
                  >
                    {earner.amount}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </StyledPaper>
        ))}
      </Box>
    </ContainerStyled>
  );
};

export default BDGame;
