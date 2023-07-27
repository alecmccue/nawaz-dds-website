import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

export const CallButton = styled(Box)`
    align-items: center;
    background-color: #00ACB1;
    border-radius: 2rem;
    border: thin solid #00ACB1;
    color: white;
    display: flex;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 1rem;
    padding: 0.5rem 1.5rem 0.5rem 1.2rem; 
    width: fit-content;

    &:hover {
        background-color: transparent;
        color: #00ACB1;
    }
`

export const DirectionsButton = styled(Box)`
    align-items: center;
    background-color: #00ACB1;
    border-radius: 2rem;
    border: thin solid #00ACB1;
    color: white;
    display: flex;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 1rem;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem; 
    width: fit-content;

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