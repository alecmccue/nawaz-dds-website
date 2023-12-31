"use client";
import React from "react";
import { motion } from "framer-motion";
import CosmeticDentistry from "./components/CosmeticDentistry";
import Dentures from "./components/Dentures";
import Extractions from "./components/Extractions";
import GeneralDentistry from "./components/GeneralDentistry";
import Implants from "./components/Implants";
import Invisalign from "./components/Invisalign";
import PartialDentures from "./components/PartialDentures";
import RootCanal from "./components/RootCanal";
import { ServicesWrapper } from "./styles";

const animationVariant = {
    hide: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const Services = () => (
    <ServicesWrapper>
        <motion.div
            initial="hide"
            exit="hide"
            whileInView="show"
            variants={animationVariant}
        >
            <GeneralDentistry />
        </motion.div>
        <motion.div
            initial="hide"
            exit="hide"
            whileInView="show"
            variants={animationVariant}
        >
            <CosmeticDentistry />
        </motion.div>
        <motion.div
            initial="hide"
            exit="hide"
            whileInView="show"
            variants={animationVariant}
        >
            <Invisalign />
        </motion.div>
        <motion.div
            initial="hide"
            exit="hide"
            whileInView="show"
            variants={animationVariant}
        >
            <Implants />
        </motion.div>
        <motion.div
            initial="hide"
            exit="hide"
            whileInView="show"
            variants={animationVariant}
        >
            <RootCanal />
        </motion.div>
        <motion.div
            initial="hide"
            exit="hide"
            whileInView="show"
            variants={animationVariant}
        >
            <Extractions />
        </motion.div>
        <motion.div
            initial="hide"
            exit="hide"
            whileInView="show"
            variants={animationVariant}
        >
            <Dentures />
        </motion.div>
        <motion.div
            initial="hide"
            exit="hide"
            whileInView="show"
            variants={animationVariant}
        >
            <PartialDentures />
        </motion.div>
    </ServicesWrapper>
)

export default Services;
