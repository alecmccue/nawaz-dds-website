import React from "react";
import { LandingWrapper } from "./styles";
import Intro from "./components/Intro";
import Main from "./components/Main";
const Landing = () => (
    <LandingWrapper>
        <Intro/>
        <Main/>
    </LandingWrapper>
);

export default Landing;
