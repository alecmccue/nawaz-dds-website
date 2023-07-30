import React from "react";
import { Box } from "@mui/material";
import { Border, CardTitleText, InformationCard } from "../../styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const OfficeHoursCard = () => {
  return (
    <InformationCard raised>
      <AccessTimeIcon fontSize="large" />
      <CardTitleText> Office hours </CardTitleText>
      <Border/>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <div> Mon - Thu </div>
            <div> 10:00am - 6:00pm </div>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <div> Fri - Sun </div>
            <div> Closed </div>
        </Box>
      </Box>
    </InformationCard>
  );
};

export default OfficeHoursCard;
