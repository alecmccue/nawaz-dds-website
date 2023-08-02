import React from "react";
import {
  ColoredDiv,
  Description,
  DescriptionDiv,
  DescriptionLists,
  DescriptionTitle,
  DescriptionTitle2,
  MainButton,
  MainDiv,
  NawazImg,
} from "../../styles";
import '../../../../app/fonts.css'
const Main = () => {
  return (
    <MainDiv>
      <div style={{ width: "40%" }}>
        <NawazImg />
        <ColoredDiv />
      </div>
      <DescriptionDiv>
        <div className="poppins">
          <DescriptionTitle>Introducing</DescriptionTitle>
          <DescriptionTitle>Dr. Mirweiss Nawaz</DescriptionTitle>
          <DescriptionTitle2>DDS, PLLC</DescriptionTitle2>
        </div>
        <div className="nunito">
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </Description>
          <DescriptionLists>
            <ul style={{ listStyleType: "circle" }}>
              <li style={{ color: "#00ACB1" }}>
                <span style={{ color: "#000" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </span>
              </li>
              <li style={{ color: "#00ACB1" }}>
                <span style={{ color: "#000" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </li>
              <li style={{ color: "#00ACB1" }}>
                <span style={{ color: "#000" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
                </span>
              </li>
            </ul>
          </DescriptionLists>
        </div>
        <div className="poppins">
          <MainButton>Learn More!</MainButton>
        </div>
      </DescriptionDiv>
    </MainDiv>
  );
};
export default Main;
