'use client'
import React from "react";
import { ServicesWrapper } from "./styles";
import { motion } from "framer-motion";
import CosmeticDentistry from "./components/CosmeticDentistry";
import Dentures from "./components/Dentures";
import Extractions from "./components/Extractions";
import GeneralDentistry from "./components/GeneralDentistry";
import Implants from "./components/Implants";
import Invisalign from "./components/Invisalign";
import PartialDentures from "./components/PartialDentures";
import RootCanal from "./components/RootCanal";

const AnimatedComponent = ({ delay, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

const Services = () => {
  return (
    <ServicesWrapper>
      <AnimatedComponent delay={0}>
        <GeneralDentistry />
      </AnimatedComponent>
      <AnimatedComponent delay={0.1}>
        <CosmeticDentistry />
      </AnimatedComponent>
      <AnimatedComponent delay={0.2}>
        <Invisalign />
      </AnimatedComponent>
      <AnimatedComponent delay={0.3}>
        <Implants />
      </AnimatedComponent>
      <AnimatedComponent delay={0.4}>
        <RootCanal />
      </AnimatedComponent>
      <AnimatedComponent delay={0.5}>
        <Extractions />
      </AnimatedComponent>
      <AnimatedComponent delay={0.6}>
        <Dentures />
      </AnimatedComponent>
      <AnimatedComponent delay={0.7}>
        <PartialDentures />
      </AnimatedComponent>
    </ServicesWrapper>
  );
};

export default Services;
