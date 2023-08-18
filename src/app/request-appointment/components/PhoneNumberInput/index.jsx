import React, { useState } from "react";
import { matchIsValidTel } from "mui-tel-input";
import { StyledMuiTelInput } from "../../styles";

const PhoneNumberInput = (props) => {
    const { name } = props
    const [phone, setPhone] = useState('')
    const [isError, setIsError] = useState(false)

    const handleChange = (phoneNumberInput) => {
        setPhone(phoneNumberInput)
    }

    const validatePhoneNumber = () => {
        const phoneNumberFormatted = phone.replace(/\s/g, "")
        const isValidPhoneNumber = matchIsValidTel(phoneNumberFormatted)

        if(!isValidPhoneNumber) {
            setIsError(true)
        } else {
            setIsError(false)
        }
    }

    return (
        <StyledMuiTelInput
            defaultCountry="US"
            error={isError}
            forceCallingCode
            helperText={isError ? "Invalid Phone Number" : ""}
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