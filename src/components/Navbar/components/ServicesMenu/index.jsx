import ScrollToMenuButton from "@/components/ScrollToLinkButton";
import { Menu, MenuItem } from "@mui/material";

const ServicesMenu = ({ anchorEl, handleClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="services-menu"
      open={Boolean(anchorEl)}
      onClose={handleClose}
      disableAutoFocusItem
    >
      <MenuItem onClick={handleClose}>
        <ScrollToMenuButton
          to="/services"
          label="Dentures"
          elementId="dentures"
        />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ScrollToMenuButton href="/services/implants">
          Implants
        </ScrollToMenuButton>
      </MenuItem>
      {/* Add more MenuItem items for other services */}
    </Menu>
  );
};

export default ServicesMenu;
