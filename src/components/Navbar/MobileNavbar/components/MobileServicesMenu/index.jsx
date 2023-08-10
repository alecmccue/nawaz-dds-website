import MobileServicesMenuButton from "@/components/Navbar/MobileNavbar/components/MobileServicesMenuButton";

const MobileServicesMenu = ({ handleClose }) => (
    <div style={{ marginLeft: "1rem" }}>
        <MobileServicesMenuButton
            elementId="general_dentistry"
            handleClose={handleClose}
            label="General Dentistry"
        />
        <MobileServicesMenuButton
            elementId="cosmetic_dentistry"
            handleClose={handleClose}
            label="Cosmetic Dentistry"
        />
        <MobileServicesMenuButton
            elementId="invisalign"
            handleClose={handleClose}
            label="Invisalign"
        />
        <MobileServicesMenuButton
            elementId="implants"
            handleClose={handleClose}
            label="Implants"
        />
        <MobileServicesMenuButton
            elementId="root_canal"
            handleClose={handleClose}
            label="Root Canal"
        />
        <MobileServicesMenuButton
            elementId="extractions"
            handleClose={handleClose}
            label="Extractions"
        />
        <MobileServicesMenuButton
            elementId="dentures"
            handleClose={handleClose}
            label="Dentures"
        />
        <MobileServicesMenuButton
            elementId="partial_dentures"
            handleClose={handleClose}
            label="Partial Dentures"
        />
    </div>
)
export default MobileServicesMenu