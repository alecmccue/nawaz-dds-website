"use client"
import React from "react";
import { motion } from "framer-motion";
import { FormsWrapper } from "./styles";
import HipaaForm from "./components/HipaaForm";
import MedicalHistoryForm from "./components/MedicalHistoryForm";
import Intro from "./components/Intro";

const Forms = () => {
  return (
    <FormsWrapper>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5 }}
      >
        <Intro />
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
  );
};

export default Forms;
