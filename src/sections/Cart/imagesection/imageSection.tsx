"use client";
import { useShopContext } from "@/context/shopcontext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, IconButton, Typography, Alert, Skeleton } from "@mui/material";
import Image from "next/image";
import React from "react";

const ImageSection = () => {
  const { cartItems, updateQuantity, removeFromCart } = useShopContext();
  const [isUpdating, setIsUpdating] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleQuantityUpdate = async (itemId: string, newQuantity: number) => {
    try {
      setIsUpdating(itemId);
      setError(null);
      await updateQuantity(itemId, newQuantity);
    } catch (err) {
      setError("Failed to update quantity. Please try again.");
    } finally {
      setIsUpdating(null);
    }
  };

  const handleRemoveItem = async (itemId: string) => {
    try {
      setIsUpdating(itemId);
      setError(null);
      await removeFromCart(itemId);
    } catch (err) {
      setError("Failed to remove item. Please try again.");
    } finally {
      setIsUpdating(null);
    }
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <Alert severity="info" sx={{ width: "100%", mt: 2 }}>
        Your cart is empty. Start shopping to add items to your cart!
      </Alert>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
        {error}
      </Alert>
    );
  }

  return (
    <div>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "#F9F1E7",
          width: "100%",
          height: "55px",
          display: "flex",
          paddingX: "20px",
          flexDirection: { xs: "none", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {["Product", "Price", "Quantity", "Subtotal"].map((text, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "17px",
              flex: 1,
            }}
          >
            <Typography sx={{ fontWeight: "500" }}>{text}</Typography>
          </Box>
        ))}
      </Box>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px",
            borderBottom: "1px solid #E7E7E7",
            opacity: isUpdating === item.id ? 0.5 : 1,
            transition: "opacity 0.2s",
          }}
        >
          {/* Product Image and Name */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              gap: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#F9F1E7",
                width: "111px",
                height: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
              }}
            >
              {isUpdating === item.id ? (
                <Skeleton variant="rectangular" width={80} height={80} />
              ) : (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
              )}
            </Box>
            <Typography sx={{ fontWeight: "500" }}>{item.title}</Typography>
          </Box>

          {/* Price */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography>Rs. {item.price.toLocaleString()}</Typography>
          </Box>

          {/* Quantity Controls */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <IconButton
              onClick={() => handleQuantityUpdate(item.id, Math.max(1, item.quantity - 1))}
              disabled={isUpdating === item.id}
              size="small"
              sx={{ bgcolor: "#F9F1E7" }}
            >
              <RemoveIcon />
            </IconButton>
            <Typography sx={{ mx: 2, minWidth: "20px", textAlign: "center" }}>
              {isUpdating === item.id ? "..." : item.quantity}
            </Typography>
            <IconButton
              onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}
              disabled={isUpdating === item.id}
              size="small"
              sx={{ bgcolor: "#F9F1E7" }}
            >
              <AddIcon />
            </IconButton>
          </Box>

          {/* Subtotal and Remove */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingX: 2,
            }}
          >
            <Typography sx={{ color: "#B88E2F", fontWeight: "600" }}>
              Rs. {(item.price * item.quantity).toLocaleString()}
            </Typography>
            <IconButton
              onClick={() => handleRemoveItem(item.id)}
              disabled={isUpdating === item.id}
              size="small"
              sx={{ color: "#B88E2F" }}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default ImageSection;
