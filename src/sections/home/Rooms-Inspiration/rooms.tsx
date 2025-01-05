"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import Image1 from "../../../../public/RoomCard/01.png";
import Image2 from "../../../../public/RoomCard/02.png";
import Image3 from "../../../../public/RoomCard/03.png";
import Image4 from "../../../../public/RoomCard/Indicator.png";
// import Icon3 from "../../../../public/Services/fi-rr-shopping-cart-check.svg";
// import Icon4 from "../../../../public/Services/fi-rr-gift.svg";
import {
  BodyTypograpghy,
  ExpButton,
  HeadingTypograpghy,
  OCCard,
  OSTypograpghy,
} from "./styled";
import RoomsCard from "@/components/RoomsCard/roomsCard";


const Services = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={0}>
          <Grid item xl={6} lg={6} md={5} sm={6} xs={12}>
            <OCCard elevation={0}>
              <CardContent>
               
                <HeadingTypograpghy variant="h4">
                50+ Beautiful rooms 
                 <br /> inspiration
                </HeadingTypograpghy>
                <BodyTypograpghy>
                Our designer already made a lot of beautiful <br/>
                 prototipe of rooms that inspire you
                </BodyTypograpghy>
                <ExpButton variant="contained" size="large">
                  Explore More
                </ExpButton>
              </CardContent>
            </OCCard>
          </Grid>
          <Grid item xl={6} lg={6} md={7} sm={6} xs={12}> 
            <Stack>
              <Stack direction="row">
                <RoomsCard
                 image={Image1.src}
                 
                />
                <RoomsCard
                  image={Image2.src}
                 
                />

                <Box sx={{display:"flex",flexDirection:"row",alignContent:"flex-start"}}>
                {/* <Image src={Image4} alt/> */}
                </Box>
              
              </Stack>

             
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Services;
