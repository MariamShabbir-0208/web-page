"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/system";
import ShareIcon from "@mui/icons-material/Share";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PRBox, PRTypography, TiteTypography } from "./styled";
import { useShopContext } from "@/context/shopcontext";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  dicountPercentage: number;
  isNew: boolean;
}

interface ProductCardProps {
  project: Product;
  onShare?: () => void;
  onCompare?: () => void;
  onLike?: () => void;
  onProductClick?: () => void;
}

const StyledCard = styled(Card)({
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    "& .hover-content": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
  maxWidth: "100%",
  cursor: "pointer",
  backgroundColor: "white",
  boxShadow: "none",
});

const HoverContent = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: "16px",
  transform: "translateY(100%)",
  opacity: 0,
  transition: "all 0.3s ease-in-out",
});

const ProductCard: React.FC<ProductCardProps> = ({
  project,
  onShare = () => {},
  onCompare = () => {},
  onLike = () => {},
  onProductClick = () => {},
}) => {
  const { addToCart } = useShopContext();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(project);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const calculateDiscountedPrice = (price: number | string, discount: number) => {
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
    if (isNaN(numericPrice)) return '0.00';
    
    if (discount > 0) {
      return (numericPrice - (numericPrice * discount) / 100).toFixed(2);
    }
    return numericPrice.toFixed(2);
  };

  return (
    <StyledCard onClick={onProductClick}>
      <Box 
        sx={{ 
          position: "relative", 
          width: "100%", 
          paddingTop: "100%",
          backgroundColor: "#f5f5f5" 
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        {project.isNew && (
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "#2EC1AC",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              zIndex: 1,
            }}
          >
            New
          </Box>
        )}
      </Box>

      <CardContent sx={{ padding: 2 }}>
        <TiteTypography>{project.title}</TiteTypography>
        <Stack spacing={1}>
          <PRBox>
            <PRTypography>
              ${calculateDiscountedPrice(project.price, project.dicountPercentage)}
            </PRTypography>
            {project.dicountPercentage > 0 && (
              <Typography
                sx={{
                  textDecoration: "line-through",
                  color: "text.secondary",
                  marginLeft: 1,
                }}
              >
                ${project.price.toFixed(2)}
              </Typography>
            )}
          </PRBox>
        </Stack>
      </CardContent>

      <HoverContent className="hover-content">
        <Stack direction="row" spacing={1} justifyContent="center">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#B88E2F",
              "&:hover": {
                bgcolor: "#B88E2F",
              },
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => {
              e.stopPropagation();
              onShare();
            }}
            sx={{ minWidth: "40px", padding: 0 }}
          >
            <ShareIcon />
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => {
              e.stopPropagation();
              onCompare();
            }}
            sx={{ minWidth: "40px", padding: 0 }}
          >
            <CompareArrowsIcon />
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => {
              e.stopPropagation();
              onLike();
            }}
            sx={{ minWidth: "40px", padding: 0 }}
          >
            <FavoriteBorderIcon />
          </Button>
        </Stack>
      </HoverContent>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Added to cart"
      />
    </StyledCard>
  );
};

export default ProductCard;
