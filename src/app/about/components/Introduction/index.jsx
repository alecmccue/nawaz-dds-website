import React from "react";
import {
  BackgroundImage,
  LeftColumn,
  RightColumn,
  IntroWrapper,
  OverlayImage,
} from "./styles";
import { Typography } from "@mui/material";

const Introduction = () => (
  <IntroWrapper>
    <LeftColumn>
      <BackgroundImage src="/office-stock.jpg" alt="dr-nawaz" />
      <OverlayImage src="/nawaz-profilepicture.jpg" alt="dr-nawaz" />
    </LeftColumn>
    <RightColumn>
      <Typography style={{ fontSize: "1.5rem" }}>
        About Family & Cosmetic Dentistry
      </Typography>
      <Typography style={{ fontSize: "3rem" }}>
        A Dentist You Can Trust
      </Typography>
    </RightColumn>
  </IntroWrapper>
);

export default Introduction;