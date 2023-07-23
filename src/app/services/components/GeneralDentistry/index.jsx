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

const GeneralDentistry = () => (
  <ServiceWrapper>
    <Accordion style={{ padding: "2rem" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage
            alt="General Dentistry"
            height={100}
            src="/general_dentistry.jpg"
            width={400}
          />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              General & Family Dentistry
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }}>
              General dentistry services encompass a wide range of procedures
              designed to promote oral health, address dental issues, and
              enhance smiles. Regular visits to a general dentist play a vital
              role in keeping teeth and gums healthy, preventing potential
              complications, and ensuring a confident and radiant smile.
            </Typography>
          </AccordionSummaryTextWrapper>
        </AccordionSummaryContentWrapper>
      </AccordionSummary>
      <AccordionDetails>PLACEHOLDER</AccordionDetails>
    </Accordion>
  </ServiceWrapper>
);

export default GeneralDentistry;
