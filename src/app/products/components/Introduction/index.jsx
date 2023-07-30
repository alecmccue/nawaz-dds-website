import React from "react";
import { IntroductionWrapepr } from "../../styles";
import { Typography } from "@mui/material";

const Introduction = () => (
  <IntroductionWrapepr>
    <Typography style={{ fontSize: "2rem", fontWeight: "450" }}>
      OUR PRODUCTS
    </Typography>
    <Typography style={{ fontSize: "1.2rem", fontWeight: "450" }}>
      We are dedicated to providing you with the best in dental care and
      technology. We understand the importance of a comfortable and efficient
      dental experience, which is why we have curated a selection of
      state-of-the-art products to enhance your oral health journey. Trust in
      our commitment to excellence as we bring you cutting-edge products to make
      your dental visits as enjoyable and effective as possible. Your smile is
      our priority, and we can't wait to provide you with the exceptional care
      you deserve.
    </Typography>
  </IntroductionWrapepr>
);

export default Introduction;
