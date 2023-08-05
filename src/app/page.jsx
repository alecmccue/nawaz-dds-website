"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FAQs from "./home/components/FAQs";
import InformationCards from "./home/components/InformationCards";
import Intro from "./home/components/Intro";
import Main from "./home/components/Main";
import Testimonials from "./home/components/Testimonials";
import { HomeWrapper } from "./styles";

const Home = () => {
  const [infoInView, setInfoInView] = useState(false);
  const [mainInView, setMainInView] = useState(false);
  const [testInView, setTestInView] = useState(false);
  const [faqInView, setFaqInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const infoPosition = 300;
      const mainPosition = 450;
      const testPosition = 1000;
      const faqPosition = 1700;

      const scrollY = window.scrollY;

      setInfoInView(scrollY > infoPosition);
      setMainInView(scrollY > mainPosition);
      setTestInView(scrollY > testPosition);
      setFaqInView(scrollY > faqPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HomeWrapper>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Intro />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: infoInView ? 1 : 0, y: infoInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <InformationCards />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: mainInView ? 1 : 0, y: mainInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <Main />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: testInView ? 1 : 0, y: testInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: faqInView ? 1 : 0, y: faqInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <FAQs />
      </motion.div>
    </HomeWrapper>
  );
};

export default Home;
