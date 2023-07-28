import { IconWrapper, StackItemText, StackItemWrapper } from "../../styles";
import MapIcon from '@mui/icons-material/Map';

const Address = () => {
  return (
    <StackItemWrapper>
      <IconWrapper>
        <MapIcon fontSize="large"/>
      </IconWrapper>
      <StackItemText style={{ fontSize: "1.5rem" }}>
        46179 Westlake Drive, Suite 230, 
        <br/>
        Sterling, VA 20165
      </StackItemText>
    </StackItemWrapper>
  );
};

export default Address;
