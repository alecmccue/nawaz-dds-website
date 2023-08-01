"use client";

import { ServicesWrapper } from "./styles";
import CosmeticDentistry from "./components/CosmeticDentistry";
import Dentures from "./components/Dentures";
import Extractions from "./components/Extractions";
import GeneralDentistry from "./components/GeneralDentistry";
import Implants from "./components/Implants";
import Invisalign from "./components/Invisalign";
import PartialDentures from "./components/PartialDentures";
import RootCanal from "./components/RootCanal";

const Services = () => (
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

export default Services;