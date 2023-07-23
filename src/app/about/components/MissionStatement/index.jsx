import React from "react";
import {
  BackgroundImage,
  MissionStatementWrapper,
  OverlayCard,
} from "./styles";
import { Typography } from "@mui/material";

const MissionStatement = () => (
  <MissionStatementWrapper>
    <BackgroundImage src="/office-stock.jpg" alt="background" />
    <OverlayCard>
      <Typography style={{ fontSize: "2.5rem", color: "#015D67" }}>OUR MISSION</Typography>
      <Typography style={{ fontSize: "1.1rem", color: "#015D67" }}>
        At Family & Cosmetic Dentistry, our mission is to create a
        transformative impact on your life through exceptional dentistry. We are
        driven by a deep sense of care for our patients and are committed to
        delivering comprehensive and personalized dental care that surpasses
        expectations. By leveraging the latest advancements in dental technology
        and providing a comforting environment with relaxing amenities, we aim
        to redefine the dental experience.
      </Typography>
      <Typography style={{ fontSize: "1.1rem", color: "#015D67" }}>
        We extend a warm welcome to you. Trust that your dental journey with us
        will be marked by genuine compassion, meticulous attention to detail,
        and a commitment to enhancing both your oral health and overall
        well-being. Together, let us embark on a path towards a healthier, more
        radiant smile.
      </Typography>
      <Typography style={{ fontSize: "1.5rem", color: "#00ACB1" }}>
        Dr. Mirweiss Nawaz
      </Typography>
      <Typography style={{ fontSize: "1.2rem", color: "#015D67" }}>
        Founder
      </Typography>
    </OverlayCard>
  </MissionStatementWrapper>
);

export default MissionStatement;
