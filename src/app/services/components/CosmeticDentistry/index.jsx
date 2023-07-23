import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import {
  AccordionSummaryContentWrapper,
  AccordionSummaryTextWrapper,
  ServiceImage,
  ServiceWrapper,
} from "../../styles";

const CosmeticDentistry = () => (
  <ServiceWrapper>
    <Accordion style={{ padding: "2rem" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage
            alt="Cosmetic Dentistry"
            height={100}
            src="/cosmetic_dentistry.jpg"
            width={400}
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
    </Accordion>
  </ServiceWrapper>
);

export default CosmeticDentistry;
