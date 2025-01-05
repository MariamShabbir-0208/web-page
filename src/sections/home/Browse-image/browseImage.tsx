"use client";
import Box from "@mui/material/Box";
import React from "react";
import { PCSTypography, PCTypograpghy, ProjectsBox } from "./styled";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
// import { ProjectsData } from "@/Data/dummy";
import { BrowseData, ProductsData } from "@/Data/dummy";
import BrowseCard from "@/components/BrowseCard/browsecard";


const Browse = () => {
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
        <PCTypograpghy variant="h2">Browse The Range</PCTypograpghy>

        <PCSTypography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </PCSTypography>

      </Box>
      <Stack>
      <ProjectsBox>
  <Grid container spacing={1} justifyContent="center">
    {BrowseData.map((item, index) => (
      <Grid item key={index} xs={3} sm={3} md={4} lg={3} xl={3}>
        <BrowseCard project={item} />
      </Grid>
    ))}
  </Grid>
</ProjectsBox>

      </Stack>
    </Box>
  );
};

export default Browse;
