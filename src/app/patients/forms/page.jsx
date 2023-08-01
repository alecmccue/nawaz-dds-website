"use client";

import { FormsWrapper } from "./styles";
import HipaaForm from "./components/HipaaForm";
import MedicalHistoryForm from "./components/MedicalHistoryForm";
import Intro from "./components/Intro";

const Forms = () => (
  <FormsWrapper>
    <Intro />
    <HipaaForm />
    <MedicalHistoryForm />
  </FormsWrapper>
);

export default Forms;