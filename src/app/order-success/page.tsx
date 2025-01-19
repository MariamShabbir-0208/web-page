"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";

export default function OrderSuccess() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
          gap: 3,
        }}
      >
        <CheckCircleOutlineIcon
          sx={{ fontSize: 80, color: "#4CAF50", mb: 2 }}
        />
        
        <Typography variant="h4" component="h1" gutterBottom>
          Order Placed Successfully!
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Thank you for your purchase. Your order has been received and is being processed.
          You will receive an email confirmation shortly.
        </Typography>

        <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#B88E2F",
                "&:hover": {
                  backgroundColor: "#9F7B2A",
                },
              }}
            >
              Continue Shopping
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
