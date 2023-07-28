import { useState } from "react";
import { FooterIconWrapper } from "../../styles";
import { StackItemText, StackItemWrapper } from "../../../styles";
import EmailIcon from "@mui/icons-material/Email";

const Email = () => {
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
        <EmailIcon />
      </FooterIconWrapper>
      <StackItemText style={{ color: isHover ? "#00ACB1" : "black" }}>
        Info@nawazdds.com
      </StackItemText>
    </StackItemWrapper>
  );
};

export default Email;
