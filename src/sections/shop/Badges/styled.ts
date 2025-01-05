import {
    COMMON,
    elementryFont,
    normalFont,
    primaryFont,
  } from "@/assets/theme/theme";
  import { styled, Box, Card, Stack, Typography, Button } from "@mui/material";
  
 

  export const PCTypograpghy = styled(Typography)(({}) => ({
    color: "#217BF4",
    textAlign: "center",
    marginBottom: "50px",
    marginTop: "30px",
    fontFamily: primaryFont.style.fontFamily,
  }));
