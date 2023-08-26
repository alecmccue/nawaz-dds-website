import React from "react";
import ServicesMenuButton from "@/components/Navbar/DesktopNavbar/components/ServicesMenuButton";
import { DropdownMenu, DropdownMenuItem } from "@/components/Navbar/DesktopNavbar/styles";
import { motion } from "framer-motion";

const animationVariant2 = {
    hide: {
        opacity: 0,
        scale: 0.8,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.2,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.2,
        },
    }
};

const ServicesMenu = ({ anchorEl, handleClose }) => (
    <DropdownMenu
        anchorEl={anchorEl}
        className="nunito"
        id="services-menu"
        onClose={handleClose}
        open={Boolean(anchorEl)}
    >
        <motion.div
            initial="hide"
            exit="exit"
            whileInView="show"
            variants={animationVariant2}
        >
            <DropdownMenuItem>
                <ServicesMenuButton
                    elementId="general_dentistry"
                    handleClose={handleClose}
                    label="General Dentistry"
                    to="/services"
                />
            </DropdownMenuItem>
            <DropdownMenuItem>
                <ServicesMenuButton
                    elementId="cosmetic_dentistry"
                    handleClose={handleClose}
                    label="Cosmetic Dentistry"
                    to="/services"
                />
            </DropdownMenuItem>
            <DropdownMenuItem>
                <ServicesMenuButton
                    elementId="invisalign"
                    handleClose={handleClose}
                    label="Invisalign"
                    to="/services"
                />
            </DropdownMenuItem>
            <DropdownMenuItem>
                <ServicesMenuButton
                    elementId="implants"
                    handleClose={handleClose}
                    label="Implants"
                    to="/services"
                />
            </DropdownMenuItem>
            <DropdownMenuItem>
                <ServicesMenuButton
                    elementId="root_canal"
                    handleClose={handleClose}
                    label="Root Canal"
                    to="/services"
                />
            </DropdownMenuItem>
            <DropdownMenuItem>
                <ServicesMenuButton
                    elementId="extractions"
                    handleClose={handleClose}
                    label="Extractions"
                    to="/services"
                />
            </DropdownMenuItem>
            <DropdownMenuItem>
                <ServicesMenuButton
                    elementId="dentures"
                    handleClose={handleClose}
                    label="Dentures"
                    to="/services"
                />
            </DropdownMenuItem>
            <DropdownMenuItem>
                <ServicesMenuButton
                    elementId="partial_dentures"
                    handleClose={handleClose}
                    label="Partial Dentures"
                    to="/services"
                />
            </DropdownMenuItem>
        </motion.div>
    </DropdownMenu>
)

export default ServicesMenu
