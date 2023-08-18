"use client"

import React, { useRef, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePickerInput from "@/app/request-appointment/components/DatePickerInput";
import PhoneNumberInput from "@/app/request-appointment/components/PhoneNumberInput";
import emailjs from '@emailjs/browser';
import { Button, TextField } from "@mui/material";
import { Instructions, RequestAppointmentForm, RequestAppointmentWrapper, Title } from "./styles";

const RequestAppointment = () => {
    const form = useRef();
    const [isPhoneNumberError, setIsPhoneNumberError] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)

    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID

    const validateForm = () => {
        const isValid = (!isPhoneNumberError
            && form.current['name'].value
            && form.current['phone_number'].value
            && form.current['appointment_date_time'].value
            && form.current['message'].value
        )
        setIsFormValid(isValid)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        // Put snackbar for successful or failed email sent
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    }

    return (
        <RequestAppointmentWrapper>
            <Title className="arvo">
                Request Appointment
            </Title>
            <Instructions className="arvo">
                Fill out the form to request an appointment at Family & Cosmetic Dental.
                <br />
                Note: This form does not confirm an appointment; the front desk will contact you to confirm your
                specific appointment date and time.
            </Instructions>

            <RequestAppointmentForm
                id="appointment-request-form"
                ref={form}
                onSubmit={sendEmail}
                onChange={validateForm}
            >
                <TextField
                    label="Name"
                    name="name"
                    variant="standard"
                    required
                />
                <PhoneNumberInput
                    isPhoneNumberError={isPhoneNumberError}
                    name="phone_number"
                    setIsPhoneNumberError={setIsPhoneNumberError}
                />
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
                    disabled={!isFormValid}
                >
                    Send
                </Button>
            </RequestAppointmentForm>
        </RequestAppointmentWrapper>
    )
}

export default RequestAppointment