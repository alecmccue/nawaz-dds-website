import React from "react";
import { LandingWrapper } from "./styles";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import InformationCards from "../InformationCards";
const Landing = () => (
    <LandingWrapper>
        <Intro/>
        <InformationCards />
        <Main/>
        <Testimonials/>
        <FAQs/>
    </LandingWrapper>
);

export default Landing;
