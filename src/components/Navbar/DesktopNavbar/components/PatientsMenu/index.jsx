import { Menu } from "@mui/material";
import PatientsMenuButton from "../PatientsMenuButton";
import { DropdownMenuItem } from "@/components/Navbar/DesktopNavbar/styles";

const PatientsMenu = ({ anchorEl, handleClose }) => {
    return (
        <Menu
            anchorEl={anchorEl}
            disableAutoFocusItem
            disablePortal
            hideBackdrop
            id="patients-menu"
            MenuListProps={{ onMouseLeave: handleClose }}
            onClose={handleClose}
            open={Boolean(anchorEl)}
            style={{ zIndex: -1 }}
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
