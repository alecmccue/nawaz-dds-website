import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const DigitalXrayImage = styled.img`
  height: auto;
  width: 100%;
`;

export const Divider = styled.div`
  background: #00acb1;
  height: 0.3rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  width: 10rem;
`;

export const ImageColumn = styled.div`
  display: flex;
  overflow: hidden;
  flex: 1;
  padding: 3rem;
  margin-top: 1.5rem;

  @media (max-width: 1200px) {
    padding: 0;
    justify-content: center;
  }
`;

export const IntroductionWrapper = styled.div`
  background: url("/office_ultrawide.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 30rem;
  padding-top: 5rem;

  @media (max-width: 600px) {
    background: url("/office_mobile.jpg");
    background-size: 100% 100%;
    align-items: center;
    height: 40rem;
  }

  @media (max-width: 450px) {
    padding-top: 2rem;
  }
`;
export const IntroductionTextWrapper = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  color: #fefefe;
  display: flex;
  flex-direction: column;
  max-width: 60rem;
`;

export const ProductsTitle = styled(Typography)`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }
`

export const ProductWrapperImageLeft = styled.div`
  background-color: #fafcfc;
  border-radius: 1rem;
  box-shadow: rgba(135, 228, 219, 0.5) 0 10px 10px -10px;
  display: flex;
  gap: 1rem;
  max-width: 80rem;
  padding: 2rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
  }
`;

export const ProductWrapperImageRight = styled.div`
  background-color: #fafcfc;
  border-radius: 1rem;
  box-shadow: rgba(135, 228, 219, 0.5) 0 10px 10px -10px;
  display: flex;
  gap: 1rem;
  max-width: 80rem;
  padding: 2rem;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    gap: 2rem;
    margin-top: 1rem;
  }
`;

export const ProductsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 2rem;

  @media (max-width: 1200px) {
    padding: 0 1rem;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
