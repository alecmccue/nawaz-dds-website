import { IconWrapper, StackItemText, StackItemWrapper } from "../../styles";
import MapIcon from '@mui/icons-material/Map';

const Address = () => {
  return (
    <StackItemWrapper>
      <IconWrapper>
        <MapIcon fontSize="large" style={{color:'#015d67'}}/>
      </IconWrapper>
      <StackItemText style={{ fontSize: "1.5rem", color:'#015d67' }} className="nunito">
        46179 Westlake Drive, Suite 230, 
        <br/>
        Sterling, VA 20165
      </StackItemText>
    </StackItemWrapper>
  );
};

export default Address;
