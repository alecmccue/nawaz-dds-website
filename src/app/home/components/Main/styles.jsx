import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Description = styled(Typography)`
  color: #000;
  display: flex;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  margin-top: 3rem;
  width: 688px;
`

export const DescriptionLists = styled.div`
  display: flex;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  margin-bottom: 2rem;
  margin-left: 4rem;
  margin-top: 1rem;
  width: 620px;
`

export const DescriptionSubtitle = styled(Typography)`
  color: #00acb1;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  height: 31px;
  line-height: 95px;
  text-transform: uppercase;
`

export const DescriptionTitle = styled(Typography)`
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  height: 31px;
  line-height: 95px;
  text-transform: uppercase;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 6rem;
  padding-top: 2rem;
  width: 100%;
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
  height: 700px;
  justify-content: center;
  padding: 2.5rem 6rem 2.5rem 6rem;
  position: relative;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const NawazImg = styled.div`
  background: url(/nawaz-profilepicture.png), no-repeat;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  flex-shrink: 0;
  height: auto;
  margin-top: 1rem;
  width: 500px;
`