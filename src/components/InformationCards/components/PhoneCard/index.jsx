import React from "react";
import { Box } from "@mui/material";
import { Border, CardTitleText, InformationCard } from "../../styles";
import PhoneIcon from "@mui/icons-material/Phone";

const PhoneCard = () => {
  return (
    <InformationCard raised>
      <PhoneIcon fontSize="large" />
      <CardTitleText> Contact Us </CardTitleText>
      <Border/>
      <Box>
        <div>Phone: (703) 430 3838</div>
        <div>Email: Info@nawazdds.com</div>
      </Box>
    </InformationCard>
  );
};

export default PhoneCard;
