import styled from "@emotion/styled";
import { Accordion, Typography } from "@mui/material";

export const Divider = styled.div`
  background: #00acb1;
  height: 8px;
  margin: 2rem auto;
  width: 12rem;
`;

export const FAQAccordion = styled(Accordion)`
  background-color: #fafcfc;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 0.25rem;
  width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const FAQContainer = styled.div`
  align-items: center;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4rem;
  width: 55rem;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const FAQTitle = styled(Typography)`
  font-size: 2rem;
  margin-top: 2rem;
`;

export const FAQWrapper = styled.div`
  align-items: center;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
