"use client";
import React from "react";
import HipaaForm from "./components/HipaaForm";
import Intro from "./components/Intro";
import MedicalHistoryForm from "./components/MedicalHistoryForm";
import { FormBanner, FormColumn, FormsWrapper, FormText } from "./styles";
import { motion } from "framer-motion";

const Forms = () => (
  <>
    <FormBanner>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Intro />
      </motion.div>
    </FormBanner>
    <FormsWrapper>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FormText>
          If you are a new patient and Family & Cosmetic Dentistry, you can
          easily access and download HIPAA (Health Insurance Portability and
          Accountability Act) and Medical History forms to kickstart your
          journey with us! Ensuring the utmost privacy and comprehensive
          understanding of your health background, these forms play a pivotal
          role in providing you with personalized and top-notch care. Simply
          download, fill out, and bring them along to your first appointment for
          a seamless and efficient experience. Your well-being is our priority,
          and these forms are the first step in making your healthcare journey
          with us a smooth one.
        </FormText>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HipaaForm />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MedicalHistoryForm />
      </motion.div>
    </FormsWrapper>
  </>
);

export default Forms;
