import React from "react";
import '../../../fonts.css'
import GoogleMapsModal from "@/components/GoogleMapModal";
import MapIcon from "@mui/icons-material/Map";
import RequestAppointment from "@/components/RequestAppointment";
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
            <BackgroundImage>
                <IntroWrapper className="arvo">
                    <IntroTitle>Feel Good About</IntroTitle>
                    <IntroSubtitle>Your Smile</IntroSubtitle>
                    <ContactButtonsWrapper className="poppins">
                        <RequestAppointment marginTop="3rem" />
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
