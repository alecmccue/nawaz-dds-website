import { Button } from "@mui/material";
import Link from "next/link";

const LinkButton = ({ label, to }) => (
  <Link href={to}>
    <Button variant="quiet">{label}</Button>
  </Link>
);

export default LinkButton;
