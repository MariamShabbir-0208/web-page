"use client";
import React from "react";
import {
  Box,
  Typography,
  Radio,
  FormControlLabel,
  Button,
  Grid,
  Divider,
  RadioGroup,
  Paper,
  FormControl,
  FormLabel,
  Alert,
  CircularProgress,
  Snackbar,
  Skeleton,
} from "@mui/material";
import { useShopContext } from "@/context/shopcontext";
import { useRouter } from "next/navigation";

const PlaceOrder = () => {
  const { cartItems, getCartTotal, clearCart } = useShopContext();
  const [paymentMethod, setPaymentMethod] = React.useState("bank");
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    // Simulate loading cart data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal + shipping;

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = async () => {
    try {
      setIsProcessing(true);
      setError(null);

      // Validate cart is not empty
      if (cartItems.length === 0) {
        throw new Error("Your cart is empty");
      }

      // Validate payment method is selected
      if (!paymentMethod) {
        throw new Error("Please select a payment method");
      }

      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Clear cart and redirect
      await clearCart();
      router.push("/order-success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to place order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ maxWidth: 400, mx: "auto" }}>
        <Paper elevation={0} sx={{ p: 3, mb: 3, backgroundColor: "#F9F1E7" }}>
          <Skeleton variant="text" width="60%" height={40} sx={{ mb: 2 }} />
          <Skeleton variant="rectangular" height={100} sx={{ mb: 2 }} />
          <Skeleton variant="text" width="40%" height={30} />
          <Skeleton variant="text" width="30%" height={30} />
        </Paper>
      </Box>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Alert severity="warning" sx={{ mt: 2 }}>
        Your cart is empty. Please add items before proceeding to checkout.
      </Alert>
    );
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto" }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {/* Order Summary */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          backgroundColor: "#F9F1E7",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
          Order Summary
        </Typography>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <Grid container key={item.id} spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={7}>
              <Typography variant="body2" sx={{ fontWeight: "500" }}>
                {item.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Quantity: {item.quantity}
              </Typography>
            </Grid>
            <Grid item xs={5} sx={{ textAlign: "right" }}>
              <Typography variant="body2" sx={{ color: "#B88E2F" }}>
                Rs. {(item.price * item.quantity).toLocaleString()}
              </Typography>
            </Grid>
          </Grid>
        ))}

        <Divider sx={{ my: 2 }} />

        {/* Subtotal */}
        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Subtotal
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Typography variant="body2">
              Rs. {subtotal.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>

        {/* Shipping */}
        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Shipping
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Typography variant="body2">
              Rs. {shipping.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>

        {/* Total */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
              Total
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "600", color: "#B88E2F" }}>
              Rs. {total.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Payment Methods */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          backgroundColor: "#F9F1E7",
        }}
      >
        <FormControl component="fieldset" error={!paymentMethod}>
          <FormLabel component="legend" sx={{ mb: 2, color: "#333333", fontWeight: "500" }}>
            Payment Method
          </FormLabel>
          <RadioGroup
            aria-label="payment-method"
            name="payment-method"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <FormControlLabel
              value="bank"
              control={
                <Radio
                  sx={{
                    color: "#B88E2F",
                    "&.Mui-checked": {
                      color: "#B88E2F",
                    },
                  }}
                />
              }
              label="Direct Bank Transfer"
            />
            <Box sx={{ ml: 4, mb: 2, mt: 1, color: "text.secondary", fontSize: "0.875rem" }}>
              Make your payment directly into our bank account. Please use your Order ID as the payment reference.
            </Box>

            <FormControlLabel
              value="cash"
              control={
                <Radio
                  sx={{
                    color: "#B88E2F",
                    "&.Mui-checked": {
                      color: "#B88E2F",
                    },
                  }}
                />
              }
              label="Cash on Delivery"
            />
          </RadioGroup>
        </FormControl>
      </Paper>

      {/* Place Order Button */}
      <Button
        fullWidth
        variant="contained"
        onClick={handlePlaceOrder}
        disabled={isProcessing || !paymentMethod}
        sx={{
          py: 1.5,
          backgroundColor: "#B88E2F",
          color: "white",
          "&:hover": {
            backgroundColor: "#9F7B2A",
          },
          "&.Mui-disabled": {
            backgroundColor: "#E7E7E7",
            color: "#9F9F9F",
          },
          textTransform: "none",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        {isProcessing ? (
          <>
            <CircularProgress size={24} sx={{ color: "white", mr: 1 }} />
            Processing Order...
          </>
        ) : (
          "Place Order"
        )}
      </Button>

      {/* Error Snackbar */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PlaceOrder;
