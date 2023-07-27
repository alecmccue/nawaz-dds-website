import React from "react";
import {
  ColumnWrapper,
  RightColumn,
  MarketingImage,
  MarketingStatementWrapper,
  LeftColumn,
  MarketingImage2,
  MarketingImage3,
  MapWrapper,
} from "./styles";
import { Typography } from "@mui/material";
import Address from "./components/Address";
import OfficeHours from "./components/OfficeHours";

const VisitUs = () => (
  <MarketingStatementWrapper>
    <ColumnWrapper>
      <LeftColumn>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            flex: 1,
          }}
        >
          <div>
            <MarketingImage2 src="vertical.jfif" alt="office" />
          </div>
          <div>
            <MarketingImage3 src="office.jpg" alt="office" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            flex: 1,
          }}
        >
          <div>
            <MarketingImage2
              src="office.jpg"
              alt="office"
              style={{ borderTopRightRadius: "2rem" }}
            />
          </div>
          <div>
            <MarketingImage3 src="office.jpg" alt="office" />
          </div>
        </div>
      </LeftColumn>
      <RightColumn>
        <Typography style={{ fontSize: "3rem" }}>Visit Us</Typography>
        <Typography style={{ fontSize: "1.5rem" }}>
          We're convieniently located in the Potomic Falls area. Find us
          straight ahead on the entry level floor of the building. Free parking
          is available.
        </Typography>
        <Address />
        <OfficeHours />
      </RightColumn>
    </ColumnWrapper>
    <MapWrapper>
      <iframe
        height="250"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12396.55843676129!2d-77.40714683557985!3d39.03493618506008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63994a7c0b58d%3A0xa93e21972b785510!2sNawaz%20Mirweiss%20DDS!5e0!3m2!1sen!2sus!4v1688255478197!5m2!1sen!2sus"
        style={{ borderRadius: "1rem" }}
        width="100%"
      />
    </MapWrapper>
  </MarketingStatementWrapper>
);

//         At our Family and Cosmetic Dentistry practice, we prioritize the needs
//         of our patients above all else. From meticulous attention to detail and
//         personalized care to the utilization of cutting-edge treatment options,
//         we are committed to enhancing every aspect of your dental journey. Our
//         goal is not only to ensure your oral health but also to provide a
//         nurturing and empowering experience that fosters your overall well-being
//         and lasting aesthetic appeal. With a focus on family-friendly care and
//         cosmetic dentistry expertise, we are dedicated to delivering exceptional
//         dental services that exceed your expectations.

export default VisitUs;
