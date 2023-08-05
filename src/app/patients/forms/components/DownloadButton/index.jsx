import React from "react";
import { DownloadButtonWrapper } from "../../styles";
import DownloadIcon from "@mui/icons-material/Download";

const DownloadButton = ({ form }) => (
  <DownloadButtonWrapper>
    <a href={form} download className="nunito">
      <DownloadIcon fontSize="small" style={{ marginRight: "0.2rem" }}/>
      Download
    </a>
  </DownloadButtonWrapper>
);

export default DownloadButton;
