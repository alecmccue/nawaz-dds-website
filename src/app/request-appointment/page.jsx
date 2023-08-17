"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RequestAppointmentForm, RequestAppointmentWrapper } from "./styles";
import { Button, TextField } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerInput from "@/app/request-appointment/DatePickerInput";

const RequestAppointment = () => {
    const form = useRef();

    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <RequestAppointmentWrapper>
            <RequestAppointmentForm
                id="appointment-request-form"
                ref={form}
                onSubmit={sendEmail}
            >
                <TextField
                    label="Name"
                    name="name"
                    variant="standard"
                />
                <TextField
                    label="Phone Number"
                    name="phone_number"
                    variant="standard"
                />
                <DatePickerInput />
                <TextField
                    label="Reason for Appointment"
                    name="message"
                    variant="standard"
                    multiline
                />
                <Button type="submit">
                    Send
                </Button>
            </RequestAppointmentForm>
        </RequestAppointmentWrapper>
    );
}

export default RequestAppointment