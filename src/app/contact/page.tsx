import React from 'react';
import MainHero from "../../../src/sections/contact/main-hero/mainHero";
import Form from "../../../src/sections/contact/Form/Form"; 
import Badges from '../../../src/sections/shop/Badges/badges';
import { Box, Typography } from '@mui/material';
import Adress from '@/sections/contact/Adress/adress';

const Contact = () => {
  return (
    <>
      <MainHero />
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop:"15px",
        gap: 2, 
        padding: 2, 
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: '36px',
            fontWeight: 'bold', 
            textAlign: 'center',
          }}
        >
          Get In Touch With Us
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            color: '#9F9F9F',
            textAlign: 'center',
            lineHeight: 1.6, 
          }}
        >
          For More Information About Our Product & Services. Please Feel Free To Drop Us  <br/>An Email.
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </Typography>
      </Box>
    </Box>
    <Adress/>
      <Form/>
      <Badges/>
    </>
  );
}

export default Contact;
