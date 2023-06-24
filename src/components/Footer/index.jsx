import { Box, Container, Stack, Typography } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";
import Address from "../Address";
import Email from "../Email";
import Instagram from "../Instagram";
import PhoneNumber from "../PhoneNumber";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      className="w-full mt-6"
      component="footer"
    >
      <Container className="flex border-t-2 border-orange-400">
        <Container className="flex mt-8" disableGutters>
          <AbcIcon className="flex" sx={{ height: "10rem", width: "10rem" }} />
        </Container>
        <Container className="flex mt-8" disableGutters>
          <Stack spacing={2} justifyContent="center">
            <Address />
            <PhoneNumber />
            <Email />
            <Instagram />
          </Stack>
        </Container>
      </Container>
      <Container className="flex mt-12 border-t-2 border-gray-200" disableGutters>
        <Container className="flex mt-3 justify-between" disableGutters>
            <Link href="/privacy-policy">PRIVACY POLICY</Link>
            <Typography> &copy; 2023 Family & Cosmetic Densistry. All rights reserved. </Typography>
        </Container>
      </Container>
    </Box>
  );
};

export default Footer;
