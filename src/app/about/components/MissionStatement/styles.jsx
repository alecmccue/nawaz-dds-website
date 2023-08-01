import styled from "@emotion/styled";

export const BackgroundImage = styled.img`
  height: 40rem;
  filter: brightness(60%);
  opacity: 0.6;
  width: 100%;
`;

export const MissionStatementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const OverlayCard = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: fit-content;
  justify-content: center;
  left: 50%;
  padding: 3rem;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50rem;
`;
