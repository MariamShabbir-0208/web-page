import {
    COMMON,
    elementryFont,
    normalFont,
    primaryFont,
  } from "@/assets/theme/theme";
  import { styled, Box, Card, Stack, Typography, Button } from "@mui/material";
  
  export const OSTypograpghy = styled(Typography)(({}) => ({
    color: "#FF6868",
    marginTop: 30,
    fontFamily: primaryFont.style.fontFamily,
  }));
  
  export const HeadingTypograpghy = styled(Typography)(({}) => ({
    color: COMMON.common.black,
    marginBottom: 25,
    fontWeight:"60px",
    marginTop: 20,
    fontFamily: primaryFont.style.fontFamily,
  }));
  
  export const BodyTypograpghy = styled(Typography)(({}) => ({
    color: COMMON.elementry.light,
    fontSize: "16PX",
    marginTop: 20,
    marginBottom: 20,
    fontFamily: primaryFont.style.fontFamily,
  }));
  
  export const OCCard = styled(Card)(({}) => ({
    padding: "5% 2%",
  }));
  
  export const ExpButton = styled(Button)(({}) => ({
    margin: "20px 0px",
    borderRadius: "5px",
    width: "230px",
    fontSize: "22px",
    backgroundColor: "#B88E2F",
    // boxShadow: "0px 7px 30px 0px rgba(188, 255, 154, 4.80)",
    textTransform: "none",
    "&:hover": {
      backgroundColor:"#B88E2F",
      boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.95)",
      color: "White",
    },
  }));
  