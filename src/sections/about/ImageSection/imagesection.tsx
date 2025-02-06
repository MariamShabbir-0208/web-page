import React from 'react';
import { Box, Grid, Typography, Icon, Button } from '@mui/material';
import AdminIcon from '@mui/icons-material/Person';
import DateIcon from '@mui/icons-material/AccessTime';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import Image from 'next/image';
import { mockData } from '@/Data/dummy';

// Mock Data
// const mockData = [
//   {
//     title: "Going all-in with millennial design",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "Exploring new ways of decorating",
//     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "Handmade pieces that took time to make",
//     subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
//     image: "https://via.placeholder.com/150",
//   }
// ];

// The ImageSection component
const ImageSection: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 3 }}>
      {/* Parent Box Container */}
      <Grid container spacing={3}>
        {mockData.map((item, index) => (
          <Grid item xs={12} sm={12} md={12} key={index}>
            {/* 1st Child Box - Image */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
              <Box
  sx={{
    width: '100%',
    height: {
      xs: '300px',
      sm: '400px',
      lg: '520px',
    },
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }}
>
  <Image
    src={item.image}
    alt={item.title}
    fill
    style={{
      objectFit: 'contain',
    }}
  />
</Box>

              </Grid>

              {/* 2nd Child Box - Icon and Text */}
              <Grid item xs={12} md={12}>
                <Box sx={{ display: 'flex', justifyContent: 'start',height:"10vh",gap:"20px" }}>
                  {/* Admin Box */}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Icon sx={{ marginRight: 1,paddingBottom:"35px",justifyContent: 'start' }}>
                      <AdminIcon />
                    </Icon>
                    <Typography variant="body1">Admin</Typography>
                  </Box>

                  {/* Date Box */}
                  <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'start' }}>
                    <Icon sx={{ marginRight: 1,paddingBottom:"35px" }}>
                      <DateIcon />
                    </Icon>
                    <Typography variant="body1">12/09/2024</Typography>
                  </Box>

                  {/* Loyalty Box */}
                  <Box sx={{ display: 'flex', alignItems: 'center',justifyContent: 'start'}}>
                    <Icon sx={{ marginRight: 1,paddingBottom:"35px" }}>
                      <LoyaltyIcon />
                    </Icon>
                    <Typography variant="body1">Wooden</Typography>
                  </Box>
                </Box>
              </Grid>

              {/* 3rd Child Box - Title */}
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  {item.title}
                </Typography>
              </Grid>

              {/* 4th Child Box - Description */}
              <Grid item xs={12}>
                <Typography variant="body2" paragraph>
                  {item.description}
                </Typography>
              </Grid>

              {/* 5th Child Box - Read More Button */}
              <Grid item xs={12}>
                <Button variant="text" color="success" sx={{ textTransform: 'none' }}>
                  Read More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ImageSection;
