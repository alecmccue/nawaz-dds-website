"use client";

import Image from "next/image";
import InformationCards from "@/components/InformationCards";
import {
  MainOuterContainer,
  HomeWrapper,
  MainContainerWrapper,
  MainInnerContainer,
  WelcomeWrapper,
  WelcomeLeftColumn,
  WelcomeRightColumn,
  CallButton,
  DirectionsButton,
} from "./styles";
import { Box, Typography } from "@mui/material";
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from "@mui/icons-material/Phone";

const Home = () => {
  return (
    <HomeWrapper>
      <WelcomeWrapper>
        <WelcomeLeftColumn>
          <Typography
            style={{ color: "#00ACB1", fontSize: "1.5rem", fontWeight: "600" }}
          >
            Professional. Clean. Welcoming.
          </Typography>
          <Typography style={{ fontSize: "3rem" }}>
            Trusted Northern Virginia Dentist
          </Typography>
          <CallButton>
            <PhoneIcon style={{ marginRight: "0.25rem" }} />
            (703) 430 3838
            </CallButton>
          <DirectionsButton>
            <MapIcon style={{ marginRight: "0.25rem" }} />
            Get Directions
          </DirectionsButton>
        </WelcomeLeftColumn>
        <WelcomeRightColumn>
          <Image
            src="/nawaz-profilepicture.jpg"
            height={300}
            width={300}
            alt="dr-nawaz"
          />
        </WelcomeRightColumn>
      </WelcomeWrapper>

      <MainContainerWrapper>
        <MainOuterContainer raised>
          <MainInnerContainer>
            <Image
              src="/nawaz-profilepicture.jpg"
              height={400}
              width={400}
              alt="dr-nawaz"
            />
            <Box>
              <Typography style={{ color: "#CAF0C1", fontSize: "1.5rem" }}>
                Meet
              </Typography>
              <Typography style={{ color: "white", fontSize: "2rem" }}>
                Dr. Mirweiss Nawaz
              </Typography>
              <Typography style={{ color: "#CAF0C1", fontSize: "1rem" }}>
                DDS
              </Typography>
              <Typography style={{ color: "white", fontSize: "1.5rem" }}>
                Dr. Nawaz is a [insert credentials]
              </Typography>
            </Box>
          </MainInnerContainer>
        </MainOuterContainer>
      </MainContainerWrapper>

      <InformationCards />
    </HomeWrapper>
  );
};

export default Home;
