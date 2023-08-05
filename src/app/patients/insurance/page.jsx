"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { InsuranceWrapper } from "./styles";
import CareCredit from "./components/CareCredit";
import Intro from "./components/Intro";

const Insurance = () => (
  <InsuranceWrapper>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Intro />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CareCredit />
    </motion.div>
  </InsuranceWrapper>
);

export default Insurance;
