import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { MenuButtonWrapper } from "@/components/Navbar/DesktopNavbar/styles";

const ServicesMenuButton = ({ to, label, elementId, handleClose }) => {
    const router = useRouter();
    const pathName = usePathname();

    const handleClick = () => {
        if(pathName !== "/services") {
            router.push(to);
        }

        setTimeout(() => {
            const element = document.getElementById(elementId);
            if(element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100);

        handleClose();
    };

    return <MenuButtonWrapper onClick={handleClick}>{label}</MenuButtonWrapper>;
};

export default ServicesMenuButton;
