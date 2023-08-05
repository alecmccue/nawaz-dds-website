"use client";

import React from "react";
import FAQs from "./home/components/FAQs";
import InformationCards from "./home/components/InformationCards";
import Intro from "./home/components/Intro";
import Main from "./home/components/Main";
import Testimonials from "./home/components/Testimonials";
import { HomeWrapper } from "./styles";

const Home = () => (
    <HomeWrapper>
        <Intro />
        <InformationCards />
        <Main />
        <Testimonials />
        <FAQs />
    </HomeWrapper>
)

export default Home;
