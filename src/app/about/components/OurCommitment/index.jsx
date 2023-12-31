import React from "react";
import {
    BackgroundImage,
    Divider,
    OurCommitmentWrapper,
    OverlayCard,
} from "./styles";
import { Typography } from "@mui/material";
import RequestAppointment from "@/components/RequestAppointment";

const OurCommitment = () => (
    <OurCommitmentWrapper>
        <BackgroundImage alt="nawaz-working" />
        <OverlayCard>
            <Typography style={{ fontSize: "3rem" }} className="poppins">
                OUR COMMITMENT
            </Typography>

            <Divider />

            <Typography style={{ fontSize: "1.25rem" }} className="scope-one">
                At Family & Cosmetic Dentistry, our mission is to create a
                transformative impact on your life through exceptional dentistry. We are
                driven by a deep sense of care for our patients and are committed to
                delivering comprehensive and personalized dental care that surpasses
                expectations
            </Typography>

            <Typography style={{ fontSize: "1.25rem" }} className="scope-one">
                We extend a warm welcome to you. Trust that your dental journey with us
                will be marked by genuine compassion and a commitment to enhancing both
                your oral health and overall well-being. Together, let us embark on a
                path towards a healthier, more radiant smile.
            </Typography>

            <div>
                <Typography style={{ fontSize: "1.8rem" }} className="poppins">
                    Dr. Mirweiss Nawaz
                </Typography>
                <Typography style={{ fontSize: "1.5rem" }} className="poppins">
                    Founder
                </Typography>
            </div>

            <RequestAppointment marginTop="2rem" />

            <Typography style={{ fontSize: "1.1rem" }} className="poppins">
                OR CALL (703) 430 3838
            </Typography>
        </OverlayCard>
    </OurCommitmentWrapper>
);

export default OurCommitment;
