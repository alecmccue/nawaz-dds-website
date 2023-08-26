import React, { useEffect } from "react";
import { ListItem, ListItemButton } from "@mui/material";
import useServicesScrollIntoView from "@/hooks/useServicesScrollIntoView";

const MobileServicesMenuButton = (props) => {
    const {
        elementId,
        label,
        handleClose,
    } = props

    const { handleClick } = useServicesScrollIntoView()

    useEffect(() => {
        const element = document.getElementById(elementId);
        if(element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [elementId])

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={() => handleClick(elementId, handleClose, "/services")}>
                {label}
            </ListItemButton>
        </ListItem>
    )
}

export default MobileServicesMenuButton
