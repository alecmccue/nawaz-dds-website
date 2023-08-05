import React from "react";
import { Border, ImageColumn, ProductWrapper, TextColumn } from "../../styles";
import { Typography } from "@mui/material";
import Image from "next/image";
import zoomWhitening from 'public/zoom_whitening.jpg';

const ZoomWhitening = () => (
  <ProductWrapper>
    <TextColumn>
      <Typography style={{ fontSize: "2.2rem"}} className="poppins">
        Zoom Whitening
        <Border/>
      </Typography>
      <Typography style={{ fontSize: "1.2rem" }} className="scope-one">
        Zoom Whitening is a highly effective and popular teeth whitening
        procedure that offers remarkable results in a single visit. Using
        advanced LED technology, the Zoom Whitening treatment involves the
        application of a powerful yet safe hydrogen peroxide gel on the teeth.
        The specialized Zoom lamp is then used to activate the gel, breaking
        down stubborn stains and discolorations deep within the enamel. This
        process accelerates the whitening process, revealing noticeably brighter
        and whiter teeth in just about an hour. Moreover, Zoom Whitening is
        customizable, allowing the dentist to adjust the intensity of the
        treatment to ensure optimal comfort and minimize sensitivity. With its
        convenience, speed, and dramatic outcomes, Dentistry Zoom Whitening is
        an excellent option for individuals seeking a radiant and confident
        smile.
      </Typography>
    </TextColumn>

    <ImageColumn>
      <Image src= {zoomWhitening} alt="zoom whitening"/>
    </ImageColumn>
  </ProductWrapper>
);

export default ZoomWhitening;
