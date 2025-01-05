"use client";
import {
  styled,
  Box,
  Card,
  Stack,
  Typography,
  Button,
  Tab,
  Grid,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";
import Image from "next/image";

export const StyledToolbar = styled(Toolbar)(({}) => ({
  display: "flex",
  justifyContent: "space-between !important",
}));

export const StyledAppbar = styled(AppBar)(({}) => ({
  backgroundColor: "white",
  boxShadow: "none",
  width: "100%",
  position: "static"
}));

export const LIBox = styled(Box)(({}) => ({
  padding: "5%",
  width: "35px",
  height: "35px",
  borderRadius: "8px",
}));

export const LImage1 = styled(Image)(({}) => ({
//   width: "50px",
//   height: "33px",
}));

export const LImage2 = styled(Image)(({}) => ({
  paddingTop: "7px",
  width: "75px",
  height: "30px",
}));

export const MenuBox = styled(Box)(({ theme }) => ({
  //  backgroundColor:"red",
  color: "black",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  padding: " 0 30px",
  // width: "32%",
  [theme.breakpoints.down("lg")]: {
    // width: "55%",
  },

  [theme.breakpoints.down("sm")]: {
    width: "5%",
  },
}));

// export const IconsBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: "28px",

//   [theme.breakpoints.down("xs")]: {
//     display: "block",
//   },
//   [theme.breakpoints.down("sm")]: {
//     display: "none",
//   },
// }));

export const IconsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "28px",
  [theme.breakpoints.down("xs")]: {
    display: "block",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const ClickableIcon = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  transition: "transform 0.3s ease, color 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    color: theme.palette.primary.main,
  },
}));

export const StyledIconButton = styled(IconButton)(({theme}) => ({
  marginRight:"3px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("xs")]: {
    display: "block",
  },
}));

