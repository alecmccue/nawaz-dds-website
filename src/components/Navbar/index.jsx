import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import LinkButton from "../LinkButton";
import { NavbarButtonsWrapper } from "./styles";

const Navbar = () => {
  return (
    <AppBar position="static" color="aqua">
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
        <NavbarButtonsWrapper>
          <LinkButton to="/" label="Home" />
          <LinkButton to="/about" label="About Us" />
          <LinkButton to="/services" label="Services" />
          <LinkButton to="/products" label="Products" />
        </NavbarButtonsWrapper>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
