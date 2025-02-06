import React, { Suspense } from 'react';
import MainHero from "../../../src/sections/shop/main-hero/mainHero";
import AllProducts from "../../../src/sections/shop/all-products/allProducts"; 
import Badges from '../../../src/sections/shop/Badges/badges';

const Shop = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Main Hero Section */}
      <MainHero />
      <AllProducts /> 
      <Badges/>
    </Suspense>
  );
}

export default Shop;
