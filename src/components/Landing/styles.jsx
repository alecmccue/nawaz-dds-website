import styled from "@emotion/styled";
import {Typography, Box} from "@mui/material";

export const LandingWrapper = styled.div`
    background-color: #FEFEFE;
    display: flex;
    justify-content: center;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`
export const IntroImage = styled.div`
    width: 100%;
    height: 700px;
    flex-shrink: 0;
    background: linear-gradient(0deg, rgba(1, 93, 103, 0.20) 0%, rgba(1, 93, 103, 0.20) 100%), url(/clean-dental-office.jpg), lightgray 50% / cover no-repeat;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
export const IntroDiv = styled.div`
    padding:5rem;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`
export const IntroTitleText1 = styled(Typography)`
    color: #FEFEFE;
    font-size: 85px;
    font-style: normal;
    font-weight: 500;
    line-height: 95px;
    text-transform: uppercase;
    margin-left: 10rem;
    margin-top: 8rem;
`
export const IntroTitleText2 = styled(Typography)`
    color: #FEFEFE;
    font-size: 85px;
    font-style: italic;
    font-weight: 800;
    line-height: 95px;
    text-transform: uppercase;
    margin-left: 10rem;
    margin-top: .5rem;
`
export const CallButton = styled(Box)`
    background-color: #00ACB1;
    border-radius: 1rem;
    border: 3px solid #00ACB1;
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 3rem;
    margin-left: 10rem;
    padding: 0.5rem 1.5rem 0.5rem 1.2rem; 
    width: fit-content;
    display: flex;
    align-items: center;

    &:hover {
        background-color: transparent;
    }
`

export const DirectionsButton = styled(Box)`
    background-color: #00ACB1;
    border-radius: 1rem;
    border: 3px solid #00ACB1;
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 3rem;
    margin-left: 5rem;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem; 
    width: fit-content;
    display: flex;
    align-items: center;
    &:hover {
        background-color: transparent;
    }
`
export const BannerImg = styled.div`
    flex-shrink: 0;
    width: 530px;
    height: 485px;
    background: url(/imgbanner.png), 100% / cover no-repeat;
    margin-top: 6rem;
    margin-right:5rem;
`