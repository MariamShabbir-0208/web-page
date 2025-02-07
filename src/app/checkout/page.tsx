"use client";

import MainHero from "@/sections/CheckOut/main-hero/main-hero";
import Billing from "@/sections/CheckOut/Billing/billing";
import PlaceOrder from "@/sections/CheckOut/placeorder/placeOrder";
import { Box, Grid, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";

const CheckOut = () => {
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
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Billing />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <PlaceOrder />
          </Grid>
        </Grid>
      </Box>
      <Box>
      </Box>
    </>
  );
};

export default CheckOut;