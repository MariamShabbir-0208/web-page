"use client";
import { useParams } from "next/navigation";
import { Box, Typography, Card, CardContent, CardMedia, Button, Rating, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import WholeDetails from "@/sections/productpage/descirption/description";
import RelatedProducts from "@/sections/productpage/relatedProducts/relatedProducts";
import { getProduct } from "@/lib/sanity";

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

const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (typeof id === 'string') {
        try {
          const data = await getProduct(id);
          setProduct(data);
        } catch (error) {
          //console.error("Error fetching product:", error);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProduct();
  }, [id]);

  if (loading || !product) {
    return <div>Loading...</div>;
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateDiscountedPrice = () => {
    if (product.dicountPercentage) {
      return product.price - (product.price * product.dicountPercentage) / 100;
    }
    return product.price;
  };

  return (
    <Box sx={{ p: 4 }}>
      <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, boxShadow: "none" }}>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            image={product.productImage.asset.url}
            alt={product.title}
            sx={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <CardMedia
              component="img"
              image={product.productImage.asset.url}
              alt={product.title}
              sx={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Box>

        <CardContent sx={{ flex: 1, pl: { md: 4 } }}>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Rating value={4} readOnly sx={{ mb: 2 }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Typography variant="h5" color="primary">
              ${calculateDiscountedPrice()}
            </Typography>
            {product.dicountPercentage > 0 && (
              <Typography variant="h6" sx={{ textDecoration: "line-through", color: "text.secondary" }}>
                ${product.price}
              </Typography>
            )}
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {product.description}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", border: 1, borderColor: "divider", borderRadius: 1 }}>
              <IconButton onClick={handleDecrement}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ px: 2 }}>{quantity}</Typography>
              <IconButton onClick={handleIncrement}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              startIcon={<AddShoppingCartIcon />}
              sx={{
                bgcolor: "#B88E2F",
                "&:hover": {
                  bgcolor: "#B88E2F",
                },
              }}
            >
              Add to Cart
            </Button>
            <IconButton>
              <CompareArrowsIcon />
            </IconButton>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              Tags: {product.tags.join(", ")}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <WholeDetails  />
      <RelatedProducts />
    </Box>
  );
};

export default ProductPage;
