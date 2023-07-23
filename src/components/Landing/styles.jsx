import styled from "@emotion/styled";
import {Typography, Box} from "@mui/material";

export const LandingWrapper = styled.div`
    background-color: #FEFEFE;
    display: flex;
    justify-content: center;
    width: 100%;
    display:flex;
    flex-direction:column;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`
export const IntroImage = styled.div`
    width: 100%;
    height: 700px;
    flex-shrink: 0;
    background: url(/clean-dental-office.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
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
    margin-left: 12.5rem;
    margin-top: 8rem;
`
export const IntroTitleText2 = styled(Typography)`
    color: #FEFEFE;
    font-size: 85px;
    font-style: italic;
    font-weight: 800;
    line-height: 95px;
    text-transform: uppercase;
    margin-left: 12.5rem;
    margin-top: .5rem;
`
//change later on to styled button
export const CallButton = styled(Box)`
    background-color: #00ACB1;
    border-radius: .5rem;
    border: 2px solid #00ACB1;
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 3rem;
    margin-left: 12.5rem;
    padding: 0.5rem 1rem 0.5rem 1rem; 
    width: fit-content;
    display: flex;
    align-items: center;

    &:hover {
        background-color:transparent
    }
`
//change later on to styled button
export const DirectionsButton = styled(Box)`
    background-color: #00ACB1;
    border-radius: .5rem;
    border: 2px solid #00ACB1;
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 3rem;
    margin-left: 6rem;
    padding: 0.5rem 1rem 0.5rem 1rem; 
    width: fit-content;
    display: flex;
    align-items: center;

    &:hover {
        background-color:transparent
    }
`
export const MainDiv = styled.div`
    width:100%;
    height:700px;
    /* padding-left:6rem; */
    /* padding-right:6rem; */
    padding-top:2rem;
    padding-bottom:2rem;
    background: #FAFCFC;
    display:flex;
    position: relative;
`

export const NawazImg = styled.div`
    position: absolute;
    width: 30rem;
    height: 37.5rem;
    flex-shrink: 0;
    background: url(/nawaz-profilepicture.jpg), no-repeat;
    background-size: cover;
    margin-left: 9.25rem;
    margin-top: 1rem;
    background-color: transparent;

`
export const ColoredDiv = styled.div`
    width: 30rem;
    height: 37.5rem;
    margin-left: 3rem;
    margin-top:4.25rem;
    margin-left: 6.25rem;
    flex-shrink: 0;
    background: #D5E4E6;

`

export const DescriptionDiv = styled.div`
    padding-left: 10rem;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
`
export const DescriptionTitle = styled(Typography)`
    height: 31px;
    color: #000;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 95px;
    text-transform: uppercase;
`
export const DescriptionTitle2 = styled(Typography)`
    height: 31px;
    color: #00ACB1;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 95px;
    text-transform: uppercase;
`

export const Description = styled(Typography)`
    margin-top:5rem;
    display: flex;
    width: 688px;
    height: 209px;
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
`
export const DescriptionLists = styled(Box)`
    width: 620px;
    display: flex;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    margin-left: 4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`
export const MainButton = styled(Box)`
    background-color: #00ACB1;
    border-radius: 1rem;
    border: 3px solid #00ACB1;
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
    margin-left: 2rem;
    margin-bottom:4rem;
    padding: 0.5rem 1.5rem 0.5rem 1.2rem; 
    width: fit-content;
    display: flex;
    align-items: center;

    &:hover {
        color: #000;
        background-color: transparent;
    }
`