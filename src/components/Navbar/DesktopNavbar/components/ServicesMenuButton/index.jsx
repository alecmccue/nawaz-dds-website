import React from "react";
import { MenuButtonWrapper } from "@/components/Navbar/DesktopNavbar/styles";
import useScrollToRoute from "@/hooks/useScrollToRoute";

const ServicesMenuButton = ({ to, label, elementId, handleClose }) => {
    const { handleClick } = useScrollToRoute()

    return (
        <MenuButtonWrapper
            onClick={() => handleClick(elementId, handleClose, to)}
            style={{ padding: "0.4rem 1rem" }}
        >
            {label}
        </MenuButtonWrapper>
    )
};

export default ServicesMenuButton;
