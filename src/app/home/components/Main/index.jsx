import React from "react";
import "../../../fonts.css";
import Link from "next/link";
import { StarSharp } from "@mui/icons-material";
import {
  Description,
  DescriptionWrapper,
  DescriptionLists,
  DescriptionTitle,
  DescriptionSubtitle,
  MainButton,
  MainWrapper,
  NawazImg,
} from "./styles";

const Main = () => (
  <MainWrapper>
    <NawazImg />
    <DescriptionWrapper>
      <div className="poppins">
        <DescriptionTitle>Introducing</DescriptionTitle>
        <DescriptionTitle>Dr. Mirweiss Nawaz</DescriptionTitle>
        <DescriptionSubtitle>DDS, PLLC</DescriptionSubtitle>
      </div>
      <div className="nunito">
        <Description>
          Since its opening in 2007, Dr. Nawaz has been devoted to delivering
          excellent dental care at Family & Cosmetic Dentistry. Proficient in
          family and cosmetic dentistry, he creates tailored treatment plans for
          each patient, ensuring the highest quality care in a welcoming
          environment through his dedication to staying current with dental
          advancements.
        </Description>
        <DescriptionLists>
          <ul style={{ listStyleType: "circle" }}>
            <li style={{ color: "#00ACB1", marginBottom: "1.5rem" }}>
              <span style={{ color: "#000" }}>
                Experienced dentist with over two decades of practice.
              </span>
            </li>
            <li style={{ color: "#00ACB1", marginBottom: "1.5rem" }}>
              <span style={{ color: "#000" }}>
                Trusted city dentist with over twenty 5
                <StarSharp
                  style={{ color: "#00acb1", margin: "-0.4rem 0.2rem 0 0" }}
                />
                reviews
              </span>
            </li>
            <li style={{ color: "#00ACB1" }}>
              <span style={{ color: "#000" }}>
                Committed to the best experience with the most modern dental
                technology
              </span>
            </li>
          </ul>
        </DescriptionLists>
      </div>
      <MainButton>
        <Link href="/about" className="poppins">
          Learn More!
        </Link>
      </MainButton>
    </DescriptionWrapper>
  </MainWrapper>
);
export default Main;
