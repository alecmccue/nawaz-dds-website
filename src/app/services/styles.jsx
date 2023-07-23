import styled from "@emotion/styled";
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

export const ServiceImage = styled(Image)`
  border-radius: 2rem;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  height: fit-content;
  justify-content: center;
  max-width: 80rem;
  padding: 2rem;
`;

export const ServicesWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
