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

const Extractions = () => (
  <ServiceWrapper id="extractions">
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage alt="Extractions" src="/dental_extraction.jpg" />
          <AccordionSummaryTextWrapper>
            <Typography className="poppins" style={{ fontSize: "2.5rem" }} >
              Extractions
            </Typography>
            <Border />
            <Typography className="nunito" style={{ fontSize: "1.3rem" }} >
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
      <AccordionDetails>
        <List>
          <AccordionDetailsHeader className="poppins">
            Reasons for Extraction:
          </AccordionDetailsHeader>
          <List>
            <ListItem>
              <ListItemText
                className="nunito"
                primaryTypographyProps={{ fontSize: "1.3rem" }}
              >
                Severe Tooth Decay: Teeth with extensive decay that cannot be
                effectively restored through fillings, crowns, or root canal
                treatment may need to be extracted to prevent the spread of
                infection and preserve overall oral health.
                <br />
                <br />
                Advanced Gum Disease: In cases where gum disease has progressed
                to an advanced stage, the supporting structures around the tooth
                can become compromised. Extracting affected teeth may be
                necessary to halt the disease's progression and prevent further
                damage.
                <br />
                <br />
                Dental Trauma: Teeth that have suffered severe trauma due to
                accidents or injuries, resulting in irreparable damage, may
                require extraction.
                <br />
                <br />
                Orthodontic Treatment: Sometimes, dental extractions are planned
                as part of orthodontic treatment to create space and achieve
                proper alignment of the teeth.
              </ListItemText>
            </ListItem>
          </List>

          <AccordionDetailsHeader className="poppins">
            Type of Tooth:
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              className="nunito"
              primaryTypographyProps={{ fontSize: "1.3rem" }}
            >
              Wisdom Teeth Extraction: Wisdom teeth, also known as third molars,
              often need to be extracted due to their late eruption and
              potential for causing crowding, impaction, or other issues in the
              mouth.
              <br />
              <br />
              Non-Wisdom Tooth Extraction: This category includes the extraction
              of any other tooth, such as incisors, canines, premolars, or
              molars, for various dental reasons.
            </ListItemText>
          </ListItem>

          <AccordionDetailsHeader className="poppins">
            Aftercare and Complications:
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              className="nunito"
              primaryTypographyProps={{ fontSize: "1.3rem" }}
            >
              Aftercare Instructions: After a dental extraction, patients
              receive specific aftercare instructions from the dentist to
              promote proper healing. This may include guidelines on managing
              pain, swelling, and bleeding, as well as instructions for eating,
              drinking, and oral hygiene during the recovery period.
              <br />
              <br />
              Potential Complications: Dental extractions, like any surgical
              procedure, carry some risks. Potential complications include dry
              socket (when the blood clot is dislodged from the extraction
              site), infection, or excessive bleeding. Proper aftercare can help
              minimize these risks.
            </ListItemText>
          </ListItem>
        </List>
      </AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default Extractions;
