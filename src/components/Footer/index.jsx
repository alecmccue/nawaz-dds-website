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

const Footer = () => (
  <FooterWraper component="footer">
    <UpperBox>
      <ColumnWrapper>
        <ColumnHeader>Contact Us</ColumnHeader>
        <ColumnBody>
          <Address />
          <PhoneNumber />
          <Email />
        </ColumnBody>
      </ColumnWrapper>

      <ColumnWrapper>
        <ColumnHeader>Office Hours</ColumnHeader>
        <ColumnBody>
          Mon 10:00am - 6:00pm
          <br />
          Tue 10:00am - 6:00pm
          <br />
          Wed 10:00am - 6:00pm
          <br />
          Thu 10:00am - 6:00pm
          <br />
        </ColumnBody>
      </ColumnWrapper>

      <ColumnWrapper>
        <ColumnHeader>Services</ColumnHeader>
      </ColumnWrapper>

      <ColumnWrapper>
        <ColumnHeader>Instagram</ColumnHeader>
        <ColumnBody sx={{ alignItems: "center" }} >
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
);

export default Footer;
