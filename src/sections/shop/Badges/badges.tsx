"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CustomerSupport from "../../../../public/Shop/customer-support.svg";
import freeSheeping from "../../../../public/Shop/freeshipping.svg";
import Gurantee from "../../../../public/Shop/guarantee.svg";
import Trophy from "../../../../public/Shop/trophy 1.svg";
// Import your ShopCard component
import ShopCard from "@/components/ShopCard/shopCard";

const Badges = () => {
  return (
    <Box
      sx={{
        // paddingTop: "5%",
        backgroundColor:"#FAF3EA",
        margin:"20px 0px"
      }}
    >
     
      <Stack>
        <Grid container spacing={0}>
          <Grid xl={4} lg={3} md={3} sm={6} xs={12}>
            <ShopCard
              image={Trophy}
              title="High Quality"
              subtitle="crafted from top materials"
            />
          </Grid>

          <Grid xl={4} lg={3} md={3} sm={6} xs={12}>
            <ShopCard
              image={Gurantee}
              title="Warranty Protection"
              subtitle="Over 2 years"
            />
          </Grid>

          <Grid xl={4} lg={3} md={3} sm={6} xs={12}>
            <ShopCard
              image={freeSheeping}
              title="Free Shipping"
              subtitle="Order over 150 $."
            />
          </Grid>
          <Grid xl={4} lg={3} md={3} sm={6} xs={12}>
            <ShopCard
              image={CustomerSupport}
              title="24/7 Support"
              subtitle="Dedicated support"
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Badges;
