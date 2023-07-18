import React from "react";
import { LeftColumn, MeetNawazWrapper, RightColumn } from "./styles";
import Image from "next/image";
import { Typography } from "@mui/material";

const MeetNawaz = () => (
  <MeetNawazWrapper>
    <LeftColumn>
      <Typography>
        Dr. Parth Kansagra founded Bespoke Dental Studios to provide the
        absolute best care in not just his community, but the entire dental
        industry.
      </Typography>
      <Typography>
        Dr. Parth received his Bachelor of Science from the University of the
        Pacific before going on to receive his Master of Biomedical Sciences
        from the University of Northern Colorado. From there, he attended
        Roseman University of Health Sciences to receive his Doctor of Dental
        Surgery and Master of Business Administration.
      </Typography>
      <Typography>
        Active in community outreach all throughout dental school, community
        involvement is crucially important to Dr. Parth. To ensure that each and
        every one of his patients always receives the absolute best care, he has
        committed himself to continuing education in the latest dental
        treatments and technologies. His vision for Bespoke Dental Studios is to
        help his community through excellence in dental care.
      </Typography>
      <Typography>
        In his free time, Dr. Parth enjoys and pursues his interior design and
        event design passions. Additionally, he enjoys cooking, baking,
        traveling, and spending time with his nephews and niece.
      </Typography>

      <Typography>EDUCATION</Typography>
      <Typography>CERTIFICATIONS</Typography>
    </LeftColumn>
    <RightColumn>
      <Image
        src="/nawaz-profilepicture.jpg"
        alt="dr-nawaz"
        width={100}
        height={30}
      />
    </RightColumn>
  </MeetNawazWrapper>
);

export default MeetNawaz;
