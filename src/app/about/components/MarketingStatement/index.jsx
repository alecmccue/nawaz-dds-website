import React from "react";
import { LeftColumn, MarketingImage, MarketingStatementWrapper, RightColumn } from "./styles";
import { Typography } from "@mui/material";

const MarketingStatement = () => (
  <MarketingStatementWrapper>
    <LeftColumn>
      <Typography style={{ fontSize: "3rem" }}>
        Designed Around Your Needs
      </Typography>
      <Typography style={{ fontSize: "1.25rem" }}>
        At our Family and Cosmetic Dentistry practice, we prioritize the needs
        of our patients above all else. From meticulous attention to detail and
        personalized care to the utilization of cutting-edge treatment options,
        we are committed to enhancing every aspect of your dental journey. Our
        goal is not only to ensure your oral health but also to provide a
        nurturing and empowering experience that fosters your overall well-being
        and lasting aesthetic appeal. With a focus on family-friendly care and
        cosmetic dentistry expertise, we are dedicated to delivering exceptional
        dental services that exceed your expectations.
      </Typography>
    </LeftColumn>

    <RightColumn>
        <MarketingImage src="office.jpg" alt="office" />
    </RightColumn>
  </MarketingStatementWrapper>
);

export default MarketingStatement;
