import { IconWrapper, StackItemText, StackItemWrapper } from "../../../styles";
import EmailIcon from "@mui/icons-material/Email";

const Email = () => {
  return (
    <StackItemWrapper>
      <IconWrapper>
        <EmailIcon />
      </IconWrapper>
      <StackItemText>
        Info@nawazdds.com
      </StackItemText>
    </StackItemWrapper>
  );
};

export default Email;
