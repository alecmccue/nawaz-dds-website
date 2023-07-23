import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {
  AccordionSummaryContentWrapper,
  AccordionSummaryTextWrapper,
  ServiceAccordion,
  ServiceImage,
  ServiceWrapper,
} from "../../styles";

const Invisalign = () => (
  <ServiceWrapper>
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage alt="Invisalign" src="/invisalign.jpg" />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              Invisalign
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }}>
              Invisalign is a discreet and convenient orthodontic treatment that
              utilizes clear, custom-made aligners to gradually shift teeth into
              desired positions. With their virtually invisible appearance and
              comfortable fit, Invisalign appeals to individuals seeking a more
              aesthetically pleasing option than traditional braces. The
              removable aligners also allow for easy oral hygiene maintenance
              and the freedom to enjoy favorite foods during treatment.
            </Typography>
          </AccordionSummaryTextWrapper>
        </AccordionSummaryContentWrapper>
      </AccordionSummary>
      <AccordionDetails>PLACEHOLDER</AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default Invisalign;
