import styled from "@emotion/styled";

export const ModalBox = styled.div`
  background-color: white;
  border-color: white;
  height: 40rem;
  width: 40rem;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1024px) {
    width: 20rem;
    height: 20rem;
  }
`