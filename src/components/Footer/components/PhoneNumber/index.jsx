import { useState } from "react";
import { FooterIconWrapper } from "../../styles";
import { StackItemText, StackItemWrapper } from "../../../styles";
import PhoneIcon from "@mui/icons-material/Phone";

const Address = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <StackItemWrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <FooterIconWrapper
        style={{
          backgroundColor: isHover ? "transparent" : "#00ACB1",
          color: isHover ? "#00ACB1" : "white",
        }}
      >
        <PhoneIcon />
      </FooterIconWrapper>
      <StackItemText style={{ color: isHover ? "#00ACB1" : "black" }}>
        (703) 430 3838
      </StackItemText>
    </StackItemWrapper>
  );
};

export default Address;
