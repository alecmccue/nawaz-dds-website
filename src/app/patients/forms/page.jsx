"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FormsWrapper } from "./styles";
import HipaaForm from "./components/HipaaForm";
import MedicalHistoryForm from "./components/MedicalHistoryForm";
import Intro from "./components/Intro";

const Forms = () => {
  const [medicalHistoryInView, setMedicalHistoryInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const medicalHistoryPosition = 250;

      const scrollY = window.scrollY;

      setMedicalHistoryInView(scrollY > medicalHistoryPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        animate={{
          opacity: medicalHistoryInView ? 1 : 0,
          y: medicalHistoryInView ? 0 : 50,
        }}
        transition={{ duration: 0.5 }}
      >
        <MedicalHistoryForm />
      </motion.div>
    </FormsWrapper>
  );
};

export default Forms;
