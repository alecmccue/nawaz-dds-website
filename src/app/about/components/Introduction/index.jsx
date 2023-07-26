import React from "react";
import { BackgroundImage, IntroWrapper, OverlayText } from "./styles";
import { Typography } from "@mui/material";

const Introduction = () => (
  <IntroWrapper>
    <BackgroundImage src="/consultation.jpg" alt="dr-nawaz" />
    <OverlayText>
      <Typography style={{ fontSize: "1.3rem", fontWeight: "500" }}>
        ABOUT FAMILY & COSMETIC DENTISTRY
      </Typography>
      <Typography style={{ fontSize: "2.5rem", fontWeight: "500" }}>
        Creating lasting smiles with positive dental experiences, fostering
        lifelong connections.
      </Typography>
      <Typography style={{ fontSize: "1.1rem", fontWeight: "500" }}>
        OR CALL (703) 430 3838
      </Typography>
    </OverlayText>
  </IntroWrapper>
);

export default Introduction;
