import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {
  AccordionSummaryContentWrapper,
  AccordionSummaryTextWrapper,
  ServiceAccordion,
  ServiceImage,
  ServiceWrapper,
} from "../../styles";

const CosmeticDentistry = () => (
  <ServiceWrapper>
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage
            alt="Cosmetic Dentistry"
            src="/cosmetic_dentistry.jpg"
          />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              Cosmetic Dentistry
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }}>
              Cosmetic dentistry offers a diverse array of procedures aimed at
              improving the aesthetics of a person's smile. It goes beyond
              addressing functional concerns and focuses on enhancing the
              appearance of teeth, gums, and overall oral structures. With the
              goal of creating a beautiful and confident smile, cosmetic
              dentistry services include:
            </Typography>
          </AccordionSummaryTextWrapper>
        </AccordionSummaryContentWrapper>
      </AccordionSummary>
      <AccordionDetails>PLACEHOLDER</AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default CosmeticDentistry;
