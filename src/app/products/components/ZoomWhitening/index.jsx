import React from "react";
import {
  Divider,
  ImageColumn,
  ProductWrapperImageRight,
  TextColumn,
} from "../../styles";
import { Typography } from "@mui/material";
import Image from "next/image";
import zoomWhitening from "public/zoom_whitening.jpg";

const ZoomWhitening = () => (
  <ProductWrapperImageRight>
    <TextColumn>
      <Typography style={{ fontSize: "2.2rem" }} className="poppins">
        Zoom™ Whitening
      </Typography>
      <Divider />
      <Typography style={{ fontSize: "1.2rem" }} className="scope-one">
        Zoom!™ is a revolutionary, in-office tooth whitening system that is
        safe, effective, and very fast! In just over an hour your teeth will be
        dramatically whiter. Teeth typically become at least six to ten shades
        whiter. Zoom!™ Tooth Whitening is ideal for anyone looking for immediate
        results. The convenience of Zoom!™ in comparison to days of wearing
        trays and gradual whitening makes it the perfect choice for the busy
        individual. The Zoom!™ Tooth Whitening procedure is simple and painless.
        It begins with a short preparation to isolate your lips and gums. The
        Zoom!TM clinician then applies the proprietary Zoom!™ Tooth Whitening
        Gel, which is activated by a specially designed light. Teeth typically
        become at least six to ten shades whiter, sometimes more! A five-minute
        flouride treatment completes the procedure. Call us today to find out
        more at (703) 430-3838. For more details about our tooth whitening
        procedure, please visit the{" "}
        <a href="https://www.zoomnow.com/">Zoom!™ Tooth Whitening website</a>.
      </Typography>
    </TextColumn>

    <ImageColumn>
      <Image src={zoomWhitening} alt="zoom whitening" />
    </ImageColumn>
  </ProductWrapperImageRight>
);

export default ZoomWhitening;
