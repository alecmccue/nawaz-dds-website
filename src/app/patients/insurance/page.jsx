"use client";
import React from "react";
import { motion } from "framer-motion";
import { InsuranceBanner, InsuranceWrapper } from "./styles";
import CareCredit from "./components/CareCredit";
import Intro from "./components/Intro";

const Insurance = () => (
    <>
        <InsuranceBanner>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Intro />
            </motion.div>
        </InsuranceBanner>
        <InsuranceWrapper>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <CareCredit />
            </motion.div>
        </InsuranceWrapper>
    </>
);

export default Insurance;
