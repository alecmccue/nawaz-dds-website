import React, { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { NavbarButtonsWrapper } from "./styles";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "../LinkButton";
import ServicesMenu from "./components/ServicesMenu";

const Navbar = () => {
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  const handleServicesMouseEnter = (event) => setServicesAnchorEl(event.currentTarget);
  const handleServicesClose = () => setServicesAnchorEl(null);

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
            handleMouseEnter={handleServicesMouseEnter}
          />
          <LinkButton to="/products" label="Products" />
        </NavbarButtonsWrapper>

        <ServicesMenu anchorEl={servicesAnchorEl} handleClose={handleServicesClose} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
