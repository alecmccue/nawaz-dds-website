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
    align-items: center;
    background-color: #00ACB1;
    border-radius: 1rem;
    border: 3px solid #00ACB1;
    color: white;
    cursor: pointer;
    display: flex;
    font-size: 1.1rem;
    font-weight: 500;
    margin-left: 10rem;
    margin-top: 3rem;
    padding: 0.5rem 1.5rem 0.5rem 1.2rem; 
    width: fit-content;

    &:hover {
        background-color: transparent;
    }
`

export const DirectionsButton = styled(Box)`
    align-items: center;
    background-color: #00ACB1;
    border-radius: 1rem;
    border: 3px solid #00ACB1;
    color: white;
    cursor: pointer;
    display: flex;
    font-size: 1.1rem;
    font-weight: 500;
    margin-left: 5rem;
    margin-top: 3rem;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem; 
    width: fit-content;
    
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

export const MainDiv = styled.div`
    width:100%;
    height:700px;
    padding-left:6rem;
    padding-right:6rem;
    padding-top:2.5rem;
    padding-bottom:2.5rem;
    background: #FAFCFC;
    display:flex;
    position: relative;
`

export const NawazImg = styled.div`
    position: absolute;
    width: 500px;
    height: 600px;
    flex-shrink: 0;
    background: url(/nawaz-profilepicture.jpg), no-repeat;
    background-size: cover;
    margin-left: 8rem;
    margin-top: 1rem;
    background-color: transparent;

`
export const ColoredDiv = styled.div`
    width: 500px;
    height: 500px;
    margin-left: 5rem;
    margin-top:10rem;
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