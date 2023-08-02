import React, { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { NavbarButtonsWrapper } from "./styles";
import LinkButton from "../LinkButton";
import MenuButton from "../MenuButton";
import ServicesMenu from "./components/ServicesMenu";
import FcdLogo from "./components/FcdLogo";
import PatientsMenu from "./components/PatientsMenu";

const Navbar = () => {
  // Services Menu
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const handleServicesMouseEnter = (event) => setServicesAnchorEl(event.currentTarget);
  const handleServicesClose = () => setServicesAnchorEl(null);

  // Patients Menu
  const [patientsAnchorEl, setPatientsAnchorEl] = useState(null);
  const handlePatientsMouseEnter = (event) => setPatientsAnchorEl(event.currentTarget);
  const handlePatientsClose = () => setPatientsAnchorEl(null);

  return (
    <AppBar position="sticky" color="azure">
      <Toolbar>
        <FcdLogo />
        <NavbarButtonsWrapper>
          <div className="nunito">
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
            <MenuButton
              to="/patients/forms"
              label="For Patients"
              isOpen={patientsAnchorEl}
              handleMouseEnter={handlePatientsMouseEnter}
              handleClose={handlePatientsClose}
            >
              <PatientsMenu anchorEl={patientsAnchorEl} handleClose={handlePatientsClose} />
            </MenuButton>
          </div>
        </NavbarButtonsWrapper>        

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
