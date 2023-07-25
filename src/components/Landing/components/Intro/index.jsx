import React, { useState } from "react";
import {
  IntroImage,
  IntroTitleText1,
  IntroTitleText2,
  CallButton,
  DirectionsButton,
  BannerImg,
  IntroDiv,
} from "../../styles";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import GoogleMapModal from "@/components/GoogleMapModal";
const Intro = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDirectionsModal = () => setOpen(true);
  const handleCloseDirectionsModal = () => setOpen(false);
  
  return (
    <IntroImage style={{ display: "flex" }}>
      <IntroDiv>
        <IntroTitleText1>Feel Good About</IntroTitleText1>
        <IntroTitleText2>Your Smile</IntroTitleText2>
        <div style={{ display: "flex" }}>
          <CallButton>
            <PhoneIcon />
            (703) 430 3838
          </CallButton>
          <DirectionsButton onClick={handleOpenDirectionsModal}>
            <MapIcon />
            Get Directions
          </DirectionsButton>
        </div>
      </IntroDiv>
      <div>
        <BannerImg />
      </div>

      <GoogleMapModal open={open} handleClose={handleCloseDirectionsModal} />
    </IntroImage>
  );
};
export default Intro;
