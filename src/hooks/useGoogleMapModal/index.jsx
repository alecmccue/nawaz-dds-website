import { useState } from "react";

const useGoogleMapModal = () => {
  const [isDirectionsModalOpen, setIsDirectionsModalOpen] = useState(false);

  const handleOpenDirectionsModal = () => setIsDirectionsModalOpen(true);
  const handleCloseDirectionsModal = () => setIsDirectionsModalOpen(false);

  return {
    handleCloseDirectionsModal,
    handleOpenDirectionsModal,
    isDirectionsModalOpen,
  }
};

export default useGoogleMapModal;
