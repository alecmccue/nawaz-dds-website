import Address from "./components/Address";
import Email from "./components/Email";
import {
  ColumnBody,
  ColumnHeader,
  ColumnWrapper,
  FooterWraper,
  LowerBox,
  LowerContainer,
  UpperBox,
} from "./styles";
import Instagram from "./components/Instagram";
import Link from "next/link";
import PhoneNumber from "./components/PhoneNumber";
import useGoogleMapModal from "@/hooks/useGoogleMapModal";
import GoogleMapsModal from "../GoogleMapModal";

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
          <ColumnWrapper>
            <ColumnHeader>Contact Us</ColumnHeader>
            <ColumnBody>
              <Address handleOpenDirectionsModal={handleOpenDirectionsModal}/>
              <PhoneNumber />
              <Email />
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
            <ColumnHeader>Services</ColumnHeader>
          </ColumnWrapper>

          <ColumnWrapper>
            <ColumnHeader>Instagram</ColumnHeader>
            <ColumnBody sx={{ alignItems: "center" }}>
              <Instagram />
            </ColumnBody>
          </ColumnWrapper>
        </UpperBox>

        <LowerBox>
          <LowerContainer>
            <Link href="/privacy-policy"> Privacy Policy </Link>
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
