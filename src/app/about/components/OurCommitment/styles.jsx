import styled from "@emotion/styled";

export const BackgroundImage = styled.img`
  height: 40rem;
  filter: brightness(35%);
  width: 100%;

  @media (max-width: 1024px) {
    height: 70rem;
  }
`;

export const Divider = styled.div`
  width: 10rem;
  height: 0.3rem;
  background: #00acb1;
`;

export const OurCommitmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const OverlayCard = styled.div`
  align-items: center;
  border-radius: 2rem;
  display: flex;
  color: white;
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
  width: 60rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
