import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FAQWrapper, FAQContainer, FAQTitle, Border} from "./styles";
import './style.css'

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
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium, voluptates totam obcaecati maiores in at ipsa hic repudiandae eligendi. Ratione illum odit veniam amet temporibus cumque debitis. Voluptate, iste.",
    },
    {
      question: "FAQ Question 4...",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium, voluptates totam obcaecati maiores in at ipsa hic repudiandae eligendi. Ratione illum odit veniam amet temporibus cumque debitis. Voluptate, iste.",
    },
    {
      question: "FAQ Question 5...",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium, voluptates totam obcaecati maiores in at ipsa hic repudiandae eligendi. Ratione illum odit veniam amet temporibus cumque debitis. Voluptate, iste.",
    },
  ];

  return (
    <FAQWrapper>
      <FAQTitle>FAQs</FAQTitle>
      <Border />
      <FAQContainer>
      {faqsData.map((faq, index) => (
        <Accordion key={index} className="customAccordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </FAQContainer>
    </FAQWrapper>
  );
};

export default FAQs;
