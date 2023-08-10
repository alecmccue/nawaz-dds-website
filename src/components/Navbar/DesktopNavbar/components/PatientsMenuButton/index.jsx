import React from "react";
import Link from "next/link";
import { MenuButtonWrapper } from "@/components/Navbar/DesktopNavbar/styles";

const PatientsMenuButton = ({ to, label, handleClose }) => (
    <MenuButtonWrapper onClick={() => handleClose()}>
        <Link href={to} style={{ width: "100%" }}>{label}</Link>
    </MenuButtonWrapper>
);

export default PatientsMenuButton;
