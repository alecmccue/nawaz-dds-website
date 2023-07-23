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
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import Landing from "@/components/Landing";
import { useState } from "react";
import GoogleMapModal from "@/components/GoogleMapModal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <HomeWrapper>
      <Landing/>
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
      <GoogleMapModal open={open} handleClose={handleClose} />
    </HomeWrapper>
  );
};

export default Home;
