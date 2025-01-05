"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { PRBox, PRTypography, StarBox, TiteTypography } from "./styled";


interface BrowseCardProps {
    project: {
      title: string;
      image: string;
    };
  }


  const BrowseCard: React.FC<BrowseCardProps> = ({ project }) => {
  return (
    <Card sx={{  borderRadius: "0px 0px 8px 8px",bgcolor:"#FFFFFF"}} elevation={0}>
      <Stack>
        <Image
          className="responsive-card"
          style={{ margin: "auto" }}
          src={project.image}
          width={1000} // Adjust width as needed
          height={700} // Adjust height as needed
          alt=""
        />
      </Stack>

      <CardContent>
        <TiteTypography variant="h6"> {project.title}</TiteTypography>
      </CardContent>
    </Card>
  )
}

export default BrowseCard
