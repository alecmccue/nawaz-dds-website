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

const RootCanal = () => (
    <ServiceWrapper id="root_canal">
        <ServiceAccordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionSummaryContentWrapper>
                    <ServiceImage alt="Root Canal" src="/root_canal.jpg" />
                    <AccordionSummaryTextWrapper>
                        <AccordionTitle className="poppins">
                            Root Canal
                        </AccordionTitle>
                        <Border />
                        <Typography style={{ fontSize: "1.3rem" }} className="nunito">
                            Root Canal therapy refers to the process by which a dentist treats
                            the inner aspects of a tooth, specifically that area inside a
                            tooth that is occupied by its "pulp tissue." Most people would
                            probably refer to a tooth's pulp tissue as its "nerve." While a
                            tooth's pulp tissue does contain nerve fibers it is also composed
                            of arteries, veins, lymph vessels, and connective tissue.
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
                            You could say that the purpose of root canal treatment is to
                            create an end result where the tissues that surround a tooth's
                            root will maintain a healthy status despite the fact that the
                            tooth's nerve has undergone degenerative changes. Specifically, we
                            mean that the tissues surrounding a tooth's root are not affected
                            by bacterial infection and/or irritating substances leaking from
                            those inner aspects of the tooth originally occupied by the
                            tooth's nerve tissue.
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
