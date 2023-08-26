import React from "react";
import { ListItem, ListItemButton } from "@mui/material";
import useServicesScrollIntoView from "@/hooks/useServicesScrollIntoView";

const MobileServicesMenuButton = (props) => {
    const {
        elementId,
        label,
        handleClose,
    } = props

    const { handleClick } = useServicesScrollIntoView()

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={() => handleClick(elementId, handleClose, "/services")}>
                {label}
            </ListItemButton>
        </ListItem>
    )
}

export default MobileServicesMenuButton
