import React from "react";
import { Box } from "@mui/material";
import {
  Border,
  CardTitleText,
  InformationCard,
} from "../../styles";
import PublicIcon from "@mui/icons-material/Public";

const LocationCard = () => {
  return (
    <InformationCard raised>
      <PublicIcon fontSize="large" />
      <CardTitleText> Location </CardTitleText>
      <Border/>
      <Box>
        46179 Westlake Drive, Suite 230,
        <br />
        Sterling, VA 20165
      </Box>
    </InformationCard>
  );
};

export default LocationCard;
