import Address from "./components/Address";
import Email from "./components/Email";
import {
  ColumnBody,
  ColumnHeader,
  ColumnWrapper,
  FCDLogo,
  FooterLink,
  FooterWraper,
  LowerBox,
  LowerContainer,
  SocialWrapper,
  UpperBox,
} from "./styles";
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
      <FooterWraper component="footer">
        <UpperBox>
          <ColumnWrapper sx={{ alignItems: "center" }}>
            <FCDLogo src="/FCD_logo.png" alt="logo" />
            <SocialWrapper>
              <Instagram />
              <GoogleReviews />
            </SocialWrapper>
          </ColumnWrapper>

          <ColumnWrapper>
            <ColumnHeader>Our Office</ColumnHeader>
            <ColumnBody sx={{ alignItems: "center" }}>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/products">Products</FooterLink>
            </ColumnBody>
          </ColumnWrapper>

          <ColumnWrapper>
            <ColumnHeader>Office Hours</ColumnHeader>
            <ColumnBody>
              <div>Mon 10:00am - 6:00pm</div>
              <div>Tue 10:00am - 6:00pm</div>
              <div>Wed 10:00am - 6:00pm</div>
              <div>Thu 10:00am - 6:00pm</div>
            </ColumnBody>
          </ColumnWrapper>

          <ColumnWrapper>
            <ColumnHeader>Contact Us</ColumnHeader>
            <ColumnBody>
              <Address handleOpenDirectionsModal={handleOpenDirectionsModal} />
              <PhoneNumber />
              <Email />
            </ColumnBody>
          </ColumnWrapper>
        </UpperBox>

        <LowerBox>
          <LowerContainer>
            <FooterLink href="/privacy-policy"> Privacy Policy </FooterLink>
            <div> &copy; 2023 Family & Cosmetic Densistry </div>
          </LowerContainer>
        </LowerBox>
      </FooterWraper>

      <GoogleMapsModal
        open={isDirectionsModalOpen}
        handleClose={handleCloseDirectionsModal}
      />
    </>
  );
};

export default Footer;
