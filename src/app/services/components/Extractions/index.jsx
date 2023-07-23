import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {
  AccordionSummaryContentWrapper,
  AccordionSummaryTextWrapper,
  ServiceAccordion,
  ServiceImage,
  ServiceWrapper,
} from "../../styles";

const Extractions = () => (
  <ServiceWrapper id="extractions">
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage alt="Extractions" src="/dental_extraction.jpg" />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              Extractions
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }}>
              Dental extractions, also known as tooth extractions, are dental
              procedures in which a dentist removes a tooth from its socket in
              the jawbone. Extractions may be necessary due to various reasons,
              such as severe tooth decay, advanced gum disease, dental trauma,
              or to create space for orthodontic treatment. The procedure is
              performed under local anesthesia to ensure patient comfort, and
              aftercare instructions are provided to promote proper healing and
              minimize potential complications.
            </Typography>
          </AccordionSummaryTextWrapper>
        </AccordionSummaryContentWrapper>
      </AccordionSummary>
      <AccordionDetails>PLACEHOLDER</AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default Extractions;
