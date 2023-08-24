import React from "react";
import { Box } from "@mui/material";
import { Border, CardTitleText, InformationCard } from "../../styles";
import PhoneIcon from "@mui/icons-material/Phone";
import '../../../../../fonts.css'

const PhoneCard = () => {
    return (
        <InformationCard raised>
            <PhoneIcon fontSize="large" />
            <div className="poppins">
                <CardTitleText> Contact Us </CardTitleText>
            </div>
            <Border />
            <div className="nunito">
                <Box>
                    <div>Phone: (703) 430 3838</div>
                    <div>Email: mirweissnawazdds@gmail.com</div>
                </Box>
            </div>
        </InformationCard>
    );
};

export default PhoneCard;
