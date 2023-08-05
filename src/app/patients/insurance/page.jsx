"use client";

import { InsuranceWrapper } from "./styles";
import CareCredit from "./components/CareCredit";
import Intro from "./components/Intro";

const Insurance = () => (
  <InsuranceWrapper>
    <Intro />
    <CareCredit />
  </InsuranceWrapper>
);

export default Insurance;