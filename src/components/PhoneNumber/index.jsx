import { Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const Address = () => {
  return (
    <div className="flex flex-row align-middle">
      <PhoneIcon />
      <Typography className="flex ml-2">(703) 430 3838</Typography>
    </div>
  );
};

export default Address;
