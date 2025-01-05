import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

const TotalSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9F1E7",
        width: "395px",
        height: "390px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
        boxSizing: "border-box",
        marginLeft:"20px"
      }}
    >
      {/* First Box */}
      <Box
        sx={{
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold",fontSize:"32px" }}>
          Cart Totals
        </Typography>
      </Box>

      <Box
        sx={{
          height: "90px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Subtotal
        </Typography>
        <Typography variant="h6" sx={{ color:"#9F9F9F" ,fontSize:"16px" }}>
          Rs 19000,000
        </Typography>
      </Box>

      {/* Third Box with Subtotal and Rs 250,000 */}
      <Box
        sx={{
          height: "90px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Total
        </Typography>
        <Typography variant="h6" sx={{ color:"#B88E2F" ,fontSize:"22px"}}>
          Rs  19000,000
        </Typography>
      </Box>


      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<Link href="/checkout">
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            color: '#D4AF37',
            marginBottom: 2,
            backgroundColor: 'white',
            ':hover': {
              backgroundColor: '#D4AF37',
              color: 'white',
            },
          }}
        >
          Check Out
        </Button>
      </Link>
      </Box>

     
    </Box>
  );
};

export default TotalSection;
