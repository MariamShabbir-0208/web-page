import Footer from "@/layouts/footer/footer";
import Header from "@/layouts/header/header";
import Browse from "@/sections/home/Browse-image/browseImage";
import Furniture from "@/sections/home/furniture/furniture";
import HomeHero from "@/sections/home/home-hero/homehero";
import Products from "@/sections/home/Products/products";
import Services from "@/sections/home/Rooms-Inspiration/rooms";
import { Container } from "@mui/material";

export default function HomePage() {
  return (
    <Container >
      <HomeHero/>
      <Browse/>
      <Products/>
      <Services/>
      <Furniture/>
    </Container>
  );
}
