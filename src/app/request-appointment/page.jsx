"use client"

import React, { useRef, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePickerInput from "@/app/request-appointment/components/DatePickerInput";
import PhoneNumberInput from "@/app/request-appointment/components/PhoneNumberInput";
import emailjs from '@emailjs/browser';
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { Instructions, RequestAppointmentForm, RequestAppointmentWrapper, Title } from "./styles";

const RequestAppointment = () => {
    const form = useRef();
    const [isFormValid, setIsFormValid] = useState(false)
    const [isPhoneNumberError, setIsPhoneNumberError] = useState(false)
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
    const [phone, setPhone] = useState('')
    const [severity, setSeverity] = useState()

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

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            setSeverity("success")
            setIsSnackbarOpen(true)
        } catch (e) {
            setSeverity("error")
            setIsSnackbarOpen(true)
            console.log(e)
        } finally {
            document.getElementById("name").value = ""
            document.getElementById("appointment_date_time").value = ""
            document.getElementById("message").value = ""
            setPhone("")
            setIsFormValid(false)
        }
    }

    return (
        <>
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
                        id="name"
                        label="Name"
                        name="name"
                        required
                        variant="standard"
                    />
                    <PhoneNumberInput
                        isPhoneNumberError={isPhoneNumberError}
                        name="phone_number"
                        phone={phone}
                        setPhone={setPhone}
                        setIsPhoneNumberError={setIsPhoneNumberError}
                    />
                    <DatePickerInput name="appointment_date_time" />
                    <TextField
                        id="message"
                        label="Reason for Appointment"
                        multiline
                        name="message"
                        required
                        variant="standard"
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
            <Snackbar
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
                autoHideDuration={6000}
                onClose={() => setIsSnackbarOpen(false)}
                open={isSnackbarOpen}
            >
                <Alert
                    onClose={() => setIsSnackbarOpen(false)}
                    severity={severity}
                    sx={{ width: '100%' }}
                >
                    {severity === "success"
                        ? "Your request was successfully sent."
                        : "There was an error with your request. Try again."
                    }
                </Alert>
            </Snackbar>
        </>
    )
}

export default RequestAppointment