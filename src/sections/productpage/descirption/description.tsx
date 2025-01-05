"use client";
import { Box, Button, Container, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import Image1 from "../../../../public/ProductDetail/01.png";
import Image2 from "../../../../public/ProductDetail/02.png";

const WholeDetails = () => {
  const [activeSection, setActiveSection] = useState<'description' | 'additional' | 'reviews'>('description');

  const handleSectionChange = (section: 'description' | 'additional' | 'reviews') => {
    setActiveSection(section);
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 3 }}>
      <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 3,
    flexDirection: {
      xs: 'column', // Applies for xs and sm
      sm: 'column',
      md: 'row',    // Applies for md, lg, and xl
      lg: 'row',
      xl: 'row',
    },
  }}
>
        <Button
          variant={activeSection === 'description' ? 'contained' : 'outlined'}
          color="success"
          onClick={() => handleSectionChange('description')}
          sx={{ margin: 1, minWidth: 150 }}
        >
          Description
        </Button>
        <Button
          variant={activeSection === 'additional' ? 'contained' : 'outlined'}
          color="success"
          onClick={() => handleSectionChange('additional')}
          sx={{ margin: 1, minWidth: 150 }}
        >
          Additional Information
        </Button>
        <Button
          variant={activeSection === 'reviews' ? 'contained' : 'outlined'}
          color="success"
          onClick={() => handleSectionChange('reviews')}
          sx={{ margin: 1, minWidth: 150 }}
        >
          Reviews
        </Button>
      </Box>

      <Divider sx={{ marginBottom: 2 }} />

      <Box sx={{ marginTop: 2 }}>
        {activeSection === 'description' && (
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Product Description
          </Typography>
        )}
      {activeSection === 'description' && (
  <>
    <Typography variant="body1" sx={{ marginBottom: 3 }}>
      Here is a detailed description of the product. It covers all aspects of the item, including its features, materials, and usage.
      Here is a detailed description of the product. It covers all aspects of the item, including its features, materials, and usage.
      Here is a detailed description of the product.
    </Typography>

    <Typography variant="body1" sx={{ marginBottom: 4 }}>
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
    </Typography>
  </>
)}


        {activeSection === 'additional' && (
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Additional Information
          </Typography>
        )}
        {activeSection === 'additional' && (
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            Additional information such as dimensions, weight, and care instructions go here.
          </Typography>
        )}

        {activeSection === 'reviews' && (
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Customer Reviews
          </Typography>
        )}
        {activeSection === 'reviews' && (
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="body1">
              "This is the best product I've ever bought!" - Customer 1
            </Typography>
            <Typography variant="body1">
              "Worth every penny, highly recommend!" - Customer 2
            </Typography>
            <Typography variant="body1">
              "Good quality, but the size wasn't what I expected." - Customer 3
            </Typography>
          </Box>
        )}
      </Box>


 <Box
        sx={{
          display: 'flex',
          justifyContent:"center",
          flexDirection: { xs: 'column', sm: 'row' }, 
          gap: '10px',
          marginTop: 4,
        }}
      >
        {/* Child Box 1 */}
        <Box
          sx={{
            backgroundColor: '#F9F1E7',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
            width: { xs: '100%', sm: '48%' }, 
            height: 300,
          }}
        >
          
          <Image src={Image2} alt="Image 1" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Box>

        <Box
          sx={{
            backgroundColor: '#F9F1E7',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
            width: { xs: '100%', sm: '48%' }, 
            height: 300,
          }}
        >
        <Image src={Image1} alt="Image 1" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Box>
      </Box>


    </Container>
  );
};

export default WholeDetails;
