import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { CUIBox, PCRCard, CUCardContent, PCTTypography, TBox, PCSTypography } from "./styled";

interface CardProps {
  image?: any;
  title?: string;
  subtitle?: string;
}

const shopCard = ({ image, title, subtitle }: CardProps) => {
  return (
    <PCRCard>
      <CUCardContent>
        <CUIBox>
          <Image src={image} width={55} height={65} alt="" />
        </CUIBox>
        <TBox>
          <PCTTypography variant="h4"> {title}</PCTTypography>
          <PCSTypography variant="body1">{subtitle}</PCSTypography>
        </TBox>
      </CUCardContent>
    </PCRCard>
  );
};

export default shopCard;

       