"use client";

import { ServicesWrapper } from "./styles";
import CosmeticDentistry from "./components/CosmeticDentistry";
import GeneralDentistry from "./components/GeneralDentistry";

const Services = () => {
  return (
    <ServicesWrapper>
        <GeneralDentistry />
        <CosmeticDentistry />
        {/* Invisalign */}
        {/* Implants */}
        {/* Root Canals  */}
        {/* Extractions */}
        {/* Dentures  */}
        {/* Partial Dentures  */}
    </ServicesWrapper>
  );
};

export default Services;
