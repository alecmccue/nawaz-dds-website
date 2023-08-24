import styled from "@emotion/styled";
import { Accordion, Typography } from "@mui/material";

export const AccordionDetailsHeader = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

export const AccordionSummaryContentWrapper = styled.div`
  display: flex;
  gap: 4rem;
  margin-right: 2rem;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-right: 0;
    gap: 1.5rem;
  }
`;

export const AccordionSummaryTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccordionTitle = styled(Typography)`
  font-size: 2.2rem;

  @media (max-width: 1024px) {
    font-size: 1.9rem;
  }
`

export const Border = styled.div`
  width: 10rem;
  height: 0.3rem;
  background: #00acb1;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

export const ServiceAccordion = styled(Accordion)`
  padding: 2rem;

  &:hover {
    background-color: whitesmoke;
  }

  & .MuiAccordionSummary-gutters {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 1024px) {
    padding: 1rem 0.5rem;
  }
`;

export const ServiceImage = styled.img`
  border-radius: 1rem;
  height: 16.5rem;
  width: 25rem;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  height: fit-content;
  justify-content: center;
  max-width: 80rem;
  padding: 1rem;
  scroll-margin-top: 8rem;

  @media (max-width: 1024px) {
    padding: 1rem 0;
    scroll-margin-top: 7rem;
  }

`;

export const ServicesWrapper = styled.div`
  align-items: center;
  background-color: azure;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (max-width: 1024px) {
    padding: 2rem 1rem;
  }
`;