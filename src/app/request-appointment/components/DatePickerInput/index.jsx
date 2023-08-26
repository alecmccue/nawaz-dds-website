import React, { useState } from "react";
import { StyledDatePicker } from "../../styles";

const DatePickerInput = (props) => {
    const { name } = props
    const [startDate, setStartDate] = useState()

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        // Time selected hasn't already occurred
        const isTimePassed = currentDate.getTime() < selectedDate.getTime()

        // Hours are between 10am - 6pm
        const openTime = 10
        const closeTime = 18
        const isOfficeOpen = selectedDate.getHours() >= openTime && selectedDate.getHours() < closeTime

        // Current day isn't an off day
        const selectedDay = selectedDate.getDay()
        const isWorkday = selectedDay !== 0 && selectedDay !== 5 && selectedDay !== 6

        return isWorkday && isOfficeOpen && isTimePassed
    }

    const filterWorkDates = (date) => {
        const currentDate = new Date()
        const hasDayOccured = date > currentDate

        const day = date.getDay();
        return hasDayOccured && day !== 0 && day !== 5 && day !== 6;
    }

    return (
        <StyledDatePicker
            autoComplete="off"
            dateFormat="MMMM d, yyyy h:mm aa"
            filterDate={filterWorkDates}
            filterTime={filterPassedTime}
            id={"appointment_date_time"}
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