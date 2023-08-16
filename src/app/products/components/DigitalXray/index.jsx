import React from "react";
import {
  Divider,
  DigitalXrayImage,
  ImageColumn,
  TextColumn,
  ProductWrapperImageRight,
} from "../../styles";
import { Typography } from "@mui/material";

const DigitalXray = () => (
  <ProductWrapperImageRight style={{ marginBottom: "2rem" }}>
    <TextColumn>
      <Typography style={{ fontSize: "2.2rem" }} className="poppins">
        Digital Xray
      </Typography>
      <Divider />
      <Typography style={{ fontSize: "1.2rem" }} className="scope-one">
        For decades now, unlike any major medical imaging methods such as
        ultrasound, nuclear medicine etc, all of which are digital, conventional
        x-ray imaging remains a largely analog technology. Making the transition
        from analog to digital brings several advantages to x-ray imaging. These
        would include improvement in contrast and other aspects of image quality
        by means of image processing: radiological images could be compared more
        with those obtained from other imaging modalities, electronic
        distribution of images within hospitals could make remote access and
        archiving possible, highly qualified personnel could service remote or
        poorly populated regions from a central facility by means of
        "teleradiology"; and radiologists could use computers more effectively
        to help with diagnosis. healthcare.
      </Typography>
    </TextColumn>

    <ImageColumn>
      <DigitalXrayImage src="/digital_xray.jpg" />
    </ImageColumn>
  </ProductWrapperImageRight>
);

export default DigitalXray;
