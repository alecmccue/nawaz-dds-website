import React from "react";
import { IntroWrapper } from "../../styles";
import { Typography } from "@mui/material";

const Intro = () => (
    <IntroWrapper>
        <Typography
            style={{ fontSize: "3rem", textAlign: "center", marginBottom: "1rem" }}
            className="poppins"
        >
            PATIENT FORMS
        </Typography>
        <Typography
            style={{ fontSize: "1.6rem", maxWidth: "60rem", textAlign: "center" }}
            className="nunito"
        >
            Easily Accessible Forms for a Smooth Patient Journey
        </Typography>
    </IntroWrapper>
);

export default Intro;
