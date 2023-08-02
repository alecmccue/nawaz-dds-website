import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";

export const LandingWrapper = styled.div`
  background-color: #fefefe;
  display: flex;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const IntroImage = styled.div`
  width: 100%;
  height: 700px;
  flex-shrink: 0;
  background: url(/clean-dental-office.jpg);
  background-color: azure;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
export const IntroDiv = styled.div`
  padding: 5rem;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const IntroTitleText1 = styled(Typography)`
  color: #fefefe;
  font-size: 60px;
  font-style: normal;
  line-height: 85px;
  font-weight: 500;
  text-transform: uppercase;
  margin-left: 12.5rem;
  margin-top: 8rem;
`;
export const IntroTitleText2 = styled(Typography)`
  color: #fefefe;
  font-size: 85px;
  font-weight: 800;
  line-height: 85px;
  text-transform: uppercase;
  margin-left: 12.5rem;
  margin-top: 0.25rem;
`;
export const CallButton = styled(Box)`
  border-radius: 0.5rem;
  border: 2px solid #00acb1;
  color: #fefefe;

  background-color: #00acb1;
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 3rem;
  margin-left: 12.5rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;

  width: fit-content;
  display: flex;
  align-items: center;
  &:hover {
    background-color: transparent;
  }
`;

export const DirectionsButton = styled(Box)`
  border-radius: 0.5rem;
  border: 2px solid #00acb1;
  color: #fefefe;

  background-color: #00acb1;
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 3rem;
  margin-left: 6rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;

  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: transparent;
  }
`;
export const BannerImg = styled.div`
  flex-shrink: 0;
  width: 530px;
  height: 485px;
  background: url(/imgbanner.png), 100% / cover no-repeat;
  margin-top: 6rem;
  margin-right: 5rem;
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 700px;
  padding: 2.5rem 6rem 2.5rem 6rem;
  background: #fafcfc;
  display: flex;
  position: relative;
  justify-content: center;
`;

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
`;
export const ColoredDiv = styled.div`
  width: 500px;
  height: 500px;
  margin-left: 4rem;
  margin-top: 10rem;
  flex-shrink: 0;
  background: #d5e4e6;
`;

export const ImageContainer = styled.div`
  margin-right: 4rem;
  height: fit-content;
`;

export const DescriptionDiv = styled.div`
  margin-left: 10rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const DescriptionTitle = styled(Typography)`
  height: 31px;
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 95px;
  text-transform: uppercase;
`;
export const DescriptionTitle2 = styled(Typography)`
  height: 31px;
  color: #00acb1;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 95px;
  text-transform: uppercase;
`;

export const Description = styled(Typography)`
  margin-top: 3rem;
  display: flex;
  width: 688px;
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;
export const DescriptionLists = styled.div`
  width: 620px;
  display: flex;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  margin-left: 4rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
export const MainButton = styled(Box)`
  background-color: #00acb1;
  border-radius: 1rem;
  border: 3px solid #00acb1;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 2rem;
  margin-bottom: 4rem;
  padding: 0.5rem 1.5rem 0.5rem 1.2rem;
  width: fit-content;
  display: flex;
  align-items: center;

  &:hover {
    color: #000;
    background-color: transparent;
  }
`;
