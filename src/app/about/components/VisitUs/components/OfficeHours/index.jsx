import { IconWrapper, StackItemText, StackItemWrapper } from "../../styles";
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const OfficeHours = () => {
  return (
    <StackItemWrapper>
      <IconWrapper>
        <WatchLaterIcon fontSize="large" style={{color:'#015d67'}} />
      </IconWrapper>
      <StackItemText style={{ fontSize: "1.5rem", color:'#015d67' }} className="nunito">
        Monday - Thursday: 10am - 6pm
      </StackItemText>
    </StackItemWrapper>
  );
};

export default OfficeHours;
