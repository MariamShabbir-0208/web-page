import React from 'react'
import MainHero from '@/sections/CheckOut/main-hero/main-hero'
import Billing from '@/sections/CheckOut/Billing/billing'
import PlaceOrder from '@/sections/CheckOut/placeorder/placeOrder'
import { Box, Grid } from '@mui/material'

const CheckOut = () => {
  return (
    <>
    <MainHero/>
    <Box sx={{ marginTop: "30px",gap:"10px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
        <Billing/>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <PlaceOrder />
      
        </Grid>
      </Grid>
    </Box>
    <Box>
    </Box>
 
    </>
  )
}

export default CheckOut