import React from "react";
import { NavbarTabWrapper } from "../../styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const NavbarMenuTab = (props) => {
  const {
    children,
    handleClose,
    handleMouseEnter,
    isOpen,
    label,
    isCurrentTab,
  } = props;

  return (
    <NavbarTabWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleClose}
      style={{ borderBottom: isCurrentTab ? "0.2rem solid #00ACB1" : "none" }}
    >
      {label}
      {isOpen ? (
        <KeyboardArrowUpIcon fontSize="small" />
      ) : (
        <KeyboardArrowDownIcon fontSize="small" />
      )}
      {children}
    </NavbarTabWrapper>
  );
};

export default NavbarMenuTab;
