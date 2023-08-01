import { MenuButtonWrapper } from "../../../styles";
import Link from "next/link";

const PatientsMenuButton = ({ to, label, handleClose }) => (
  <MenuButtonWrapper onClick={() => handleClose()}>
    <Link href={to}>{label}</Link>
  </MenuButtonWrapper>
);

export default PatientsMenuButton;
