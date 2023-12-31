import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";

export const CardWrapper = styled.div`
  background-color: azure;
  display: flex;
  gap: 3rem;
  justify-content: center;
  padding: 5rem;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 4rem 1.5rem;
    align-items: center;
  }
`

export const InformationCard = styled(Card)`
  border-radius: .5rem;
  background-color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
  height: 18.125rem;
  padding: 2rem;
  font-size: 1.1rem;

  &:hover {
    background-color: whitesmoke;
  }

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 40rem;
  }
`
export const Border = styled.div`
  width: 6rem;
  height: 4px;
  background: #00ACB1;
`

export const CardTitleText = styled(Typography)`
  color: #015D67;
  font-size: 1.5rem;
`