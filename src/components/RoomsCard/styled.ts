import {
    COMMON, primaryFont,
} from "@/assets/theme/theme";
import { Box, Card, styled, Typography } from "@mui/material";
import image from "next/image";
import Image from "next/image";
  
export const SECard = styled(Card)<{ image?: string }>(({ image }) => ({
    width: "315px",
    height: "335px",
    margin: "2% 1%",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end", 
    color: "white",
    padding: "20px", 
    
  }));
  
  export const ICNBox = styled(Box)(({}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));
  
  export const ICNImage = styled(Image)(({}) => ({
      width:"68px",
      height:"68px"
    }));
  
    export const TitleBox = styled(Box)(({}) => ({
      fontFamily: primaryFont.style.fontFamily,
      textAlign: "center",
       paddingTop: "20px" 
    }));
   
    export const TTypography = styled(Typography)(({}) => ({
      fontFamily: primaryFont.style.fontFamily,
      color: COMMON.primary.lighter,
    }));
   
  
    export const SBTypography = styled(Typography)(({}) => ({
      fontFamily: primaryFont.style.fontFamily,
      color: COMMON.primary.dark,
    }));
   
  
  