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
import Image from "next/image";
import dots from 'public/dots.png';
const MeetNawaz = () => (
  <MeetNawazWrapper>
    <ImageWrapper>
      <NawazImage src="/nawaz-profilepicture.jpg" alt="dr-nawaz" />
    </ImageWrapper>

    <TextOuterWrapper>
      <Line />
      <TextInnerWrapper>
        <Column>
          <div>
            <Image src={dots} alt="dots" style={{ height: "8rem", width: "auto", transform: "scaleY(-1)" }}/>
          </div>
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
        <Column style={{ justifyContent: "center" }}>
          <Typography style={{ fontSize: "1.1rem", fontWeight: "500" }}>
            Education
          </Typography>
          <ul style={{ fontSize: "1.1rem", listStyleType: "disc", paddingLeft: "1.5em" }}>
            <li>BS in Biology at George Mason University</li>
            <li>DDS, Virginia Commonwealth University</li>
          </ul>
          <Typography style={{ fontSize: "1.1rem", fontWeight: "500" }}>
            Certifications
          </Typography>
          <ul style={{ fontSize: "1.1rem", listStyleType: "disc", paddingLeft: "1.5em" }}>
            <li>Academy of General Dentistry</li>
            <li>Invisalign</li>
          </ul>
        </Column>
      </TextInnerWrapper>
    </TextOuterWrapper>
  </MeetNawazWrapper>
);

export default MeetNawaz;
