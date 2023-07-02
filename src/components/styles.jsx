import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const IconWrapper = styled.div`
    background-color: #00ACB1;
    border-radius: 50%;
    border: thin solid #00ACB1;
    padding: 0.5rem;
    color: white;

    &:hover {
        background-color: transparent;
        color: #00ACB1;
    }
`

export const StackItemText = styled(Typography)`
    display: flex;
    align-items: center;
    margin-left: 1rem;
`

export const StackItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`