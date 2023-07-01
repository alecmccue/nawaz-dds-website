import React from "react";
import { Box } from "@mui/material";
import { CardTitleText, InformationCard } from "../../styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const OfficeHoursCard = () => {
  return (
    <InformationCard raised>
      <AccessTimeIcon fontSize="large" />
      <CardTitleText> Office hours </CardTitleText>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <div> MON - THU </div>
            <div> 10:00am - 6:00pm </div>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <div> FRI - SUN </div>
            <div> Closed </div>
        </Box>
      </Box>
    </InformationCard>
  );
};

export default OfficeHoursCard;
