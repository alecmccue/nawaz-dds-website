import styled from "@emotion/styled";
import { Box } from "@mui/material";


export const HomeWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
`

export const MainOuterContainer = styled(Box)`
    border-radius: 5rem 5rem 15rem 5rem;
    background-color: turquoise;
    display: flex;
    align-items: center;
    margin: 0 1rem 0 1rem;
    justify-content: center;
    padding: 1rem;
    width: fit-content;
`
export const MainContainerWrapper = styled(Box)`
    display: flex;
    justify-content: center;
`
export const MainInnerContainer = styled(Box)`
    border-radius: 5rem 5rem 15rem 5rem;
    display: flex;
    overflow: hidden;
    align-items: center;
    width: fit-content;
    gap: 2rem;
`

export const MainText = styled.div`
    font-size: 3rem;
`