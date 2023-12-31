import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const AboutNawazTitle = styled(Typography)`
  font-size: 3rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20rem;
`;

export const Divider = styled.div`
  width: 10rem;
  height: 0.3rem;
  background: #00acb1;
  margin-bottom: 0.5rem;
`;

export const DividerSmall = styled.div`
  width: 4rem;
  height: 0.2rem;
  background: #00acb1;
  margin-bottom: 0.5rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 20rem;
  width: 25rem;

  @media (max-width: 1350px) {
    max-width: 50rem;
  }

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 30rem;
    justify-content: center;
  }

  @media (max-width: 700px) {
    max-width: 20rem;
  }
`;

export const MeetNawazWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fafcfc;
  padding: 4rem 2rem;
  gap: 5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

export const NawazImage = styled.img`
  border-radius: 0.5rem;
  height: 30rem;
  width: auto;

  @media (max-width: 1350px) {
    height: 40rem;
  }

  @media (max-width: 1200px) {
    height: 40rem;
  }

  @media (max-width: 700px) {
    height: 30rem;
  }
`;

export const TextInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 4rem;

  @media (max-width: 1350px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TextOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 75rem;
  width: 70%;
  align-items: center;
  justify-content: center;

  @media (max-width: 1350px) {
    width: fit-content;

  }
`;
