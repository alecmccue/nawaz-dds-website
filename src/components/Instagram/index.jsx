import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Instagram = () => {
  return (
    <div className="flex flex-row align-middle">
      <Link
        className="flex"
        href="https://www.instagram.com/familyandcosmetics_dentistry/"
        target="_blank"
      >
        <InstagramIcon />
        <Typography className="flex align-middle ml-2">
          Follow us on Instagram!
        </Typography>
      </Link>
    </div>
  );
};

export default Instagram;
