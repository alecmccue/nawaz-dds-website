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
        setTimeout(() => {
            const element = document.getElementById(elementId);
            if(element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 300);
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
