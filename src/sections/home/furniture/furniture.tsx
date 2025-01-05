"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import {
  ProjectsBox,
  
} from "./styled";
import { normalFont } from "@/assets/theme/theme";
import Image from "next/image";
import image01 from "../../../../public/furniture/01.png";
import image02 from "../../../../public/furniture/02.png";
import image03 from "../../../../public/furniture/03.png";
import image04 from "../../../../public/furniture/04.png";
import image05 from "../../../../public/furniture/05.png";
import image06 from "../../../../public/furniture/06.png";
import image07 from "../../../../public/furniture/07.png";
import image08 from "../../../../public/furniture/08.png";
import { PhotoBox } from "../Browse-image/styled";
import { PCTypograpghy } from "../Products/styled";

const Furniture = () => {
  const images = [
    { src: image01, height: "250px" },
    { src: image02, height: "300px" },
    { src: image03, height: "270px" },
    { src: image04, height: "310px" },
    { src: image05, height: "280px" },
    { src: image06, height: "260px" },
    { src: image07, height: "300px" },
    { src: image08, height: "250px" },
  ];

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
        <Typography
          sx={{
            fontFamily: normalFont.style.fontFamily,
            textAlign: "center",
            color: "#656464",
          }}
        >
          Share your setup with
        </Typography>
        <PCTypograpghy variant="h2">#FuniroFurniture</PCTypograpghy>
      </Box>
      <ProjectsBox>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
              key={index}
              sx={{ height: image.height }}
            >
              <PhotoBox>
                <Image src={image.src} alt={`Furniture ${index + 1}`} layout="fill" objectFit="cover" />
              </PhotoBox>
            </Grid>
          ))}
        </Grid>
      </ProjectsBox>
    </Box>
  );
};

export default Furniture;
