import React from "react";
import {
  ImageWrapper,
  Column,
  Line,
  MeetNawazWrapper,
  NawazImage,
  TextInnerWrapper,
  TextOuterWrapper,
} from "./styles";
import { Typography } from "@mui/material";
import GrainIcon from "@mui/icons-material/Grain";

const MeetNawaz = () => (
  <MeetNawazWrapper>
    <ImageWrapper>
      <NawazImage src="/nawaz-profilepicture.jpg" alt="dr-nawaz" />
    </ImageWrapper>

    <TextOuterWrapper>
      <Line />
      <TextInnerWrapper>
        <Column>
          <GrainIcon
            style={{
              height: "3rem",
              width: "auto",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <Typography style={{ fontSize: "2rem", fontWeight: "500" }}>
            Dr. Mirweiss Nawaz
          </Typography>
          <Typography style={{ fontSize: "1.1rem" }}>
            Since its establishment in 2007, Dr. Nawaz has been committed to
            delivering exceptional dental care at Family & Cosmetic Dentistry.
            With a focus on both family and cosmetic dentistry, he creates
            personalized treatment plans to cater to each patient's needs. Dr.
            Nawaz's dedication to staying at the forefront of dental
            advancements ensures that patients receive the highest standard of
            care in a warm and welcoming environment.
          </Typography>
        </Column>
        <Column>
          <Typography style={{ fontSize: "1.1rem", fontWeight: "500" }}>
            Education
          </Typography>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5em" }}>
            <li>BA</li>
            <li>Ba</li>
          </ul>
          <Typography>
            Dr. Parth received his Bachelor of Science from the University of
            the Pacific before going on to receive his Master of Biomedical
            Sciences from the University of Northern Colorado. From there, he
            attended Roseman University of Health Sciences to receive his Doctor
            of Dental Surgery and Master of Business Administration.
          </Typography>
          <Typography style={{ fontSize: "1.1rem", fontWeight: "500" }}>
            Certifications
          </Typography>
          <Typography>
            Active in community outreach all throughout dental school, community
            involvement is crucially important to Dr. Parth. To ensure that each
            and every one of his patients always receives the absolute best
            care, he has committed himself to continuing education in the latest
            dental treatments and technologies. His vision for Bespoke Dental
            Studios is to help his community through excellence in dental care.
          </Typography>
        </Column>
      </TextInnerWrapper>
    </TextOuterWrapper>
  </MeetNawazWrapper>
);

export default MeetNawaz;
