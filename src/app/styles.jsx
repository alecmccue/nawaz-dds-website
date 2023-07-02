import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";


export const CallButton = styled(Box)`
    background-color: #00ACB1;
    border-radius: 2rem;
    border: thin solid #00ACB1;
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 1rem;
    padding: 0.5rem 1.5rem 0.5rem 1.2rem; 
    width: fit-content;
    display: flex;
    align-items: center;

    &:hover {
        background-color: transparent;
        color: #00ACB1;
    }
`

export const DirectionsButton = styled(Box)`
    background-color: #00ACB1;
    border-radius: 2rem;
    border: thin solid #00ACB1;
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 1rem;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem; 
    width: fit-content;
    display: flex;
    align-items: center;

    &:hover {
        background-color: transparent;
        color: #00ACB1;
    }
`

export const HomeWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContainerWrapper = styled(Box)`
  background-color: #00ACB1;
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 100%;
`;

export const MainInnerContainer = styled(Box)`
  align-items: center;
  border-radius: 3rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;

export const MainOuterContainer = styled(Card)`
  align-items: center;
  background: linear-gradient(150deg, #015d67, #87e4db);
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  margin: 0 1rem 0 1rem;
  padding: 1rem;
  min-width: 70%;
`;