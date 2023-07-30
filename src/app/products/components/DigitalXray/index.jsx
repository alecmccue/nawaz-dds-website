import React from "react";
import { Typography } from "@mui/material";
import { ImageColumn, ProductWrapper, TextColumn } from "../../styles";

const DigitalXray = () => (
  <ProductWrapper>
    <TextColumn>
      <Typography style={{ fontSize: "1.5rem", fontWeight: "500" }}>
        Digital Xray
      </Typography>
      <Typography style={{ fontSize: "1.2rem" }}>
        A dentistry intraoral scanner is a sophisticated handheld device that
        utilizes advanced optical technology to create precise 3D digital
        impressions of a patient's teeth, gums, and oral structures. By
        replacing traditional messy dental molds, this non-invasive scanner
        offers a comfortable and efficient experience for both dental
        professionals and patients. Guided gently over the patient's mouth, the
        scanner's camera captures multiple images per second, creating real-time
        digital models that allow dentists to analyze dental issues and plan
        accurate treatment procedures. With streamlined workflows, easy data
        storage, and enhanced patient understanding, intraoral scanners have
        revolutionized modern dentistry, providing a more efficient, accurate,
        and patient-friendly approach to capturing dental impressions and
        improving the overall quality of care.
      </Typography>
    </TextColumn>
    <ImageColumn>
      <img src="/digital_xray.jpg" />
    </ImageColumn>
  </ProductWrapper>
);

export default DigitalXray;
