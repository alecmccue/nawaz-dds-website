import { IconWrapper, StackItemText, StackItemWrapper } from "../../../styles";
import PlaceIcon from "@mui/icons-material/Place";

const Address = ({ handleOpenDirectionsModal }) => {
  return (
    <StackItemWrapper onClick={handleOpenDirectionsModal}>
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
