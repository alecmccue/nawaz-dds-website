import { AppBar, Toolbar } from "@mui/material";
import { NavbarButtonsWrapper } from "./styles";
import Image from "next/image";
import LinkButton from "../LinkButton";
import Link from "next/link";
import React, { useState } from "react";
import ServicesMenu from "./components/ServicesMenu";
import ScrollToMenuButton from "../ScrollToLinkButton";

const Navbar = () => {
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  const handleMouseEnter = (event) => setServicesAnchorEl(event.currentTarget);
  const handleClose = () => setServicesAnchorEl(null);

  return (
    <AppBar position="sticky" color="azure">
      <Toolbar>
        <Link href={"/"}>
          <Image src="/F&CD_logo.png" height={60} width={150} alt="tooth" />
        </Link>
        <NavbarButtonsWrapper>
          <LinkButton to="/" label="Home" />
          <LinkButton to="/about" label="About" />
          <LinkButton
            to="/services"
            label="Services"
            handleMouseEnter={handleMouseEnter}
          />
          <LinkButton to="/products" label="Products" />
        </NavbarButtonsWrapper>
        <ServicesMenu handleClose={handleClose} anchorEl={servicesAnchorEl} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
