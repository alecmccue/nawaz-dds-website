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

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
`;


export const MeetTeamInnerWrapper = styled.div`
  display: flex;
  max-width: 100rem;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`

export const MeetTeamOuterWrapper = styled.div`
  background-color: azure;
  color: black;
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 1024px) {
    padding-bottom: 2rem;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

export const TeamImage = styled.img`
  border-radius: 1rem;
  height: auto;
  width: 100%;
`;