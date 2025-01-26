"use client";
import Box from "@mui/material/Box";
import React from "react";
import { PCSTypography, PCTypograpghy, ProjectsBox } from "./styled";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ProductCard from "@/components/ProductCard/productCard";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useShopContext } from "@/context/shopcontext";

const Products = () => {
  const { search, handleSearch, searchResults } = useShopContext();

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
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          sx={{
            width: { xs: '90%', sm: '70%', md: '50%' },
            mb: 3,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: 'white',
              '&:hover fieldset': {
                borderColor: '#B88E2F',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#B88E2F',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#B88E2F' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      
      <Stack>
        <ProjectsBox>
          <Grid container spacing={1}>
            {searchResults.length === 0 ? (
              <Box
                sx={{
                  width: '100%',
                  textAlign: 'center',
                  py: 4,
                  color: '#666',
                }}
              >
                No products found matching your search.
              </Box>
            ) : (
              searchResults.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
                  <ProductCard project={item} />
                </Grid>
              ))
            )}
          </Grid>
        </ProjectsBox>
      </Stack>
    </Box>
  );
};

export default Products;
