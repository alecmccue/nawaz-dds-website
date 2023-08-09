"use client";
import React from "react";
import { motion } from "framer-motion";
import FAQs from "./home/components/FAQs";
import InformationCards from "./home/components/InformationCards";
import Intro from "./home/components/Intro";
import Main from "./home/components/Main";
import Testimonials from "./home/components/Testimonials";
import { HomeWrapper } from "./styles";

const animationVariant = {
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
const Home = () => {
  return (
    <HomeWrapper>
      <motion.div
        initial="hide"
        exit="hide"
        whileInView="show"
        variants={animationVariant}
      >
        <Intro />
      </motion.div>

      <motion.div
        initial="hide"
        exit="hide"
        whileInView="show"
        variants={animationVariant}
      >
        <InformationCards />
      </motion.div>

      <motion.div
        initial="hide"
        exit="hide"
        whileInView="show"
        variants={animationVariant}
      >
        <Main />
      </motion.div>

      <motion.div
        initial="hide"
        exit="hide"
        whileInView="show"
        variants={animationVariant}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial="hide"
        exit="hide"
        whileInView="show"
        variants={animationVariant}
      >
        <FAQs />
      </motion.div>
    </HomeWrapper>
  );
};

export default Home;
