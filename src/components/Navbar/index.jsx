import { AppBar, Toolbar } from "@mui/material";
import { NavbarButtonsWrapper, Title } from "./styles";
import Image from "next/image";
import LinkButton from "../LinkButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar position="sticky" color="azure">
      <Toolbar>
        <Link href={"/"}>
          <Image src="/F&CD_logo.png" height={60} width={150} alt="tooth" />
        </Link>
        <NavbarButtonsWrapper>
          <LinkButton to="/" label="Home" />
          <LinkButton to="/about" label="About" />
          <LinkButton to="/services" label="Services" />
          <LinkButton to="/products" label="Products" />
        </NavbarButtonsWrapper>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
