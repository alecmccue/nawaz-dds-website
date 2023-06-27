import { FooterWrapper, IconContainer, LowerBox, LowerContainer, StackContainer, UpperBox } from "./styles";
import { Stack, Typography } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";
import Address from "../Address";
import Email from "../Email";
import Instagram from "../Instagram";
import Link from "next/link";
import PhoneNumber from "../PhoneNumber";

const Footer = () => {
  return (
    <FooterWrapper component="footer">
      <UpperBox>
        <IconContainer disableGutters>
          <AbcIcon sx={{ height: "10rem", width: "10rem" }} />
        </IconContainer>
        <StackContainer disableGutters>
          <Stack spacing={2} justifyContent="center">
            <Address />
            <PhoneNumber />
            <Email />
            <Instagram />
          </Stack>
        </StackContainer>
      </UpperBox>
      <LowerBox>
        <LowerContainer>
            <Link href="/privacy-policy"> PRIVACY POLICY </Link>
            <div> &copy; 2023 Family & Cosmetic Densistry. All rights reserved. </div>
        </LowerContainer>
      </LowerBox>
    </FooterWrapper>
  );
};

export default Footer;
