import { StackItemText, StackItemWrapper } from "../../../styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Instagram = () => {
  return (
    <StackItemWrapper>
      <Link
        className="flex"
        href="https://www.instagram.com/familyandcosmetics_dentistry/"
        target="_blank"
      >
        <InstagramIcon />
        <StackItemText>
          Follow us on Instagram!
        </StackItemText>
      </Link>
    </StackItemWrapper>
  );
};

export default Instagram;
