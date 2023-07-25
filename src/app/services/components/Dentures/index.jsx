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

      <AccordionDetails>
        <List>
          <AccordionDetailsHeader>Type of Dentures:</AccordionDetailsHeader>
          <ListItem>
            <ListItemText primaryTypographyProps={{ fontSize: "1.3rem" }}>
              Complete Dentures: Complete dentures are designed to replace all
              teeth in either the upper or lower jaw or both. They are used when
              a patient has lost all of their natural teeth due to decay, gum
              disease, or other dental issues. Complete dentures consist of a
              flesh-colored acrylic base that fits over the gums and a set of
              artificial teeth made from porcelain or acrylic. They are
              custom-made to provide a snug and comfortable fit for the
              individual's mouth.
              <br />
              <br />
              Partial Dentures: Partial dentures are used when a patient has
              some natural teeth remaining and needs to fill the gaps left by
              missing teeth. These dentures consist of a metal or acrylic
              framework that attaches to the remaining teeth with clasps or
              precision attachments. Like complete dentures, partial dentures
              have artificial teeth to replace the missing ones. They are also
              custom-made to ensure a secure and functional fit.
            </ListItemText>
          </ListItem>

          <AccordionDetailsHeader>Purpose:</AccordionDetailsHeader>
          <ListItem>
            <ListItemText primaryTypographyProps={{ fontSize: "1.3rem" }}>
              Replacing Missing Teeth: The primary purpose of dentures is to
              replace missing teeth, whether it is all teeth in one or both jaws
              (complete dentures) or a few missing teeth (partial dentures).
              Dentures restore the appearance of the smile and help maintain the
              facial structure, which can be affected by tooth loss.
              <br />
              <br />
              Restoring Oral Functionality: Dentures allow individuals to eat,
              speak, and smile with confidence, even after significant tooth
              loss. They improve chewing ability, speech clarity, and overall
              oral function, enhancing the quality of life for those who wear
              them.
            </ListItemText>
          </ListItem>

          <AccordionDetailsHeader>Materials Used:</AccordionDetailsHeader>
          <ListItem>
            <ListItemText primaryTypographyProps={{ fontSize: "1.3rem" }}>
              Acrylic Dentures: Acrylic dentures are made from a type of plastic
              called acrylic resin. They are a popular choice for both complete
              and partial dentures due to their lightweight, natural appearance,
              and ease of adjustment.
              <br />
              <br />
              Porcelain Dentures: Porcelain dentures are made from a type of
              ceramic material. They are known for their durability, strength,
              and ability to closely mimic the appearance of natural teeth.
              Porcelain dentures are often used in complete dentures for their
              aesthetic qualities.
            </ListItemText>
          </ListItem>
        </List>
      </AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default Dentures;
