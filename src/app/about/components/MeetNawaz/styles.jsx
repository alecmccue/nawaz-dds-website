import styled from "@emotion/styled";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const Divider = styled.div`
  width: 10rem;
  height: 0.3rem;
  background: #00acb1;
  margin-bottom: 0.5rem;
`;

export const DividerSmall = styled.div`
  width: 3rem;
  height: 0.2rem;
  background: #00acb1;
  margin-bottom: 0.5rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 20rem;
`;

export const Line = styled.div`
  border: thin solid #00acb1;
  width: 100%;
`;

export const MeetNawazWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  gap: 5rem;
`;

export const NawazImage = styled.img`
  border-radius: 1rem;
  height: 30rem;
  width: auto;
`;

export const TextInnerWrapper = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TextOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 75rem;
`;
