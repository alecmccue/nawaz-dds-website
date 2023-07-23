import styled from "@emotion/styled";
import { Accordion } from "@mui/material";
import Image from "next/image";

export const AccordionSummaryContentWrapper = styled.div`
  display: flex;
  gap: 4rem;
  margin-right: 2rem;
`;

export const AccordionSummaryTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ServiceAccordion = styled(Accordion)`
  padding: 2rem;
  
  &:hover {
    background-color: #ebf2f3;
  }
`;

export const ServiceImage = styled.img`
  border-radius: 2rem;
  height: auto;
  width: 25rem;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  height: fit-content;
  justify-content: center;
  max-width: 80rem;
  padding: 1rem;
`;

export const ServicesWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
