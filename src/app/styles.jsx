import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material";

export const HomeWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
`

export const MainContainerWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    padding: 2rem;
    width: 100%;
`
export const MainInnerContainer = styled(Box)`
    align-items: center;
    /* border-radius: 5rem 5rem 15rem 5rem; */
    border-radius: 5rem;
    display: flex;
    gap: 2rem;
    justify-content: center;
    overflow: hidden;
    width: 100%;
`

export const MainOuterContainer = styled(Card)`
    align-items: center;
    background: linear-gradient(150deg, #015D67, #87E4DB);
    /* border-radius: 5rem 5rem 15rem 5rem; */
    border-radius: 5rem;
    display: flex;
    justify-content: center;
    margin: 0 1rem 0 1rem;
    padding: 1rem;
    min-width: 50%;
`

export const MainText = styled(Typography)`
    color: white;
    font-size: 3rem;
    max-width: 50%;
`