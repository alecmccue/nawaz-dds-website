import styled from "@emotion/styled";

export const BackgroundImage = styled.img`
  height: 100%;
  opacity: 0.5;
  width: 100%;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40rem;
  width: 100%;
`;

export const OverlayText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 20rem;
  left: 35rem;
  position: absolute;
  top: 28rem;
  transform: translate(-50%, -50%);
  width: fit-content;
`;