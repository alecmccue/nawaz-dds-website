import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";

export const CardWrapper = styled.div`
    background-color: azure;
    display: flex;
    gap: 3rem;
    justify-content: center;
    padding: 5rem;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

export const InformationCard = styled(Card)`
    background-color: white;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1rem;
    height: 18.125rem;
    min-width: 22.5rem;
    padding: 2rem;

    &:hover {
        background-color: #EBF2F3;
    }
`

export const CardTitleText = styled(Typography)`
    color: #015D67;
    font-size: 1.5rem;
`