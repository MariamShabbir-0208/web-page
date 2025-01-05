import { styled, Box, Typography, Card, Stack } from "@mui/material";
import Image from "next/image";
// import { theme } from "@/assets/theme/theme";

export const LeftCard = styled(Card)(({ theme }) => ({
  margin: "0 20px",
  backgroundColor:"tranparent",
  [theme.breakpoints.down("xl")]: {
    padding: "18% 5%",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "52% 15%",
  },
  [theme.breakpoints.down("md")]: {
    padding: "52% 0%",
  },
}));


export const RightBox = styled(Box)(({ theme }) => ({
  // margin: "0 20px",

  // padding:"8% 10%",

  [theme.breakpoints.up("xl")]: {
    padding:"15% 10%",
  },
  [theme.breakpoints.down("xl")]: {
    padding: "-5% 0%",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "0% 1%",
  },

}));



export const ImageBox = styled(Box)(({ theme }) => ({
  // backgroundColor: "#39DB4A",
  borderRadius: "50%",
  margin: "0 auto",
  position: "relative",
  [theme.breakpoints.up("xl")]: {
    width: "550px",
  },
  [theme.breakpoints.up("md")]: {
    width: "550px",
  },
  [theme.breakpoints.down("md")]: {
    width: "550px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "250px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "350px",
  },
  height: "550px",
  [theme.breakpoints.down("md")]: {
    height: "550px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "550px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "350px",
  },
}));

export const MainImage = styled(Image)(({ theme }) => ({
  position: "absolute",
  left: "-10%",
  bottom: "13px",
}));

export const RenderFoodStack = styled(Stack)(({ theme }) => ({
  position: "absolute",

  //  TOP ///..

  [theme.breakpoints.up("xl")]: {
    top: "65%",
    left: "42%",
  },

  [theme.breakpoints.up("lg")]: {
    top: "64%",
    left: "42%",
  },


  [theme.breakpoints.only("lg")]: {
    top: "88%",
    left: "45%",
  },



  [theme.breakpoints.down("lg")]: {
    top: "66%",
    left: "34%",
  },

  [theme.breakpoints.down("md")]: {
    top: "108%",
    left: "0%",
  },

  // [theme.breakpoints.up("xl")]: {
  //   top: "56%",
  // },
  // [theme.breakpoints.up("lg")]: {
  //   top: "62%",
  // },

  // [theme.breakpoints.down("lg")]: {
  //   top: "47%",
  // },
  // [theme.breakpoints.down("md")]: {
  //   top: "108%",
  // },

  //  ___LEFT////
  //  [theme.breakpoints.up("lg")]: {
  //   left: "42%",
  // },
  //   [theme.breakpoints.down("lg")]: {
  //     left: "38%",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     left: "0%",
  //   },

  // DIRECTION//
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  // WIDTH//
  [theme.breakpoints.up("sm")]: {
    width: "360px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "420px",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const CBox1 = styled(Stack)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.35)",
  padding: "15px",
  borderRadius: "25px",
  margin: "25px 10px 25px 15px",
}));

export const SNBox = styled(Box)(({ theme }) => ({
  marginLeft: "25px",
  marginRight: "10px",
  width: "125px",
}));

export const SNTypography = styled(Typography)(({ theme }) => ({
  marginBottom: "10px",
  fontSize: "19px",
  fontWeight: "850px",
}));