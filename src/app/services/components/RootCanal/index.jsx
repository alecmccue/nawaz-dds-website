import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {
  AccordionSummaryContentWrapper,
  AccordionSummaryTextWrapper,
  ServiceAccordion,
  ServiceImage,
  ServiceWrapper,
} from "../../styles";

const RootCanal = () => (
  <ServiceWrapper id="root_canal">
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage alt="Root Canal" src="/root_canal.jpg" />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              Root Canal
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }}>
              Root canals are dental procedures performed to save severely
              damaged or infected teeth from extraction. During the treatment,
              the dentist removes the infected or inflamed dental pulp from the
              tooth's interior, cleans and disinfects the root canal system, and
              seals it with a biocompatible material. Afterward, a dental crown
              is typically placed over the treated tooth to protect and restore
              its function, allowing patients to retain their natural teeth and
              alleviate pain caused by dental infections.
            </Typography>
          </AccordionSummaryTextWrapper>
        </AccordionSummaryContentWrapper>
      </AccordionSummary>
      <AccordionDetails>PLACEHOLDER</AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default RootCanal;
