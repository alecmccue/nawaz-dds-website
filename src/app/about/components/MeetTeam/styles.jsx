import styled from "@emotion/styled";

export const LeftColumn = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
  position: relative;

  @media (max-width: 1300px) {
    padding: 0;
    max-width: 60rem;
  }
`;


export const MeetTeamInnerWrapper = styled.div`
  display: flex;
  max-width: 100rem;

  @media (max-width: 1300px) {
    flex-direction: column-reverse;
  }
`

export const MeetTeamOuterWrapper = styled.div`
  background-color: azure;
  color: black;
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 1300px) {
    padding: 3rem 2rem;
  }
`;

export const MeetTeamTitle = styled.div`
  font-size: 3rem;

  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 1rem;

  @media (max-width: 1300px) {
    padding: 0;
    align-items: center;
  }
`;

export const TeamImage = styled.img`
  border-radius: 0.5rem;
  height: auto;
  width: 100%;

  @media (max-width: 1300px) {
    max-width: 50rem;
  }

  @media (max-width: 1000px) {
    max-width: 40rem;
  }
`;