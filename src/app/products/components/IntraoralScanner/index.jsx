import React from "react";
import { Typography } from "@mui/material";
import { Divider, ImageColumn, ProductWrapper, TextColumn } from "../../styles";
import Image from "next/image";
import intraOralScanner from "public/intraoral_scanner.png";

const IntraoralScanner = () => (
  <ProductWrapper>
    <ImageColumn>
      <Image src={intraOralScanner} alt="intraoral scanner" />
    </ImageColumn>
    <TextColumn>
      <Typography style={{ fontSize: "2.2rem" }} className="poppins">
        Intraoral Scanner
      </Typography>
      <Divider />
      <Typography style={{ fontSize: "1.2rem" }} className="scope-one">
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
