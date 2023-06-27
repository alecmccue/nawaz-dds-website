import { StackItemText, StackItemWrapper } from "../styles";
import PhoneIcon from "@mui/icons-material/Phone";

const Address = () => {
  return (
    <StackItemWrapper>
      <PhoneIcon />
      <StackItemText>
        (703) 430 3838
      </StackItemText>
    </StackItemWrapper>
  );
};

export default Address;
