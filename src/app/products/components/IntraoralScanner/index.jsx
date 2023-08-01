import React from "react";
import { Typography } from "@mui/material";
import { ImageColumn, ProductWrapper, TextColumn } from "../../styles";

const IntraoralScanner = () => (
  <ProductWrapper>
    <ImageColumn>
      <img src="/intraoral_scanner.png" />
    </ImageColumn>
    <TextColumn>
      <Typography style={{ fontSize: "2rem", fontWeight: "500" }}>
        Intraoral Scanner
      </Typography>
      <Typography style={{ fontSize: "1.1rem" }}>
        An Intraoral Scanner is a handheld device that utilizes advanced optical
        technology to create precise 3D digital impressions of a patient's
        teeth, gums, and oral structures. By replacing traditional messy dental
        molds, this non-invasive scanner offers a comfortable and efficient
        experience for both dental professionals and patients. Guided gently
        over the patient's mouth, the scanner's camera captures multiple images
        per second, creating real-time digital models that allow dentists to
        analyze dental issues and plan accurate treatment procedures. With
        streamlined workflows, easy data storage, and enhanced patient
        understanding, intraoral scanners have revolutionized modern dentistry,
        providing a more efficient, accurate, and patient-friendly approach to
        capturing dental impressions and improving the overall quality of care.
      </Typography>
    </TextColumn>
  </ProductWrapper>
);

export default IntraoralScanner;