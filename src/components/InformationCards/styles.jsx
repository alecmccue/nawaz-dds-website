import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";

export const CardWrapper = styled.div`
    background-color: #015D67;
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
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1rem;
    height: 18.125rem;
    min-width: 22.5rem;
    padding: 2rem;
`

export const CardTitleText = styled(Typography)`
    color: #015D67;
    font-size: 1.5rem;
`