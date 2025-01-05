// import React from "react";
import { Grid, TextField, Typography, Container, Box } from "@mui/material";

const Billing = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Billing Details
      </Typography>
      <Box component="form" noValidate>
        <Grid container spacing={3}>
          {/* First Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              required
            />
          </Grid>
          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              required
            />
          </Grid>
          {/* Company Name */}
          <Grid item xs={12}>
            <TextField fullWidth label="Company Name" variant="outlined" />
          </Grid>
          {/* Country / Region */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Country / Region"
              variant="outlined"
              required
            />
          </Grid>
          {/* Street Address */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Street Address"
              variant="outlined"
              required
            />
          </Grid>
          {/* Town / City */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Town / City"
              variant="outlined"
              required
            />
          </Grid>
          {/* Province */}
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Province" variant="outlined" required />
          </Grid>
          {/* Zip Code */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ZIP Code"
              variant="outlined"
              required
            />
          </Grid>
          {/* Phone */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              required
              type="tel"
            />
          </Grid>
          {/* Email Address */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              required
              type="email"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Billing;
