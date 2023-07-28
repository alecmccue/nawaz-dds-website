"use client";

import { AboutWrapper } from "./styles";
import Introduction from "./components/Introduction";
import VisitUs from "./components/VisitUs";
import MissionStatement from "./components/MissionStatement";
import MeetNawaz from "./components/MeetNawaz";
import MeetTeam from "./components/MeetTeam";

const About = () => {
  return (
    <AboutWrapper>
      <Introduction />
      <MeetNawaz />
      <MeetTeam />
      <MissionStatement />
      <VisitUs />
    </AboutWrapper>
  );
};

export default About;
