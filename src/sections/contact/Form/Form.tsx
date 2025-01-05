"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
      }}
    >
     <Box
  sx={{
    margin: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    border: "3px solid #FFF",
    width: "55%",
    backgroundColor: "rgba(12, 42, 104, 0.15)",
    borderRadius: "8px",
    padding: {
      xs: "5px",
      sm: "5px", 
      md: "5px", 
      lg: "0px 30px", 
    },
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
  }}
>
        <Typography
          sx={{
            margin: " 30px 13px",
            fontSize: "32px",
            fontWeight: 600,
            textAlign: "center",
            color: "black",
            lineHeight: "36px",
          }}
          component="h1"
          variant="h5"
        >
          Get a Free <br /> Consultation
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            sx={{
              border: "1px solid black ",
            }}
            margin="normal"
            required
            fullWidth
            placeholder="Full Name"
            inputProps={{
              style: { color: "black " },
            }}
          />
          <TextField
            sx={{
              border: "1px solid black ",
            }}
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="Enter Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputProps={{
              style: { color: "black " },
            }}
          />
          <TextField
            sx={{
              border: "1px solid black ",
            }}
            margin="normal"
            required
            fullWidth
            placeholder="Mobile Number"
            type="text"
            inputProps={{
              style: { color: "black " },
            }}
          />
          <TextField
            sx={{
              border: "1px solid black ",
            }}
            margin="normal"
            required
            fullWidth
            placeholder="Area, City"
            type="text"
            inputProps={{
              style: { color: "black" },
            }}
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              bgcolor: "#B88E2F",
              padding: "20px 40px",
              mt: 3,
              mb: 2,
              borderRadius: "10px",
              color: "white",
              "&:hover": {
                backgroundColor: "#B88E2F",
                fontSize: 15,
              },
            }}
          >
            {" "}
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
