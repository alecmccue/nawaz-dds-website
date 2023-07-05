"use client";

import { Typography } from "@mui/material";
import { AboutWrapper, IntroWrapper, OfficeImage } from "./styles";

const About = () => {
  return (
    <AboutWrapper>
      <IntroWrapper>
        <Typography style={{ fontSize: "3rem" }}>
          About Family & Cosmetic Dentistry
        </Typography>
        <Typography style={{ fontSize: "1.5rem" }}>
          Meet our excellent team.
        </Typography>
      </IntroWrapper>
    </AboutWrapper>
  );
};

export default About;
