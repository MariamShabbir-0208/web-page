"use client";
import React from "react";
import { Grid, TextField, Typography, Container, Box, FormControlLabel, Checkbox } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  companyName: yup.string(),
  country: yup.string().required("Country is required"),
  streetAddress: yup.string().required("Street address is required"),
  city: yup.string().required("City is required"),
  province: yup.string().required("Province is required"),
  zipCode: yup.string().required("ZIP code is required"),
  phone: yup.string()
    .required("Phone number is required")
    .matches(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  email: yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  createAccount: yup.boolean(),
  saveInfo: yup.boolean(),
});

type BillingFormData = yup.InferType<typeof schema>;

const Billing = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<BillingFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      createAccount: false,
      saveInfo: false,
    }
  });

  const onSubmit = (data: BillingFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "500", color: "#333333" }}>
        Billing Details
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {/* First Name */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="First Name"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  variant="outlined"
                  sx={{ bgcolor: "#FFFFFF" }}
                />
              )}
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Last Name"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  variant="outlined"
                  sx={{ bgcolor: "#FFFFFF" }}
                />
              )}
            />
          </Grid>

          {/* Company Name */}
          <Grid item xs={12}>
            <Controller
              name="companyName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Company Name (Optional)"
                  variant="outlined"
                  sx={{ bgcolor: "#FFFFFF" }}
                />
              )}
            />
          </Grid>

          {/* Country */}
          <Grid item xs={12}>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Country"
                  error={!!errors.country}
                  helperText={errors.country?.message}
                  variant="outlined"
                  sx={{ bgcolor: "#FFFFFF" }}
                />
              )}
            />
          </Grid>

          {/* Street Address */}
          <Grid item xs={12}>
            <Controller
              name="streetAddress"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Street Address"
                  error={!!errors.streetAddress}
                  helperText={errors.streetAddress?.message}
                  variant="outlined"
                  sx={{ bgcolor: "#FFFFFF" }}
                />
              )}
            />
          </Grid>

          {/* City */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Town / City"
                  error={!!errors.city}
                  helperText={errors.city?.message}
                  variant="outlined"
                  sx={{ bgcolor: "#FFFFFF" }}
                />
              )}
            />
          </Grid>

          {/* Province */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="province"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Province"
                  error={!!errors.province}
                  helperText={errors.province?.message}
                  variant="outlined"
                  sx={{ bgcolor: "#FFFFFF" }}
                />
              )}
            />
          </Grid>

          {/* ZIP Code */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="zipCode"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="ZIP Code"
                  error={!!errors.zipCode}
                  helperText={errors.zipCode?.message}
                  variant="outlined"
                  sx={{ bgcolor: "#FFFFFF" }}
                />
              )}
            />
          </Grid>

          {/* Phone */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Phone"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  variant="outlined"
                  type="tel"
                  sx={{ bgcolor: "#FFFFFF" }}
                />
              )}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email Address"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  variant="outlined"
                  type="email"
                  sx={{ bgcolor: "#FFFFFF" }}
                />
              )}
            />
          </Grid>

          {/* Account Creation Checkbox */}
          <Grid item xs={12}>
            <Controller
              name="createAccount"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      onChange={onChange}
                      sx={{
                        color: "#B88E2F",
                        '&.Mui-checked': {
                          color: "#B88E2F",
                        },
                      }}
                    />
                  }
                  label="Create an account?"
                />
              )}
            />
          </Grid>

          {/* Save Info Checkbox */}
          <Grid item xs={12}>
            <Controller
              name="saveInfo"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      onChange={onChange}
                      sx={{
                        color: "#B88E2F",
                        '&.Mui-checked': {
                          color: "#B88E2F",
                        },
                      }}
                    />
                  }
                  label="Save this information for next time"
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Billing;
