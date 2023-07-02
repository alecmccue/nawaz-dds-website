import { IconWrapper, StackItemText, StackItemWrapper } from "../../../styles";
import PlaceIcon from "@mui/icons-material/Place";

const Address = () => {
  return (
    <StackItemWrapper>
      <IconWrapper>
        <PlaceIcon />
      </IconWrapper>
      <StackItemText>
        46179 Westlake Drive, Suite 230, 
        <br/>
        Sterling, VA 20165
      </StackItemText>
    </StackItemWrapper>
  );
};

export default Address;
