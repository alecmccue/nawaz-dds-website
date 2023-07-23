import { Button } from "@mui/material";
import Link from "next/link";

const LinkButton = ({ to, label, handleMouseEnter }) => (
  <Link href={to} onMouseEnter={handleMouseEnter}>
    <Button variant="quiet">{label}</Button>
  </Link>
);

export default LinkButton;
