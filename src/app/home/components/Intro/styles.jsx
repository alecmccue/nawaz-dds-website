import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const BackgroundImage = styled.div`
  background: url(/clean-dental-office.jpg);
  background-color: azure;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  flex-shrink: 0;
  height: 700px;
  width: 100%;
`

export const ContactButton = styled.div`
  align-items: center;
  background-color: #00acb1;
  border-radius: 0.5rem;
  border: 2px solid #00acb1;
  color: #fefefe;
  cursor: pointer;
  display: flex;
  font-size: 1.25rem;
  font-weight: 500;
  gap: 0.5rem;
  margin-top: 3rem;
  padding: 0.5rem 1.5rem;
  width: fit-content;

  &:hover {
    background-color: transparent;
  }
`

export const ContactButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  width: 100%;
`

export const IntroSubtitle = styled(Typography)`
  color: #fefefe;
  font-size: 85px;
  line-height: 85px;
  margin-top: 0.25rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`

export const IntroTitle = styled(Typography)`
  color: #fefefe;
  font-size: 60px;
  font-style: normal;
  line-height: 85px;
  margin-top: 8rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`

export const IntroWrapper = styled.div`
  padding: 5rem;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

