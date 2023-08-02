import React from "react";
import { Column, FormWrapper, FormPreview, FormFooter } from "../../styles";
import { Typography } from "@mui/material";
import DownloadButton from "../DownloadButton";

const HipaaForm = () => (
  <FormWrapper>
    <FormPreview src="/hipaa_form_preview.png" alt="Hipaa Form Preview" />
    <Column>
      <Typography
        style={{ fontSize: "1.5rem", fontWeight: "500", textAlign: "center" }}
      >
        HIPPA Form
      </Typography>
      <Typography style={{ textAlign: "center" }}>
        Please fill out the HIPAA form to comply with the Health Insurance
        Portability and Accountability Act, which ensures the protection of
        patients' confidential health information and maintains their privacy
        and security.
      </Typography>
      
      <FormFooter>
        <DownloadButton form="/hipaa_form.pdf" />
      </FormFooter>
    </Column>
  </FormWrapper>
);

export default HipaaForm;
