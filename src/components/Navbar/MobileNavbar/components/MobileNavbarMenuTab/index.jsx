import React, { useEffect, useState } from "react";
import { ListItem, ListItemButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MobileNavbarMenuTab = (props) => {
    const {
        children,
        isDrawerOpen,
        label,
    } = props

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenuOpen = () => setIsOpen(!isOpen)

    useEffect(() => {
        setIsOpen(false)
    }, [isDrawerOpen])

    return (
        <>
            <ListItem disablePadding>
                <ListItemButton disableRipple onClick={toggleMenuOpen}>
                    {label}
                    {isOpen ? (
                        <KeyboardArrowUpIcon fontSize="small" />
                    ) : (
                        <KeyboardArrowDownIcon fontSize="small" />
                    )}
                </ListItemButton>
            </ListItem>
            <div onClick={toggleMenuOpen}>
                {isOpen && children}
            </div>
        </>
    )
}

export default MobileNavbarMenuTab
