import ImageSection from "@/sections/Cart/imagesection/imageSection";
import MainHero from "@/sections/Cart/main-hero/mainHero";
import TotalSection from "@/sections/Cart/TotalSetction/totalSection";
import Badges from "@/sections/shop/Badges/badges";
import { Box, Grid } from "@mui/material";

const Cart = () => {
  return (
    <>
      <MainHero />

      <Box sx={{ marginTop: "30px",gap:"10px" }}>
      <Grid container spacing={2}>
        {/* Image Section */}
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <ImageSection />
        </Grid>
        
        {/* Total Section */}
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <TotalSection />
        </Grid>
      </Grid>
    </Box>
    <Badges/>

      {/* <Box sx={{ display: "flex", flexDirection: "row", marginTop: "30px" }}>
        <ImageSection />
        <TotalSection />
      </Box> */}
    </>
  );
};

export default Cart;
