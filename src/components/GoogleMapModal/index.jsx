import React from "react";
import { Modal } from "@mui/material";
import { ModalBox } from "./styles";

const GoogleMapModal = ({ handleClose, open }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalBox>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12396.55843676129!2d-77.40714683557985!3d39.03493618506008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63994a7c0b58d%3A0xa93e21972b785510!2sNawaz%20Mirweiss%20DDS!5e0!3m2!1sen!2sus!4v1688255478197!5m2!1sen!2sus"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </ModalBox>
    </Modal>
  );
};

export default GoogleMapModal;
