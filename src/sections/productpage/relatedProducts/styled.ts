"use client";
import {
    COMMON,
    elementryFont,
    normalFont,
    primaryFont,
  } from "@/assets/theme/theme";
  import { styled, Box, Card, Stack, Typography, Button } from "@mui/material";
  
 

  export const PCTypograpghy = styled(Typography)(({}) => ({
    color: "#3A3A3A",
    textAlign: "center",
    marginBottom: "5px",
    marginTop: "40px",
    fontFamily: primaryFont.style.fontFamily,
  }));

  export const PCSTypography = styled(Typography)(({}) => ({
    fontFamily: normalFont.style.fontFamily,
    lineHeight:"35px",
    textAlign:"center",
    color: "#656464",
    margin: "20px 0px",
  }));
  
  export const ProjectsBox = styled(Box)(({}) => ({
    marginTop: 30,
  }));