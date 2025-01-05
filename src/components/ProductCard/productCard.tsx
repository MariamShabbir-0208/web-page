"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PRBox, PRTypography, TiteTypography } from "./styled";

interface ProductCardProps {
  project: {
    price: string;
    title: string;
    subtitle: string;
    image: string;
    id: string;
    description?: string;
    rating?: number;
    color?: string;
  };
}

const HoverCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    backgroundColor: "#3A3A3A",
    "& .hover-content": {
      opacity: 1,
      visibility: "visible",
    },
  },
}));

const HoverContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  opacity: 0,
  visibility: "hidden",
  transition: "all 0.3s ease-in-out",
  color: "#FFFFFF",
}));

const IconRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  padding:"0px 44px"
}));

const ProductCard: React.FC<ProductCardProps> = ({ project }) => {
  return (
    <HoverCard elevation={0}>
      <Stack>
        <Image
          className="responsive-card"
          style={{ margin: "auto" }}
          src={project.image}
          width={350}
          height={330}
          alt=""
        />
      </Stack>
      <CardContent>
        <TiteTypography variant="h6">{project.title}</TiteTypography>
        <PRBox>
          <Box>
            <PRTypography variant="subtitle1">{project.subtitle}</PRTypography>
          </Box>
          <Box>
            <TiteTypography variant="subtitle1">Rp{project.price}</TiteTypography>
          </Box>
        </PRBox>
      </CardContent>
      <HoverContent className="hover-content">
      <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#B88E2F",
            fontWeight: 700,
            padding: "8px 16px", // Slight padding for the button
            ":hover": {
              backgroundColor: "#D4AF37", 
              color:"white"
            },
          }}
        >
          Add To Cart
        </Button>
        <IconRow>
          <Link href="/shareProduct" passHref>
            <Box
              component="a"
              display="flex"
              alignItems="center"
              gap={1}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ShareIcon />
              <Typography>Share</Typography>
            </Box>
          </Link>
          <Link href="/compareProducts" passHref>
            <Box
              component="a"
              display="flex"
              alignItems="center"
              gap={1}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CompareArrowsIcon />
              <Typography>Compare</Typography>
            </Box>
          </Link>
          <Link href="/likeProducts" passHref>
            <Box
              component="a"
              display="flex"
              alignItems="center"
              gap={1}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FavoriteBorderIcon />
              <Typography>Like</Typography>
            </Box>
          </Link>
        </IconRow>
      </HoverContent>
    </HoverCard>
  );
};

export default ProductCard;
