import { IconWrapper, StackItemWrapper } from "../../../styles";
import GoogleIcon from '@mui/icons-material/Google';
import Link from "next/link";

const GoogleReviews = () => {
  return (
    <StackItemWrapper>
      <Link
        className="flex"
        href="https://www.google.com/maps/place/Nawaz+Mirweiss+DDS/@39.0339601,-77.4046779,17z/data=!3m1!5s0x89c7a0b67547d5d3:0x7b29c00fb0ee62be!4m8!3m7!1s0x89b63994a7c0b58d:0xa93e21972b785510!8m2!3d39.033956!4d-77.402103!9m1!1b1!16s%2Fg%2F1tdz0vcc?entry=ttu"
        target="_blank"
      >
        <IconWrapper>
          <GoogleIcon />
        </IconWrapper>
      </Link>
    </StackItemWrapper>
  );
};

export default GoogleReviews;