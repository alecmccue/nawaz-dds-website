"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProductsWrapper } from "./styles";
import DigitalXray from "./components/DigitalXray";
import IntraoralScanner from "./components/IntraoralScanner";
import Introduction from "./components/Introduction";
import ZoomWhitening from "./components/ZoomWhitening";

const Products = () => {
  const [intraoralInView, setIntraoralInView] = useState(false);
  const [digitalXrayInView, setDigitalXrayInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const intraoralPosition = 500;
      const digitalXrayPosition = 700;

      const scrollY = window.scrollY;

      setIntraoralInView(scrollY > intraoralPosition);
      setDigitalXrayInView(scrollY > digitalXrayPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ProductsWrapper>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5 }}
      >
        <Introduction />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ZoomWhitening />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: intraoralInView ? 1 : 0, y: intraoralInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <IntraoralScanner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: digitalXrayInView ? 1 : 0, y: digitalXrayInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <DigitalXray />
      </motion.div>
    </ProductsWrapper>
  );
};

export default Products;
