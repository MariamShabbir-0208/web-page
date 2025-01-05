import React from "react";
import { Box, Typography, Radio, FormControlLabel, Button, Grid, Divider } from "@mui/material";
import Link from "next/link";

interface Product {
  name: string;
  quantity: number;
  price: number;
}

const PlaceOrder=() => {



  return (
    <>
      <Box
        sx={{
          width: "400px",
          margin: "0 auto",
          padding: "16px",
          border: "1px solid #ccc",
          boxShadow: 2,
          backgroundColor: "#fbe9e7",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Mottery
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Quantity: 1Pcs
            </Typography>
          </Grid>

          <Grid item xs={6} textAlign="right">
            <Typography variant="h6" color="primary" sx={{color:"#B88E2F"}}>
              $12000.00
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ marginY: 2 }} />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1" color="textSecondary">
              Subtotal
            </Typography>
          </Grid>

          <Grid item xs={6} textAlign="right">
            <Typography variant="body1" fontWeight="bold">
              $12000.00
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: 1 }}>
          <Grid item xs={6}>
            <Typography variant="h6" fontWeight="bold">
              Total
            </Typography>
          </Grid>

          <Grid item xs={6} textAlign="right">
            <Typography variant="h6"  fontWeight="bold" sx={{color:"#B88E2F"}}>
              $12000.00
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "400px",
          margin: "0 auto",
          padding: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#fbe9e7",
        }}
      >
        {/* Box 1 */}
        <Box
          sx={{
            padding: "16px",
            backgroundColor: "#fbe9e7",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6">Direct Bank Transfer</Typography>
        </Box>

        {/* Box 2 */}
        <Box
          sx={{
            padding: "16px",
            backgroundColor: "#fbe9e7",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="body1">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </Typography>
        </Box>

        {/* Box 3 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "16px",
            backgroundColor: "#fbe9e7",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <FormControlLabel
            control={<Radio />}
            label="Direct Bank Transfer"
          />
          <FormControlLabel
            control={<Radio />}
            label="Cash On Delivery"
          />
        </Box>

        {/* Box 4 */}
        <Box
          sx={{
            padding: "16px",
            backgroundColor: "#fff3e0",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="body1">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
            <span style={{ fontWeight: 'bold' }}>privacy policy.</span>
          </Typography>
        </Box>

        {/* Box 5 */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Link href="/">
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                color: '#D4AF37',
                marginBottom: 2,
                backgroundColor: 'white',
                ':hover': {
                  backgroundColor: '#D4AF37',
                  color: 'white',
                },
              }}
            >
              Place Order
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default PlaceOrder;
