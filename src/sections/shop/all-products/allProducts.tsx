"use client";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { PCSTypography, PCTypograpghy, ProjectsBox } from "./styled";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ProductCard from "@/components/ProductCard/productCard";
import { useRouter } from "next/navigation";
import { getProducts } from "@/lib/sanity";

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

const AllProducts = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        // console.error("Error fetching products:", error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id: string) => {
    router.push(`/productpage/${id}`);
  };

  const handleShare = () => {
    router.push('/shareProduct');
  };

  const handleCompare = () => {
    router.push('/compareProducts');
  };

  const handleLike = () => {
    router.push('/likeProducts');
  };

  if (loading) {
    return <Box>Loading...</Box>;
  }

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
            {products.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4} lg={3} xl={3}>
                <ProductCard 
                  project={{
                    id: product._id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    image: product.productImage.asset.url,
                    tags: product.tags,
                    dicountPercentage: product.dicountPercentage,
                    isNew: product.isNew
                  }}
                  onProductClick={() => handleProductClick(product._id)}
                  onShare={handleShare}
                  onCompare={handleCompare}
                  onLike={handleLike}
                />
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
