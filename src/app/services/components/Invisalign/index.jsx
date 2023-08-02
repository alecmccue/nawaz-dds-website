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

const Invisalign = () => (
  <ServiceWrapper id="invisalign">
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage alt="Invisalign" src="/invisalign.jpg" />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.2rem" }} className="poppins">
              Invisalign
              <Border />
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }} className="nunito">
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

      <AccordionDetails>
        <List>
          <AccordionDetailsHeader className="poppins">
            Benefits of Invisalign:
          </AccordionDetailsHeader>

          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.3rem" }}
              className="nunito"
            >
              Discreet Appearance:One of the primary benefits of Invisalign is
              its virtually invisible appearance. The clear aligners are hardly
              noticeable when worn, allowing individuals to undergo teeth
              straightening discreetly, without drawing attention to their
              orthodontic treatment.
              <br />
              <br />
              Comfortable and Customized Fit: Comfortable and Customized Fit:
              Invisalign aligners are custom-made for each patient using
              advanced 3D imaging technology. They are designed to fit snugly
              over the teeth, ensuring a comfortable experience throughout the
              treatment journey.
              <br />
              <br />
              Gradual and Precise Tooth Movement: The clear aligners work
              gradually to shift teeth into the desired positions. As patients
              progress through the treatment plan, new sets of aligners are
              provided to continue the gentle adjustment of teeth, achieving
              precise and predictable results.
              <br />
              <br />
              Removable Aligners: Unlike traditional braces that are fixed to
              the teeth, Invisalign aligners are removable. This feature grants
              individuals the freedom to take out the aligners during meals,
              allowing them to enjoy their favorite foods without restrictions.
              <br />
              <br />
              Improved Oral Hygiene: With the ability to remove the aligners,
              maintaining good oral hygiene becomes more manageable. Patients
              can brush and floss their teeth as usual, preventing the buildup
              of plaque and ensuring healthier gums and teeth throughout the
              treatment.
              <br />
              <br />
              Fewer Orthodontic Visits: In many cases, Invisalign treatment
              requires fewer visits to the orthodontist compared to traditional
              braces. Patients receive multiple sets of aligners at once and can
              switch to the next set at home, reducing the need for frequent
              office appointments.
            </ListItemText>
          </ListItem>

          <AccordionDetailsHeader className="poppins">
            Does Invisalign Work?
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.3rem" }}
              className="nunito"
            >
              Yes, Invisalign is an effective orthodontic treatment for many
              individuals. The clear aligners exert gentle and controlled forces
              on the teeth, gradually moving them into proper alignment. The
              treatment is suitable for various orthodontic issues, such as
              crowding, gaps, overbite, underbite, and crossbite. However, the
              success of Invisalign depends on consistent wear and adherence to
              the treatment plan.
              <br />
              <br />
              Patients must wear their aligners for the recommended 20-22 hours
              per day and switch to the next set of aligners as instructed by
              their orthodontist. Regular follow-ups with the orthodontist will
              ensure that the treatment progresses as planned, leading to
              successful and lasting results.
            </ListItemText>
          </ListItem>

          <AccordionDetailsHeader className="poppins">
            Is Invisalign Right for Me?
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.3rem" }}
              className="nunito"
            >
              Invisalign is an excellent option for many individuals seeking
              orthodontic treatment, but its suitability depends on various
              factors. An orthodontist can determine if Invisalign is the right
              choice based on factors such as the severity of the orthodontic
              issue, the patient's age, and their commitment to wearing the
              aligners as prescribed.
              <br />
              <br />
              Invisalign is often a preferred choice for teenagers and adults
              who desire a more discreet and comfortable treatment option.
              However, patients with complex orthodontic needs may still require
              traditional braces for the most effective outcome.
            </ListItemText>
          </ListItem>
        </List>
      </AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default Invisalign;
