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
            <NawazImage src="/dr-nawaz.png" alt="dr-nawaz" />
        </ImageWrapper>

        <TextOuterWrapper>
            <TextInnerWrapper>
                <Column>
                    <Typography style={{ fontSize: "3rem" }} className="poppins">
                        Dr. Mirweiss Nawaz
                    </Typography>
                    <Divider />
                    <Typography style={{ fontSize: "1.4rem" }} className="nunito">
                        Since its establishment in 2007, Dr. Nawaz has been committed to
                        delivering exceptional dental care at Family & Cosmetic Dentistry.
                        With a focus on both family and cosmetic dentistry, he creates
                        personalized treatment plans to cater to each patient's needs. Dr.
                        Nawaz's dedication to staying at the forefront of dental
                        advancements ensures that patients receive the highest standard of
                        care in a warm and welcoming environment.
                    </Typography>
                </Column>

                <Column>
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
                </Column>
            </TextInnerWrapper>
        </TextOuterWrapper>
    </MeetNawazWrapper>
);

export default MeetNawaz;
