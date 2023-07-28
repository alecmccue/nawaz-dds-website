import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 20rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const Line = styled.div`
  border: thin solid black;
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
  height: auto;
  width: 100%;
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
