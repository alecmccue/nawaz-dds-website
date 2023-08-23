import MobileNavbarTab from "@/components/Navbar/MobileNavbar/components/MobileNavbarTab";

const MobilePatientsMenu = ({ handleClose }) => (
    <div style={{ marginLeft: "1rem" }}>
        <MobileNavbarTab
            handleClick={handleClose}
            to="/request-appointment"
            label="Request Appointment"
        />
        <MobileNavbarTab
            handleClick={handleClose}
            to="/patients/forms"
            label="Forms"
        />
        <MobileNavbarTab
            handleClick={handleClose}
            to="/patients/insurance"
            label="Insurance"
        />
    </div>
)

export default MobilePatientsMenu