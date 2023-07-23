import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {
  AccordionSummaryContentWrapper,
  AccordionSummaryTextWrapper,
  ServiceAccordion,
  ServiceImage,
  ServiceWrapper,
} from "../../styles";

const Implants = () => (
  <ServiceWrapper id="implants">
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage alt="Implants" src="/dental_implant.jpg" />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              Implants
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }}>
              Dental implants are titanium posts surgically inserted into the
              jawbone to replace missing teeth, providing a stable foundation
              for dental restorations. They offer a durable, natural-looking
              solution that allows individuals to regain the functionality and
              appearance of their original teeth. With proper care, dental
              implants can last for many years, making them a popular and
              effective option for restoring smiles.
            </Typography>
          </AccordionSummaryTextWrapper>
        </AccordionSummaryContentWrapper>
      </AccordionSummary>
      <AccordionDetails>PLACEHOLDER</AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default Implants;
