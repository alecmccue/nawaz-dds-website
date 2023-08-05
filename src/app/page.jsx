"use client";
import {
  HomeWrapper,
} from "./styles";
import { Box, Typography } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import Landing from "@/app/home";
import { useState } from "react";
import GoogleMapModal from "@/components/GoogleMapModal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <HomeWrapper>
      <Landing/>
      <GoogleMapModal open={open} handleClose={handleClose} />
    </HomeWrapper>
  );
};

export default Home;
