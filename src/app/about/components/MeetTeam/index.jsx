import React from "react";
import { LeftColumn, MeetTeamWrapper, RightColumn } from "./styles";
import { Typography } from "@mui/material";
import Image from "next/image";

const MeetTeam = () => (
  <MeetTeamWrapper>
    <LeftColumn>
      <Image
        src="/nawaz-profilepicture.jpg"
        alt="dr-nawaz"
        width={100}
        height={30}
      />
    </LeftColumn>
    <RightColumn>
      <Typography>MEET OUR TEAM</Typography>
      <Typography>
        When you walk through the doors of our practice, you'll be greeted by
        our attentive and friendly team. Dr. Parth plays an active role in the
        operation of our practice, and you'll often find him greeting patients
        at the front desk and answering calls from patients.
      </Typography>
      <Typography>
        From the front desk staff to the hygienists and dental assistants,
        everyone on the Bespoke Dental Studios team is prepared to help you in
        whatever way will make your dental appointment a success.
      </Typography>
    </RightColumn>
  </MeetTeamWrapper>
);

export default MeetTeam;
