import React from "react";
import { ListItem, ListItemButton } from "@mui/material";
import useScrollToRoute from "@/hooks/useScrollToRoute";

const MobileServicesMenuButton = (props) => {
    const {
        elementId,
        label,
        handleClose,
    } = props

    const { handleClick } = useScrollToRoute()

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={() => handleClick(elementId, handleClose, "/services")}>
                {label}
            </ListItemButton>
        </ListItem>
    )
}

export default MobileServicesMenuButton
