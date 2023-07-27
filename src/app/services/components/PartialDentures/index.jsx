import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  AccordionDetailsHeader,
  AccordionSummaryContentWrapper,
  AccordionSummaryTextWrapper,
  ServiceAccordion,
  ServiceImage,
  ServiceWrapper,
} from "../../styles";

const PartialDentures = () => (
  <ServiceWrapper id="partial_dentures">
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

      <AccordionDetails>
        <List>
          <AccordionDetailsHeader>
            Type of Partial Dentures:
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText primaryTypographyProps={{ fontSize: "1.3rem" }}>
              Removable Partial Dentures: These are the most common type of
              partial dentures. They are designed to be easily removable by the
              patient for cleaning and sleeping. Removable partial dentures have
              a metal or acrylic framework that holds the artificial teeth in
              place and attaches to the natural teeth using clasps or precision
              attachments.
              <br />
              <br />
              Fixed Partial Dentures (Dental Bridges): Fixed partial dentures,
              also known as dental bridges, are cemented or bonded onto the
              adjacent natural teeth or dental implants. Unlike removable
              partial dentures, they are not designed to be taken out by the
              patient. Dental bridges offer a more stable and permanent solution
              for replacing missing teeth.
            </ListItemText>
          </ListItem>

          <AccordionDetailsHeader>Purpose and Benefits:</AccordionDetailsHeader>
          <ListItem>
            <ListItemText primaryTypographyProps={{ fontSize: "1.3rem" }}>
              Restoring Aesthetics: Partial dentures are custom-made to replace
              missing teeth, restoring the appearance of the smile and improving
              facial aesthetics.
              <br />
              <br />
              Functional Improvement: Partial dentures enable individuals to
              chew food more effectively, speak clearly, and maintain normal
              oral function, enhancing their overall quality of life.
              <br />
              <br />
              Preventing Teeth Shifting: By filling in the gaps left by missing
              teeth, partial dentures prevent adjacent teeth from shifting out
              of their positions. This helps maintain proper tooth alignment and
              prevents potential dental problems.
              <br />
              <br />
              Preserving Oral Health: Partial dentures contribute to maintaining
              oral health by preventing further tooth loss, preserving the bone
              structure of the jaw, and distributing chewing forces evenly
              across the remaining teeth.
              <br />
              <br />
              Cost-Effective Option: Partial dentures are often more affordable
              than other tooth replacement options, making them a cost-effective
              choice for many patients.
              <br />
              <br />
              Minimally Invasive: Removable partial dentures and dental bridges
              are minimally invasive options that do not require extensive tooth
              preparation, making them suitable for patients with healthy
              natural teeth.
            </ListItemText>
          </ListItem>
        </List>
      </AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default PartialDentures;
