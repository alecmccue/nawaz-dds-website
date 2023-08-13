import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Description = styled(Typography)`
  color: #000;
  display: flex;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  width: 688px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const DescriptionLists = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  margin-bottom: 2rem;
  padding-left: 4rem;
  margin-top: 1rem;
  width: 620px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const DescriptionSubtitle = styled(Typography)`
  color: #00acb1;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  height: 2rem;
  text-transform: uppercase;
`

export const DescriptionTitle = styled(Typography)`
  color: #000;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 500;
  height: 2rem;
  text-transform: uppercase;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6rem;
  padding-top: 2.5rem;
  gap: 1rem;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`

export const MainButton = styled.div`
  background-color: #00acb1;
  border-radius: 1rem;
  border: 3px solid #00acb1;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 2rem;
  margin-bottom: 4rem;
  padding: 0.5rem 1.5rem 0.5rem 1.2rem;
  width: fit-content;
  display: flex;
  align-items: center;

  &:hover {
    color: #000;
    background-color: transparent;
  }
`

export const MainWrapper = styled.div`
  background: #fafcfc;
  display: flex;
  height: fit-content;
  justify-content: center;
  padding: 2.5rem 6rem 2.5rem 6rem;
  position: relative;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
    height: fit-content;
    gap: 2rem;
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

  @media (max-width: 1024px) {
    width: 100%;
    height: 20rem;
    margin-left: 3.5rem;
  }
`