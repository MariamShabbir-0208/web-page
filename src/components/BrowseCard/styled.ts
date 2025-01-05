import { COMMON, normalFont, primaryFont } from "@/assets/theme/theme";
import { styled, Box, Typography } from "@mui/material";

export const TiteTypography = styled(Typography)(({}) => ({
  textAlign: "center",
  color: "black",
  fontWeight: 900,
  fontFamily: primaryFont.style.fontFamily,
}));

export const PRBox = styled(Box)(({}) => ({
  padding: "3% 0%",
}));

export const PRTypography = styled(Typography)(({}) => ({
  fontFamily: normalFont.style.fontFamily,
  textAlign: "start",
  color: "#656464",
}));

export const StarBox = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: "5px",
  marginRight: "4px",
}));

export const PCSTypography = styled(Typography)(({}) => ({
  fontFamily: normalFont.style.fontFamily,
  textAlign: "center",
  color: "#656464",
  fontWeight: 400,
  marginTop: "10px",
  fontSize: "16px",
}));

export const PCTypograpghy = styled(Typography)(({}) => ({
  fontFamily: primaryFont.style.fontFamily,
  textAlign: "center",
  color: "#333333",
  fontWeight: 700,
  fontSize: "24px",
  marginTop: "20px",
}));

export const ProjectsBox = styled(Box)(({}) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "1rem",
  marginTop: "20px",
}));
