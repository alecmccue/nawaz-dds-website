import React from "react";
import { LandingWrapper } from "./styles";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Testimonials from "./components/Testimonials";
const Landing = () => (
    <LandingWrapper>
        <Intro/>
        <Main/>
        <Testimonials/>
    </LandingWrapper>
);

export default Landing;
