"use client";
import React from "react";
import {
  CardContent,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import BGM from "../../../../public/Images/MainHero Image.png";

const RightBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
//   backgroundColor: "rgba(255, 255, 255, 0.9)",
  backgroundColor: "#FFF3E3",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0px 7px 30px rgba(0, 0, 0, 0.1)",
  maxWidth: "400px",
  textAlign: "center",
}));

const HomeHero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url('/Images/MainHero Image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Container>
        <Grid container justifyContent="flex-end" alignItems="center">
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
          >
            <RightBox>
              <CardContent>
              <Typography sx={{textAlign:"left"}} variant="body1">
                 New Arrival
                </Typography>
                <Typography sx={{ fontWeight: 700, mb: 2 ,color:"#B88E2F", textAlign:"left"}} variant="h4" >
                Discover Our New Collection
                </Typography>
                <Typography sx={{textAlign:"left"}} variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </Typography>

                <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start', 
                   
                  }}
                // sx={{alignItems:"flex-start",backgroundColor:"orange"}}
                >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    marginTop: '20px',
                    backgroundColor: '#B88E2F',
                    '&:hover': {
                      backgroundColor: '#B88E2F',
                    },
                  }}
              
                >
                  Learn More
                </Button>
                </Box>
                
              </CardContent>
            </RightBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeHero;
