import { StackItemText, StackItemWrapper } from "../styles";
import EmailIcon from "@mui/icons-material/Email";

const Email = () => {
  return (
    <StackItemWrapper>
      <EmailIcon />
      <StackItemText>
        Info@nawazdds.com
      </StackItemText>
    </StackItemWrapper>
  );
};

export default Email;
