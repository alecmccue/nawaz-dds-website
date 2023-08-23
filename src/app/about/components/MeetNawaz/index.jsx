import React from "react";
import {
    Column,
    Divider,
    DividerSmall,
    ImageWrapper,
    MeetNawazWrapper,
    NawazImage,
    TextInnerWrapper,
    TextOuterWrapper,
} from "./styles";
import { Typography } from "@mui/material";

const MeetNawaz = () => (
    <MeetNawazWrapper>
        <ImageWrapper>
            <NawazImage src="/nawaz-seated.jpg" alt="nawaz" />
        </ImageWrapper>

        <TextOuterWrapper>
            <TextInnerWrapper>
                <Column style={{ gap: "0.5rem", maxWidth: "40rem" }}>
                    <Typography style={{ fontSize: "3rem" }} className="poppins">
                        Dr. Mirweiss Nawaz
                    </Typography>
                    <Divider />
                    <Typography style={{ fontSize: "1.4rem" }} className="nunito">
                        Dr. Nawaz brings not only his extensive expertise in dentistry but also his nurturing role
                        as a father to four wonderful kids, shaping his approach to patient care with compassion and
                        understanding. He provides personalized attention for each patient, just as he does for his own
                        children. Beyond the dental chair, Dr. Nawaz's passion for soccer translates to his
                        team-oriented spirit, harmonizing with his dental team to deliver optimal care. His commitment
                        to teamwork, precision, and excellence, inspired by his love for the sport, resonates through
                        every facet of his practice.
                    </Typography>
                </Column>

                <Column style={{ gap: "2rem" }}>
                    <div>
                        <Typography style={{ fontSize: "1.5rem" }} className="poppins">
                            Education
                        </Typography>
                        <DividerSmall />
                        <ul
                            style={{
                                fontSize: "1.4rem",
                                listStyleType: "disc",
                                paddingLeft: "1.5em",
                            }} className="nunito"
                        >
                            <li>BS in Biology at George Mason University</li>
                            <li>DDS, Virginia Commonwealth University</li>
                        </ul>
                    </div>
                    <div>
                        <Typography style={{ fontSize: "1.5rem" }} className="poppins">
                            Certifications
                        </Typography>
                        <DividerSmall />
                        <ul
                            style={{
                                fontSize: "1.4rem",
                                listStyleType: "disc",
                                paddingLeft: "1.5em",
                            }}
                            className="nunito"
                        >
                            <li>Academy of General Dentistry</li>
                            <li>Invisalign</li>
                        </ul>
                    </div>
                </Column>
            </TextInnerWrapper>
        </TextOuterWrapper>
    </MeetNawazWrapper>
);

export default MeetNawaz;
