"use client";
import ProductCard from "@/components/ProductCard/productCard";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { PCTypograpghy, ProjectsBox } from "./styled";
import { useEffect, useState } from "react";
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

const RelatedProducts = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        // Get 4 random products
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 4));
      } catch (error) {
        console.error("Error fetching related products:", error);
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
        <PCTypograpghy variant="h2">Related Products</PCTypograpghy>
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
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#B88E2F",
            "&:hover": {
              bgcolor: "#B88E2F",
            },
          }}
          onClick={() => router.push('/shop')}
        >
          Show More
        </Button>
      </Box>
    </Box>
  );
};

export default RelatedProducts;
