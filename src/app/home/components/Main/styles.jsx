import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

export const Description = styled(Typography)`
  color: #000;
  display: flex;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`

export const DescriptionLists = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 2rem;
  padding-left: 4rem;
  margin-top: 1rem;

  @media (max-width: 1200px) {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }
`

export const DescriptionSubtitle = styled(Typography)`
  color: #00acb1;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  height: 2rem;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    text-align: center;
    font-size: 1.2rem;
  }
`

export const DescriptionTitle = styled(Typography)`
  color: #000;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 500;
  height: 2rem;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    text-align: center;
    font-size: 1.5rem;
  }
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6rem;
  padding-top: 2.5rem;
  gap: 1rem;
  width: fit-content;

  @media (max-width: 1200px) {
    padding: 0;
  }
`

export const MainButton = styled(Button)`
  align-items: center;
  color: #fefefe;
  cursor: pointer;
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 2rem;
  padding: 0.5rem 1.5rem;
  background-color: #00acb1 !important;
  width: fit-content;

  &:hover {
    background-color: #01868d !important;
  }
`

export const MainWrapper = styled.div`
  background: #fafcfc;
  display: flex;
  height: fit-content;
  justify-content: center;
  padding: 2.5rem 6rem 2.5rem 6rem;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 4rem 2rem;
    height: fit-content;
    gap: 2rem;
    align-items: center;
  }
`

export const NawazImg = styled.div`
  background: url(/nawaz-profilepicture.png), no-repeat;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  flex-shrink: 0;
  height: auto;
  margin-top: 3rem;
  width: 31.25rem;

  @media (max-width: 1200px) {
    height: 25rem;
    margin-top: 0;
    width: 21rem;
  }
`