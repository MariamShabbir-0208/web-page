"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import location from "../../../../public/Contact/Location.svg";
import Phone from "../../../../public/Contact/bxs_phone.svg";
import Clock from "../../../../public/Contact/clock.svg";
// Import your ShopCard component
import ShopCard from "@/components/ShopCard/shopCard";

const Adress = () => {
  return (
    <Box
      sx={{
        margin: "20px 8px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white", // Added background color here
        padding: "20px", // Optional padding for better spacing
        borderRadius: "8px", // Optional rounded corners
      }}
    >
      <Stack sx={{ display: "flex", flexDirection: "column" }}>
        <Grid container spacing={2}>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <ShopCard
              image={location}
              title="Address"
              subtitle="236 5th SE Avenue, New York NY10000, United States"
            />
          </Grid>

          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <ShopCard
              image={Phone}
              title="Phone"
              subtitle="Mobile: +(84) 546-6789 Hotline: +(84) 456-6789"
            />
          </Grid>

          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <ShopCard
              image={Clock}
              title="Working Time"
              subtitle="Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00"
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Adress;
