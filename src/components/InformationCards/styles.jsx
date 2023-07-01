import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";

export const CardWrapper = styled.div`
    display: flex;
    gap: 3rem;
    width: 100%;
    justify-content: center;
    padding: 5rem;
    background-color: #015D67;
`

export const InformationCard = styled(Card)`
    height: 18.125rem;
    min-width: 22.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CardTitleText = styled(Typography)`
    font-size: 1.5rem;
    color: #015D67;
`