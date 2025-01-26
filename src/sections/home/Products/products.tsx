"use client";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { PCSTypography, PCTypograpghy, ProjectsBox } from "./styled";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ProductCard from "@/components/ProductCard/productCard";
import { ProductsData } from "@/Data/dummy";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = ProductsData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <PCTypograpghy variant="h2">Our Products</PCTypograpghy>
        
        <TextField
          placeholder="Search products..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: { xs: '90%', sm: '70%', md: '50%' },
            mb: 3,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: 'white',
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      
      <Stack>
        <ProjectsBox>
          <Grid container spacing={1}>
            {filteredProducts.map((item, index) => (
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
