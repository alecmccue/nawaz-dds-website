import React from "react";
import { NavbarTabWrapper } from "../../styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const NavbarMenuTab = (props) => {
  const { children, handleClose, handleMouseEnter, isOpen, label } = props;

  return (
      <NavbarTabWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleClose}
      >
        {label} 
        {isOpen ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
        {children}
      </NavbarTabWrapper>
  );
};

export default NavbarMenuTab;
