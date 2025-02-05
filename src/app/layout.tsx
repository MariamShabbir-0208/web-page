import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/layouts/header/header";
import Footer from "@/layouts/footer/footer";
import { Container } from "@mui/material";
import ShopContextProvider from "@/context/shopcontext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Furniro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body
        // className={`debug-screens`}
        className={
          process.env.NODE_ENV ==="development" ? "debug-screens" : ""
        }
      >
        <ShopContextProvider>
          <Container maxWidth="lg">
            <Header />
            {children} {/* This will be the main content of each page */}
            <Footer />
          </Container>
        </ShopContextProvider>
      </body>
    </html>
  );
}
