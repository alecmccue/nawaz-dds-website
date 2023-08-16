"use client";
import React from "react";
import { motion } from "framer-motion";
import { AboutWrapper } from "./styles";
import VisitUs from "./components/VisitUs";
import OurCommitment from "./components/OurCommitment";
import MeetNawaz from "./components/MeetNawaz";
import MeetTeam from "./components/MeetTeam";

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

const animationVariant2 = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

const About = () => (
    <AboutWrapper>
        <motion.div
            initial="hide"
            exit="hide"
            whileInView="show"
            variants={animationVariant2}
        >
            <OurCommitment />
        </motion.div>
        <motion.div
            initial="hide"
            exit="hide"
            whileInView="show"
            variants={animationVariant}
        >
            <MeetNawaz />
        </motion.div>
        <motion.div
            initial="hide"
            exit="hide"
            whileInView="show"
            variants={animationVariant}
        >
            <MeetTeam />
        </motion.div>
        <motion.div
            initial="hide"
            exit="hide"
            whileInView="show"
            variants={animationVariant}
        >
            <VisitUs />
        </motion.div>
    </AboutWrapper>
)

export default About;
