import styled from "@emotion/styled";

export const BackgroundImage = styled.img`
  filter: brightness(50%);
  height: auto;
  min-height: 22rem;
  width: 100%;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  position: relative;
  width: 100%;
`;

export const OverlayText = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  gap: 1rem;
  height: 20rem;
  left: 8%;
  position: absolute;
  top: 12%;
  width: 45rem;

  max-width: 100vw;
`;