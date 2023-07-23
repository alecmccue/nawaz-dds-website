"use client";

import { AboutWrapper } from "./styles";
import Introduction from "./components/Introduction";
import MarketingStatement from "./components/MarketingStatement";
import MissionStatement from "./components/MissionStatement";
import MeetNawaz from "./components/MeetNawaz";
import MeetTeam from "./components/MeetTeam";

const About = () => {
  return (
    <AboutWrapper>
      <Introduction />
      <MeetNawaz />
      <MeetTeam />
      <MarketingStatement />
      <MissionStatement />
    </AboutWrapper>
  );
};

export default About;
