import React from "react";
import { CardWrapper } from "./styles";
import LocationCard from "./components/LocationCard";
import OfficeHoursCard from "./components/OfficeHoursCard";
import PhoneCard from "./components/PhoneCard";

const InformationCards = () => (
  <CardWrapper>
    <LocationCard />
    <OfficeHoursCard />
    <PhoneCard />
  </CardWrapper>
);

export default InformationCards;
