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
    AccordionSummaryTextWrapper, AccordionTitle,
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
                        <AccordionTitle className="poppins">
                            Invisalign®
                        </AccordionTitle>
                        <Border />
                        <Typography style={{ fontSize: "1.3rem" }} className="nunito">
                            Invisalign® is the clear way to straighten your teeth. It
                            gradually moves your teeth through a series of custom-made,
                            removable, nearly invisible aligners. You can eat anything you
                            want and it is removable for good hygiene. Invisalign® makes it
                            possible to do virtually everything regular braces do, but do
                            it with far more comfort, fewer appointments, no eating
                            restrictions, and without anyone noticing.
                        </Typography>
                    </AccordionSummaryTextWrapper>
                </AccordionSummaryContentWrapper>
            </AccordionSummary>

            <AccordionDetails>
                <List>
                    <AccordionDetailsHeader className="poppins">
                        Virtually Invisible:
                    </AccordionDetailsHeader>

                    <ListItem>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: "1.3rem" }}
                            className="nunito"
                        >
                            Instead of using wire and brackets, Invisalign® uses smooth, clear
                            plastic trays -- called aligners -- which are virtually invisible.
                            No need to hide your smile while straightening your teeth. Gradual
                            and Precise Tooth Movement: The clear aligners work gradually to
                            shift teeth into the desired positions. As patients progress
                            through the treatment plan, new sets of aligners are provided to
                            continue the gentle adjustment of teeth, achieving precise and
                            predictable results.
                            <br />
                            <br />
                            With the ability to remove the aligners, maintaining good oral
                            hygiene becomes more manageable. Patients can brush and floss
                            their teeth as usual, preventing the buildup of plaque and
                            ensuring healthier gums and teeth throughout the treatment.
                            <br />
                            <br />
                            In many cases, Invisalign treatment requires fewer visits to the
                            orthodontist compared to traditional braces. Patients receive
                            multiple sets of aligners at once and can switch to the next set
                            at home, reducing the need for frequent office appointments.
                        </ListItemText>
                    </ListItem>

                    <AccordionDetailsHeader className="poppins">
                        Comfortable:
                    </AccordionDetailsHeader>
                    <ListItem>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: "1.3rem" }}
                            className="nunito"
                        >
                            The smooth trays do not cause the discomfort & abrasions
                            associated with the wire & brackets used with regular metal braces
                            ... which also means less time at the dentist getting adjustments.
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
                            To discover if Invisalign® is right for you, please call Dr. Nawaz
                            at (703) 430-3838. For more information, please visit the
                            <a href="https://www.invisalign.com/" style={{ color: "blue" }}>
                                {" "}
                                Invisalign website!
                            </a>
                        </ListItemText>
                    </ListItem>
                </List>
            </AccordionDetails>
        </ServiceAccordion>
    </ServiceWrapper>
);

export default Invisalign;
