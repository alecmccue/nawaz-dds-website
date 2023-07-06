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
      <MarketingStatement />
      <MissionStatement />
      <MeetNawaz />
      <MeetTeam />
    </AboutWrapper>
  );
};

export default About;
