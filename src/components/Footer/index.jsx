import { Box, Stack } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";
import Address from "./components/Address";
import Email from "./components/Email";
import { 
  IconContainer, 
  LowerBox, 
  LowerContainer, 
  StackContainer, 
  UpperBox,
} from "./styles";
import Instagram from "./components/Instagram";
import Link from "next/link";
import PhoneNumber from "./components/PhoneNumber";

const Footer = () => {
  return (
    <Box component="footer">
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
            <Link href="/privacy-policy"> Privacy Policy </Link>
            <div> &copy; 2023 Family & Cosmetic Densistry </div>
        </LowerContainer>
      </LowerBox>
    </Box>
  );
};

export default Footer;
