import React from "react";
import {
  IntroImage,
  IntroTitleText1,
  IntroTitleText2,
  CallButton,
  DirectionsButton,
  BannerImg,
} from "../../styles";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
const Intro = () => {
  return (
    <IntroImage style={{ display: "flex" }}>
      <div>
        <IntroTitleText1>Feel Good About</IntroTitleText1>
        <IntroTitleText2>Your Smile</IntroTitleText2>
        <div style={{ display: "flex" }}>
          <CallButton>
            <PhoneIcon style={{ marginRight: "0.25rem" }} />
            (703) 430 3838
          </CallButton>
          <DirectionsButton>
            <MapIcon style={{ marginRight: "0.25rem" }} />
            Get Directions
          </DirectionsButton>
        </div>
      </div>
      <div>
        <BannerImg />
      </div>
    </IntroImage>
  );
};
export default Intro;
