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
`;

export const MeetTeamInnerWrapper = styled.div`
  display: flex;
  max-width: 100rem;
`

export const MeetTeamOuterWrapper = styled.div`
  background-color: #00ACB1;
  color: #EBF2F3;
  display: flex;
  justify-content: center;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  margin-top: 2rem;
  padding: 0 1rem 0 1rem;
`;

export const TeamImage = styled.img`
  border-radius: 1rem;
  height: auto;
  width: 100%;
`;