import Address from "./components/Address";
import Email from "./components/Email";
import {
    ColumnBody,
    ColumnHeader,
    ColumnWrapper,
    Divider,
    FCDLogo,
    FooterLink,
    FooterWrapper,
    LowerWrapper,
    SocialWrapper,
    UpperWrapper,
} from "./styles";
import "../../app/fonts.css";
import Instagram from "./components/Instagram";
import PhoneNumber from "./components/PhoneNumber";
import useGoogleMapModal from "@/hooks/useGoogleMapModal";
import GoogleMapsModal from "../GoogleMapModal";
import GoogleReviews from "./components/GoogleReviews";

const Footer = () => {
    const {
        handleCloseDirectionsModal,
        handleOpenDirectionsModal,
        isDirectionsModalOpen,
    } = useGoogleMapModal();

    return (
        <>
            <FooterWrapper component="footer">
                <UpperWrapper>
                    <ColumnWrapper style={{ marginTop: "1rem" }}>
                        <FCDLogo src="/FCD_logo.png" alt="logo" />
                        <SocialWrapper>
                            <Instagram />
                            <GoogleReviews />
                        </SocialWrapper>
                    </ColumnWrapper>

                    <ColumnWrapper>
                        <ColumnHeader className="nunito">Our Office</ColumnHeader>
                        <ColumnBody
                            className="scope-one"
                            style={{ alignItems: "center" }}
                        >
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/about">About</FooterLink>
                            <FooterLink href="/services">Services</FooterLink>
                            <FooterLink href="/products">Products</FooterLink>
                        </ColumnBody>
                    </ColumnWrapper>

                    <ColumnWrapper>
                        <ColumnHeader
                            className="nunito"
                            style={{ textAlign: "center", justifyContent: "center" }}
                        >
                            Office Hours
                        </ColumnHeader>
                        <ColumnBody className="scope-one">
                            <div>Mon 10:00am - 6:00pm</div>
                            <div>Tue 10:00am - 6:00pm</div>
                            <div>Wed 10:00am - 6:00pm</div>
                            <div>Thu 10:00am - 6:00pm</div>
                        </ColumnBody>
                    </ColumnWrapper>

                    <ColumnWrapper>
                        <ColumnHeader
                            className="nunito"
                            style={{ textAlign: "center", justifyContent: "center" }}
                        >
                            Contact Us
                        </ColumnHeader>
                        <ColumnBody className="scope-one">
                            <Address handleOpenDirectionsModal={handleOpenDirectionsModal} />
                            <PhoneNumber />
                            <Email />
                        </ColumnBody>
                    </ColumnWrapper>
                </UpperWrapper>
                <Divider />
                <LowerWrapper className="nunito">
                    <FooterLink href="/privacy-policy"> Privacy Policy </FooterLink>
                    <div> &copy; 2023 Family & Cosmetic Densistry</div>
                </LowerWrapper>
            </FooterWrapper>

            <GoogleMapsModal
                open={isDirectionsModalOpen}
                handleClose={handleCloseDirectionsModal}
            />
        </>
    );
};

export default Footer;
