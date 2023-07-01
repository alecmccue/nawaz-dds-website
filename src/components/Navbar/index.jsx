import { AppBar, Toolbar } from "@mui/material";
import { NavbarButtonsWrapper, Title } from "./styles";
import Image from "next/image";
import LinkButton from "../LinkButton";

const Navbar = () => {
  return (
    <AppBar position="sticky" color="azure">
      <Toolbar>
        <Image src="/tooth-logo.png" height={30} width={30} alt="tooth" />
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
