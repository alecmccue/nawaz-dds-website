import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Email = () => {
  return (
    <div className="flex flex-row align-middle">
      <EmailIcon />
      <Typography className="flex align-middle ml-2">
        Info@nawazdds.com
      </Typography>
    </div>
  );
};

export default Email;
