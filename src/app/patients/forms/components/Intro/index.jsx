import { Typography } from "@mui/material";
import React from "react";
import { IntroDiv } from "../../styles";

const Intro = () => (
  <IntroDiv>
    <Typography
      style={{ fontSize: "2.4rem", textAlign: "center", marginBottom: "1rem" }}
      className="poppins"
    >
      PATIENT FORMS
    </Typography>
    <Typography
      style={{ fontSize: "1.4rem", maxWidth: "80rem", textAlign: "center" }}
      className="nunito"
    >
      If you are a new patient and Family & Cosmetic Dentistry, you can easily
      access and download HIPAA (Health Insurance Portability and Accountability
      Act) and Medical History forms to kickstart your journey with us! Ensuring
      the utmost privacy and comprehensive understanding of your health
      background, these forms play a pivotal role in providing you with
      personalized and top-notch care. Simply download, fill out, and bring them
      along to your first appointment for a seamless and efficient experience.
      Your well-being is our priority, and these forms are the first step in
      making your healthcare journey with us a smooth one.
    </Typography>
  </IntroDiv>
);

export default Intro;
