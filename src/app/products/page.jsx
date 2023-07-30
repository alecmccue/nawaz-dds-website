"use client";

import React from "react";
import { ProductsWrapper } from "./styles";
import DigitalXray from "./components/DigitalXray";
import IntraoralScanner from "./components/IntraoralScanner";
import Introduction from "./components/Introduction";
import ZoomWhitening from "./components/ZoomWhitening";

const Products = () => (
  <ProductsWrapper>
    <Introduction />
    <ZoomWhitening />
    <IntraoralScanner />
    <DigitalXray />
  </ProductsWrapper>
);

export default Products;
