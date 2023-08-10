import React from "react";
import Link from "next/link";
import { ListItem, ListItemButton } from "@mui/material";

const MobileNavbarTab = ({ id, label, to }) => (
    <ListItem disablePadding>
        <ListItemButton>
            <Link href={to} style={{ width: "100%" }}>
                {label}
            </Link>
        </ListItemButton>
    </ListItem>
)

export default MobileNavbarTab