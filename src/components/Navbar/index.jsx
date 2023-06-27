import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import LinkButton from "../LinkButton";
import { NavbarButtonsWrapper, Title } from "./styles";
import Image from "next/image";

const Navbar = () => {
  return (
    <AppBar position="static" color="aqua">
      <Toolbar>
        <Image 
          src="/tooth-logo.png"
          height={30}
          width={30}
          alt="tooth"
        />
        <Title>Family & Cosmetic Denistry</Title>
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
