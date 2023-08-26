import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import { FooterIconWrapper } from "../../styles";
import { StackItemText, StackItemWrapper } from "../../../styles";

const Address = ({ handleOpenDirectionsModal }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <StackItemWrapper
            onClick={handleOpenDirectionsModal}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{ cursor: "pointer" }}
        >
            <FooterIconWrapper
                style={{
                    backgroundColor: isHover ? "transparent" : "#00ACB1",
                    color: isHover ? "#00ACB1" : "white",
                }}
            >
                <PlaceIcon />
            </FooterIconWrapper>
            <StackItemText style={{ color: isHover ? "#00ACB1" : "black" }}>
                46179 Westlake Drive, Suite 230,
                <br />
                Sterling, VA 20165
            </StackItemText>
        </StackItemWrapper>
    )
}

export default Address
