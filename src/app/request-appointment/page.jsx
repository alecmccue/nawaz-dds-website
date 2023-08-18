"use client"

import React, { useRef } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePickerInput from "@/app/request-appointment/components/DatePickerInput";
import PhoneNumberInput from "@/app/request-appointment/components/PhoneNumberInput";
import emailjs from '@emailjs/browser';
import { Button, TextField } from "@mui/material";
import { Instructions, RequestAppointmentForm, RequestAppointmentWrapper, Title } from "./styles";

const RequestAppointment = () => {
    const form = useRef();

    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID


    const sendEmail = (e) => {
        e.preventDefault();

        console.log(form.current['name'].value)
        console.log(form.current['phone_number'].value)
        console.log(form.current['message'].value)
        console.log(form.current['appointment_date_time'].value)
        // emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    };

    return (
        <RequestAppointmentWrapper>
            <Title className="arvo">
                Request Appointment
            </Title>
            <Instructions className="arvo">
                Fill out the form to request an appointment at Family & Cosmetic Dental.
                <br />
                Note: This form does not confirm an appointment; the dental office will contact you to confirm your
                specific date and time.
            </Instructions>

            <RequestAppointmentForm
                id="appointment-request-form"
                ref={form}
                onSubmit={sendEmail}
            >
                <TextField
                    label="Name"
                    name="name"
                    variant="standard"
                    required
                />
                <PhoneNumberInput name="phone_number" />
                <DatePickerInput name="appointment_date_time" />
                <TextField
                    label="Reason for Appointment"
                    name="message"
                    variant="standard"
                    required
                    multiline
                />
                <Button
                    style={{ marginTop: "2rem" }}
                    type="submit"
                    variant="outlined"
                >
                    Send
                </Button>
            </RequestAppointmentForm>
        </RequestAppointmentWrapper>
    )
}

export default RequestAppointment