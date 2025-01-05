"use client";
import { Box, Container, Typography } from "@mui/material";

const mainHero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh",
        display: "flex",
        flexDirection: "column", // Align items in a column
        justifyContent: "center", // Vertically center the content
        alignItems: "center", // Horizontally center the content
        backgroundImage: `url('./Images/MainHero Image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative", // Ensure the overlay can be positioned correctly
      }}
    >
      {/* Overlay with opacity and blur */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Optional semi-transparent overlay
          filter: "blur(10px)", // Apply the blur
          opacity: 0.7, // Apply opacity to the blurred image
          zIndex: 1, // Ensure the overlay is above the background image
        }}
      />
      <Container sx={{ zIndex: 2, textAlign: "center", color: "white" }}>
        <Typography variant="h3" sx={{ mb: 2 ,color:"black"}}>
          Shop
        </Typography>
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <Typography variant="body1" sx={{ mb: 1 ,color:"black"}}>
          Home &gt;
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold",color:"black"}}>
          SHOP NOW
        </Typography>
        </Box>
        
      </Container>
    </Box>
  );
};

export default mainHero;
