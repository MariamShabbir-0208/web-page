"use client";
import { useShopContext } from "@/context/shopcontext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, IconButton, Typography, Alert, Skeleton, CircularProgress } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ImageSection = () => {
  const { cartItems, updateQuantity, removeFromCart } = useShopContext();
  const [isUpdating, setIsUpdating] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatPrice = (price: string | number) => {
    try {
      const numPrice = typeof price === 'string' ? parseFloat(price) : price;
      return numPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    } catch (err) {
      console.error('Error formatting price:', err);
      return '$0.00';
    }
  };

  const handleQuantityUpdate = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    try {
      setIsUpdating(itemId);
      setError(null);
      await updateQuantity(itemId, newQuantity);
    } catch (err) {
      setError("Failed to update quantity. Please try again.");
      console.error('Error updating quantity:', err);
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
      console.error('Error removing item:', err);
    } finally {
      setIsUpdating(null);
    }
  };

  if (!isClient) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

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
            position: 'relative'
          }}
        >
          {isUpdating === item.id && (
            <Box 
              sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                zIndex: 1
              }}
            >
              <CircularProgress size={24} />
            </Box>
          )}
          
          {/* Product Info */}
          <Box sx={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                position: 'relative',
                width: 100,
                height: 100,
                borderRadius: 1,
                overflow: 'hidden'
              }}
            >
              <Image
                src={item.image || '/Images/placeholder.png'}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Typography variant="subtitle1">{item.title}</Typography>
          </Box>

          {/* Price */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography>{formatPrice(item.price)}</Typography>
          </Box>

          {/* Quantity */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
            <IconButton 
              onClick={() => handleQuantityUpdate(item.id, item.quantity - 1)}
              disabled={isUpdating === item.id || item.quantity <= 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton 
              onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}
              disabled={isUpdating === item.id}
            >
              <AddIcon />
            </IconButton>
          </Box>

          {/* Subtotal */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ flex: 1, textAlign: "center" }}>
              {formatPrice(parseFloat(item.price) * item.quantity)}
            </Typography>
            <IconButton 
              onClick={() => handleRemoveItem(item.id)}
              disabled={isUpdating === item.id}
              color="error"
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
