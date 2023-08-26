import React from "react";
import "../../../fonts.css";
import { AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import {
    FAQWrapper,
    FAQContainer,
    FAQTitle,
    Divider,
    FAQAccordion,
} from "./styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQs = () => {
    const faqsData = [
        {
            question: "How Can I Schedule an Appointment?",
            answer:
                "Scheduling an appointment at our dental office is simple and convenient. You can either call us at (703)-430-3838, or you can request an appointment on the website, and we will call you back to confirm your appointment.",
        },
        {
            question: "What Insurances Do You Accept?",
            answer:
                "We accept all PPOs (Preferred Provider Organizations)!",
        },
        {
            question: "What Age Groups Do You Treat?",
            answer:
                "We provide dental care for patients of all ages, from children to seniors. Our services are tailored to meet the unique needs of each age group, ensuring comprehensive and personalized care for every member of your family.",
        },
        {
            question: "What Should I Expect During My First Visit?",
            answer:
                "During your initial visit, our experienced team will conduct a comprehensive dental examination, including x-rays if necessary. We'll discuss your dental history, address any concerns you have, and create a personalized treatment plan tailored to your needs.",
        },
        {
            question: "What Sets Your Dental Practice Apart?",
            answer:
                "Our dental practice stands out due to our experienced skilled professionals, state-of-the-art technology, and patient-centric approach. We prioritize creating a comfortable and welcoming environment for our patients, ensuring they receive the highest quality care with a personal touch.",
        },
    ];

    return (
        <FAQWrapper>
            <div className="poppins">
                <FAQTitle>FAQs</FAQTitle>
            </div>
            <Divider />
            <FAQContainer>
                {faqsData.map((faq, index) => (
                    <FAQAccordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <div className="nunito">
                                <Typography variant="h5">{faq.question}</Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="scope-one">
                                <Typography variant="h6">{faq.answer}</Typography>
                            </div>
                        </AccordionDetails>
                    </FAQAccordion>
                ))}
            </FAQContainer>
        </FAQWrapper>
    );
};

export default FAQs;
