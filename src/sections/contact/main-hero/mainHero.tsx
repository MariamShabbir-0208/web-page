"use client";
import { Box, Container, Typography } from "@mui/material";

const mainHero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh",
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundImage: `url('./Images/MainHero Image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative", 
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
          backgroundColor: "rgba(0, 0, 0, 0.4)", 
          filter: "blur(10px)", 
          opacity: 0.7, 
          zIndex: 1, 
        }}
      />
      <Container sx={{ zIndex: 2, textAlign: "center", color: "white" }}>
        <Typography variant="h3" sx={{ mb: 2 ,color:"black"}}>
          CONTACT
        </Typography>
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <Typography variant="body1" sx={{ mb: 1 ,color:"black"}}>
          Home &gt;
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold",color:"black"}}>
          Contact
        </Typography>
        </Box>
        
      </Container>
    </Box>
  );
};

export default mainHero;
