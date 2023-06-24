import { Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

const Address = () => {
  return (
    <div className="flex flex-row align-middle">
      <PlaceIcon />
      <Typography className="flex align-middle ml-2">
        46179 Westlake Drive, Suite 230, Sterling, VA 20165
      </Typography>
    </div>
  );
};

export default Address;
