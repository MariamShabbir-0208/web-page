"use client";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { PCSTypography, PCTypograpghy, ProjectsBox } from "./styled";
import Grid from "@mui/material/Grid";
import { useRouter, useSearchParams } from "next/navigation";
import { getProducts } from "@/lib/sanity";
import { Button, Snackbar, Typography } from "@mui/material";
import { useShopContext } from "@/context/shopcontext";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: {
    asset: {
      url: string;
    };
  };
}

const AllProducts = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { addToCart } = useShopContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProducts();
        
        if (!Array.isArray(data)) {
          console.error("Invalid data format received:", data);
          setError("Invalid data format received from Sanity. Please check your configuration.");
          return;
        }

        if (data.length === 0) {
          setError("No products found in your Sanity dataset.");
          return;
        }

        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter(product => 
        product.title.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation(); // Prevent navigation when clicking the Add to Cart button
    addToCart({
      id: product._id,
      title: product.title,
      subtitle: product.description,
      price: product.price.toString(),
      image: product.productImage?.asset?.url || '/Images/placeholder.png'
    });
    setOpenSnackbar(true);
  };

  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <PCTypograpghy>Total Products</PCTypograpghy>
        {searchQuery && (
          <Typography variant="h6" sx={{ mt: 2, color: 'text.secondary' }}>
            {filteredProducts.length === 0 
              ? `No products found for "${searchQuery}"` 
              : `Found ${filteredProducts.length} product${filteredProducts.length === 1 ? '' : 's'} for "${searchQuery}"`}
          </Typography>
        )}
      </Box>

      <ProjectsBox>
        <Grid container spacing={2}>
          {loading ? (
            <Box sx={{ width: '100%', textAlign: 'center', py: 4 }}>
              <Typography>Loading products...</Typography>
            </Box>
          ) : error ? (
            <Box sx={{ width: '100%', textAlign: 'center', py: 4 }}>
              <Typography color="error">{error}</Typography>
            </Box>
          ) : filteredProducts.length === 0 && searchQuery ? (
            <Box sx={{ width: '100%', textAlign: 'center', py: 4 }}>
              <Typography>No products found matching your search.</Typography>
            </Box>
          ) : (
            filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                <Box
                  onClick={() => handleProductClick(product._id)}
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
                  <Box
                    component="img"
                    src={product.productImage?.asset?.url || '/Images/placeholder.png'}
                    alt={product.title}
                    sx={{
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
                        ${product.price}
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
      </ProjectsBox>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Product added to cart"
      />
    </Box>
  );
};

export default AllProducts;
