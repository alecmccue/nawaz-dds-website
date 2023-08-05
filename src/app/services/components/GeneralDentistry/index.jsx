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

const GeneralDentistry = () => (
  <ServiceWrapper id="general_dentistry">
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage alt="General Dentistry" src="/general_dentistry.jpg" />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.2rem" }} className="poppins">
              General & Family Dentistry
            </Typography>
            <Border/>
            <Typography style={{ fontSize: "1.3rem" }} className="nunito">
              General dentistry services encompass a wide range of procedures
              designed to promote oral health, address dental issues, and
              enhance smiles. Regular visits to a general dentist play a vital
              role in keeping teeth and gums healthy, preventing potential
              complications, and ensuring a confident and radiant smile.
            </Typography>
          </AccordionSummaryTextWrapper>
        </AccordionSummaryContentWrapper>
      </AccordionSummary>

      <AccordionDetails>
        <List>
          <AccordionDetailsHeader className="poppins">
            Diagnosis and Treatment Planning:
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.3rem" }}
              className="nunito"
            >
              Diagnosis and Treatment Planning are fundamental aspects of
              general dentistry services that play a pivotal role in promoting
              oral health and enhancing smiles. During regular dental visits, a
              skilled general dentist conducts a comprehensive examination of
              the patient's oral cavity, utilizing state-of-the-art diagnostic
              tools such as X-rays and intraoral cameras to assess the condition
              of teeth, gums, and surrounding structures. Through this
              meticulous evaluation, the dentist can identify existing dental
              issues, such as cavities, gum disease, or dental abnormalities,
              and also spot potential complications that may arise if left
              untreated.
              <br />
              <br />
              Once the diagnosis is complete, the general dentist works in close
              collaboration with the patient to develop a personalized treatment
              plan tailored to their specific needs and goals. This plan
              outlines the recommended procedures and interventions to address
              the identified dental problems effectively. The dentist takes the
              time to explain the proposed treatments in a clear and
              understandable manner, highlighting their benefits and any
              associated risks. This approach ensures that the patient is
              well-informed and actively involved in the decision-making
              process, instilling confidence and trust in the treatment plan.
            </ListItemText>
          </ListItem>

          <AccordionDetailsHeader className="poppins">
            Restorative Care:
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.3rem" }}
              className="nunito"
            >
              Restorative care is a fundamental pillar of general dentistry
              aimed at repairing and revitalizing damaged or decayed teeth. When
              teeth suffer from cavities, fractures, or wear, restorative
              procedures are employed to restore their functionality, strength,
              and aesthetics. Dental fillings are a common restorative option
              for treating minor to moderate cavities, where the decayed portion
              of the tooth is removed, and the resulting space is filled with a
              durable tooth-colored material. This process not only halts the
              progression of decay but also restores the tooth's natural shape
              and function, blending seamlessly with the surrounding teeth.
              <br />
              <br />
              In more extensive cases, dental crowns are utilized to cover and
              protect a severely damaged tooth. Custom-made to match the shape
              and color of the patient's natural teeth, dental crowns provide
              stability and strength to weakened teeth, preventing further
              damage and potential tooth loss. Additionally, dental bridges
              serve as an effective restorative solution for replacing missing
              teeth. By anchoring artificial teeth to adjacent healthy teeth,
              bridges restore the patient's ability to chew and speak
              comfortably, while also preserving the alignment of surrounding
              teeth.
            </ListItemText>
          </ListItem>
          <AccordionDetailsHeader className="poppins">
            Preventive Care:
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.3rem" }}
              className="nunito"
            >
              Preventive care is the cornerstone of maintaining optimal oral
              health and preventing dental issues before they arise. Regular
              check-ups and cleanings with a general dentist are essential
              components of preventive care. During these appointments, the
              dentist performs thorough cleanings to remove plaque, tartar, and
              surface stains that regular brushing and flossing may miss.
              Additionally, they conduct a detailed examination to identify any
              signs of gum disease, cavities, or other potential dental
              problems.
              <br />
              <br />
              Educating patients on proper oral hygiene practices is another
              crucial aspect of preventive care. General dentists provide
              valuable guidance on effective brushing and flossing techniques,
              as well as advice on maintaining a balanced diet for better oral
              health. By emphasizing preventive care, general dentistry empowers
              patients to take proactive steps in caring for their teeth and
              gums, helping them avoid the development of serious dental issues
              that can lead to discomfort, costly treatments, and potential
              tooth loss. Regular visits to a general dentist not only promote
              oral health but also contribute to an overall confident and
              radiant smile.
            </ListItemText>
          </ListItem>
        </List>
      </AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default GeneralDentistry;
