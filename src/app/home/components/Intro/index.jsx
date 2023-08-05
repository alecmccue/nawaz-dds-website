import React from "react";
import '../../../fonts.css'
import GoogleMapsModal from "@/components/GoogleMapModal";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import useGoogleMapModal from "@/hooks/useGoogleMapModal";
import {
    BackgroundImage,
    ContactButton,
    ContactButtonsWrapper,
    IntroSubtitle,
    IntroTitle,
    IntroWrapper,
} from "./styles";

const Intro = () => {
    const {
        handleCloseDirectionsModal,
        handleOpenDirectionsModal,
        isDirectionsModalOpen
    } = useGoogleMapModal()

    return (
        <>
            <BackgroundImage style={{ display: "flex" }}>
                <IntroWrapper>
                    <div className="arvo">
                        <IntroTitle>Feel Good About</IntroTitle>
                        <IntroSubtitle>Your Smile</IntroSubtitle>
                    </div>
                    <ContactButtonsWrapper className="poppins">
                        <ContactButton>
                            <PhoneIcon />
                            (703) 430 3838
                        </ContactButton>
                        <ContactButton onClick={handleOpenDirectionsModal}>
                            <MapIcon />
                            Get Directions
                        </ContactButton>
                    </ContactButtonsWrapper>
                </IntroWrapper>

            </BackgroundImage>
            <GoogleMapsModal open={isDirectionsModalOpen} handleClose={handleCloseDirectionsModal} />
        </>
    )
}

export default Intro
