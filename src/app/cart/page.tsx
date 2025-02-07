"use client";

import { useState, useEffect } from "react";
import ImageSection from "@/sections/Cart/imagesection/imageSection";
import MainHero from "@/sections/Cart/main-hero/mainHero";
import TotalSection from "@/sections/Cart/TotalSetction/totalSection";
import Badges from "@/sections/shop/Badges/badges";
import { Box, Grid, CircularProgress } from "@mui/material";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for hydration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <MainHero />
      <Box sx={{ marginTop: "30px", gap: "10px" }}>
        <Grid container spacing={2}>
          {/* Image Section */}
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <ImageSection />
          </Grid>
          
          {/* Total Section */}
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TotalSection />
          </Grid>
        </Grid>
      </Box>
      <Badges/>
    </>
  );
};

export default Cart;
