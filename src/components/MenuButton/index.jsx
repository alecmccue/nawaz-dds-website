import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";

const MenuButton = ({ children, handleClose, handleMouseEnter, isOpen, label, to }) => {  
  return (
  <Link href={to} onMouseEnter={handleMouseEnter} onMouseLeave={handleClose} style={{ height: "100%", paddingTop: "0.9rem" }}>
    <Button
      variant="quiet"
      endIcon={isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      
    >
      {label}
    </Button>
    {children}
  </Link>
);}

export default MenuButton;
