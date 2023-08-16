import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

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
  margin-bottom: 2rem;
  padding-left: 4rem;
  margin-top: 1rem;
  width: 100%;
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

export const MainButton = styled(Button)`
  align-items: center;
  background-color: #00acb1;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 4rem;
  margin-left: 2rem;
  padding: 0.5rem 1.5rem;
  width: fit-content;

  &:hover {
    background-color: #0099a0;
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
  background: url(/nawaz.jpg), no-repeat;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  flex-shrink: 0;
  height: auto;
  margin-top: 3rem;
  width: 31.25rem;

  @media (max-width: 1024px) {
    max-width: 18rem;
    height: 20rem;
    margin-left: 3.5rem;
  }
`