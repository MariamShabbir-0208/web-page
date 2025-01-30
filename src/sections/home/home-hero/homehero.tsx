"use client";
import React from "react";
import {
  CardContent,
  Button,
  Typography,
  Box,
  Container,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import { useShopContext } from "@/context/shopcontext";

const RightBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  backgroundColor: "#FFF3E3",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0px 7px 30px rgba(0, 0, 0, 0.1)",
  maxWidth: "400px",
  textAlign: "center",
}));

const SearchTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#E8E8E8',
    },
    '&:hover fieldset': {
      borderColor: '#B88E2F',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#B88E2F',
    },
  },
  '& .MuiInputBase-input': {
    padding: '12px 14px',
  },
});

const HomeHero = () => {
  const router = useRouter();
  const { handleSearch } = useShopContext();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleSearch(searchQuery);
      router.push('/shop');
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url('/Images/MainHero Image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Container>
        <Grid container justifyContent="flex-end" alignItems="center">
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
          >
            <RightBox>
              <CardContent>
                <Typography sx={{textAlign:"left"}} variant="body1">
                  New Arrival
                </Typography>
                <Typography sx={{ fontWeight: 700, mb: 2, color:"#B88E2F", textAlign:"left"}} variant="h4">
                  Discover Our New Collection
                </Typography>
                <Typography sx={{textAlign:"left", mb: 3}} variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </Typography>

                <Box component="form" onSubmit={handleSearchSubmit} sx={{ mb: 3 }}>
                  <SearchTextField
                    fullWidth
                    placeholder="Search for furniture..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton 
                            type="submit"
                            sx={{ 
                              color: '#B88E2F',
                              '&:hover': {
                                backgroundColor: 'rgba(184, 142, 47, 0.04)'
                              }
                            }}
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box 
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start', 
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      marginTop: '20px',
                      backgroundColor: '#B88E2F',
                      '&:hover': {
                        backgroundColor: '#9A7B2F',
                      },
                    }}
                    onClick={() => router.push('/shop')}
                  >
                    Browse Collection
                  </Button>
                </Box>
              </CardContent>
            </RightBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeHero;
