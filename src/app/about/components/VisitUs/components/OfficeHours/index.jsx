import { IconWrapper, StackItemText, StackItemWrapper } from "../../styles";
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const OfficeHours = () => {
  return (
    <StackItemWrapper>
      <IconWrapper>
        <WatchLaterIcon fontSize="large" />
      </IconWrapper>
      <StackItemText style={{ fontSize: "1.5rem" }}>
        Monday - Thursday: 10am - 6pm
      </StackItemText>
    </StackItemWrapper>
  );
};

export default OfficeHours;
