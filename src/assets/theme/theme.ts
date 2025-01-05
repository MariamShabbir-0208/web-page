import React from "react";
import { createTheme } from "@mui/material/styles";

import { Rufina, Roboto_Slab, Poppins, Roboto_Serif,Inter } from "next/font/google";

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}
export function pxToRem(value: number) {
  return `${value / 16}rem`;
}
export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const PRIMARY = {
  lighter: '#5FE26C',
  light: "#C1F1C6",
  hoverlight:"#C1F1C6",
  main: '#39DB4A',
  dark: "#90BD95",
  darker: '#224F34',
  contrastText: '#FFFFFF',
};

const SECONDARY = {
  lighter: '#FF6868',
  light: '#FF7979',
  dark: '#373737',
  contrastText: '#FFFFFF',
};

const ELEMENTRY = {
  lighter: "#CADCD0",
  light: "#555555",
  dark: '#93B9A2',
  contrastText: '#FFFFFF',
};



export const COMMON = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  elementry:ELEMENTRY,
};

export const primaryFont = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const secondaryFont = Rufina({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const elementryFont = Roboto_Serif({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const normalFont = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // palette: {
  //   mode: "light",
  //   primary: {
  //     main: green[400],
  //     light: green[200],
  //     dark: green[800],
  //     contrastText: "#fff",
  //   },
  // },
  typography: {
    h1: {
      fontWeight: 800,
      lineHeight: 80 / 64,
      fontSize: pxToRem(40),
      ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    },
    h2: {
      fontWeight: 800,
      lineHeight: 64 / 48,
      fontSize: pxToRem(32),
      ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(24),
      ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
    },
    h4: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(20),
      ...responsiveFontSizes({ sm: 24, md: 28, lg: 30 }),
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(18),
      ...responsiveFontSizes({ sm: 20, md: 23, lg: 26 }),
    },
    h6: {
      fontWeight: 600,
      lineHeight: 28 / 18,
      fontSize: pxToRem(17),
      ...responsiveFontSizes({ sm: 17, md: 18, lg: 19 }),
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(15),
    },
    subtitle2: {
      fontWeight: 400,
      lineHeight: 22 / 14,
      fontSize: pxToRem(13),
    },
    body1: {
      lineHeight: 1.5,
      fontSize: pxToRem(20),
    },
    body2: {
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
    },
  },
  // components: {
  //   MuiAppBar: {
  //     styleOverrides: {
  //       root: {
  //         width: "58% !important",
  //         // width: {
  //         //   xs: "100%", // Full width on extra-small screens
  //         //   sm: "70%",  // 70% width on small screens
  //         //   md: "58%",  // 58% width on medium screens
  //         //   lg: "58%",  // 58% width on large screens
  //         // },
  //         position:"fixed",
  //         top:0,
  //         right:"auto",
  //         left:400
  //       }
  //     }
  //   }
  // }
  
});
