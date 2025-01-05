import {  COMMON, normalFont, primaryFont} from "@/assets/theme/theme";
import { styled, Box, Typography } from "@mui/material";

export const TiteTypography = styled(Typography)(({}) => ({
  textAlign: "start",
  color:"black",
  fontWeight:700,
  fontFamily: primaryFont.style.fontFamily,
}));

export const PRBox = styled(Box)(({}) => ({
  padding: "3% 0%",
 
}));

export const PRTypography = styled(Typography)(({}) => ({
  fontFamily: normalFont.style.fontFamily,
  textAlign: "start",
  color:"#656464",

  // marginLeft: "15px",
}));

export const StarBox = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: "5px",
  marginRight: "4px",
}));
