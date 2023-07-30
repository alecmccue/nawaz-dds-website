import React from "react";
import { Typography } from "@mui/material";
import { ImageColumn, ProductWrapper, TextColumn } from "../../styles";

const ZoomWhitening = () => (
  <ProductWrapper>
    <TextColumn>
      <Typography style={{ fontSize: "2rem", fontWeight: "500" }}>
        Zoom Whitening
      </Typography>
      <Typography style={{ fontSize: "1.1rem" }}>
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
      <img src="/zoom_whitening.jpg" />
    </ImageColumn>
  </ProductWrapper>
);

export default ZoomWhitening;
