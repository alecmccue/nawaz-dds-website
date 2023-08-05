"use client";

import { AboutWrapper } from "./styles";
import VisitUs from "./components/VisitUs";
import OurCommitment from "./components/OurCommitment";
import MeetNawaz from "./components/MeetNawaz";
import MeetTeam from "./components/MeetTeam";

const About = () => {
  return (
    <AboutWrapper>
      <OurCommitment />
      <MeetNawaz />
      <MeetTeam />
      <VisitUs />
    </AboutWrapper>
  );
};

export default About;
