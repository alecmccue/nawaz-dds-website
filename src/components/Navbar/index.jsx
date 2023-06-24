import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <Box className=" flex w-full justify-center gap-5">
          <Link href="/">
            <Button variant="quiet">Home</Button>
          </Link>

          <Link href="/about">
            <Button variant="quiet">About Us</Button>
          </Link>

          <Link href="/services">
            <Button variant="quiet">Services</Button>
          </Link>

          <Link href="/products">
            <Button variant="quiet">Products</Button>
          </Link>
        </Box>
        <Box>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
