import React from "react";
import { NavbarTabWrapper } from "../../styles";
import Link from "next/link";

const NavbarTab = ({ label, to }) => (
  <Link href={to} style={{ height: "100%" }}>
    <NavbarTabWrapper>{label}</NavbarTabWrapper>
  </Link>
);

export default NavbarTab;
