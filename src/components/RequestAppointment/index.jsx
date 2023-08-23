import React from "react";
import EventIcon from "@mui/icons-material/Event";
import { ContactButton } from "./styles";
import { useRouter } from "next/navigation";

const RequestAppointment = (props) => {
    const {
        fontSize,
        marginTop,
        iconSize = "medium",
        padding
    } = props

    const router = useRouter()
    const handleRequestAppointmentClick = () => router.push("/request-appointment")

    return (
        <ContactButton onClick={handleRequestAppointmentClick}
                       style={{
                           fontSize: `${fontSize}`,
                           marginTop: `${marginTop}`,
                           padding: `${padding}`
                       }}>
            <EventIcon fontSize={iconSize} />
            Request Appointment
        </ContactButton>
    )
}

export default RequestAppointment