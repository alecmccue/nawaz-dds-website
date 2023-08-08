import React from "react";
import { IntroWrapper } from "../../styles";
import { Typography } from "@mui/material";

const Intro = () => (
  <IntroWrapper>
    <Typography
      style={{ fontSize: "2.4rem", textAlign: "center", marginBottom: "1rem" }}
      className="poppins"
    >
      Insurance
    </Typography>
    <Typography
      className="nunito"
      style={{ fontSize: "1.4rem", maxWidth: "80rem", textAlign: "center" }}
    >
      At Family & Cosmetic dental, our dedication lies in ensuring your time
      with us is enjoyable, starting from the primary assessment to the
      financial procedures. We are pleased to be in-network with all PPO
      insurance plans, ensuring that you can fully utilize your insurance
    </Typography>
  </IntroWrapper>
);

export default Intro;
