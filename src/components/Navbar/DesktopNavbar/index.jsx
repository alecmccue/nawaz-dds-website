import React, { useState } from "react";
import FcdLogo from "@/components/Navbar/components/FcdLogo";
import NavbarMenuTab from "@/components/Navbar/DesktopNavbar/components/NavbarMenuTab";
import NavbarTab from "@/components/Navbar/DesktopNavbar/components/NavbarTab";
import PatientsMenu from "@/components/Navbar/DesktopNavbar/components/PatientsMenu";
import ServicesMenu from "@/components/Navbar/DesktopNavbar/components/ServicesMenu";
import { NavbarTabsWrapper } from "@/components/Navbar/DesktopNavbar/styles";
import { usePathname } from "next/navigation";

const DesktopNavbar = () => {
    const pathName = usePathname();

    // Services Menu
    const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
    const handleServicesMouseEnter = (event) =>
        setServicesAnchorEl(event.currentTarget);
    const handleServicesClose = () => setServicesAnchorEl(null);

    // Patients Menu
    const [patientsAnchorEl, setPatientsAnchorEl] = useState(null);
    const handlePatientsMouseEnter = (event) =>
        setPatientsAnchorEl(event.currentTarget);
    const handlePatientsClose = () => setPatientsAnchorEl(null);

    return (
        <>
            <FcdLogo />
            <NavbarTabsWrapper className="nunito">
                <NavbarTab
                    to="/"
                    label="Home"
                    isCurrentTab={pathName === "/"}
                />
                <NavbarTab
                    to="/about"
                    label="About"
                    isCurrentTab={pathName === "/about"}
                />
                <NavbarMenuTab
                    to="/services"
                    label="Services"
                    isCurrentTab={pathName === "/services"}
                    isOpen={servicesAnchorEl}
                    handleMouseEnter={handleServicesMouseEnter}
                    handleClose={handleServicesClose}
                >
                    <ServicesMenu
                        anchorEl={servicesAnchorEl}
                        handleClose={handleServicesClose}
                    />
                </NavbarMenuTab>
                <NavbarTab
                    to="/products"
                    label="Products"
                    isCurrentTab={pathName === "/products"}
                />
                <NavbarMenuTab
                    to="/patients/forms"
                    label="For Patients"
                    isCurrentTab={pathName.includes("/patients")}
                    isOpen={patientsAnchorEl}
                    handleMouseEnter={handlePatientsMouseEnter}
                    handleClose={handlePatientsClose}
                >
                    <PatientsMenu
                        anchorEl={patientsAnchorEl}
                        handleClose={handlePatientsClose}
                    />
                </NavbarMenuTab>
            </NavbarTabsWrapper>
        </>
    )
}

export default DesktopNavbar