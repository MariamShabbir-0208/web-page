"use client";
import { useShopContext } from '@/context/shopcontext';
import { Box, Button, Typography, Paper, CircularProgress } from '@mui/material';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const TotalSection = () => {
  const { cartItems, getCartTotal } = useShopContext();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Short delay to ensure hydration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    try {
      return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    } catch (err) {
      console.error('Error formatting price:', err);
      return '$0.00';
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#F9F1E7",
        width: "100%",
        maxWidth: "395px",
        minHeight: "390px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "24px",
        boxSizing: "border-box",
        marginLeft: { xs: 0, md: "20px" },
        position: "sticky",
        top: "20px",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "600", mb: 4, textAlign: "center" }}>
        Cart Summary
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
          Subtotal
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#9F9F9F" }}>
          {formatPrice(subtotal)}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
          Shipping
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#9F9F9F" }}>
          {formatPrice(shipping)}
        </Typography>
      </Box>

      <Box sx={{ height: "1px", bgcolor: "#D9D9D9", my: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          Total
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          {formatPrice(total)}
        </Typography>
      </Box>

      <Link href="/checkout" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#B88E2F",
            color: cartItems.length === 0 ? "#9F9F9F" : "white",
            py: 2,
            "&:hover": {
              backgroundColor: cartItems.length === 0 ? "#E7E7E7" : "#97732A",
            },
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "500",
          }}
          disabled={cartItems.length === 0}
        >
          {cartItems.length === 0 ? "Cart is Empty" : "Check Out"}
        </Button>
      </Link>
    </Paper>
  );
};

export default TotalSection;
