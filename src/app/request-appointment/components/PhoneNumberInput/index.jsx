import React, { useState } from "react";
import { matchIsValidTel } from "mui-tel-input";
import { StyledMuiTelInput } from "../../styles";

const PhoneNumberInput = (props) => {
    const {
        isPhoneNumberError,
        name,
        phone,
        setIsPhoneNumberError,
        setPhone,
    } = props

    const handleChange = (phoneNumberInput) => {
        setPhone(phoneNumberInput)
    }

    const validatePhoneNumber = () => {
        const phoneNumberFormatted = phone.replace(/\s/g, "")
        const isValidPhoneNumber = matchIsValidTel(phoneNumberFormatted)

        if(!isValidPhoneNumber) {
            setIsPhoneNumberError(true)
        } else {
            setIsPhoneNumberError(false)
        }
    }

    return (
        <StyledMuiTelInput
            defaultCountry="US"
            error={isPhoneNumberError}
            forceCallingCode
            helperText={isPhoneNumberError ? "Invalid Phone Number" : ""}
            id="phone_number"
            label="Phone Number"
            name={name}
            onBlur={validatePhoneNumber}
            onChange={handleChange}
            required
            value={phone}
            variant="standard"
        />
    )
}

export default PhoneNumberInput