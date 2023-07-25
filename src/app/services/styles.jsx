import styled from "@emotion/styled";
import { Accordion, Typography } from "@mui/material";

export const AccordionDetailsHeader = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`

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
    background-color: #EBF2F3;
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
  scroll-margin-top: 4rem;
`;

export const ServicesWrapper = styled.div`
  align-items: center;
  background-color: #87E4DB;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
