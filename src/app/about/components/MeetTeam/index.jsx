import React from "react";
import {
  LeftColumn,
  MeetTeamInnerWrapper,
  MeetTeamOuterWrapper,
  RightColumn,
  TeamImage,
} from "./styles";
import { Typography } from "@mui/material";

const MeetTeam = () => (
  <MeetTeamOuterWrapper>
    <MeetTeamInnerWrapper>
      <LeftColumn>
        <TeamImage src="/dentist_team.jpg" alt="dr-nawaz" />
      </LeftColumn>
      <RightColumn>
        <Typography style={{ fontSize: "3rem", fontWeight: 500 }}>
          MEET OUR TEAM
        </Typography>
        <Typography style={{ fontSize: "1.2rem" }}>
          When you walk through the doors of our practice, you'll be greeted by
          our attentive and friendly team. Dr. Parth plays an active role in the
          operation of our practice, and you'll often find him greeting patients
          at the front desk and answering calls from patients.
        </Typography>
        <Typography style={{ fontSize: "1.2rem" }}>
          From the front desk staff to the hygienists and dental assistants,
          everyone on the Bespoke Dental Studios team is prepared to help you in
          whatever way will make your dental appointment a success.
        </Typography>
      </RightColumn>
    </MeetTeamInnerWrapper>
  </MeetTeamOuterWrapper>
);

export default MeetTeam;
