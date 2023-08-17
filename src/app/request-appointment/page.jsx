"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RequestAppointmentForm } from "./styles";

const RequestAppointment = () => {
    const form = useRef();
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID

    console.log(publicKey)
    const sendEmail = (e) => {
        e.preventDefault();

        console.log(publicKey)
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <RequestAppointmentForm ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="text" name="phone_number" />
            <label>Appointment Date</label>
            <input type="text" name="appointment_date_time" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </RequestAppointmentForm>
    );
}

export default RequestAppointment