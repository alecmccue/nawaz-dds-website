import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "./styles";
import { StyledDatePicker } from "@/app/request-appointment/DatePickerInput/styles";

const DatePickerInput = () => {

    const [startDate, setStartDate] = useState(new Date());

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const isWorkDay = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 5 && day !== 6;
    };
    return (
        <StyledDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            required
            name="appointment_date_time"
            form="appointment-request-form"
            filterDate={isWorkDay}
            placeholderText="Click to select a date"
        />
    )
}

export default DatePickerInput