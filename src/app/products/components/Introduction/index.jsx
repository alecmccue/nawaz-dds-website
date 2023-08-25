import React from "react";
import { IntroductionTextWrapper, IntroductionWrapper } from "../../styles";
import { Typography } from "@mui/material";

const Introduction = () => (
  <IntroductionWrapper>
    <IntroductionTextWrapper>
      <Typography
        style={{ fontSize: "2.4rem", marginBottom: "1rem" }}
        className="poppins"
      >
        OUR PRODUCTS
      </Typography>
      <Typography style={{ fontSize: "1.4rem" }} className="nunito">
        We are dedicated to providing you with the best in dental care and
        technology and understand the importance of a comfortable and efficient
        dental experience, which is why we have curated a selection of
        state-of-the-art products to enhance your oral health journey. Your
        smile is our priority, and we can't wait to provide you with the
        exceptional care you deserve.
      </Typography>
    </IntroductionTextWrapper>
  </IntroductionWrapper>
);

export default Introduction;
