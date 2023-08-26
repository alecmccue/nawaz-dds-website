import React from "react";
import PatientsMenuButton from "../PatientsMenuButton";
import { DropdownMenu, DropdownMenuItem } from "@/components/Navbar/DesktopNavbar/styles";
import { motion } from "framer-motion";


const animationVariant2 = {
    hide: {
        opacity: 0,
        scale: 0.8,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.2,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.2,
        },
    }
};
const PatientsMenu = ({ anchorEl, handleClose }) => (
    <DropdownMenu
        anchorEl={anchorEl}
        className="nunito"
        id="patients-menu"
        onClose={handleClose}
        open={Boolean(anchorEl)}
    >
        <motion.div
            initial="hide"
            exit="exit"
            whileInView="show"
            variants={animationVariant2}
        >
            <DropdownMenuItem>
                <PatientsMenuButton
                    handleClose={handleClose}
                    label="Request Appointment"
                    to="/request-appointment"
                />
            </DropdownMenuItem>
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
        </motion.div>
    </DropdownMenu>
)

export default PatientsMenu;
