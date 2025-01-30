"use client";
import { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, Button, Snackbar, Skeleton, Paper } from '@mui/material';
import { getProduct } from '@/lib/sanity';
import { useParams } from 'next/navigation';
import { useShopContext } from '@/context/shopcontext';

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
  tags: string[];
  dicountPercentage: number;
  isNew: boolean;
}

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { addToCart } = useShopContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProduct(params.id as string);
        setProduct(data);
      } catch (err) {
        setError('Failed to load product');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product._id,
        title: product.title,
        subtitle: product.description,
        price: product.price.toString(),
        image: product.productImage.asset.url
      });
      setOpenSnackbar(true);
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Skeleton 
              variant="rectangular" 
              width="100%" 
              height={400}
              sx={{ borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Skeleton variant="text" width="60%" height={40} sx={{ mb: 2 }} />
            <Skeleton variant="text" width="40%" height={30} sx={{ mb: 3 }} />
            <Skeleton variant="rectangular" height={100} sx={{ mb: 3 }} />
            <Skeleton variant="text" width="30%" height={30} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" width={200} height={50} />
          </Grid>
        </Grid>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            textAlign: 'center',
            backgroundColor: '#FFF3F3',
            color: '#D32F2F'
          }}
        >
          <Typography variant="h6">{error}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Please try refreshing the page or come back later.
          </Typography>
        </Paper>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            textAlign: 'center',
            backgroundColor: '#F5F5F5'
          }}
        >
          <Typography variant="h6">Product not found</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            The product you're looking for doesn't exist or has been removed.
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {/* Product Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.productImage?.asset?.url || '/Images/placeholder.png'}
            alt={product.title}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '600px',
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Box>
            {product.isNew && (
              <Typography
                variant="subtitle1"
                sx={{
                  bgcolor: '#B88E2F',
                  color: 'white',
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  display: 'inline-block',
                  mb: 2,
                }}
              >
                New Arrival
              </Typography>
            )}

            <Typography variant="h4" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
              {product.title}
            </Typography>

            <Typography variant="h5" sx={{ color: '#B88E2F', mb: 3, fontWeight: 500 }}>
              {formatPrice(product.price)}
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, color: '#666666' }}>
              {product.description}
            </Typography>

            {product.tags && product.tags.length > 0 && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, color: '#333333' }}>
                  Tags:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {product.tags.map((tag, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        bgcolor: '#F9F1E7',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        color: '#B88E2F',
                      }}
                    >
                      {tag}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )}

            <Button
              variant="contained"
              onClick={handleAddToCart}
              sx={{
                bgcolor: '#B88E2F',
                color: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  bgcolor: '#9A7B2F',
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Added to cart successfully!"
      />
    </Container>
  );
}
