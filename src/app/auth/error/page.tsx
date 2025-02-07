"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Authentication Error
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        {error === "Configuration"
          ? "There was a problem with the server configuration. Please try again later."
          : "An error occurred during authentication. Please try again."}
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#B88E2F",
              "&:hover": {
                backgroundColor: "#97732A",
              },
            }}
          >
            Return to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default function ErrorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorContent />
    </Suspense>
  );
}
