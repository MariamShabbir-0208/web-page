"use client";
import { useParams } from "next/navigation";
import { allProductsData } from "@/Data/dummy";
import { Box, Typography, Card, CardContent, CardMedia, Button, Rating, IconButton } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import WholeDetails from "@/sections/productpage/descirption/description";
import RelatedProducts from "@/sections/productpage/relatedProducts/relatedProducts";

const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1); 
  if (!id) {
    return <div>Loading...</div>;
  }

  const product = allProductsData.find((item) => item.id === id);

  if (!product) {
    return (
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="h6">Product not found!</Typography>
      </Box>
    );
  }

  const handleQuantityChange = (operation: string) => {
    if (operation === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (operation === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
    <Box sx={{ maxWidth: 1200, margin: "auto", padding: 3 }}>
      <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, boxShadow: 3 }}>
        {/* Product Image */}
        <CardMedia
          component="img"
          sx={{ width: { xs: "100%", md: "50%" }, height: "auto" }}
          image={product.image}
          alt={product.title}
        />
        <CardContent sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            {product.title}
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Price: {product.price}
          </Typography>

  <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Rating value={product.rating} precision={0.1} readOnly />
            <Typography variant="body2" sx={{ marginLeft: 1 }}>
              {product.rating} / 5
            </Typography>
          </Box>
         
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {product.description || "No description available for this product."}
          </Typography>
         
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="body1">Color: {product.color}</Typography>


            <Typography variant="body1" sx={{color:"black"}}>Sizes</Typography>

            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start" }}>
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
    L
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
    XL
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
    XS
  </Box>
</Box>

          </Box>

<Box
  sx={{
    display: "flex",
    flexDirection: {
      xs: "column",  
      sm: "column",  
      md: "row",    
    },
    justifyContent: "start",
    gap: "15px",
  }}
>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <IconButton onClick={() => handleQuantityChange("decrease")} sx={{ padding: 1 }}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6" sx={{ marginX: 2 }}>
              {quantity}
            </Typography>
            <IconButton onClick={() => handleQuantityChange("increase")} sx={{ padding: 1 }}>
              <AddIcon />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{ padding: "8px 16px", display: "flex", alignItems: "center",color:"#D4AF37", marginBottom: 2,backgroundColor:"white",
              ":hover": {
                backgroundColor: "#D4AF37", 
                color:"white"
              },

             }}
          >
            <AddShoppingCartIcon sx={{ marginRight: 1 }} />
            Add To Cart
          </Button>

          {/* Compare Button */}
          <Button
            variant="outlined"
            color="secondary"
            sx={{ padding: "8px 16px", display: "flex", alignItems: "center", marginBottom: 2 }}
          >
            <CompareArrowsIcon sx={{ marginRight: 1 }} />
            Compare
          </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  <Box>
    <WholeDetails/>
  </Box>
  <RelatedProducts/>
  </>
    
  );
};

export default ProductPage;
