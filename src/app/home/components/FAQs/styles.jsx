import styled from "@emotion/styled";
import { Accordion, Typography } from "@mui/material";

export const Divider = styled.div`
  width: 12rem;
  height: 8px;
  background: #00acb1;
  margin: 2rem auto;
`;

export const FAQAccordion = styled(Accordion)`
  padding: 0.25rem;
  width: 80%;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #fafcfc;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const FAQContainer = styled.div`
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  width: 80%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const FAQTitle = styled(Typography)`
  margin-top: 2rem;
  font-size: 2rem;
`;

export const FAQWrapper = styled.div`
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
