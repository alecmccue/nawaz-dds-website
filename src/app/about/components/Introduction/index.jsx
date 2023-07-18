import React from "react";
import {
  BackgroundImage,
  IntroWrapper,
  OverlayText,
} from "./styles";
import { Typography } from "@mui/material";

const Introduction = () => (
  <IntroWrapper>
    <BackgroundImage src="/nawaz-profilepicture.jpg" alt="dr-nawaz" />
    <OverlayText>
      <Typography style={{ fontSize: "3rem" }}>
        Dr. Mirweiss Nawaz, DDS
      </Typography>
      <Typography style={{ fontSize: "1.5rem" }}>
        Personalized & High-Tech NOVA Dentist
      </Typography>
      <Typography style={{ fontSize: "1.1rem" }}>
        Since [YEAR], Dr. Nawaz has served the Northern Virginia community. He helps patients take control of their dental health and achieve the smiles they've always wanted.
      </Typography>
    </OverlayText>
  </IntroWrapper>
);

export default Introduction;