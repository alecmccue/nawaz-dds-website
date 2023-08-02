import { Menu } from "@mui/material";
import { DropdownMenuItem } from "../../styles";
import ServicesMenuButton from "@/components/Navbar/components/ServicesMenuButton";
import PatientsMenuButton from "../PatientsMenuButton";

const PatientsMenu = ({ anchorEl, handleClose }) => {
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
        top: -8,
      }}
      disablePortal
      hideBackdrop
    >
      <DropdownMenuItem>
        <PatientsMenuButton
          handleClose={handleClose}
          label="Patient Forms"
          to="/patients/forms"
        />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <PatientsMenuButton
          handleClose={handleClose}
          label="Insurance"
          to="/patients/insurance"
        />
      </DropdownMenuItem>
    </Menu>
  );
};

export default PatientsMenu;
