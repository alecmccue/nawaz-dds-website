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

const RootCanal = () => (
  <ServiceWrapper id="root_canal">
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage alt="Root Canal" src="/root_canal.jpg" />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.2rem" }} className="poppins">
              Root Canal
              <Border />
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }} className="nunito">
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

      <AccordionDetails>
        <List>
          <AccordionDetailsHeader className="poppins">
            Purpose:
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.3rem" }}
              className="nunito"
            >
              Root canals are dental procedures performed to save severely
              damaged or infected teeth from extraction. When a tooth's pulp,
              which contains nerves, blood vessels, and connective tissues,
              becomes infected or inflamed due to deep decay, cracks, or trauma,
              it can cause severe pain and lead to tooth loss if left untreated.
              The purpose of a root canal is to remove the infected or inflamed
              pulp, clean and disinfect the root canal system, and seal it to
              prevent further infection. By doing so, the natural tooth can be
              retained, and the patient's oral health can be restored.
            </ListItemText>
          </ListItem>

          <AccordionDetailsHeader className="poppins">
            Procedure and Process:
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.3rem" }}
              className="nunito"
            >
              The root canal procedure typically involves several steps. First,
              the dentist numbs the area around the affected tooth to ensure the
              patient's comfort during the treatment. Then, they create a small
              access hole in the tooth's crown to reach the pulp chamber and
              root canals. Using specialized instruments, the infected pulp is
              carefully removed, and the root canals are cleaned and shaped to
              remove any debris or bacteria. Once the canals are thoroughly
              cleaned, they are filled with a biocompatible material, usually
              gutta-percha, to seal the root canals. Finally, the access hole is
              sealed with a temporary filling, and after a healing period, a
              dental crown is placed over the treated tooth to protect and
              restore its function.
            </ListItemText>
          </ListItem>

          <AccordionDetailsHeader className="poppins">
            Benefits:
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.3rem" }}
              className="nunito"
            >
              Root canals offer several essential benefits to patients. First
              and foremost, they allow patients to retain their natural teeth,
              which is vital for maintaining proper oral function and
              aesthetics. Preserving the natural tooth structure also helps
              prevent adjacent teeth from shifting and maintains the integrity
              of the jawbone. Additionally, root canals effectively alleviate
              the severe pain caused by dental infections, providing much-needed
              relief to patients. By removing the infected pulp and sealing the
              root canals, the risk of future infections is minimized, promoting
              better long-term oral health.
            </ListItemText>
          </ListItem>

          <AccordionDetailsHeader className="poppins">
            Post-treatment care:
          </AccordionDetailsHeader>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.3rem" }}
              className="nunito"
            >
              After a root canal procedure, proper post-treatment care is
              crucial to ensure the success and longevity of the treated tooth.
              Patients may experience some mild discomfort or sensitivity, which
              can be managed with over-the-counter pain medications and should
              subside within a few days. It is essential to follow any specific
              instructions provided by the dentist, such as avoiding hard or
              sticky foods and maintaining good oral hygiene practices. After
              the root canal, a dental crown is typically placed over the
              treated tooth to provide added protection and restore its
              appearance and function. Regular dental check-ups are necessary to
              monitor the tooth's health and ensure its long-term success. With
              proper care, a treated tooth can function effectively for many
              years, allowing patients to enjoy a pain-free smile and optimal
              oral health.
            </ListItemText>
          </ListItem>
        </List>
      </AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default RootCanal;
