"use client";
import Box from "@mui/material/Box";
import React from "react";
import { PCSTypography, PCTypograpghy, ProjectsBox } from "./styled";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ProductCard from "@/components/ProductCard/productCard";
import { allProductsData, ProductsData } from "@/Data/dummy";
import Link from "next/link";


const AllProducts = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      </Box>
      <Stack>
      <ProjectsBox>
      <Grid container spacing={1}>
      {allProductsData.map((item, index) => (
  <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
    <Link href={`/productpage/${item.id}`}>
      
        <ProductCard project={item} />
    
    </Link>
  </Grid>
))} 
      </Grid>
    </ProjectsBox>
      </Stack>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
  <Box
    sx={{
      backgroundColor: "#F9F1E7",
      width: "60px",
      height: "60px",
      margin: "0px 8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      border: "2px solid transparent", 
      "&:hover": {
        backgroundColor: "#B88E2F",
        color:"white",
        borderColor: "#B88E2F", 
      },
    }}
  >
    1
  </Box>
  <Box
    sx={{
      backgroundColor: "#F9F1E7",
      width: "60px",
      height: "60px",
      margin: "0px 8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      border: "2px solid transparent", 
      "&:hover": {
        backgroundColor: "#B88E2F",
        color:"white",
        borderColor: "#B88E2F", 
      },
    }}
  >
    2
  </Box>
  <Box
    sx={{
      backgroundColor: "#F9F1E7",
      width: "60px",
      height: "60px",
      margin: "0px 8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      border: "2px solid transparent", // Add a transparent border for initial state
      "&:hover": {
        backgroundColor: "#B88E2F",
        color:"white",
        borderColor: "#B88E2F", // Change the border color on hover
      },
    }}
  >
    3
  </Box>
  <Box
    sx={{
      backgroundColor: "#F9F1E7",
      width: "98px",
      height: "60px",
      margin: "0px 11px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      border: "2px solid transparent", // Add a transparent border for initial state
      "&:hover": {
        backgroundColor: "#B88E2F",
        color:"white",
        borderColor: "#B88E2F", // Change the border color on hover
      },
    }}
  >
    Next
  </Box>
</Box>

    </Box>
  );
};

export default AllProducts;
