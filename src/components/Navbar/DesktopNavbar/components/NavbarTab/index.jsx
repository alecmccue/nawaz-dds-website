import React from "react";
import Link from "next/link";
import { NavbarTabWrapper } from "@/components/Navbar/DesktopNavbar/styles";

const NavbarTab = ({ isCurrentTab, label, to }) => (
    <Link
        href={to}
        style={{
            borderBottom: isCurrentTab ? "0.2rem solid #00ACB1" : "none",
            height: "100%",
        }}
    >
        <NavbarTabWrapper>{label}</NavbarTabWrapper>
    </Link>
);

export default NavbarTab;
