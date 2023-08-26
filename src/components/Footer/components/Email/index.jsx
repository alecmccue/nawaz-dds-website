import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { FooterIconWrapper } from "../../styles";
import { StackItemText, StackItemWrapper } from "../../../styles";

const Email = () => (
    <StackItemWrapper>
        <FooterIconWrapper style={{ backgroundColor: "#00ACB1", color: "white", }}>
            <EmailIcon />
        </FooterIconWrapper>
        <StackItemText style={{ color: "black" }}>
            mirweissnawazdds@gmail.com
        </StackItemText>
    </StackItemWrapper>
)

export default Email
