import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AppBar, Toolbar } from "@mui/material";
import { MenuIconWrapper, NavbarTabsWrapper } from "./styles";
import FcdLogo from "./components/FcdLogo";
import NavbarMenuTab from "./DesktopNavbar/components/NavbarMenuTab";
import NavbarTab from "./DesktopNavbar/components/NavbarTab";
import PatientsMenu from "./DesktopNavbar/components/PatientsMenu";
import ServicesMenu from "./DesktopNavbar/components/ServicesMenu";
import MenuIcon from '@mui/icons-material/Menu';
import DesktopNavbar from "@/components/Navbar/DesktopNavbar";

const Navbar = () => {


    return (
        <AppBar position="sticky" color="azure">
            <Toolbar>
                {window.innerWidth > 1200
                    ? <DesktopNavbar />
                    : (
                        <MenuIconWrapper>
                            <MenuIcon />
                        </MenuIconWrapper>
                    )
                }
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
