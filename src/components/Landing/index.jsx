import React from "react";
import { LandingWrapper } from "./styles";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
const Landing = () => (
    <LandingWrapper>
        <Intro/>
        <Main/>
        <Testimonials/>
        <FAQs/>
    </LandingWrapper>
);

export default Landing;
