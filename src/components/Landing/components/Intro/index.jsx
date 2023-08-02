import React from "react";
import {
  IntroImage,
  IntroTitleText1,
  IntroTitleText2,
  CallButton,
  DirectionsButton,
  BannerImg,
  IntroDiv,
} from "../../styles";
import '../../../../app/fonts.css'
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import GoogleMapsModal from "@/components/GoogleMapModal";
import useGoogleMapModal from "@/hooks/useGoogleMapModal";

const Intro = () => {
  const {
    handleCloseDirectionsModal,
    handleOpenDirectionsModal,
    isDirectionsModalOpen
  } = useGoogleMapModal()
  
  return (
    <IntroImage style={{ display: "flex" }}>
      <IntroDiv>
        <div className="arvo">
        <IntroTitleText1>Feel Good About</IntroTitleText1>
        <IntroTitleText2>Your Smile</IntroTitleText2>

        </div>
        <div className="poppins" style={{ display: "flex" }}>
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
      </div>

      <GoogleMapsModal open={isDirectionsModalOpen} handleClose={handleCloseDirectionsModal} />
    </IntroImage>
  );
};
export default Intro;
