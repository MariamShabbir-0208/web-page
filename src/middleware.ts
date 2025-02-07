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

// Only protect routes that require authentication
export const config = {
  matcher: [
    "/profile",
    // Add more protected routes here if needed
  ],
};
