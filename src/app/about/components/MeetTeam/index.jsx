import React from "react";
import {
  LeftColumn,
  Line,
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
      <Typography style={{ fontSize: "3rem"}} className="poppins">
          MEET OUR TEAM
        </Typography>
        <Typography style={{ fontSize: "1.25rem" }} className="nunito">
          When you walk through the doors of our practice, you'll be greeted by
          our attentive and friendly team. Dr. Parth plays an active role in the
          operation of our practice, and you'll often find him greeting patients
          at the front desk and answering calls from patients.
        </Typography>
        <Typography style={{ fontSize: "1.25rem" }} className="nunito">
          From the front desk staff to the hygienists and dental assistants,
          everyone on the Bespoke Dental Studios team is prepared to help you in
          whatever way will make your dental appointment a success.
        </Typography>
      </LeftColumn>
      <RightColumn>
        <TeamImage src="/dentist_team.jpg" alt="dr-nawaz" />
      </RightColumn>
    </MeetTeamInnerWrapper>
  </MeetTeamOuterWrapper>
);

export default MeetTeam;
