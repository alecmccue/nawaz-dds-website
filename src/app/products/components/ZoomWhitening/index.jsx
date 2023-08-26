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
import Link from "next/link";

const ZoomWhitening = () => (
    <ProductWrapperImageRight>
      <TextColumn>
        <Typography style={{ fontSize: "2.2rem" }} className="poppins">
          Zoom Whitening
        </Typography>
        <Divider />
        <Typography style={{ fontSize: "1.2rem" }} className="scope-one">
          Zoom is a revolutionary, in-office tooth whitening system that is
          safe, effective, and very fast! In just over an hour your teeth will be
          dramatically whiter. Teeth typically become at least six to ten shades
          whiter. Zoom Tooth Whitening is ideal for anyone looking for immediate
          results. The convenience of Zoom in comparison to days of wearing
          trays and gradual whitening makes it the perfect choice for the busy
          individual. The Zoom Tooth Whitening procedure is simple and painless.
          It begins with a short preparation to isolate your lips and gums. The
          Zoom clinician then applies the proprietary Zoom Tooth Whitening
          Gel, which is activated by a specially designed light. Teeth typically
          become at least six to ten shades whiter, sometimes more! A five-minute
          fluoride treatment completes the procedure. Please visit the{" "}
          <Link
              href="https://www.zoomnow.com/"
              target="_blank"
              style={{ textDecoration: "underline" }}
          >
            Zoom!™ Tooth Whitening website
          </Link>
        </Typography>
      </TextColumn>

      <ImageColumn>
        <Image
            src={zoomWhitening}
            alt="zoom whitening"
            style={{
              borderRadius: "0.5rem",
              maxHeight: "25rem"
            }}
        />
      </ImageColumn>
    </ProductWrapperImageRight>
);

export default ZoomWhitening;
