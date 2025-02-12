"use client";
import { styled, Box, Typography } from "@mui/material";

export const PCTypograpghy = styled(Typography)(({}) => ({
  color: "#3A3A3A",
  textAlign: "center",
  marginBottom: "5px",
  marginTop: "40px",
  fontFamily: "Roboto, sans-serif",
}));

export const ProjectsBox = styled(Box)(({}) => ({
  marginTop: 30,
}));

export const PhotoBox = styled(Box)(({}) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: "8px",
}));
