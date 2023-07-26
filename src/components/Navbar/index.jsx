import React, { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { NavbarButtonsWrapper } from "./styles";
import LinkButton from "../LinkButton";
import MenuButton from "../MenuButton";
import ServicesMenu from "./components/ServicesMenu";
import FcdLogo from "./components/FcdLogo";

const Navbar = () => {
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  const handleServicesMouseEnter = (event) => setServicesAnchorEl(event.currentTarget);
  const handleServicesClose = () => setServicesAnchorEl(null);

  return (
    <AppBar position="sticky" color="azure">
      <Toolbar>
        <FcdLogo />
        <NavbarButtonsWrapper>
          <LinkButton to="/" label="Home" />
          <LinkButton to="/about" label="About" />
          <MenuButton
            to="/services"
            label="Services"
            isOpen={servicesAnchorEl}
            handleMouseEnter={handleServicesMouseEnter}
            handleClose={handleServicesClose}
          >
            <ServicesMenu anchorEl={servicesAnchorEl} handleClose={handleServicesClose} />
          </MenuButton>
          <LinkButton to="/products" label="Products" />
        </NavbarButtonsWrapper>

        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
