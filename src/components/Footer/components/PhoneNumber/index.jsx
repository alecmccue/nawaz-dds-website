import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import { FooterIconWrapper } from "../../styles";
import { StackItemText, StackItemWrapper } from "../../../styles";

const PhoneNumber = () => (
    <StackItemWrapper>
        <FooterIconWrapper style={{ backgroundColor: "#00ACB1", color: "white", }}>
            <PhoneIcon />
        </FooterIconWrapper>
        <StackItemText style={{ color: "black" }}>
            (703) 430 3838
        </StackItemText>
    </StackItemWrapper>
)

export default PhoneNumber
