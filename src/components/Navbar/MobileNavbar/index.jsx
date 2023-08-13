import React, { useState } from "react";
import "../../../app/fonts.css"
import List from '@mui/material/List';
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavbarMenuTab from "@/components/Navbar/MobileNavbar/components/MobileNavbarMenuTab";
import MobileNavbarTab from "@/components/Navbar/MobileNavbar/components/MobileNavbarTab";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { MenuIconWrapper, MobileNavbarWrapper } from "@/components/Navbar/styles";
import MobileServicesMenu from "@/components/Navbar/MobileNavbar/components/MobileServicesMenu";
import MobilePatientsMenu from "@/components/Navbar/MobileNavbar/components/MobilePatientsMenu";
import FcdLogo from "@/components/Navbar/FcdLogo";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = (open) => (event) => {
        if(event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }

        setIsOpen(open);
    };

    return (
        <MobileNavbarWrapper>
            <FcdLogo width="100" />
            <MenuIconWrapper>
                <MenuIcon onClick={toggleDrawer(true)} style={{ cursor: "pointer" }} fontSize="small" />
                <SwipeableDrawer
                    anchor="right"
                    open={isOpen}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <div style={{ width: "10rem" }}>
                        <List className="nunito">
                            <MobileNavbarTab
                                handleClick={toggleDrawer(false)}
                                label="Home"
                                to="/"
                            />
                            <MobileNavbarTab
                                handleClick={toggleDrawer(false)}
                                to="/about"
                                label="About"
                            />
                            <MobileNavbarMenuTab label="Services">
                                <MobileServicesMenu handleClose={toggleDrawer(false)} />
                            </MobileNavbarMenuTab>
                            <MobileNavbarTab
                                handleClick={toggleDrawer(false)}
                                to="/products"
                                label="Products"
                            />
                            <MobileNavbarMenuTab label="For Patients">
                                <MobilePatientsMenu handleClose={toggleDrawer(false)} />
                            </MobileNavbarMenuTab>
                        </List>
                    </div>
                </SwipeableDrawer>
            </MenuIconWrapper>
        </MobileNavbarWrapper>
    )
}

export default MobileNavbar