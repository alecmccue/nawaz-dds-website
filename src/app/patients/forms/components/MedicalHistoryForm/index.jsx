import React from "react";
import { Column, FormWrapper, FormPreview, FormFooter } from "../../styles";
import { Typography } from "@mui/material";
import DownloadButton from "../DownloadButton";

const MedicalHistoryForm = () => (
  <FormWrapper>
    <FormPreview
      src="/medical_history_form_preview.png"
      alt="Medical History Form Preview"
    />
    <Column>
      <Typography
        style={{ fontSize: "1.5rem", fontWeight: "500", textAlign: "center" }}
      >
        Medical History Form
      </Typography>
      <Typography style={{ textAlign: "center" }}>
        We need your medical history to provide appropriate and safe dental
        care, as certain medical conditions, medications, and allergies can
        impact dental treatments and influence the choice of anesthesia or
        medications during procedures.
      </Typography>

      <FormFooter>
        <DownloadButton form="/medical_history_form.pdf" />
      </FormFooter>
    </Column>
  </FormWrapper>
);

export default MedicalHistoryForm;
