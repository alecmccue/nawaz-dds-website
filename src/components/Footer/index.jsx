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
            <div className="nunito">
              <ColumnHeader>Our Office</ColumnHeader>
            </div>
            <div className="scope-one">
              <ColumnBody sx={{ alignItems: "center" }}>
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/products">Products</FooterLink>
              </ColumnBody>
            </div>
          </ColumnWrapper>

          <ColumnWrapper>
            <div className="nunito">
              <ColumnHeader
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                Office Hours
              </ColumnHeader>
            </div>
            <div className="scope-one">
              <ColumnBody>
                <div>Mon 10:00am - 6:00pm</div>
                <div>Tue 10:00am - 6:00pm</div>
                <div>Wed 10:00am - 6:00pm</div>
                <div>Thu 10:00am - 6:00pm</div>
              </ColumnBody>
            </div>
          </ColumnWrapper>

          <ColumnWrapper>
            <div className="nunito">
              <ColumnHeader
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                Contact Us
              </ColumnHeader>
            </div>
            <div className="scope-one">
              <ColumnBody>
                <Address
                  handleOpenDirectionsModal={handleOpenDirectionsModal}
                />
                <PhoneNumber />
                <Email />
              </ColumnBody>
            </div>
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
