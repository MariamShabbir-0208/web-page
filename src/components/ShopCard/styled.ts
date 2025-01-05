import { COMMON, normalFont, primaryFont } from "@/assets/theme/theme";
import {
  styled,
  Box,
  Card,
  Stack,
  Typography,
  Button,
  CardContent,
} from "@mui/material";

export const PCRCard = styled(Card)(({}) => ({
  backgroundColor: "#FAF3EA",
  paddingTop:"0px",
  boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.05)",
  width: "auto",
  height: "auto",
  borderRadius: "40px",
  border: "none",
  margin: "15px 15px ",
}));

export const CUCardContent = styled(CardContent)(({}) => ({
  padding: "5px 35px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));
export const CUIBox = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "155px",
  height: "155px",
}));

export const TBox = styled(Box)(({}) => ({
    display: "flex",
    flexDirection:"column",
  justifyContent: "left",
  alignItems: "left",
  textAlign: "left",
  paddingTop: "20px",
}));

export const PCTTypography = styled(Typography)(({}) => ({
  fontFamily: normalFont.style.fontFamily,
  color: "black",
  fontSize:"22px",
  fontWeight:"70px"
}));

export const PCSTypography = styled(Typography)(({}) => ({
  fontFamily: normalFont.style.fontFamily,
  color: "#656464",
  margin: "13px 0px",
}));
