import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Typography, Button, Paper, Box, Icon } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MicrosoftIcon from '@mui/icons-material/Microsoft';

const ContainerStyled = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#f5f5f5",
}));

const Header = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(),
  textAlign: "center",
  overflow: "hidden",
  position: "relative",
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

const Content = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "30px",
  marginBottom: theme.spacing(1),
  height: "15px", 
  overflow: "hidden",
  position: "relative",
  backgroundColor: "#f5f5f5",
}));

const ScrollingContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.5s ease-in-out",
}));

const LotteryItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  background: "linear-gradient(to right,#ff8a80, #ffccbc)",
  marginBottom: theme.spacing(2),
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const LotteryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#ffffff",
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
  "/assets/Banner1.jpg",
  "/assets/Banner2.jpg",
  "/assets/Banner3.jpg",
  "/assets/Banner4.png",
  "/assets/Banner5.jpg",
];
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  transition: "transform 0.5s ease-in-out",
}));



const ClubHome = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [winners, setWinners] = useState(initialWinners);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (contentRef.current) {
        contentRef.current.scrollTop += 1;
        if (contentRef.current.scrollTop >= contentRef.current.scrollHeight - contentRef.current.clientHeight) {
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
          <Typography variant="body1" color="error">
            Our customer service never sends a link to the member, if you received a link from someone else it might be a scam.
          </Typography>
          <Typography variant="body1" color="error">
          Welcome to 91 CLUB! We have a variety of g
          ames, promos and bonus for you to enjoy, s          </Typography>
          <Typography variant="body1" color="error">
          Due to unstable of bank india will have dela
          y or failed on payment, so if you are experie          </Typography>
          <Typography variant="body1" color="error">
          If your deposit not receive, please send it di
          rectly to 91CLUB Self-service Center (http          </Typography>
        </ScrollingContent>
      </Content>
      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            marginRight: 2,
          }}
        >
          <Button>
            <img src="/assets/Tab1.png" alt="Main" height={70} width={70}  style={{background: "#ffccbc", borderRadius: "10px",
 }}/>
          </Button>
          <Button>
            <img src="/assets/Tab2.png" alt="Main" height={70} width={70} style={{background: "#ffccbc", borderRadius: "10px" }}/>
          </Button>
          <Button>
            <img src="/assets/Tab3.png" alt="Main" height={70} width={70} style={{background: "#ffccbc",  borderRadius: "10px" }}/>
          </Button>
          <Button>
            <img src="/assets/Tab4.png" alt="Main" height={70} width={70} style={{background: "#ffccbc",  borderRadius: "10px"}}/>
          </Button>
          <Button>
            <img src="/assets/Tab5.png" alt="Main" height={70} width={70} style={{background: "#ffccbc",  borderRadius: "10px"}}/>
          </Button>
          <Button>
            <img src="/assets/Tab6.png" alt="Main" height={70} width={70} style={{background: "#ffccbc",  borderRadius: "10px"}}/>
          </Button>
          <Button>
            <img src="/assets/Tab7.png" alt="Main" height={70} width={70} style={{background: "#ffccbc",  borderRadius: "10px"}}/>
          </Button>
          <Button>
            <img src="/assets/Tab8.png" alt="Main" height={70} width={70} style={{background: "#ffccbc",  borderRadius: "10px"}}/>
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          {[
            {
              title: "Win Go",
              text: "Guess Number\nGreen/Red/Purple to win",
              img: "/assets/Icon3.png",
            },
            {
              title: "K3",
              text: "Guess Number\nBig/Small/Odd/Even",
              img: "/assets/Icon1.png",
            },
            {
              title: "5D",
              text: "Guess Number\nBig/Small/Odd/Even",
              img: "/assets/Icon4.png",
            },
            {
              title: "Trx Win",
              text: "Guess Number\nGreen/Red/Purple to win",
              img: "/assets/Icon2.png",
            },
          ].map((lottery, index) => (
            <LotteryItem key={index}>
              <Box sx={{ maxWidth: "55%" }}>
                <LotteryTitle variant="h6">{lottery.title}</LotteryTitle>
                <Typography
                  color="textSecondary"
                  sx={{ fontWeight: "bold", fontSize: "0.675rem" }}
                >
                  {lottery.text.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Typography>
              </Box>
              <Box sx={{ maxWidth: "25%", textAlign: "right" }}>
                <img
                  src={lottery.img}
                  alt="Lottery"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            </LotteryItem>
          ))}
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
          <MicrosoftIcon sx={{ mr: 1, mt: 1 }} />
            View All
          </Box>
        </Box>
      </Box>
      <Box sx={{ maxWidth: 600, margin: "auto", padding: 2,  }}>
        <Typography variant="h5" gutterBottom>
          Winning Information
        </Typography>
        <Box>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 1, sm: 1, md: 1 }}
          >
            {winners.map((winner, index) => (
              <Grid winner xs={2} sm={2} md={2} key={index}>
                <StyledPaper>
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
                    <p>{winner.txt}</p>
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
                        <p sx={{ marginBottom: 0, fontStyle: 'normal' }}>
                          Receive {winner.amount}
                          <br />
                          Winning Amount
                        </p>
                      </Box>
                    </Box>
                  </Box>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography variant="h5" gutterBottom>
          Today's Earnings Chart
        </Typography>
           <Box>
          <div style={{ position: "relative", width: "100%", height: "150px", marginTop: "100px" }}>
            <img
              src="/assets/stage.png"
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
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white", 
                }}
              >
                Mem***IOY
                <br />
                <p
                  style={{
                    backgroundColor: "#FFFFFF50",
                    padding: 1,
                    borderRadius: "50px",
                  }}
                >
                  ₹79,233,095,55
                </p>
              </Typography>
              <Typography
                style={{
                  position: "absolute",
                  top: "70%",
                  left: isSmallScreen ? '15%' : '15%',
                  transform: "translate(-50%, -50%)",
                  color: "white", 
                }}
              >
                Mem***WWK
                <br />
                <p
                  style={{
                    backgroundColor: "#FFFFFF50",
                    padding: 1,
                    borderRadius: "50px",
                  }}
                >
                  ₹26,583,091.92
                </p>
              </Typography>
              <Typography
                style={{
                  position: "absolute",
                  top: "70%",
                  left:  isSmallScreen ? '85%' : '85%',
                  transform: "translate(-50%, -50%)",
                  color: "white", 
                }}
              >
                Mem***BLY
                <br />
                <p
                  style={{
                    backgroundColor: "#FFFFFF50",
                    padding: 1,
                    borderRadius: "50px",
                  }}
                >
                  ₹10,043,236.00
                </p>
              </Typography>
          </div>
        </Box>
        {earnings.map((earner, index) => (
          <StyledPaper key={index}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={1}>
                <Typography variant="body1">{earner.number}</Typography>
              </Grid>
              <Grid item xs={2}>
                <img
                  src={earner.img}
                  alt="Earnings"
                  style={{ width: 48, height: 48, borderRadius: "50%" }}
                />
              </Grid>
              <Grid item xs>
                <Typography variant="body1" sx={{ fontSize: "0.875rem" }}>
                  {earner.name}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    background: "linear-gradient(to right,#ff8a80, #ffccbc)",
                    padding: "2px 6px",
                    borderRadius: "15px",
                    textAlign: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "0.875rem", color: "white" }}
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

export default ClubHome;
