import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../../fonts.css";
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
  Border,
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
            <Typography style={{ fontSize: "2.2rem" }} className="poppins">
              Implants
            </Typography>
            <Border />
            <Typography style={{ fontSize: "1.3rem" }} className="nunito">
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

      <AccordionDetails>
        <List>
          <AccordionDetailsHeader className="poppins">
            How Are Dental Implants Placed?
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.3rem" }}
              className="nunito"
            >
              Initial Assessment: The journey begins with a comprehensive oral
              examination and a thorough evaluation of the patient's dental and
              medical history. X-rays, CT scans, or other imaging techniques may
              be used to assess the jawbone's density and determine the optimal
              placement of the implants.
              <br />
              <br />
              Surgical Placement: During the surgical procedure, the dental
              implant, usually made of titanium, is precisely positioned into
              the jawbone at the site of the missing tooth. The dentist or oral
              surgeon creates a small incision in the gum tissue to access the
              underlying bone. The implant is then carefully inserted into the
              bone, and the incision is sutured closed.
              <br />
              <br />
              Osseointegration: Following the implant placement, a critical
              phase called osseointegration occurs. Over the next several
              months, the jawbone fuses with the titanium implant, effectively
              integrating it into the bone. This process is essential as it
              ensures the stability and strength of the implant to withstand
              biting and chewing forces.
              <br />
              <br />
              Abutment Placement: Once osseointegration is complete, a minor
              surgery is performed to place an abutment on top of the dental
              implant. The abutment acts as a connector between the implant and
              the dental restoration (crown, bridge, or denture) that will be
              attached later.
              <br />
              <br />
              Restoration: After the gums heal around the abutment, the final
              step involves attaching the custom-made dental restoration. This
              restoration can be a crown for a single missing tooth, a bridge
              for multiple adjacent missing teeth, or a denture for a full arch
              replacement. The restoration is carefully crafted to match the
              color, shape, and size of the natural teeth, creating a seamless
              and aesthetically pleasing smile.
            </ListItemText>
          </ListItem>

          <AccordionDetailsHeader className="poppins">
            Are Implants Truly Permanent?
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.3rem" }}
              className="nunito"
            >
              While dental implants offer a remarkably durable and long-lasting
              solution for tooth replacement, the term "permanent" can be
              somewhat misleading. Dental implants can indeed last for many
              years, and with proper care, they can often last a lifetime. The
              success and longevity of implants depend on several factors,
              including oral hygiene, health, and regular checkups
              <br />
              <br />
              While dental implants are highly reliable, individual cases may
              vary, and occasional complications or adjustments might be
              necessary over time. Nonetheless, with proper care and
              maintenance, dental implants remain an exceptional and enduring
              solution for restoring both functionality and aesthetics to a
              patient's smile.
            </ListItemText>
          </ListItem>
        </List>
      </AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default Implants;
