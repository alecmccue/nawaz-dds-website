"use client";

import { ServicesWrapper } from "./styles";
import CosmeticDentistry from "./components/CosmeticDentistry";
import GeneralDentistry from "./components/GeneralDentistry";
import Invisalign from "./components/Invisalign";
import Implants from "./components/Implants";
import RootCanal from "./components/RootCanal";
import Extractions from "./components/Extractions";
import Dentures from "./components/Dentures";
import PartialDentures from "./components/PartialDentures";

const Services = () => {
  return (
    <ServicesWrapper>
        <GeneralDentistry />
        <CosmeticDentistry />
        <Invisalign />
        <Implants />
        <RootCanal />
        <Extractions />
        <Dentures />
        <PartialDentures />
    </ServicesWrapper>
  );
};

export default Services;
