import React, { useEffect, useState } from "react";
import DesktopNavbar from "@/components/Navbar/DesktopNavbar";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import { AppBar, Toolbar } from "@mui/material";

const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window ? window.innerWidth : 0);

    const updateScreenSize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    return (
        <AppBar position="sticky" color="azure">
            <Toolbar variant="dense" style={{ minHeight: "fit-content" }}>
                {screenWidth > 1200
                    ? <DesktopNavbar />
                    : <MobileNavbar />
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
