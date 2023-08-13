import styled from "@emotion/styled";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  min-width: 20rem;
  width: 40%;
`;

export const MeetNawazWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fafcfc;
  padding: 2rem;
  gap: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const NawazImage = styled.img`
  border-radius: 1rem;
  height: 30rem;
  width: auto;
`;

export const TextInnerWrapper = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 1024px) {
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

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
