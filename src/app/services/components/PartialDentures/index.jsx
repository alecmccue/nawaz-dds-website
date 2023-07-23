import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {
  AccordionSummaryContentWrapper,
  AccordionSummaryTextWrapper,
  ServiceAccordion,
  ServiceImage,
  ServiceWrapper,
} from "../../styles";

const PartialDentures = () => (
  <ServiceWrapper>
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage alt="Partial Dentures" src="/partial_dentures.jpg" />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              Partial Dentures
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }}>
              Partial dentures are removable dental prosthetics used to replace
              missing teeth when some natural teeth remain in the upper or lower
              jaw. These custom-made appliances consist of a metal or acrylic
              framework that attaches to the remaining teeth for stability.
              Partial dentures not only restore aesthetics and function but also
              prevent neighboring teeth from shifting, ensuring a balanced bite
              and improving overall oral health.
            </Typography>
          </AccordionSummaryTextWrapper>
        </AccordionSummaryContentWrapper>
      </AccordionSummary>
      <AccordionDetails>PLACEHOLDER</AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default PartialDentures;
