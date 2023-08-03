import React from "react";
import { DropdownMenuItem } from "../../styles";
import { Menu } from "@mui/material";
import ServicesMenuButton from "@/components/Navbar/components/ServicesMenuButton";

const ServicesMenu = ({ anchorEl, handleClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      disableAutoFocusItem
      disablePortal
      hideBackdrop
      id="services-menu"
      MenuListProps={{ onMouseLeave: handleClose }}
      onClose={handleClose}
      open={Boolean(anchorEl)}
      style={{ zIndex: -1 }}
    >
      <DropdownMenuItem>
        <ServicesMenuButton
          elementId="general_dentistry"
          handleClose={handleClose}
          label="General Dentistry"
          to="/services"
        />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <ServicesMenuButton
          elementId="cosmetic_dentistry"
          handleClose={handleClose}
          label="Cosmetic Dentistry"
          to="/services"
        />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <ServicesMenuButton
          elementId="invisalign"
          handleClose={handleClose}
          label="Invisalign"
          to="/services"
        />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <ServicesMenuButton
          elementId="implants"
          handleClose={handleClose}
          label="Implants"
          to="/services"
        />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <ServicesMenuButton
          elementId="root_canal"
          handleClose={handleClose}
          label="Root Canal"
          to="/services"
        />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <ServicesMenuButton
          elementId="extractions"
          handleClose={handleClose}
          label="Extractions"
          to="/services"
        />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <ServicesMenuButton
          elementId="dentures"
          handleClose={handleClose}
          label="Dentures"
          to="/services"
        />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <ServicesMenuButton
          elementId="partial_dentures"
          handleClose={handleClose}
          label="Partial Dentures"
          to="/services"
        />
      </DropdownMenuItem>
    </Menu>
  );
};

export default ServicesMenu;
