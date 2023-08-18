import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import DatePicker from "react-datepicker";
import { MuiTelInput } from "mui-tel-input";

export const Instructions = styled(Typography)`
  width: 40rem;
  text-align: center;
  margin-bottom: 1rem;

`

export const RequestAppointmentForm = styled.form`
  background-color: white;
  border-radius: 1rem;
  box-shadow: rgba(135, 228, 219, 0.5) 0 10px 10px -10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: 35rem;
`

export const RequestAppointmentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: 100%;
`

export const StyledDatePicker = styled(DatePicker)`
  background: transparent;
  border-bottom: thin solid rgba(0, 0, 0, 0.42);
  padding: 0.2rem;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    border-bottom: 0.15rem solid black;
  }

  &:focus {
    outline: none;
  }
`

export const StyledMuiTelInput = styled(MuiTelInput)`
  margin-top: 1rem;
`

export const Title = styled(Typography)`
  color: #00ACB1;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`