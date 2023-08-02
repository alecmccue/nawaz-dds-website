import { Menu } from "@mui/material";
import { ServicesMenuItem } from "../../styles";
import ScrollToMenuButton from "@/components/ScrollToLinkButton";
import "../../../../app/fonts.css";
const ServicesMenu = ({ anchorEl, handleClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      disableAutoFocusItem
      id="services-menu"
      onClose={handleClose}
      open={Boolean(anchorEl)}
      MenuListProps={{
        onMouseLeave: handleClose,
      }}
      style={{
        zIndex: -1,
        top: 8,
      }}
      disablePortal
      hideBackdrop
    >
      <ServicesMenuItem>
        <ScrollToMenuButton
          elementId="general_dentistry"
          handleClose={handleClose}
          label="General Dentistry"
          to="/services"
        />
      </ServicesMenuItem>
      <ServicesMenuItem>
        <ScrollToMenuButton
          elementId="cosmetic_dentistry"
          handleClose={handleClose}
          label="Cosmetic Dentistry"
          to="/services"
        />
      </ServicesMenuItem>
      <ServicesMenuItem>
        <ScrollToMenuButton
          elementId="invisalign"
          handleClose={handleClose}
          label="Invisalign"
          to="/services"
        />
      </ServicesMenuItem>
      <ServicesMenuItem>
        <ScrollToMenuButton
          elementId="implants"
          handleClose={handleClose}
          label="Implants"
          to="/services"
        />
      </ServicesMenuItem>
      <ServicesMenuItem>
        <ScrollToMenuButton
          elementId="root_canal"
          handleClose={handleClose}
          label="Root Canal"
          to="/services"
        />
      </ServicesMenuItem>
      <ServicesMenuItem>
        <ScrollToMenuButton
          elementId="extractions"
          handleClose={handleClose}
          label="Extractions"
          to="/services"
        />
      </ServicesMenuItem>
      <ServicesMenuItem>
        <ScrollToMenuButton
          elementId="dentures"
          handleClose={handleClose}
          label="Dentures"
          to="/services"
        />
      </ServicesMenuItem>
      <ServicesMenuItem>
        <ScrollToMenuButton
          elementId="partial_dentures"
          handleClose={handleClose}
          label="Partial Dentures"
          to="/services"
        />
      </ServicesMenuItem>
    </Menu>
  );
};

export default ServicesMenu;
