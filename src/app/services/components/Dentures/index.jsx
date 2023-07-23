import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {
  AccordionSummaryContentWrapper,
  AccordionSummaryTextWrapper,
  ServiceAccordion,
  ServiceImage,
  ServiceWrapper,
} from "../../styles";

const Dentures = () => (
  <ServiceWrapper id="dentures">
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage alt="Dentures" src="/dentures.jpg" />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              Dentures
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }}>
              Dentures are removable dental appliances designed to replace
              missing teeth and surrounding tissues. They come in two main
              types: complete dentures, which replace all teeth in the upper or
              lower jaw, and partial dentures, which fill gaps left by a few
              missing teeth. Dentures are custom-made to ensure a comfortable
              fit and natural appearance, allowing individuals to eat, speak,
              and smile with confidence while restoring their oral
              functionality.
            </Typography>
          </AccordionSummaryTextWrapper>
        </AccordionSummaryContentWrapper>
      </AccordionSummary>
      <AccordionDetails>PLACEHOLDER</AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default Dentures;
