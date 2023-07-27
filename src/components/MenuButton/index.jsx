import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";

const MenuButton = ({ handleClose, handleMouseEnter, isOpen, label, to }) => (
  <Link href={to} onMouseEnter={handleMouseEnter}>
    <Button
      variant="quiet"
      endIcon={isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    >
      {label}
    </Button>
  </Link>
);

export default MenuButton;
