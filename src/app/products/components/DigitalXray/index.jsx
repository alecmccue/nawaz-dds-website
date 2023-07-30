import React from "react";
import { Typography } from "@mui/material";
import {
  DigitalXrayImage,
  ImageColumn,
  ProductWrapper,
  TextColumn,
} from "../../styles";

const DigitalXray = () => (
  <ProductWrapper>
    <TextColumn>
      <Typography style={{ fontSize: "2rem", fontWeight: "500" }}>
        Digital Xray
      </Typography>
      <Typography style={{ fontSize: "1.1rem" }}>
        Digital X-ray is an advanced imaging technology that revolutionizes the
        way dental professionals capture and analyze images of a patient's oral
        structures. This digital radiography technique replaces traditional
        film-based X-rays with a digital sensor that captures highly detailed
        and instantaneous images of the teeth, gums, and surrounding tissues.
        The process involves placing the sensor inside the patient's mouth,
        which emits a significantly lower level of radiation compared to
        conventional X-ray films. The captured digital X-rays are then displayed
        on a computer screen, allowing dentists to zoom, enhance, and manipulate
        the images for better diagnosis and treatment planning. With its reduced
        radiation exposure, rapid image acquisition, and enhanced diagnostic
        capabilities, dentistry digital X-ray has become an indispensable tool
        in modern dental practices, enabling more efficient and precise oral
        healthcare.
      </Typography>
    </TextColumn>
    <ImageColumn>
      <DigitalXrayImage src="/digital_xray.jpg" />
    </ImageColumn>
  </ProductWrapper>
);

export default DigitalXray;
