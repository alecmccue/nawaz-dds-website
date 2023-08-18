import React, { useState } from "react";
import { StyledDatePicker } from "../../styles";

const DatePickerInput = (props) => {
    const { name } = props
    const [startDate, setStartDate] = useState()

    const filterPassedTime = (time) => {

        const currentDate = new Date();
        const selectedDate = new Date(time);
        const isTimePassed = currentDate.getTime() < selectedDate.getTime()

        const openTime = 10
        const closeTime = 18
        const isOfficeOpen = selectedDate.getHours() >= openTime && selectedDate.getHours() < closeTime

        return isOfficeOpen && isTimePassed
    }

    const isWorkDay = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 5 && day !== 6;
    }

    return (
        <StyledDatePicker
            autoComplete="off"
            dateFormat="MMMM d, yyyy h:mm aa"
            filterDate={isWorkDay}
            filterTime={filterPassedTime}
            name={name}
            onChange={(date) => setStartDate(date)}
            placeholderText="Click to select a date *"
            required
            selected={startDate}
            showTimeSelect
        />
    )
}

export default DatePickerInput