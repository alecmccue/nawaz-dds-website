import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const ApplyNowText = styled(Typography)`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
`

export const CareCreditButtonWrapper = styled.div`
  background-color: #008378;
  border-radius: 0.5rem;
  color: white;
  display: flex;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  align-items: center;

  &:hover {
    background-color: #009982;
  }
`;

export const CareCreditSignUpWrapper = styled.div`
  align-items: center;
  background-color: #A8D99C;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 20rem;
  justify-content: center;
  padding: 1rem;
  max-width: 25rem;

  @media (max-width: 1124px) {
    width: 100%;
  }
`;

export const CareCreditWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 5rem;

  @media (max-width: 1124px) {
    flex-direction: column;
    gap: 3rem;
    padding: 0;
    width: 100%;
  }
`;

export const InsuranceBanner = styled.div`
  background: url(/insurance-banner.jpg);
  background-color: azure;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: 30rem;
  width: 100%;

  @media (max-width: 1200px) {
    background: url(/insurance-banner-mobile.jpg);
    justify-content: center;
    padding: 1rem;
  }
`

export const InsuranceWrapper = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 4rem 2rem;
  width: 100%;

  @media (max-width: 1124px) {
    padding: 4rem 2rem;
    gap: 1rem;
  }
`;

export const IntroWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  padding: 2rem;
  text-align: center;
  margin-left: 4rem;

  @media (max-width: 1124px) {
    margin-left: 0;
    width: 100%;
    padding: 0 1.5rem;
  }
`;