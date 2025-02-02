"use client";
import Box from "@mui/material/Box";
import React from "react";
import Grid from "@mui/material/Grid";
import { TextField, InputAdornment, Typography, Button, Snackbar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useShopContext } from "@/context/shopcontext";
import { useRouter } from "next/navigation";
import { styled } from '@mui/material/styles';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('next/image'), { ssr: true });

interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  description?: string;
  tags?: string[];
  discountPercentage?: number;
  isNew?: boolean;
}

const PCSTypography = styled(Typography)({
  // Add styles here if needed
});

const ProjectsBox = styled(Box)({
  // Add styles here if needed
});

const Products = () => {
  const router = useRouter();
  const { search, handleSearch, searchResults, addToCart } = useShopContext();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product);
    setOpenSnackbar(true);
  };

  const formatPrice = (price: string) => {
    return parseFloat(price).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  return (
    <Box sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          mb: 6
        }}
      >
        <PCSTypography variant="h2">Our Products</PCSTypography>
        
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
      
      <Grid container spacing={4}>
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
          searchResults.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Box
                onClick={() => handleProductClick(product.id)}
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: 2,
                  '&:hover': {
                    '& img': {
                      transform: 'scale(1.05)',
                    },
                    '& .overlay': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={300}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                >
                  <Box
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      component="h3"
                      sx={{
                        m: 0,
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {product.title}
                    </Box>
                    <Box
                      sx={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        color: '#B88E2F',
                      }}
                    >
                      {formatPrice(product.price)}
                    </Box>
                    <Button
                      variant="contained"
                      onClick={(e) => handleAddToCart(e, product)}
                      sx={{
                        backgroundColor: '#B88E2F',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#9A7B2F',
                        },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))
        )}
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Added to cart!"
      />
    </Box>
  );
};

export default Products;
