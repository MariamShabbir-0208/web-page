"use client";
import { useShopContext } from '@/context/shopcontext';
import { Box, Button, Typography, Paper } from '@mui/material';
import Link from 'next/link';

const TotalSection = () => {
  const { cartItems, getCartTotal } = useShopContext();
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 500 : 0; // Free shipping over certain amount could be implemented
  const total = subtotal + shipping;

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
      {/* Cart Summary Title */}
      <Typography variant="h5" sx={{ fontWeight: "600", mb: 4, textAlign: "center" }}>
        Cart Summary
      </Typography>

      {/* Subtotal */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
          Subtotal
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#9F9F9F" }}>
          Rs. {subtotal.toLocaleString()}
        </Typography>
      </Box>

      {/* Shipping */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
          Shipping
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#9F9F9F" }}>
          Rs. {shipping.toLocaleString()}
        </Typography>
      </Box>

      {/* Total */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
          pt: 2,
          borderTop: "1px solid #E7E7E7",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          Total
        </Typography>
        <Typography variant="h6" sx={{ color: "#B88E2F", fontWeight: "600" }}>
          Rs. {total.toLocaleString()}
        </Typography>
      </Box>

      {/* Checkout Button */}
      <Box sx={{ mt: 4 }}>
        <Link href="/checkout" style={{ textDecoration: "none", width: "100%", display: "block" }}>
          <Button
            variant="contained"
            fullWidth
            disabled={cartItems.length === 0}
            sx={{
              py: 1.5,
              backgroundColor: cartItems.length === 0 ? "#E7E7E7" : "#B88E2F",
              color: cartItems.length === 0 ? "#9F9F9F" : "white",
              '&:hover': {
                backgroundColor: cartItems.length === 0 ? "#E7E7E7" : "#9F7B2A",
              },
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {cartItems.length === 0 ? "Cart is Empty" : "Proceed to Checkout"}
          </Button>
        </Link>
      </Box>
    </Paper>
  );
};

export default TotalSection;
