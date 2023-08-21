import React from "react";
import { DownloadButtonWrapper } from "../../styles";
import DownloadIcon from "@mui/icons-material/Download";

const DownloadButton = ({ form }) => (
    <DownloadButtonWrapper>
        <a
            className="nunito"
            download
            href={form}
            style={{ display: "flex", alignItems: "center" }}
        >
            <DownloadIcon fontSize="small" style={{ marginRight: "0.2rem" }} />
            <p style={{ fontSize: "1.1rem" }}>Download</p>
        </a>
    </DownloadButtonWrapper>
);

export default DownloadButton;
