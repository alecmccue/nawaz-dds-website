import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FAQWrapper, FAQContainer, FAQTitle, Border } from "./styles";
import "./style.css";
import '../../../../app/fonts.css'
const FAQs = () => {
  const faqsData = [
    {
      question: "FAQ Question 1...",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium, voluptates totam obcaecati maiores in at ipsa hic repudiandae eligendi. Ratione illum odit veniam amet temporibus cumque debitis. Voluptate, iste.",
    },
    {
      question: "FAQ Question 2...",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium, voluptates totam obcaecati maiores in at ipsa hic repudiandae eligendi. Ratione illum odit veniam amet temporibus cumque debitis. Voluptate, iste.",
    },
    {
      question: "FAQ Question 3...",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium, voluptates totam obcaecati maiores in at ipsa hic repudiandae eligendi. Ratione illum odit veniam amet temporibus cumque debitis. Voluptate, iste.",
    },
    {
      question: "FAQ Question 4...",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium, voluptates totam obcaecati maiores in at ipsa hic repudiandae eligendi. Ratione illum odit veniam amet temporibus cumque debitis. Voluptate, iste.",
    },
    {
      question: "FAQ Question 5...",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium, voluptates totam obcaecati maiores in at ipsa hic repudiandae eligendi. Ratione illum odit veniam amet temporibus cumque debitis. Voluptate, iste.",
    },
  ];

  return (
    <FAQWrapper>
      <div className="poppins">
        <FAQTitle>FAQs</FAQTitle>
      </div>
      <Border />
      <FAQContainer>
        {faqsData.map((faq, index) => (
          <Accordion key={index} className="customAccordion">
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
          </Accordion>
        ))}
      </FAQContainer>
    </FAQWrapper>
  );
};

export default FAQs;
