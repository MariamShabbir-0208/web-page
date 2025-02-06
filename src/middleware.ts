import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Protect these routes - add more as needed
export const config = {
  matcher: [
    "/profile",
    "/cart",
    "/checkout",
    // Add more protected routes here
  ],
};
