import React, { useEffect, useState } from "react";
import DesktopNavbar from "@/components/Navbar/DesktopNavbar";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import { AppBar, Toolbar } from "@mui/material";
import dynamic from "next/dynamic";

const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

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
            <Toolbar variant="dense">
                {screenWidth > 1200
                    ? <DesktopNavbar />
                    : <MobileNavbar />
                }
            </Toolbar>
        </AppBar>
    )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
