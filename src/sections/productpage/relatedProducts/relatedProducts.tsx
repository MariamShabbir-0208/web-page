
"use client";
import ProductCard from "@/components/ProductCard/productCard";
import { allProductsData } from "@/Data/dummy";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { PCTypograpghy, ProjectsBox } from "./styled";


const RelatedProducts = () => {
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
      {allProductsData.map((item, index) => (
  <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
    <Link href={`/productpage/${item.id}`}>
      
        <ProductCard project={item} />
    
    </Link>
  </Grid>
))} 
      </Grid>
    </ProjectsBox>
      </Stack>

      <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",margin:"25px"}}>
      <Button
            variant="outlined"
            color="primary"
            sx={{ width:"250px",height:"50px",padding: "8px 16px", display: "flex", alignItems: "center",color:"#D4AF37",borderColor:"#D4AF37", marginBottom: 2,backgroundColor:"white",
              ":hover": {
                backgroundColor: "#D4AF37", 
                color:"white"
              },

             }}
          >
            SEE MORE
          </Button>
      </Box>
    </Box>
  );
};

export default RelatedProducts;
