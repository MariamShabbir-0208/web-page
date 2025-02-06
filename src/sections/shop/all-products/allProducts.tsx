"use client";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { PCSTypography, PCTypograpghy, ProjectsBox } from "./styled";
import Grid from "@mui/material/Grid";
import { useRouter, useSearchParams } from "next/navigation";
import { getProducts } from "@/lib/sanity";
import { Button, CircularProgress, Snackbar, Typography } from "@mui/material";
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
        console.log('Fetching products...');
        const data = await getProducts();
        console.log('Received data:', data);
        
        if (!Array.isArray(data)) {
          console.error("Invalid data format received:", data);
          setError("Invalid data format received from Sanity. Please check your configuration.");
          return;
        }

        if (data.length === 0) {
          console.log('No products found in dataset');
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
    e.stopPropagation();
    addToCart({
      id: product._id,
      title: product.title,
      subtitle: product.description,
      price: product.price.toString(),
      image: product.productImage?.asset?.url || '/Images/placeholder.png'
    });
    setOpenSnackbar(true);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="error" gutterBottom>{error}</Typography>
        <Button variant="contained" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </Box>
    );
  }

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
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <Box
                onClick={() => handleProductClick(product._id)}
                sx={{
                  cursor: 'pointer',
                  p: 2,
                  border: '1px solid #eee',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 3,
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Box
                  component="img"
                  src={product.productImage?.asset?.url || '/Images/placeholder.png'}
                  alt={product.title}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 2
                  }}
                />
                <Typography variant="h6" gutterBottom>{product.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    ${product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
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
}

export default AllProducts;
