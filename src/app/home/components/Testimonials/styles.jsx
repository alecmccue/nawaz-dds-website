import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Testimonial = styled.div`
    padding:40px 0;
    background:azure;
    color: #434343;
    text-align:center;
`
export const Inner = styled.div`
    max-width:1200px;
    margin:auto;
    overflow:hidden;
    padding: 0 20px;
`
export const TestimonialTitle = styled(Typography)`
    font-size:2rem;
`
export const Border = styled.div`
    width: 12rem;
    height:8px;
    background:#00ACB1;
    margin:2rem auto
`
export const Row = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`
export const Col = styled.div`
    flex:33.33%;
    max-width:33.33%;
    box-sizing: border-box;
    padding:15px;
    display:flex;
    justify-content:center;

    @media screen and (max-width:1200px) {
        max-width:80%
    }
    @media screen and (max-width:960px) {
        flex: 100%;
        max-width:80%;
    }
    @media screen and (max-width:600px) {
        flex: 100%;
        max-width:100%;
    }

`
export const Name = styled.div`
    font-size:20px;
    text-transform:uppercase;
    margin:20px 0

`
export const Review = styled.div`
    background: #FEFEFE;
    padding:2rem;
    border-radius:5%;
    justify-content:center;
    text-align:center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`

export const Stars = styled.div`
    color:#00ACB1;
    margin-bottom:20px;
`
