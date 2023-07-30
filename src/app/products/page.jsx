"use client";

import React from "react";
import { ProductsWrapper } from "./styles";
import IntraoralScanner from "./components/IntraoralScanner";
import DigitalXray from "./components/DigitalXray";
import ZoomWhitening from "./components/ZoomWhitening";
import Introduction from "./components/Introduction";

const Products = () => (
  <ProductsWrapper>
    <Introduction />
    <ZoomWhitening />
    <IntraoralScanner />
    <DigitalXray />
  </ProductsWrapper>
);

export default Products;
