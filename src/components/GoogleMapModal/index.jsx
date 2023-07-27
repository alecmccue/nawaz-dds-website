import React, { useEffect } from "react";
import { Modal } from "@mui/material";
import { ModalBox } from "./styles";

const GoogleMapsModal = ({ handleClose, open }) => {
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      // Listen for escape key press
      if(event.key === "Escape") {
        handleClose()
      }
    })
  })
  
  return (
    <Modal open={open} onClose={handleClose} disableAutoFocus>
      <ModalBox>
        <iframe
          height="100%"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12396.55843676129!2d-77.40714683557985!3d39.03493618506008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63994a7c0b58d%3A0xa93e21972b785510!2sNawaz%20Mirweiss%20DDS!5e0!3m2!1sen!2sus!4v1688255478197!5m2!1sen!2sus"
          width="100%"
        ></iframe>
      </ModalBox>
    </Modal>
  );
};

export default GoogleMapsModal;
