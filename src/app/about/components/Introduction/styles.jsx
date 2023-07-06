import styled from "@emotion/styled";

export const BackgroundImage = styled.img`
  height: 100%;
  opacity: 0.5;
  width: 100%;
`;

export const LeftColumn = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;
`;

export const RightColumn = styled.div`
  background-color: #87e4db;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding-left: 3rem;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40rem;
  width: 100%;
`;

export const OverlayImage = styled.img`
  height: 18rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
`;