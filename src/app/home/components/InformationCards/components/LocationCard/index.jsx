import React from "react";
import { Box } from "@mui/material";
import { Border, CardTitleText, InformationCard } from "../../styles";
import PublicIcon from "@mui/icons-material/Public";
import '../../../../../fonts.css'

const LocationCard = () => {
  return (
    <InformationCard raised>
      <PublicIcon fontSize="large" />
      <div className="poppins">
        <CardTitleText> Location </CardTitleText>
      </div>
      <Border />
      <div className="nunito">
        <Box>
          46179 Westlake Drive, Suite 230,
          <br />
          Sterling, VA 20165
        </Box>
      </div>
    </InformationCard>
  );
};

export default LocationCard;
