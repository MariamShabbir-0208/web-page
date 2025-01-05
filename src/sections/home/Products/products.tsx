"use client";
import Box from "@mui/material/Box";
import React from "react";
import { PCSTypography, PCTypograpghy, ProjectsBox } from "./styled";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
// import { ProjectsData } from "@/Data/dummy";
import ProductCard from "@/components/ProductCard/productCard";
import { ProductsData } from "@/Data/dummy";


const Products = () => {
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
        <PCTypograpghy variant="h2">Our Products</PCTypograpghy>

        
      </Box>
      <Stack>
      <ProjectsBox>
      <Grid container spacing={1}>
        {ProductsData.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
            <ProductCard project={item} />
          </Grid>
        ))}   
      </Grid>
    </ProjectsBox>
      </Stack>
    </Box>
  );
};

export default Products;
