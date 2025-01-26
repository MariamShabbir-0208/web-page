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

// Make sure this matches the CartItem interface in shopcontext.tsx (without quantity)
interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: string;  // Changed to string to match the context type
  image: string;
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
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const { addToCart } = useShopContext();

  const handleAddToCart = () => {
    addToCart(project);
    setOpenSnackbar(true);
  };

  return (
    <StyledCard onClick={onProductClick}>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </Box>

      <CardContent sx={{ padding: 2 }}>
        <TiteTypography>{project.title}</TiteTypography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {project.subtitle}
        </Typography>
        <Stack spacing={1}>
          <PRBox>
            <PRTypography>{project.price}</PRTypography>
          </PRBox>
        </Stack>
      </CardContent>

      <Box
        className="hover-content"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: 2,
          transform: "translateY(100%)",
          opacity: 0,
          transition: "all 0.3s ease-in-out",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#B88E2F",
            color: "white",
            "&:hover": {
              backgroundColor: "#97732A",
            },
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
        >
          Add to Cart
        </Button>
        <Stack direction="row" spacing={1}>
          <Button
            sx={{ minWidth: "auto", color: "#B88E2F" }}
            onClick={(e) => {
              e.stopPropagation();
              onShare();
            }}
          >
            <ShareIcon />
          </Button>
          <Button
            sx={{ minWidth: "auto", color: "#B88E2F" }}
            onClick={(e) => {
              e.stopPropagation();
              onCompare();
            }}
          >
            <CompareArrowsIcon />
          </Button>
          <Button
            sx={{ minWidth: "auto", color: "#B88E2F" }}
            onClick={(e) => {
              e.stopPropagation();
              onLike();
            }}
          >
            <FavoriteBorderIcon />
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Added to cart"
      />
    </StyledCard>
  );
};

export default ProductCard;
