"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerInput from "@/app/request-appointment/components/DatePickerInput";
import emailjs from "@emailjs/browser";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import {
    Instructions,
    RequestAppointmentForm,
    RequestAppointmentWrapper, StyledMuiTelInput,
    Title,
} from "./styles";
import { motion } from "framer-motion";
import { matchIsValidTel } from "mui-tel-input";

const RequestAppointment = () => {
    const form = useRef();
    const [isFormValid, setIsFormValid] = useState(false);
    const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);
    const [isPhoneNumberTouched, setIsPhoneNumberTouched] = useState(false);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [phone, setPhone] = useState("");
    const [severity, setSeverity] = useState();

    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

    // Send email using emailjs
    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
            setSeverity("success");
            setIsSnackbarOpen(true);
        } catch (e) {
            setSeverity("error");
            setIsSnackbarOpen(true);
            console.log(e);
        } finally {
            document.getElementById("name").value = "";
            document.getElementById("appointment_date_time").value = "";
            document.getElementById("message").value = "";
            setPhone("");
            setIsFormValid(false);
            setIsPhoneNumberTouched(false)
        }
    }

    // Validate the form based on input
    const validateForm = useCallback(() => {
        const isValid =
            !isPhoneNumberError
            && !!form.current["name"].value
            && !!form.current["phone_number"].value
            && !!form.current["appointment_date_time"].value
            && !!form.current["message"].value;

        setIsFormValid(isValid);
    }, [isPhoneNumberError])

    // Validate the phone number using mui-tel-input
    const validatePhoneNumber = useCallback(() => {
        const phoneNumberFormatted = phone.replace(/\s/g, "")
        const isValidPhoneNumber = matchIsValidTel(phoneNumberFormatted)

        if(!isValidPhoneNumber) {
            setIsPhoneNumberError(true)
        } else {
            setIsPhoneNumberError(false)
        }
        validateForm()
    }, [phone, validateForm])

    // When phone number changes, and if touched, validate it
    useEffect(() => {
        if(isPhoneNumberTouched) {
            validatePhoneNumber()
        }
    }, [isPhoneNumberTouched, phone, validatePhoneNumber])

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <RequestAppointmentWrapper>
                    <Title className="arvo">Request Appointment</Title>
                    <Instructions className="arvo">
                        Fill out the form to request an appointment at Family & Cosmetic
                        Dental.
                        <br />
                        Note: This form does not confirm an appointment; the front desk will
                        contact you to confirm your specific appointment date and time.
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
                        <StyledMuiTelInput
                            defaultCountry="US"
                            error={isPhoneNumberError}
                            forceCallingCode
                            helperText={isPhoneNumberError ? "Invalid Phone Number" : ""}
                            id="phone_number"
                            label="Phone Number"
                            onBlur={() => {
                                setIsPhoneNumberTouched(true)
                                validatePhoneNumber()
                            }}
                            onChange={(e) => setPhone(e)}
                            required
                            value={phone}
                            name="phone_number"
                            variant="standard"
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
                        sx={{ width: "100%" }}
                    >
                        {severity === "success"
                            ? "Your request was successfully sent."
                            : "There was an error with your request. Try again."}
                    </Alert>
                </Snackbar>
            </motion.div>
        </>
    );
};

export default RequestAppointment;
